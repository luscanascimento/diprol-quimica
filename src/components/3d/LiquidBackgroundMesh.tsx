import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const LiquidBackgroundMesh: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Wavy Plane Geometry
    const planeGeo = new THREE.PlaneGeometry(24, 16, 48, 36);
    const pos = planeGeo.attributes.position;
    const originalZ = new Float32Array(pos.count);
    for (let i = 0; i < pos.count; i++) {
      originalZ[i] = pos.getZ(i);
    }

    const planeMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.07,
    });

    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = -Math.PI / 3;
    mesh.position.y = -2;
    scene.add(mesh);

    let animationId: number;
    let clock = new THREE.Clock();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isReducedMotion) {
        const time = clock.getElapsedTime() * 0.8;
        const count = pos.count;
        for (let i = 0; i < count; i++) {
          const u = pos.getX(i);
          const v = pos.getY(i);
          const z = Math.sin(u * 0.4 + time) * Math.cos(v * 0.4 + time) * 0.8;
          pos.setZ(i, z);
        }
        pos.needsUpdate = true;
      }
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      planeGeo.dispose();
      planeMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isReducedMotion]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-60 z-0"
      aria-hidden="true"
    />
  );
};
