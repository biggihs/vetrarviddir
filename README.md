# Vetrarvíddir Astro Site!

A modern, fast website built with Astro and Tailwind CSS for winter adventure tours in North Iceland.

## 🚀 Features

- **Astro Framework**: Fast, modern static site generation
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Component-based**: Reusable, maintainable components
- **Responsive Design**: Optimized for all device sizes
- **Performance**: Minimal JavaScript, optimized images
- **SEO Ready**: Built-in SEO optimization

## 🏗️ Project Structure

```
/
├── public/
│   └── images/          # Static aurora background images
├── src/
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Page layouts
│   └── pages/           # Site pages
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## ✏️ How to Update Content

### 🎯 Main Website Content
**Most text is in one main file:** `src/pages/index.astro`

| Section | Where to Edit | What You Can Change |
|---------|---------------|---------------------|
| **About section** | `src/pages/index.astro` (lines ~80-90) | Your bio, experience description, company intro |
| **Contact info** | `src/pages/index.astro` (lines ~60-75) | Email, phone, location - also updates footer |
| **Service packages** | `src/pages/index.astro` (lines ~10-45) | Service names, descriptions, features, duration |
| **Hero/Homepage text** | `src/components/Hero.astro` | Main headline and subtitle |
| **Website title** | `src/layouts/Layout.astro` | Page title that shows in browser tab |

### 🔄 Feature Control
**Turn sections on/off:** `src/config/features.ts`
```typescript
export const FEATURES = {
  about: true,     // Show about section
  services: false, // Hide services (shows "coming soon")
  videos: false,   // Hide videos (shows "coming soon") 
  contact: true,   // Show contact section
  booking: false,  // Hide booking form (shows "coming soon")
}
```

### 📝 Quick Text Updates

**Company Name/Branding:**
- Main title: `src/components/Hero.astro` 
- Navigation: `src/components/Navigation.astro`
- Footer: `src/pages/index.astro` (bottom)

**Contact Information:**
- Email: Search for `vetrarviddir@gmail.com` in `src/pages/index.astro`
- Phone: Search for `+354-823-555-1` in `src/pages/index.astro`  
- Company ID: Search for `640524-0490` in `src/pages/index.astro`

**Service Descriptions:**
- All service info is in the `services` array at the top of `src/pages/index.astro`

### 🎨 Advanced Customization

- **Colors**: Edit the Tailwind config in `tailwind.config.mjs`
- **Components**: Modify components in `src/components/`
- **Styling**: Tailwind classes throughout the components
- **Background Images**: Replace files in `public/images/`

## 📱 Responsive Features

- Mobile-first design approach
- Responsive navigation with mobile menu
- Optimized layouts for tablets and phones
- Touch-friendly interactive elements

## 🚀 Deployment & Updates

### Making Changes Live
1. **Edit your content** (see sections above)
2. **Test locally** (optional): `npm run dev` then visit `http://localhost:4321`
3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update [what you changed]"
   git push origin main
   ```
4. **Automatic deployment**: GitHub Actions builds and deploys within 2-3 minutes
5. **Visit your site**: https://vetrarviddir.is

### File Organization

```
src/
├── pages/
│   └── index.astro          ← 📝 MAIN CONTENT (most text is here)
├── components/
│   ├── Hero.astro          ← Homepage headline & subtitle  
│   ├── Navigation.astro    ← Menu items
│   └── [other components]  ← Individual page sections
├── config/
│   └── features.ts         ← 🔄 FEATURE TOGGLES (show/hide sections)
└── layouts/
    └── Layout.astro        ← Page title, meta tags
```

### Common Updates

**✏️ Change your bio:** Edit the About section in `src/pages/index.astro`
**📞 Update contact info:** Search and replace phone/email in `src/pages/index.astro`  
**🏔️ Modify services:** Edit the `services` array at top of `src/pages/index.astro`
**🔄 Show/hide sections:** Toggle true/false in `src/config/features.ts`
**🎨 Change colors:** Edit `tailwind.config.mjs`

## 🌟 Modern Features

- CSS Grid and Flexbox layouts
- CSS animations and transitions  
- Backdrop blur effects
- Modern JavaScript (ES6+)
- Component-based architecture
