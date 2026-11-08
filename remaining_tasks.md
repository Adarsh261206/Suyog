# Remaining Tasks & Post-Deployment Checklist
**Platform**: Suyog Walke – Founder, GISA Global Solutions LLP  
**Date**: November 2024  

---

## 1. Pending Assets & Setup from Client (Specified in Brief)

The following items are noted for deployment and post-incorporation setup:

1. **Founder's Professional Photograph (COMPLETED)**:
   - *Status*: **Integrated & Verified**.
   - The authentic high-resolution photograph of Founder Suyog Walke was provided, stored in `src/assets/images/founder-suyog-walke.jpg` and `public/founder-suyog-walke.jpg`, and integrated across the Hero section, Section 3, Section 10 ("Meet Suyog Walke"), About Page (`/about`), and Corporate Profile (`/about-gisa`).
2. **Official Business Email Mailbox**:
   - *Current State*: Code uses `contact@gisaglobalsolutions.com` as the prepared placeholder.
   - *Action When Created*: Confirm the mailbox credentials on your email hosting provider (Google Workspace, Zoho Mail, or Microsoft 365).
3. **Official Certificates & MCA Registration Documents**:
   - *Current State*: The legal standing and verified government recognitions (LLP under Ministry of Corporate Affairs, MSME Udyam registration) are prominently described in `Certifications.jsx`.
   - *Action When Received*: High-resolution scanned certificate PDF / JPG files can be linked in the gallery for direct viewing or downloading.

---

## 2. Technical Limitations & Environment Context

1. **No Backend Database Required / Client-Side CRM**:
   - In accordance with the prompt ("Do not introduce unnecessary third-party services or dependencies"), the Admin CRM uses `localStorage` and `sessionStorage` with instant CSV / Excel export.
   - *Future Enhancement*: If multi-user real-time CRM synchronization across multiple devices is needed, a lightweight Node.js/Express API or serverless Firebase/Supabase backend can be connected to the existing `localStorage` sync hooks without altering the UI.
2. **External Email Dispatch (SMTP / Webhook)**:
   - Form submissions currently record locally and trigger a direct WhatsApp notification to Suyog Walke (+91 9172057497).
   - *Future Enhancement*: When an official business email server is configured, integrate an email service like Resend, SendGrid, or EmailJS inside `EnquiryForm.jsx` by uncommenting the API fetch call.

---

## 3. Deployment & Domain Configuration Checklist

When the domain `www.suyogwalke.com` and hosting are purchased:

- [ ] **DNS Records**:
  - Point `A` record (`@`) and `CNAME` (`www`) to your hosting provider (Vercel, Netlify, Cloudflare Pages, or Hostinger).
- [ ] **Google Analytics 4**:
  - Insert your GA4 Measurement ID (`G-XXXXXXXXXX`) into `index.html`.
- [ ] **Google Search Console**:
  - Upload the HTML verification file to `/public` or add the DNS TXT record.
  - Submit `https://suyogwalke.com/sitemap.xml`.
- [ ] **Admin Passkey Customization**:
  - If you wish to change the default admin passkey (`gisa2025`), update line 96 in `src/pages/Admin.jsx`.

