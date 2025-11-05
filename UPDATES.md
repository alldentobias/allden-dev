# Design Update: Mystical Nordic Theme

## What Changed

The website has been transformed from a corporate, light-themed portfolio into a **mystical, dark Nordic experience** inspired by Norwegian fjord nights and northern lights.

## Key Changes

### Visual Design
- ✨ **Dark Theme**: Deep nordic night background (`#0a0e17`) with mist-colored text
- 🌌 **Northern Lights**: Aurora-inspired color accents (green, blue, purple, pink)
- ⭐ **Atmospheric**: Glowing effects, floating animations, aurora backgrounds
- 🎭 **Mystical**: Less corporate, more personal and atmospheric

### Navigation
- 🍔 **Hamburger Menu**: Replaced top navigation bar with elegant hamburger menu
- 🌠 **Fullscreen Overlay**: Menu opens with aurora background effects
- 🎨 **Animated Links**: Menu items fade in sequentially with color-changing hovers

### Entrance Experience
- 👋 **Intro Animation**: 
  - Shows "hi" (fades in, holds, fades out)
  - Then "I'm Tobias" (fades in, holds)
  - Finally fades to main content
  - Uses `sessionStorage` so it only plays once per session

### Content Shift
- 📖 **Journey-Focused**: Emphasis on personal story over services
- 🎯 **Philosophy Section**: Added personal philosophy and values
- 🌊 **Beyond Code**: Highlights cooking and speaking interests
- 💬 **Less Sales-y**: More "connect" than "hire me"

### Component Updates

**Hero**
- Dark background with animated aurora effects
- Subtle star particles
- Floating scroll indicator
- Sequential fade-in animations

**Timeline**
- Aurora-gradient vertical line
- Glowing blue timeline dots
- Dark cards with hover glow effects
- Modal with dark theme and aurora accents

**Contact Form**
- Dark input fields with aurora-blue focus rings
- Subtle glass-morphism effects
- Aurora-colored success/error messages

**Blog Pages**
- Dark theme throughout
- Aurora-colored links and accents
- Code blocks with dark background
- Syntax highlighting adapted for dark theme

### Color Palette

```css
nordic-night: #0a0e17    /* Main background */
nordic-deep: #141821     /* Card backgrounds */
nordic-dark: #1a1f2e     /* Darker elements */
nordic-mist: #e8edf5     /* Primary text */
nordic-fog: #c5cbd6      /* Secondary text */

aurora-green: #4ade80    /* Accent 1 */
aurora-blue: #60a5fa     /* Accent 2 */
aurora-purple: #a78bfa   /* Accent 3 */
aurora-pink: #f472b6     /* Accent 4 */
```

### Animations

New animations added:
- `fade-in-slow`: 2s fade-in for dramatic effect
- `slide-up-slow`: 1.5s upward slide
- `glow`: Pulsing glow effect for aurora elements
- `aurora`: Moving aurora background animation
- `float`: Gentle floating movement

## Files Modified

### Core Layout & Theme
- `tailwind.config.mjs` - Added dark colors and aurora palette
- `src/styles/global.css` - Updated body background to dark
- `src/layouts/BaseLayout.astro` - Removed top nav, updated footer

### New Components
- `src/components/IntroAnimation.astro` - "hi" → "I'm Tobias" sequence
- `src/components/HamburgerMenu.astro` - Fullscreen navigation overlay

### Updated Components
- `src/components/Hero.astro` - Dark theme with aurora effects
- `src/components/Timeline.astro` - Aurora gradient timeline, dark modals
- `src/components/ContactForm.astro` - Dark form fields
- `src/components/Section.astro` - Updated background variants

### Pages
- `src/pages/index.astro` - Complete rewrite focused on journey
- `src/pages/blog/index.astro` - Dark theme
- `src/pages/blog/[slug].astro` - Dark theme, updated prose styles
- `src/pages/404.astro` - Dark theme

## How to Revert (if needed)

If you want to go back to the lighter, more corporate design:

1. Check out the git commit before these changes
2. Or manually:
   - Update `tailwind.config.mjs` colors back to black/white
   - Update `src/styles/global.css` body background to white
   - Remove `IntroAnimation` and `HamburgerMenu` components
   - Restore original `Hero`, `Timeline`, and page content

## Testing

- ✅ Build completes successfully
- ✅ All pages render correctly
- ✅ Intro animation works (plays once per session)
- ✅ Hamburger menu opens/closes smoothly
- ✅ Timeline modals function with new dark theme
- ✅ Blog posts are readable with dark prose styling
- ✅ Contact form styling works with dark inputs

## Next Steps

You may want to:
1. Get a Web3Forms API key for the contact form
2. Create a proper OG image (1200x630) with the dark theme
3. Test on multiple devices and browsers
4. Add any additional blog posts
5. Take screenshots for portfolio

---

**Design Direction**: From professional/corporate → mystical/personal
**Inspiration**: Norwegian fjord nights, northern lights, Maaemo's elegance
**Feeling**: Atmospheric, sophisticated, personal, slightly magical

