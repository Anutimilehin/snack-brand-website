Jidex Foods Nigeria Limited — Website

A modern, responsive, multi-page website concept for a Nigerian food manufacturing brand. This project demonstrates brand presentation, responsive web design, accessible interactions, and client-side routing.

Disclaimer: This is an independent portfolio project created for demonstration purposes. It is not an official commission, partnership, or endorsement by Jidex Foods Nigeria Limited.

Live Website

Deployment pending: The GitHub Pages link will be added here after the first successful deployment.

Project Objectives

* Create a professional online presence for a food manufacturing brand.
* Showcase the company’s products and brand identity.
* Present the company’s story, mission, vision, and values.
* Explain the manufacturing process through a dedicated page.
* Provide visitors with an accessible way to make enquiries.
* Demonstrate practical frontend development skills.

Highlights

* Responsive multi-page website.
* Clean and modern user interface.
* Reusable React components.
* Client-side navigation using React Router.
* Dedicated product showcase.
* Company information and manufacturing sections.
* Contact form with client-side validation.
* Mobile-friendly layouts and interactions.
* Static deployment architecture using GitHub Pages.

Technology

Technology	Purpose
React 19	Frontend user interface
Vite	Development server and build tool
React Router DOM	Client-side routing
JavaScript (JSX)	Application logic and components
Custom CSS	Styling and responsive layouts
ESLint	Code quality and linting
Git & GitHub	Version control and source code hosting
GitHub Actions	Automated deployment
GitHub Pages	Static website hosting

The project uses custom CSS rather than Tailwind utility classes.

Website Routes

Page	Route	Description
Home	/	Introduces the brand and highlights key content.
About	/about	Presents the company’s background, mission, vision, and values.
Products	/products	Showcases the available snack products.
Manufacturing	/manufacturing	Presents an illustrative overview of the manufacturing journey.
Contact	/contact	Allows visitors to make enquiries through a prepared email draft.

Local Development

Prerequisites

* Node.js
* npm
* Git

Installation

Clone the repository:

git clone https://github.com/Anutimilehin/snack-brand-website.git

Navigate into the project directory:

cd snack-brand-website

Install dependencies:

npm install

Start the development server:

npm run dev

Open the local URL provided by Vite, usually:

http://localhost:5173

Production Builds

Build the application for local production:

npm run build

Build the application specifically for GitHub Pages:

npm run build:pages

Run the available checks:

npm run lint
npm run test:pages-fallback

Contact Form

The contact form uses a static mailto: approach to remain compatible with GitHub Pages without requiring a backend service.

When a visitor submits the form:

* The form validates the required fields.
* A prepared email draft is generated.
* The visitor’s configured email application opens with the enquiry details.
* The visitor reviews and sends the email manually.

Important: The website does not send emails automatically.

Contact email:

adegokeanutimilehin0@gmail.com

GitHub Pages Deployment

The project is configured for static hosting through GitHub Pages.

Deployment Steps

1. Push the latest project changes to the main branch.
2. Open the repository on GitHub.
3. Navigate to Settings → Pages.
4. Under Build and deployment, select GitHub Actions as the source.
5. Open the Actions tab.
6. Run the Deploy static site to GitHub Pages workflow if it has not started automatically.
7. Wait for the deployment to complete successfully.

Expected Website URL

https://anutimilehin.github.io/snack-brand-website/

The application is configured to use the correct base path for GitHub Pages.

Client-side routing is supported through a custom 404.html fallback and URL restoration logic, allowing visitors to access and refresh individual pages.

Project Structure

snack-brand-website/
│
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
│
├── public/
│   └── 404.html
│
├── scripts/
│   └── test-github-pages-fallback.mjs
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── sections/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md

Some folders may contain additional files and subdirectories.

What This Project Demonstrates

This project demonstrates practical experience with:

* Building responsive interfaces using React.
* Organising components and application structure.
* Implementing multi-page navigation.
* Writing custom CSS for responsive layouts.
* Managing application builds with Vite.
* Using Git and GitHub for version control.
* Preparing a React application for static hosting.
* Implementing client-side form validation.
* Troubleshooting deployment and routing challenges.

Project Status

The website is an independent portfolio demonstration project. Its source code is maintained in this repository, with GitHub Pages deployment configured for static hosting.
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
