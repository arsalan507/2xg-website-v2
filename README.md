# 2XG - Content That Doubles Growth

A stunning, modern Next.js website for 2XG content marketing agency, built with cutting-edge animations and premium design aligned with the brand identity.

## 🚀 Features

### Design & Branding
- **2026-Compliant Modern Design**: Built following 2025-2026 web design trends
- **Brand-Aligned Colors**: Deep Electric Blue (#0052FF), Neon Green (#8CE63A), and Ember Orange (#FF6A1A)
- **Premium Typography**: Montserrat for headings, Inter for body text, Impact for numbers
- **Dark Theme**: Sophisticated graphite background with high-contrast elements

### Animations & Interactions
- **Hero Section**:
  - Animated gradient backgrounds with parallax mouse tracking
  - Floating geometric elements
  - Smooth scroll indicator
  - Dynamic text animations

- **Stats Bar**:
  - Animated number counters that trigger on scroll
  - Real-time counting effect
  - Responsive grid layout

- **Case Studies**:
  - Hover-activated gradient overlays
  - Animated card borders
  - Scale and transition effects
  - Smooth entrance animations

- **Services Section**:
  - Interactive hover effects on cards
  - Staggered entrance animations
  - Feature list reveals
  - Emoji icon animations

- **Navigation**:
  - Sticky header with blur effect
  - Smooth scroll behavior
  - Mobile hamburger menu with animations
  - Responsive design

- **Contact Form**:
  - Animated form fields
  - Hover states on inputs
  - Form validation
  - Success feedback

### Technical Features
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom brand configuration
- **Framer Motion** for smooth, performant animations
- **GSAP** for advanced animation capabilities
- **Mobile-First Design** with full responsiveness
- **SEO Optimized** with metadata and OpenGraph tags
- **Performance Optimized** with lazy loading and smooth transitions

## 📁 Project Structure

```
2xg/
├── app/
│   ├── globals.css          # Global styles with brand colors
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main homepage
├── components/
│   ├── Navigation.tsx        # Sticky navigation with mobile menu
│   ├── HeroSection.tsx       # Animated hero with parallax
│   ├── StatsBar.tsx          # Animated statistics counter
│   ├── CaseStudies.tsx       # Interactive case study cards
│   ├── Services.tsx          # Services with hover effects
│   ├── Contact.tsx           # Contact form with validation
│   └── Footer.tsx            # Footer with links
├── tailwind.config.ts        # Tailwind with brand colors
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
└── package.json              # Dependencies
```

## 🎨 Brand Colors

```css
/* Primary Colors */
Deep Blue:      #0052FF (Trust, Systems, Strategy)
Deep Blue Dark: #0B1F4F (Depth, Premium)
Neon Green:     #8CE63A (Growth, Innovation)
Neon Light:     #A4FF3B (Energy, Momentum)

/* Accent */
Ember Orange:   #FF6A1A (Action, CTAs, Urgency)

/* Neutrals */
Graphite:       #181A1F (Dark Background)
Graphite Dark:  #111111 (Premium Black)
Off-White:      #F5F5F7 (Light Text, Breathable Space)
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in terminal)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Sections

### 1. Hero Section
- Large headline: "Content That Doubles Growth"
- Animated gradient backgrounds
- Dual CTAs: "See Our Case Studies" and "Get Started"
- Parallax mouse-tracking effects

### 2. Stats Bar
- 25M+ Monthly Views
- 2M+ Followers
- 100M+ Total Views (EM Doodle)
- 120 Days to 65K Community

### 3. Case Studies
- **Bharath Cycle Hub**: India's Largest Organic Bicycle Audience
- **EM Doodle**: From Product Launch to 65K Community in 4 Months
- Interactive cards with stats and descriptions

### 4. Services
- **Content Systems**: Reels, Shorts, and YouTube content
- **Performance Amplification**: Meta & Google Ads
- **Funnel Optimization**: End-to-end conversion tracking

### 5. Contact Section
- Contact form with validation
- Contact information cards
- Social proof elements
- Responsive two-column layout

### 6. Footer
- Brand information
- Quick navigation links
- Contact details
- Copyright and legal links

## 🎯 Design Principles

Based on extensive research of top content marketing agencies (HubSpot, Siege Media, Fractl, Column Five), this website incorporates:

### 2025-2026 Trends
- ✅ Dark mode as default for premium feel
- ✅ Micro-interactions and purposeful animations
- ✅ Asymmetric layouts with smooth transitions
- ✅ Mobile-first responsive design
- ✅ Geometric sans-serif typography
- ✅ High-contrast color schemes
- ✅ Data-driven presentation
- ✅ Scroll-triggered animations
- ✅ Gradient overlays and effects
- ✅ Card-based layouts with hover states

### Performance
- Optimized animations (transform & opacity only)
- GPU-accelerated transitions
- Lazy loading components
- Minimal bundle size
- Fast page load times

### Accessibility
- High color contrast ratios
- Keyboard navigation support
- Semantic HTML
- Screen reader friendly
- Respects user motion preferences

## 🛠️ Customization

### Update Brand Colors
Edit [tailwind.config.ts](tailwind.config.ts):
```typescript
colors: {
  'deep-blue': '#0052FF',
  'neon-green': '#8CE63A',
  // ... customize colors
}
```

### Modify Content
All content is in the component files:
- Hero text: `components/HeroSection.tsx`
- Stats: `components/StatsBar.tsx`
- Case studies: `components/CaseStudies.tsx`
- Services: `components/Services.tsx`

### Add New Sections
Create a new component in `components/` and import it in `app/page.tsx`

## 📊 SEO & Metadata

Configured in [app/layout.tsx](app/layout.tsx):
- Title: "2XG - Content That Doubles Growth"
- Description optimized for search engines
- OpenGraph tags for social sharing
- Twitter card support
- Keywords for content marketing, growth agency, mobility, retail

## 🔧 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Fonts**: Google Fonts (Montserrat, Inter)
- **Icons**: Emoji-based for performance

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌟 Key Highlights

1. **Fully Responsive**: Perfect on mobile, tablet, and desktop
2. **Smooth Animations**: 60fps animations using best practices
3. **Brand Compliant**: 100% aligned with 2XG Brand Identity Kit
4. **Modern Stack**: Latest Next.js 14 with TypeScript
5. **Performance Focused**: Optimized for speed and SEO
6. **2026 Ready**: Built with cutting-edge design trends

## 📞 Contact

For questions or support:
- Email: contact@2xg.in
- Website: 2xg.in
- Location: Bengaluru, India

---

**Built with ❤️ for 2XG - Content Marketing Agency**

*From 25M views to predictable sales. We build content systems for mobility & retail brands.*
