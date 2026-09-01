# Diprol Química • Landing Page Institucional & Comercial B2B

> **Obra-prima visual, tecnológica e de alta performance** para a **Diprol Química** — fabricante e distribuidora de saneantes profissionais e produtos químicos industriais especiais no Vale do Paraíba, Litoral Norte e região.

![Diprol Química Banner](public/favicon.svg)

---

## 🔬 Visão Geral do Projeto

A landing page foi desenvolvida para posicionar a Diprol Química como a maior referência em química de alta performance e economia operacional para a indústria B2B. A interface combina **estética pura e translúcida (glassmorphism)** com **simulação molecular WebGL 3D em tempo real** e **animações fluidas a 60 FPS**.

---

## ⚡ Stack Tecnológica & Engenharia

| Camada | Tecnologia | Propósito / Benefício |
| :--- | :--- | :--- |
| **Framework & Core** | **React 19 + TypeScript 6** | Modularidade, tipagem estrita e arquitetura SOLID |
| **Build Tool** | **Vite 8** | Compilação ultra-rápida (HMR instantâneo e bundle otimizado) |
| **3D & WebGL** | **Three.js** | Simulação interativa de rede molecular e dispersão química a 60 FPS |
| **Animações** | **GSAP 3 + ScrollTrigger** | Reveals em timeline, counters numéricos e efeito magnético nos botões |
| **Smooth Scroll** | **Lenis** | Rolagem suave sincronizada ao ticker do GSAP e física natural |
| **Estilização** | **Tailwind CSS v4** | Design tokens centralizados, glassmorphism e efeitos de refração |
| **Ícones** | **Lucide React** | Conjunto moderno de ícones vetoriais de alta precisão |
| **Micro-interações** | **Canvas-Confetti** | Feedback visual de celebração no simulador de economia B2B |

---

## 🏛️ Arquitetura de Software & Princípios

- **SOLID:** Separação estrita de responsabilidades:
  - `src/components/3d/`: Lógica e ciclo de vida isolado de renderização WebGL Three.js.
  - `src/hooks/`: Hooks reutilizáveis para Smooth Scroll (`useLenis`), Detecção de Acessibilidade (`useReducedMotion`) e Rastreamento de Cursor (`useMousePosition`).
  - `src/utils/`: Funções puras de sanitização (`sanitizer.ts`) e validação de formulários B2B.
  - `src/data/`: Datasets isolados e tipados (`segmentsData.ts`, `metricsData.ts`, `testimonialsData.ts`).
- **DRY:** Tokens de design centralizados em CSS variables e componentes modulares (`GlassCard`, `MagneticButton`, `SectionHeading`, `Counter`).
- **KISS & YAGNI:** Sem bibliotecas pesadas de estado global desnecessárias; foco em componentes declarativos rápidos e leves.
- **Limpeza de Memória (Cleanup):**
  - Descarte rigoroso de geometrias e materiais WebGL via método `.dispose()` no `useEffect`.
  - Contextos do GSAP revertidos com `ctx.revert()` na desmontagem.

---

## 🔒 Segurança, Sanitização & LGPD

