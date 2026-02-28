# Copilot Instructions for H.P. Bright Academy Website

School website for H.P. Bright Academy (Preschool–Class 8), Varanasi UP. Deployed at `hpbrightacademy.in` via GitHub Pages. Stack: React 19, Vite 7, Tailwind CSS 3, React Router DOM 7, Framer Motion 12, React Icons 5.

## Developer Workflows

```bash
npm run dev        # dev server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview dist/ locally
npm run lint       # ESLint check
```

Deployment is automatic: push to `main` triggers `.github/workflows/deploy.yml` which runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages. No manual deploy step needed.

## Architecture

`App.jsx` is the root — wraps everything in `<BrowserRouter basename="">` (empty string for custom domain). `Header` and `Footer` are persistent layout; `<main>` renders 5 routes:

```
/ → Home  |  /about  |  /academics  |  /admissions  |  /contact
```

`Home` is a pure composition of 7 section components from `src/components/Home/sections/` + `EnhancedGallery`. Add/reorder homepage sections only in `Home.jsx`.

## Critical: Static Image Pattern

**All images live in `public/images/{Category}/{n}.jpg`** (numbered starting at 1). Categories: `Campus`, `Activities`, `Events`, `Achievements`, `AboutUs`.

Always reference public images with `import.meta.env.BASE_URL` prefix — never a bare `/` path:

```jsx
// ✅ Correct
src={`${import.meta.env.BASE_URL}images/Campus/1.jpg`}
// ❌ Wrong
src="/images/Campus/1.jpg"
```

`ImageSlideshow` auto-generates image arrays from `maxImages` down to 1. To add images for a category, drop numbered `.jpg` files in the folder and increment `maxImages` in `EnhancedGallery.jsx`.

## CSS Conventions

`src/index.css` defines project-wide utility classes via `@layer components`. Use these instead of verbose inline Tailwind:

| Class | Description |
|---|---|
| `container-custom` | `container mx-auto px-4 sm:px-6 lg:px-8` |
| `section-padding` | `py-16 lg:py-24` |
| `btn-primary` | Blue CTA button with hover/focus styles |
| `btn-secondary` | Green CTA button |
| `btn-outline` | Blue outline button |
| `heading-primary` | `text-3xl lg:text-5xl font-bold text-gray-900` |
| `card-hover` | `hover:scale-105 hover:shadow-xl` transition |

**Fonts**: body = `Inter`; buttons use `Oswald` (not in Tailwind config — apply via `style={{ fontFamily: "'Oswald', sans-serif" }}`). Both loaded via Google Fonts in `index.css`.

**Custom Tailwind colors**: `primary-{50–900}` (blues) and `secondary-{50–900}` (greens) defined in `tailwind.config.js`.

## Animation Pattern

All sections use Framer Motion scroll-triggered reveal. Standard pattern:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

Use `AnimatePresence mode="wait"` for image/slide transitions (see `Hero.jsx`, `ImageSlideshow.jsx`).

## Navigation

`Header` uses `useNavigate` + `useLocation`. Active link detection: `location.pathname === item.path`. Mobile menu closes on route change via a `useEffect` watching `location`. Pair `navigate(path)` with `window.scrollTo({ top: 0, behavior: 'smooth' })` when navigating programmatically. `ScrollToTop` component in `App.jsx` handles scroll restoration on every route change.

## School Contact Details (use verbatim)

- **Phone**: +91 8400308200
- **Email**: info@hpbrightacademy.in
- **Address**: Chamao Shivpur Tarna, Ganeshpur, Varanasi, Uttar Pradesh 221105
