# Jidex Foods Nigeria Limited Website

A responsive, multi-page React website for a Nigerian food-manufacturing brand. This portfolio project demonstrates editorial brand design, accessible interactions, responsive layouts, and client-side routing.

Portfolio Disclaimer: This is an independent portfolio project created as a demonstration of web development skills. It is not an official commission from, partnership with, or endorsement by Jidex Foods Nigeria Limited.

Live Website

Deployment pending. The live GitHub Pages URL will be added after the first successful deployment.

Project Objectives

The goal of this project is to demonstrate how a food manufacturing brand can present its identity, products, and business information through a modern website.

The website is designed to help visitors:

* Discover the brand and learn about the company.
* Explore its range of snack products.
* Understand its illustrative manufacturing journey.
* Find relevant company information.
* Make enquiries through the available contact options.

Features

* Multi-page architecture: Five distinct pages with client-side navigation.
* Responsive design: Layouts adapted for desktop, tablet, and mobile screens.
* Custom visual identity: A deep-red, warm-cream, white, and charcoal design system.
* Product showcases: Interactive product details and product presentation.
* Company information: Dedicated About and Manufacturing pages.
* Accessible interactions: Keyboard focus states, accessible navigation, and reduced-motion support.
* Reusable components: Shared layouts and UI components across pages.
* Contact functionality: A static enquiry form that prepares a prefilled email draft in the visitor’s email application.
* GitHub Pages support: Configured for static hosting with client-side route fallback.

Technology Stack

Technology	Purpose
React 19	Building the user interface
Vite 8	Development server and build tooling
React Router DOM 7	Client-side routing
JavaScript (JSX)	Application logic and components
Custom CSS	Styling, layouts, animations, and responsive design
ESLint	Code quality and linting
Git & GitHub	Version control and source-code hosting
GitHub Actions	Deployment automation
GitHub Pages	Static website hosting

The interface is built using custom CSS rather than Tailwind utility classes.

Website Pages

Route	Description
/	Homepage introducing the brand and highlighting its products.
/about	Company background, founder information, mission, vision, and values.
/products	Product range and interactive product details.
/manufacturing	An illustrative overview of the production journey.
/contact	Contact information and an enquiry form.

Getting Started

Requirements

* Node.js 20 or later
* npm 10 or later

Installation

Clone the repository:

git clone https://github.com/Anutimilehin/snack-brand-website.git

Navigate into the project directory:

cd snack-brand-website

Install dependencies:

npm install

Start the development server:

npm run dev

Vite will provide a local development URL, usually:

http://localhost:5173

Build and Validation

Run the following commands to check and build the project:

# Check code quality
npm run lint
# Create a standard production build
npm run build
# Build specifically for GitHub Pages
npm run build:pages
# Test GitHub Pages route fallback behaviour
npm run test:pages-fallback

Production build files are generated in the dist/ directory.

Contact Form

The website uses a fully static mailto: contact form.

When a visitor submits the form:

1. The browser validates the required fields.
2. The visitor’s message is formatted into an email draft.
3. The visitor’s configured email application opens with the recipient, subject, and message populated.
4. The visitor reviews and sends the email manually.

The form does not automatically send, store, or transmit messages to a server.

Contact email: adegokeanutimilehin0@gmail.com

Direct phone, WhatsApp, and email links are also available on the Contact page.

GitHub Pages Deployment

The project is configured for deployment through GitHub Actions.

The repository uses the following Vite base path:

/snack-brand-website/

Deployment Steps

1. Push the latest changes to the main branch.
2. Open the repository’s Settings → Pages.
3. Set the deployment source to GitHub Actions.
4. Navigate to the Actions tab.
5. Select Deploy static site to GitHub Pages.
6. Run the workflow manually.
7. Wait for the deployment to complete successfully.

The deployment workflow uses:

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
