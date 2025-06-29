# H.P. Bright Academy Website - Deployment Guide

## Project Overview
This is a modern, responsive React.js website for H.P. Bright Academy, built with Vite, Tailwind CSS, and React Router. The site is optimized for GitHub Pages deployment and features a mobile-first responsive design.

## Technology Stack
- **Frontend**: React.js 18.3 with functional components and hooks
- **Build Tool**: Vite 7.0
- **Styling**: Tailwind CSS 3.4.0 
- **Routing**: React Router DOM 7.1
- **Animations**: Framer Motion 11.18
- **Icons**: React Icons 5.4

## Image Assets
All images are located in `/public/images/` with web-friendly naming:
- `Logo.png` - School logo
- `campus-1.jpg`, `campus-2.jpg` - Campus photos
- `activities-1.jpg` to `activities-6.jpg` - Student activity photos
- `events-1.jpg`, `events-2.jpg` - School event photos
- `achievements-1.jpg`, `achievements-2.jpg` - Achievement photos

## Development Commands

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
# Runs on http://localhost:5173/hpbrightac/
```

### Build for Production
```bash
npm run build
# Outputs to ./dist directory
```

### Preview Production Build
```bash
npm run preview
```

## GitHub Pages Deployment

### 1. Repository Setup
- Ensure your repository is named appropriately (e.g., `hpbrightac`)
- The base URL is configured as `/hpbrightac/` in `vite.config.js`

### 2. Build and Deploy
```bash
# Build the project
npm run build

# Deploy the dist folder contents to gh-pages branch
# You can use gh-pages package or manual deployment
```

### 3. GitHub Pages Configuration
- Go to repository Settings → Pages
- Select "Deploy from a branch"
- Choose `gh-pages` branch (or upload dist contents to main branch docs folder)
- Site will be available at: `https://yourusername.github.io/hpbrightac/`

## Site Features

### Navigation Structure
- **Home**: Hero, About Us, Academics, Facilities, Gallery, Testimonials
- **About**: Detailed school information, history, faculty
- **Academics**: Curriculum details for all levels (Preschool to Class 8)
- **Contact**: Contact information and inquiry form

### Responsive Design
- **Mobile**: 320px - 768px (hamburger menu, stacked layouts)
- **Tablet**: 768px - 1024px (optimized for touch interfaces)
- **Desktop**: 1024px+ (full navigation, multi-column layouts)

### Performance Optimizations
- Optimized images with proper alt text
- Lazy loading for images
- Minimal bundle size with tree shaking
- Efficient CSS with Tailwind's purge configuration

### Accessibility Features
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- ARIA labels where needed
- Color contrast compliance

## File Structure
```
src/
├── components/
│   ├── Header/Header.jsx          # Navigation with mobile menu
│   ├── Footer/Footer.jsx          # Site footer
│   ├── Home/
│   │   ├── Home.jsx              # Home page container
│   │   └── sections/             # Home page sections
│   │       ├── Hero.jsx          # Hero banner
│   │       ├── About.jsx         # About section
│   │       ├── Academics.jsx     # Academics overview
│   │       ├── Facilities.jsx    # Facilities showcase
│   │       ├── Gallery.jsx       # Image gallery
│   │       ├── Testimonials.jsx  # Parent testimonials
│   │       └── WhyChooseUs.jsx   # Why choose us section
│   ├── About/About.jsx           # Full About page
│   └── Academics/Academics.jsx   # Full Academics page
├── App.jsx                       # Main app component with routing
├── main.jsx                      # React entry point
└── index.css                     # Global styles and Tailwind imports
```

## Customization Guide

### Colors
The site uses a professional color scheme suitable for education:
- Primary: Blue tones (`blue-600`, `blue-700`, etc.)
- Secondary: Green accents (`green-500`, `emerald-600`)
- Neutral: Gray shades for text and backgrounds

### Typography
- Headings: `font-bold` with appropriate sizing
- Body text: `text-gray-600` and `text-gray-700`
- Responsive text sizing using Tailwind's responsive prefixes

### Images
To update images:
1. Add new images to `/public/images/`
2. Use web-friendly names (no spaces, lowercase, hyphens)
3. Update component references to match new filenames
4. Optimize images for web (JPEG for photos, PNG for logos)

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Mobile 90+)

## Maintenance
- Regularly update dependencies for security
- Optimize images as needed
- Test responsive design on various devices
- Monitor Core Web Vitals performance metrics
