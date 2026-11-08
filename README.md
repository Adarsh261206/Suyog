# GISA Global Solutions LLP – Official Website

> **"Your Growth Our Mission."**  
> *Personal branding and international business consultancy website for Suyog Walke, Founder of GISA Global Solutions LLP.*

---

## 📌 Project Overview

This is the official, premium personal branding and corporate advisory website for **Suyog Walke**, Founder of **GISA Global Solutions LLP** — an international business consultancy headquartered in **Mumbai, Maharashtra, India**.

The platform is designed to present a credible, high-trust digital presence for Indian professionals, boutique consultancies, and specialized service firms looking to enter and grow within high-value global markets, including North America, the United Kingdom, Europe, the GCC, and Asia-Pacific.

---

## ✨ Key Features

### Active Platform Features (Currently Implemented)
- **Premium Responsive UI/UX**: Minimalist corporate aesthetic designed with editorial typography, generous whitespace, and elegant brand green accents.
- **React.js Frontend**: Modern component-driven single-page architecture built with React 18 and Vite.
- **Tailwind CSS Styling**: Utility-first responsive design system with a bespoke corporate color palette and consistent spacing rhythm.
- **Framer Motion Animations**: Smooth entrance reveals, staggered card transitions, and micro-interactions.
- **Responsive Sticky Navigation**: Transparent-to-frosted sticky navbar, multi-level dropdown menus, active route indicators, and full-featured mobile drawer.
- **Individual Service Pages**: Dedicated deep-dive routes for all 5 core pillars:
  - International Business Consultancy (`/services/international-business-consultancy`)
  - International Market Research (`/services/international-market-research`)
  - Global Branding & Digital Marketing (`/services/global-branding-digital-marketing`)
  - International Client Acquisition (`/services/international-client-acquisition`)
  - Operations Support (`/services/international-business-operations-support`)
- **Business Growth Packages**: Interactive comparison matrix for:
  - **60-Day Foundation Setup Packages** (*Basic, Advanced, Premium*)
  - **30-Day Renewable Monthly Growth Plans** (*Ongoing execution & retainers*)
  - Strict compliance with client rules: **Zero public pricing displayed**; users are directed to clarity sessions.
- **Founder Profile**: Dedicated executive narrative, leadership philosophy, verified background, and high-resolution photography of Suyog Walke.
- **WhatsApp Integration**: Persistent floating action button and direct inquiry routing with prefilled consultation greetings (+91 9172057497).
- **Executive Enquiry Forms**: Interactive form with validation, error states, and local CRM logging.
- **Consultation Booking Interface** (`/book-consultation`): Interactive date/time picker, agenda selection, and instant `.ics` calendar invitation generator.
- **Admin CRM Portal** (`/admin`): Passkey-gated portal (`gisa2025`) for executive lead pipeline tracking, status management, private notes, and one-click CSV export.
- **Multilingual Support**: Internationalization framework (`I18nContext`) ready for English (`EN`), Marathi (`MR`), and Hindi (`HI`).
- **Official Vector Brand Badges**: Custom SVGs for LinkedIn, Instagram, Facebook, and WhatsApp, keeping Founder and Company channels properly segregated.
- **SEO-Friendly Architecture**: Automated dynamic meta tags via `useSEO`, structured XML sitemap (`/sitemap.xml`), and robots directive (`/robots.txt`).

### Planned Features (Future Roadmap)
- Real-time cloud database synchronization (Firebase / Supabase backend integration).
- Automated transactional email dispatch via SMTP / Webhook (Resend / SendGrid).
- Client portal for downloadable market playbooks and deliverables tracking.

---

## 🛠️ Technology Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Frontend Library** | React | `^18.3.1` | Core UI component hierarchy |
| **DOM Renderer** | React DOM | `^18.3.1` | Browser DOM rendering |
| **Build Tool & Bundler** | Vite | `^5.4.11` | Lightning-fast development & build pipeline |
| **Routing** | React Router DOM | `^6.28.0` | Client-side routing & route parameters |
| **CSS Framework** | Tailwind CSS | `^3.4.15` | Utility-first responsive styling |
| **Post-Processing** | PostCSS / Autoprefixer | `^8.4.49` / `^10.4.20` | CSS vendor prefixing & optimization |
| **Animations** | Framer Motion | `^11.11.17` | Hardware-accelerated UI animations |
| **Icons** | Lucide React | `^0.460.0` | Clean, modern iconography |
| **Form Handling** | React Hook Form | `^7.53.2` | High-performance form state & validation |

---

## 📥 Installation

