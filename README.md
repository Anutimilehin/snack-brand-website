# Jidex Foods Nigeria Limited Website

A responsive, multi-page React website for a Nigerian food-manufacturing brand. This portfolio project demonstrates editorial brand design, accessible interactions, responsive layouts, and client-side routing.

> This is a portfolio demonstration. It is not an official commission from, or endorsement by, Jidex Foods Nigeria Limited.

## Live website

**Deployment pending:** the GitHub Pages URL will be added here after the first successful deployment.

## Highlights

- Five routes: Home, About, Products, Manufacturing, and Contact
- Responsive custom CSS with a deep-red, warm-cream, white, and charcoal visual system
- Accessible header, footer, mobile navigation, keyboard focus states, and reduced-motion support
- Product detail interactions and route-aware scroll management
- Responsive, locally hosted image assets
- A static enquiry form that prepares a prefilled email draft in the visitor’s email application

## Technology

- React 19
- Vite 8
- React Router DOM 7
- JSX and custom CSS
- Tailwind CSS build tooling, used alongside the project’s custom CSS
- ESLint for code-quality checks
- GitHub Actions for manual deployment automation
- GitHub Pages for static hosting

The application interface is authored with the project’s custom CSS files rather than Tailwind utility classes.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Brand introduction and snack highlights |
| `/about` | Company story, founder, mission, vision, and commitments |
| `/products` | Snack range and interactive product details |
| `/manufacturing` | Illustrative production journey and facilities overview |
| `/contact` | Direct contact methods and an email-draft enquiry form |

## Local development

### Requirements

- Node.js 20 or later
- npm 10 or later

### Install and run

```bash
npm install
npm run dev
```

## Production builds

```bash
# Standard production build
npm run lint
npm run build

# GitHub Pages build, including the repository base path
npm run build:pages

# Verify direct-route fallback behaviour
npm run test:pages-fallback
```

Vite writes production files to `dist/`. The directory is generated and excluded from Git.

## Contact form

The contact form is fully static. It validates the required fields in the browser, then prepares an email addressed to `adegokeanutimilehin0@gmail.com` using the visitor’s configured email application.

The form does not send, store, or transmit messages automatically. Visitors must review and send the prepared draft themselves. Direct phone, WhatsApp, and email links remain available as alternatives.

## GitHub Pages deployment

This repository is prepared for the GitHub repository name `snack-brand-website`. A GitHub Pages build uses the Vite base path `/snack-brand-website/`.

1. Rename the GitHub repository to `snack-brand-website`.
2. Push this project to its `main` branch.
3. In **Settings → Pages**, set **Source** to **GitHub Actions**.
4. In the **Actions** tab, run **Deploy static site to GitHub Pages** manually.
5. After deployment completes, add the published URL to the **Live website** section above.

The workflow builds the site with:

```bash
npm run build:pages
```

`public/404.html` redirects direct requests for client-side routes back to the app, so refreshing a route such as `/products` works on GitHub Pages.

## Project structure

```text
public/              Static files, including the GitHub Pages fallback
src/components/      Shared layout and UI components
src/data/            Editable page content and image references
src/pages/           Route-level pages
src/sections/        Page sections
src/styles/          Custom CSS and design tokens
.github/workflows/   Manual GitHub Pages deployment workflow
scripts/             Dependency-free GitHub Pages fallback test
```

## License

See [LICENSE](./LICENSE).