1. **Sanitização de Inputs:** Tratamento contra XSS e injeção de scripts no formulário de orçamento.
2. **Máscara & Validação de Contato:** Formatação automática de DDD e números de WhatsApp (DDD 12 e nacional).
3. **Segurança de Links:** Todos os links externos e CTAs para WhatsApp utilizam `rel="noopener noreferrer"`.
4. **Conformidade LGPD:** Checkbox explícito de consentimento e termos de proteção de dados para cotações comerciais.
5. **Headers de Segurança Recomendados (Nginx / Vercel / Netlify):**
   - `Content-Security-Policy`
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`

---

## 📂 Estrutura de Diretórios

```
diprol-quimica/
├── public/
│   └── favicon.svg                  # Brand icon vetorial com hexágono molecular
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── ChemicalHeroScene.tsx # Cena 3D Three.js com partículas e moléculas
│   │   │   └── LiquidBackgroundMesh.tsx # Malha de fluidez líquida ambiente
│   │   ├── common/
│   │   │   ├── Counter.tsx          # Contador numérico GSAP ScrollTrigger
│   │   │   ├── GlassCard.tsx        # Card translúcido com inclinação 3D ao passar o mouse
│   │   │   ├── MagneticButton.tsx   # Botão magnético com GSAP quickTo
│   │   │   ├── Navbar.tsx           # Header fixo com menu responsivo e contatos
│   │   │   └── SectionHeading.tsx   # Título padrão com gradiente e badge
│   │   └── sections/
│   │       ├── Preloader.tsx        # Loader molecular com contador 0-100%
│   │       ├── HeroSection.tsx      # Dobra 1 com WebGL e CTAs magnéticos
│   │       ├── AboutAuthoritySection.tsx # Dobra 2 com métricas de autoridade (+25 anos)
│   │       ├── SegmentsSection.tsx  # Dobra 3 com 5 segmentos e modal de ficha técnica
│   │       ├── DiferenciaisSection.tsx # Dobra 4 com 4 pilares industriais (stagger)
│   │       ├── CustomEngineeringSection.tsx # Dobra 5 com timeline de redução de custos
│   │       ├── SocialProofSection.tsx # Dobra 6 com marquee e depoimentos
│   │       ├── QuoteCalculatorSection.tsx # Dobra 7 com simulador B2B e formulário
│   │       ├── FooterSection.tsx    # Dobra 8 com mapa de cidades do Vale e conformidade
│   │       └── FloatingWhatsApp.tsx # Botão flutuante com balão de consultor
│   ├── data/                        # Dados estáticos tipados dos produtos e clientes
│   ├── hooks/                       # Hooks personalizados (Lenis, ReducedMotion, Mouse)
│   ├── types/                       # Tipagens TypeScript estritas
│   ├── utils/                       # Sanitização, máscaras e validação
│   ├── App.tsx                      # Componente raiz da aplicação
│   ├── index.css                    # Design system Tailwind v4 & Glassmorphism
│   └── main.tsx                     # Entry point React
├── index.html                       # HTML5 com fontes Google e metadados SEO
├── package.json                     # Dependências e scripts do projeto
├── tsconfig.json                    # Configuração TypeScript
└── vite.config.ts                   # Configuração do Vite com chunk splitting
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js:** versão 18 ou superior (recomendado Node 20+)
- **NPM** ou **Yarn** ou **PNPM**

### 1. Clonar ou Acessar a Pasta
```bash
cd diprol-quimica
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Rodar em Modo de Desenvolvimento
```bash
npm run dev
```
O servidor de desenvolvimento estará disponível em `http://localhost:5173`.

### 4. Build de Produção
```bash
npm run build
```
Os arquivos estáticos otimizados serão gerados no diretório `dist/`.

### 5. Pré-visualizar o Build
```bash
npm run preview
```

---

## 🌐 Implantação em Produção (Deploy)

### Vercel / Netlify
Basta conectar o repositório Git e utilizar as configurações padrão:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### Servidor Nginx (Exemplo de Configuração com Headers de Segurança)
```nginx
server {
    listen 80;
    server_name diprolquimica.com.br www.diprolquimica.com.br;

    root /var/www/diprol-quimica/dist;
    index index.html;

    # Gzip Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    # Security Headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache de Assets Estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 🏆 Conformidade Técnica & Acessibilidade

- **Prefers-Reduced-Motion:** Quando o usuário possui redução de movimento ativada no sistema operacional, as rotações do WebGL 3D são pausadas e as transições do GSAP passam a ser instantâneas e suaves.
- **Performance:** 60 FPS garantidos com WebGL rendering sob demanda e chunking do Three.js e GSAP.
- **Rigor Técnico:** Informações fiéis ao mercado de saneantes (ANVISA, FISPQ, REBLAS, CRQ-IV e sistemas CIP).

---

*Desenvolvido com excelência por Frontend & Creative Engineering.*