```bash
# 1. Clone the repository
git clone https://github.com/Amar8451/Suyog-Walke.git

# 2. Navigate to the project directory
cd Suyog-Walke

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Action |
|---|---|
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and bundles production-ready assets into the `dist/` folder. |
| `npm run preview` | Boots a local static web server to preview the production build from `dist/`. |

---

## 📂 Project Structure

```text
├── public/
│   ├── founder-suyog-walke.jpg   # Official founder photograph
│   ├── gisa-logo.jpg              # Cropped official GISA brand logo
│   ├── robots.txt                 # Search engine crawler instructions
│   └── sitemap.xml                # SEO XML sitemap index
├── src/
│   ├── assets/
│   │   ├── images/                # Founder portrait asset
│   │   └── logo/                  # High-resolution cropped GISA brand logo
│   ├── components/
│   │   ├── animations/            # Framer Motion animation containers
│   │   ├── cards/                 # IndustryCard, PackageCard, ServiceCard
│   │   ├── common/                # Logo, SocialIcons (SVGs), WhatsAppFloatingButton
│   │   ├── footer/                # Multi-column footer with segregated channels
│   │   ├── forms/                 # EnquiryForm, EnquiryModal
│   │   └── navbar/                # Sticky header, dropdown menus & mobile drawer
│   ├── context/                   # I18nContext (Language state management)
│   ├── data/
│   │   ├── certifications.js      # MCA, MSME, and proprietary credentials data
│   │   ├── industries.js          # Industry verticals data
│   │   ├── insights.js            # Executive thought leadership articles
│   │   ├── markets.js             # Primary & secondary target market playbooks
│   │   ├── navigation.js          # Nav routes, dropdown links & contact information
│   │   ├── packages.js            # Setup packages, monthly plans & delivery rules
│   │   └── services.js            # 5 Core international services data
│   ├── hooks/
│   │   ├── useSEO.js              # Document head title and description hook
│   │   └── useScrollToTop.js      # Route change scroll restoration hook
│   ├── layouts/
│   │   └── MainLayout.jsx         # Sticky navbar, notice bar, outlet & modal host
│   ├── pages/                     # Full page components (Home, About, Services, Admin, etc.)
│   ├── styles/
│   │   └── index.css              # Tailwind base, components, and font configurations
│   ├── utils/
│   │   └── i18n.js                # Translations dictionary (EN, MR, HI)
│   ├── App.jsx                    # React Router hierarchy and redirects
│   └── main.jsx                   # React application bootstrap entry
├── index.html                     # HTML5 entry with preconnected Google Fonts
├── package.json                   # Dependency versions and project scripts
├── postcss.config.js              # PostCSS plugins configuration
├── tailwind.config.js             # Brand color palette, typography and shadows
└── vite.config.js                 # Vite plugins and chunk splitting configuration
```

---

## 🔑 Environment Variables

The application is engineered to work out of the box for client-side evaluation without mandatory server variables. For production analytics and automated email integration, configure the following in a `.env` file:

```env
# Google Analytics 4 Measurement ID (Optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Admin CRM Gate Passkey Override (Defaults to 'gisa2025' if unset)
VITE_ADMIN_PASSKEY=your_secure_passkey_here

# Contact Email Routing (Optional API endpoint)
VITE_EMAIL_API_ENDPOINT=https://api.yourdomain.com/send
```

> **Note:** Never commit production API keys, secrets, or passkeys to version control.

---

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

This compiles your TypeScript/JavaScript, optimizes images, purges unused CSS, and generates minified bundles into the `dist/` directory.

---

## 🔍 Preview Production Build

To test the production build locally before deploying:

```bash
npm run preview
```

---

## 🚀 Deployment

The compiled output in `dist/` is a completely static, Single-Page Application (SPA) that can be hosted on any modern platform:

### Vercel / Netlify / Cloudflare Pages
* **Build Command**: `npm run build`
* **Output Directory**: `dist`
* **SPA Rewrite Rule**:
  * For Netlify: A `_redirects` file with `/*  /index.html  200`
  * For Vercel: Automatic via `vercel.json` rewrite:
    ```json
    {
      "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
    }
    ```

---

## 🏷️ Brand Information

| Property | Value |
|---|---|
| **Brand Name** | GISA Global Solutions LLP |
| **Founder** | Suyog Walke |
| **Tagline** | *"Your Growth Our Mission."* |
| **Headline** | *"Take Your Expertise Beyond Borders."* |
| **Primary Green** | `#16851C` |
| **Secondary Green** | `#7BCB25` |
| **Dark Charcoal** | `#171717` |
| **Editorial Grey** | `#626B63` |
| **Light Section** | `#F6F9F5` |
| **Border Tone** | `#E5EBE3` |
| **Location** | Mumbai, Maharashtra, India |

---

## 📞 Executive Contact

* **Direct WhatsApp**: [+91 9172057497](https://wa.me/919172057497)
* **Official Email**: [contact@gisaglobalsolutions.com](mailto:contact@gisaglobalsolutions.com)
* **Founder LinkedIn**: [Suyog Walke](https://www.linkedin.com/in/suyog-walke-6ba545154/)
* **Company LinkedIn**: [GISA Global Solutions LLP](https://www.linkedin.com/company/gisa-global-solution-llp/)
* **Company Instagram**: [@gisa_globalsolutionsllp](https://www.instagram.com/gisa_globalsolutionsllp/)
* **Founder Instagram**: [@suyogwalke.official](https://www.instagram.com/suyogwalke.official/)

---

## 📄 License & Attribution

© 2024–2025 **GISA Global Solutions LLP** & **Suyog Walke**. All rights reserved.  
*All content, brand assets, and service blueprints are proprietary.*
