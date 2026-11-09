# Jidex Foods Nigeria Limited — Website

A responsive business website for a Nigerian food manufacturing brand, built
as a portfolio demonstration of modern React and serverless development.

> **Note:** This is a portfolio project. It is not an official commission
> from or endorsement by Jidex Foods Nigeria Limited. It is a demonstration
> of frontend design, responsive layouts, and serverless backend integration.

---

## Live Demo

🔗 *(Demo URL will be added after Vercel deployment)*

---

## Tech Stack

- **React 19** — UI library
- **Vite** — build tool and development server
- **Tailwind CSS 4** — utility-first CSS framework
- **React Router DOM** — client-side routing
- **Resend** — transactional email for the contact form
- **Upstash Redis** — distributed rate limiting
- **Vercel** — deployment platform

---

## Features

- Fully responsive across mobile, tablet, and desktop
- Five routed pages: Home, About, Products, Manufacturing, Contact
- Contact form with server-side email delivery via Resend
- IP-based rate limiting via Upstash to prevent form abuse
- Accessible keyboard navigation and skip-to-content link
- Reduced-motion support for users who prefer minimal animation
- Scroll-reveal and parallax effects with performance in mind
- Per-page browser tab metadata

---

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — brand introduction and product highlights |
| `/about` | Company story, founder, mission, vision, commitments |
| `/products` | Product range with interactive selection |
| `/manufacturing` | Production journey, facilities, and food-safety considerations |
| `/contact` | Contact methods and enquiry form |

---

## Local Development

### Prerequisites

- Node.js 20+
- npm 10+

### Install dependencies

```bash
npm install
