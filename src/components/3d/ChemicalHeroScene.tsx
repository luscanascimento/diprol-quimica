import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const ChemicalHeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060d1a, 0.035);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0x0b192e, 2.0);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 4.5, 30);
    cyanLight.position.set(6, 4, 8);
    scene.add(cyanLight);

    const orangeLight = new THREE.PointLight(0xff7700, 3.5, 25);
    orangeLight.position.set(-6, -4, 6);
    scene.add(orangeLight);

    const blueRimLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    blueRimLight.position.set(0, 8, -5);
    scene.add(blueRimLight);

    // 1. CENTRAL MOLECULAR CLUSTER
    const clusterGroup = new THREE.Group();
    scene.add(clusterGroup);

    // Molecular Core Materials
    const cyanCoreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x06b6d4,
      emissive: 0x083344,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.85,
      thickness: 1.2,
      ior: 1.45,
      transparent: true,
      opacity: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    const orangeCoreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf97316,
      emissive: 0x431407,
      roughness: 0.15,
      metalness: 0.3,
      transmission: 0.75,
      thickness: 1.0,
      ior: 1.4,
      transparent: true,
      opacity: 0.9,
    });

    const whiteAtomMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.3,
      metalness: 0.8,
    });

    const bondMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.2,
      metalness: 0.5,
      transparent: true,
      opacity: 0.6,
    });

    // Molecular nodes definition
    const sphereGeoLarge = new THREE.SphereGeometry(1.1, 32, 32);
    const sphereGeoMedium = new THREE.SphereGeometry(0.65, 28, 28);
    const sphereGeoSmall = new THREE.SphereGeometry(0.38, 20, 20);

    const nodePositions: { pos: THREE.Vector3; mat: THREE.Material; geo: THREE.BufferGeometry }[] = [
      { pos: new THREE.Vector3(0, 0, 0), mat: cyanCoreMaterial, geo: sphereGeoLarge },
      { pos: new THREE.Vector3(2.4, 1.3, -0.6), mat: orangeCoreMaterial, geo: sphereGeoMedium },
      { pos: new THREE.Vector3(-2.2, 1.4, 0.8), mat: cyanCoreMaterial, geo: sphereGeoMedium },
      { pos: new THREE.Vector3(-1.8, -2.0, -0.5), mat: orangeCoreMaterial, geo: sphereGeoMedium },
      { pos: new THREE.Vector3(2.0, -1.8, 1.0), mat: cyanCoreMaterial, geo: sphereGeoMedium },
      { pos: new THREE.Vector3(0.5, 3.0, 0.4), mat: whiteAtomMaterial, geo: sphereGeoSmall },
      { pos: new THREE.Vector3(-3.4, 0.2, -1.0), mat: whiteAtomMaterial, geo: sphereGeoSmall },
      { pos: new THREE.Vector3(3.6, -0.2, 1.5), mat: whiteAtomMaterial, geo: sphereGeoSmall },
      { pos: new THREE.Vector3(1.2, -3.2, -1.2), mat: whiteAtomMaterial, geo: sphereGeoSmall },
    ];

    const nodeMeshes: THREE.Mesh[] = [];
    nodePositions.forEach((node) => {
      const mesh = new THREE.Mesh(node.geo, node.mat);
      mesh.position.copy(node.pos);
      clusterGroup.add(mesh);
      nodeMeshes.push(mesh);
    });

    // Molecular Bonds (Cylinders connecting nodes)
    const bondPairs = [
      [0, 1], [0, 2], [0, 3], [0, 4],
      [1, 5], [2, 6], [1, 7], [3, 8], [4, 7], [2, 5]
    ];

    const bondGeos: THREE.BufferGeometry[] = [];
    bondPairs.forEach(([idxA, idxB]) => {
      const pA = nodePositions[idxA].pos;
      const pB = nodePositions[idxB].pos;
      const distance = pA.distanceTo(pB);

      const bondGeo = new THREE.CylinderGeometry(0.09, 0.09, distance, 12);
      bondGeos.push(bondGeo);

      const bondMesh = new THREE.Mesh(bondGeo, bondMaterial);
      const midPoint = new THREE.Vector3().addVectors(pA, pB).multiplyScalar(0.5);
      bondMesh.position.copy(midPoint);

      const orientation = new THREE.Matrix4();
      const offsetTarget = pB.clone();
      const offsetSource = pA.clone();
      orientation.lookAt(offsetSource, offsetTarget, new THREE.Vector3(0, 1, 0));
      orientation.multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2));
      bondMesh.setRotationFromMatrix(orientation);

      clusterGroup.add(bondMesh);
    });

    // 2. TRANSLUCENT FLOATING DROPLETS / BUBBLES
    const bubblesGroup = new THREE.Group();
    scene.add(bubblesGroup);

    const bubbleGeo = new THREE.SphereGeometry(0.3, 24, 24);
    const bubbleMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transmission: 0.95,
      opacity: 0.7,
      transparent: true,
      roughness: 0.05,
      ior: 1.33,
      thickness: 0.5,
    });

    const bubbleCount = 28;
    const bubbleData: { mesh: THREE.Mesh; basePos: THREE.Vector3; speed: number; phase: number }[] = [];

    for (let i = 0; i < bubbleCount; i++) {
      const mesh = new THREE.Mesh(bubbleGeo, bubbleMat);
      const scale = 0.4 + Math.random() * 1.4;
      mesh.scale.set(scale, scale, scale);

      const basePos = new THREE.Vector3(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8 - 1
      );
      mesh.position.copy(basePos);
      bubblesGroup.add(mesh);

      bubbleData.push({
        mesh,
        basePos,
        speed: 0.5 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // 3. CHEMICAL DISPERSION PARTICLES (Lattice field)
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x06b6d4);
    const colorBlue = new THREE.Color(0x38bdf8);
    const colorOrange = new THREE.Color(0xf97316);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 22;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 12;

      const mixedColor = Math.random() > 0.3 ? (Math.random() > 0.5 ? colorCyan : colorBlue) : colorOrange;
      particleColors[i3] = mixedColor.r;
      particleColors[i3 + 1] = mixedColor.g;
      particleColors[i3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.09,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // MOUSE INTERACTION & DRIFT
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const motionFactor = isReducedMotion ? 0.15 : 1.0;

      // Rotate central molecular cluster
      clusterGroup.rotation.y = elapsedTime * 0.18 * motionFactor + mouseX * 0.45;
      clusterGroup.rotation.x = Math.sin(elapsedTime * 0.12) * 0.2 * motionFactor - mouseY * 0.35;
      clusterGroup.rotation.z = Math.cos(elapsedTime * 0.15) * 0.1 * motionFactor;

      // Pulsate central atom scale slightly
      const pulse = 1.0 + Math.sin(elapsedTime * 1.5) * 0.04 * motionFactor;
      nodeMeshes[0].scale.set(pulse, pulse, pulse);

      // Animate floating bubbles
      bubbleData.forEach((item) => {
        const t = elapsedTime * item.speed * motionFactor + item.phase;
        item.mesh.position.y = item.basePos.y + Math.sin(t) * 0.8;
        item.mesh.position.x = item.basePos.x + Math.cos(t * 0.7) * 0.5 + mouseX * 0.3;
        item.mesh.rotation.x += 0.01 * motionFactor;
        item.mesh.rotation.y += 0.01 * motionFactor;
      });

      // Subtle particle rotation
      particles.rotation.y = elapsedTime * 0.03 * motionFactor + mouseX * 0.15;
      particles.rotation.x = mouseY * 0.1;

      // Move point lights subtly for dynamic refraction
      cyanLight.position.x = 6 + Math.sin(elapsedTime * 0.8) * 2;
      cyanLight.position.y = 4 + Math.cos(elapsedTime * 0.6) * 1.5;
      orangeLight.position.x = -6 + Math.cos(elapsedTime * 0.7) * 2;

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP DISPOSAL
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Dispose geometries
      sphereGeoLarge.dispose();
      sphereGeoMedium.dispose();
      sphereGeoSmall.dispose();
      bubbleGeo.dispose();
      particleGeo.dispose();
      bondGeos.forEach((g) => g.dispose());

      // Dispose materials
      cyanCoreMaterial.dispose();
      orangeCoreMaterial.dispose();
      whiteAtomMaterial.dispose();
      bondMaterial.dispose();
      bubbleMat.dispose();
      particleMat.dispose();

      // Dispose renderer
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isReducedMotion]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-90"
      aria-hidden="true"
    />
  );
};
