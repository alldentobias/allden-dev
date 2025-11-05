# Alldén.dev

A minimalist Nordic-inspired personal website for Tobias Alldén, Senior Software Engineer based in Oslo, Norway.

## 🌟 Features

- **Mystical Nordic Design**: Dark fjord night theme with northern lights accents
- **Intro Animation**: Elegant "hi" → "I'm Tobias" entrance sequence
- **Hamburger Navigation**: Fullscreen overlay menu with aurora effects
- **Journey-Focused**: Personal narrative over corporate messaging
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Fast & Modern**: Built with Astro for optimal performance
- **SEO Optimized**: Comprehensive meta tags, structured data, and semantic HTML
- **Interactive Timeline**: Click to explore detailed career history with glowing accents
- **Cooking Blog**: MDX-powered blog for recipes and culinary adventures
- **Contact Form**: Easy way to reach out for consulting, speaking, or collaboration

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) v5 with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v3
- **Content**: MDX for blog posts with type-safe content collections
- **Deployment**: Optimized for Vercel or Netlify

## 📦 Project Structure

```
/
├── public/              # Static assets
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Hero.astro
│   │   ├── Timeline.astro
│   │   ├── ContactForm.astro
│   │   └── ...
│   ├── content/         # Content collections
│   │   ├── blog/        # Blog posts (MDX)
│   │   └── config.ts    # Content schema
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/           # Routes
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:4321`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📝 Content Management

### Adding Blog Posts

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A brief description"
date: 2024-11-05
tags: ["Cooking", "Recipe"]
draft: false
---

Your content here...
```

### Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com) for submissions. To activate it:

1. Sign up at https://web3forms.com (free)
2. Get your access key
3. Replace `YOUR_ACCESS_KEY_HERE` in `src/components/ContactForm.astro`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy! (Zero configuration needed)

### Netlify

1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Deploy! (Configuration in `netlify.toml`)

## 🎨 Design Philosophy

Inspired by [Maaemo](https://maaemo.no/) with a mystical twist, this site embraces:
- Dark fjord night theme with northern lights aurora effects
- Elegant typography (Crimson Pro + Inter)
- Subtle animations and sophisticated fade-ins
- Journey-focused personal narrative
- Glowing accents (aurora green, blue, purple, pink)
- Mystical, atmospheric aesthetic

## 📈 SEO Features

- Comprehensive meta tags (Open Graph, Twitter Cards)
- JSON-LD structured data for rich snippets
- Semantic HTML with proper heading hierarchy
- Automatic sitemap generation
- Optimized for "software engineer Oslo Norway", "LLM talks", "AI consulting"

## 📄 License

MIT License - see LICENSE file for details

## 👤 About

Built with efficiency in mind by Tobias Alldén, Senior Software Engineer specializing in scalable systems, algorithms, and software architecture.

- 🌐 Website: [allden.dev](https://allden.dev)
- 📧 Email: tobias@allden.dev
- 💼 LinkedIn: [tobiasallden](https://www.linkedin.com/in/tobiasallden/)
- 🐙 GitHub: [alldentobias](https://github.com/alldentobias)
- 📸 Instagram: [alldentobias](https://instagram.com/alldentobias)

---

Built with ⚡ Astro | Deployed on 🚀 Vercel
