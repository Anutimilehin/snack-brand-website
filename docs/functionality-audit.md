# Website Functionality Audit

Audit scope: Home, About, Products, Manufacturing, Contact, shared header,
mobile navigation, and footer.

## Findings and outcomes

| Area | Element | Before audit | Outcome |
| --- | --- | --- | --- |
| Header | Brand | Routes to Home | Working; retained |
| Header | Desktop navigation | Routes through React Router | Working; retained |
| Mobile navigation | Menu toggle | Opens and closes the menu; navigation links close it | Added Escape-to-close with focus returned to the toggle, and closes on browser back/forward |
| Home | “Discover our range” | Routes to Products | Working; retained |
| Home | “The Jidex story” | Routes to About | Working; retained |
| Home | Six photo tiles | Hover and arrow styling suggested a link, but tiles were figures | Fixed: each tile is a keyboard-accessible route link; five open the matching product, one opens Manufacturing |
| About | “Discover our story” | Scrolls to `#our-story` | Working; retained |
| About | “Explore products” | Routes to Products | Working; retained |
| About | Final Products and Contact calls to action | Route to their pages | Working; retained |
| About | Commitment rows | Informational; hover shift and arrow suggested an action | Fixed: removed row movement and replaced the directional arrow with a non-interactive marker |
| Products | “Meet the range” | Scrolls to the product list | Working; retained |
| Products | Product photo and detail buttons | Select a product and update the detail panel | Working; retained; product links from Home now initialize and scroll to the matching item |
| Products | Detail-panel and final calls to action | Route to Contact; final secondary link routes to About | Working; retained |
| Manufacturing | “Follow the journey” | Scrolls to the production journey | Working; retained |
| Manufacturing | Products and Contact calls to action | Route to their pages | Working; retained |
| Manufacturing | Journey rows | Informational; hover-revealed arrow suggested an action | Fixed: removed the false directional affordance |
| Contact | Hero call button | Opens the phone dialer with the supplied international number | Working; retained |
| Contact | “Choose how to reach us” | Scrolls to contact methods | Working; retained |
| Contact | Phone, WhatsApp, and email cards | Open `tel:`, WhatsApp, and `mailto:` destinations | Working; target values verified against supplied details |
| Contact | Enquiry form | Native required/email validation; prepares an email draft | Working as a mailto draft only; no backend, message sending, or storage |
| Contact | Social placeholder | Displays the supplied company name, no URL | Intentionally non-clickable until official account links are provided |
| Footer | Brand, page links, Contact call to action | Route through React Router | Working; retained |
| Fallback route | “Back to home” | Routes to Home | Working; retained |

## Items requiring future setup

- A backend or email service is needed for direct form submission and message
  storage. The current form prepares a draft in the visitor’s configured email
  application.
- Official social account URLs are needed before social links can be enabled.
- The email draft depends on a configured email application; the form provides
  a direct email link as a fallback.
