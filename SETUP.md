# Setup Guide

## Quick Start

Follow these steps to get your personal website up and running:

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Contact Form

The contact form uses Web3Forms (free service, no backend needed):

1. Go to https://web3forms.com
2. Sign up with your email (tobias@allden.dev)
3. Create a new form and get your access key
4. Open `src/components/ContactForm.astro`
5. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key

### 3. Add Open Graph Image

Create or add a social sharing image:

1. Create a 1200x630px image (PNG or JPG)
2. Save it as `public/og-image.jpg`
3. This image appears when your site is shared on social media

Suggestions:
- Professional headshot with your name
- Minimalist Nordic design matching the site aesthetic
- Include "Tobias Alldén" and "Software Engineer"

### 4. Test Locally

```bash
npm run dev
```

Visit http://localhost:4321 to see your site.

### 5. Deploy

#### Option A: Vercel (Recommended)

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your site will be live at `your-project.vercel.app`

#### Option B: Netlify

1. Push code to GitHub
2. Go to https://netlify.com
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Click "Deploy site"

Done! Your site will be live at `your-project.netlify.app`

### 6. Custom Domain

#### For allden.dev:

**On Vercel:**
1. Go to your project → Settings → Domains
2. Add `allden.dev` and `www.allden.dev`
3. Follow DNS configuration instructions

**DNS Records (at your domain registrar):**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Writing Blog Posts

Create a new file in `src/content/blog/your-post-slug.mdx`:

```mdx
---
title: "Your Post Title"
description: "Brief description for SEO and previews"
date: 2024-11-05
tags: ["Cooking", "Recipe", "Swedish"]
draft: false  # Set to true to hide from production
---

Your content here using Markdown or MDX...

## Subheadings work

- Lists work
- **Bold** and *italic* work

```code blocks work```

[Links work](https://example.com)
```

## Customization

### Colors

Edit `tailwind.config.mjs` to change the color scheme:

```javascript
colors: {
  'nordic-black': '#000000',  // Main text and buttons
  'nordic-white': '#FFFFFF',  // Background
  'nordic-gray': { ... }      // Shades for accents
}
```

### Fonts

Edit `src/styles/global.css` to change fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

Then update `tailwind.config.mjs`:

```javascript
fontFamily: {
  sans: ['Your Sans Font', 'sans-serif'],
  serif: ['Your Serif Font', 'serif'],
}
```

### Content

- **About section**: Edit `src/pages/index.astro`
- **Timeline/Experience**: Edit `src/components/Timeline.astro`
- **Services**: Edit `src/pages/index.astro` (Services section)
- **Footer**: Edit `src/layouts/BaseLayout.astro`

## Maintenance

### Adding a New Job

Edit `src/components/Timeline.astro`, add to the `experiences` array:

```javascript
{
  id: 'new-job',
  title: 'Your Title',
  company: 'Company Name',
  location: 'City, Country',
  period: 'Start - End',
  description: 'Brief description...',
  details: [
    'Key achievement 1',
    'Key achievement 2',
  ],
  technologies: ['Tech1', 'Tech2']
}
```

### Updating Skills

Edit the structured data in `src/layouts/BaseLayout.astro`:

```javascript
"knowsAbout": [
  "Software Engineering",
  "Your New Skill",
  // ...
]
```

## SEO Checklist

- [x] Meta tags configured
- [x] Structured data (JSON-LD) added
- [x] Sitemap auto-generated
- [x] robots.txt configured
- [ ] Submit sitemap to Google Search Console
- [ ] Submit site to Bing Webmaster Tools
- [ ] Add Google Analytics (optional)

## Performance

Current optimizations:
- Static site generation (fast!)
- Minimal JavaScript
- Optimized images (use WebP when possible)
- Tailwind CSS purging
- Astro's zero-JS by default

To check performance:
1. Build: `npm run build`
2. Preview: `npm run preview`
3. Test with Lighthouse in Chrome DevTools

## Troubleshooting

**Build fails:**
- Run `npm install` to ensure all dependencies are installed
- Check for syntax errors in `.astro` or `.mdx` files
- Run `npm run build` to see detailed error messages

**Contact form not working:**
- Verify your Web3Forms access key is correct
- Check browser console for errors
- Ensure the form has an internet connection

**Styles not updating:**
- Clear your browser cache
- Restart dev server (`Ctrl+C`, then `npm run dev`)
- Check for Tailwind class typos

## Need Help?

- Astro docs: https://docs.astro.build
- Tailwind docs: https://tailwindcss.com/docs
- Web3Forms docs: https://docs.web3forms.com

---

Good luck with your site! 🚀

