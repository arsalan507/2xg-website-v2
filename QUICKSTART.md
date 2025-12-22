# 2XG Website - Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Your Browser
Navigate to **http://localhost:3000**

---

## 🎨 What You'll See

### Sections (in order):
1. **Hero Section** - Stunning gradient background with "Content That Doubles Growth"
2. **Stats Bar** - Animated counters showing 25M+ views, 2M+ followers
3. **Case Studies** - BCH and EM Doodle success stories with interactive cards
4. **Services** - Content Systems, Performance Amplification, Funnel Optimization
5. **Contact** - Form and contact information
6. **Footer** - Links and branding

---

## ✨ Key Features

### Animations
- ✅ Parallax mouse tracking in hero
- ✅ Scroll-triggered number counters
- ✅ Hover effects on all cards
- ✅ Smooth page transitions
- ✅ Mobile menu animations
- ✅ Gradient backgrounds

### Responsive Design
- ✅ Mobile-first approach
- ✅ Tablet optimized
- ✅ Desktop enhanced
- ✅ Smooth on all screen sizes

### Brand Compliance
- ✅ 2XG brand colors (Blue #0052FF, Green #8CE63A, Orange #FF6A1A)
- ✅ Montserrat font for headings
- ✅ Inter font for body text
- ✅ Impact font for big numbers

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🛠️ Tech Stack

- **Next.js 14+** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced effects

---

## 📂 Project Structure

```
app/
├── globals.css      # Brand colors & styles
├── layout.tsx       # Root layout + SEO
└── page.tsx         # Main homepage

components/
├── Navigation.tsx   # Header with mobile menu
├── HeroSection.tsx  # Animated hero
├── StatsBar.tsx     # Number counters
├── CaseStudies.tsx  # Success stories
├── Services.tsx     # Service cards
├── Contact.tsx      # Contact form
└── Footer.tsx       # Footer links
```

---

## 🎯 Quick Customizations

### Change Colors
Edit `app/globals.css`:
```css
@theme {
  --color-deep-blue: #0052FF;
  --color-neon-green: #8CE63A;
  --color-ember-orange: #FF6A1A;
}
```

### Update Content
- **Hero text**: `components/HeroSection.tsx` line 60-65
- **Stats**: `components/StatsBar.tsx` line 40-45
- **Case studies**: `components/CaseStudies.tsx` line 75-115
- **Services**: `components/Services.tsx` line 65-95

### Add New Section
1. Create file in `components/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add between existing sections

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
1. Run `npm run build`
2. Upload `.next` folder
3. Set start command to `npm start`

---

## 📞 Support

- Email: contact@2xg.in
- Website: 2xg.in

---

## ✅ Checklist Before Launch

- [ ] Update contact form to send to your email
- [ ] Add your actual case study details
- [ ] Customize meta tags in `app/layout.tsx`
- [ ] Add your logo/favicon
- [ ] Test on mobile devices
- [ ] Run `npm run build` to check for errors
- [ ] Set up analytics (Google Analytics/Plausible)

---

**Built for 2XG - Content That Doubles Growth** 🚀

*A 2026-compliant, animation-rich, brand-aligned Next.js website*
