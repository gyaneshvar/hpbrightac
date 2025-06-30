# H.P. Bright Academy Website

A modern, responsive React.js website for H.P. Bright Academy - a school providing quality education from Preschool to Class 8.

## 🏫 About H.P. Bright Academy

**H.P. Bright Academy** is dedicated to nurturing young minds with quality education, individual attention, and value-based learning in a safe and caring environment.

- **Education Level**: Preschool to Class 8
- **Address**: Chamao Shivpur Tarna, Ganeshpur, Varanasi, Uttar Pradesh 221105
- **Contact**: +91 8400308200
- **Email**: info@hpbrightacademy.in

## 🚀 Features

- **Responsive Design**: Mobile-first approach, fully compatible with all screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: Galleries, forms, testimonials, and more
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance Optimized**: Fast loading times and optimized images

## 🛠️ Technology Stack

- **Frontend**: React.js 19.1.0
- **Build Tool**: Vite 7.0.0
- **Styling**: Tailwind CSS 4.1.11
- **Animations**: Framer Motion 12.19.2
- **Icons**: React Icons 5.5.0
- **Routing**: React Router DOM 7.6.3

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/hpbrightac.git
   cd hpbrightac
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Build & Deployment

### Local Build
```bash
npm run build
npm run preview
```

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

#### Automatic Deployment
1. Push to `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://yourusername.github.io/hpbrightac`

#### Manual Deployment
```bash
npm run build
npm run deploy
```

### Deployment Configuration

The project includes:
- **vite.config.js**: Configured with base path for GitHub Pages
- **GitHub Actions workflow**: Automatic deployment on push to main
- **package.json**: Deployment scripts included

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/           # Navigation and header
│   ├── Footer/           # Footer component
│   ├── Home/            # Homepage components
│   │   └── sections/    # Hero, About, Gallery, etc.
│   ├── About/           # About page
│   ├── Academics/       # Academics page
│   ├── Admissions/      # Admissions page
│   └── Contact/         # Contact page
├── assets/              # Static assets
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Blue tones (#0087ff family)
- **Secondary**: Green tones (#00ff80 family)
- **Neutral**: Gray tones for text and backgrounds

### Typography
- **Body Text**: Inter font family
- **Headings**: Poppins font family

### Components
- Buttons with hover effects
- Cards with shadow and hover animations
- Forms with validation
- Responsive navigation

## 📋 Pages & Features

### 🏠 Homepage
- Hero section with call-to-action
- About section with school information
- Academics overview
- Facilities showcase
- Image gallery
- Testimonials
- Why choose us section

### ℹ️ About Page
- School history and mission
- Faculty information
- Leadership team
- Awards and recognitions

### 📚 Academics Page
- Curriculum details for each grade
- Teaching methodology
- Assessment system
- Extra-curricular activities

### 🎓 Admissions Page
- Admission process steps
- Fee structure
- Required documents
- Online inquiry form
- Admission criteria

### 📞 Contact Page
- Contact information
- Location map
- Contact form
- FAQ section
- WhatsApp integration

## 📱 Mobile Features

- Hamburger menu navigation
- Touch-friendly buttons
- Optimized images for mobile
- Responsive typography
- Mobile-first design approach

## 🔍 SEO & Performance

- Semantic HTML structure
- Meta tags for each page
- Alt text for all images
- Optimized image loading
- Fast loading times
- Clean URLs with React Router

## ♿ Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus indicators
- Proper heading hierarchy

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Content Management

### Images
Real school images are stored in `public/images/` folder:
- Logo.png
- Various school photos for gallery and sections

### Content Updates
- School information in components
- Contact details in Header and Footer
- Gallery images in Gallery component

## 🚀 Deployment Notes

### GitHub Pages Setup
1. Enable GitHub Pages in repository settings
2. Choose "GitHub Actions" as source
3. Push to main branch to trigger deployment

### Custom Domain (Optional)
1. Add CNAME file to public folder
2. Configure DNS settings
3. Update base path in vite.config.js

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and queries:
- **Email**: info@hpbrightacademy.in
- **Phone**: +91 8400308200
- **WhatsApp**: +91 8400308200

## 🙏 Acknowledgments

- React.js community
- Tailwind CSS team
- Framer Motion library
- All contributors and supporters

---

**H.P. Bright Academy** - Shaping tomorrow's leaders today! 🌟+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
