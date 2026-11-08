export const navLinks = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about",
    dropdown: [
      { name: "About Suyog Walke", path: "/about", description: "Meet the Founder & his journey" },
      { name: "About GISA Global Solutions", path: "/about-gisa", description: "Our firm, values & vision" },
      { name: "Certifications & Achievements", path: "/certifications", description: "Verified credentials & registrations" }
    ]
  },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "All Core Services", path: "/services", description: "Overview of our 5 growth pillars" },
      { name: "International Business Consultancy", path: "/services/international-business-consultancy", description: "Strategic market entry roadmap" },
      { name: "International Market Research", path: "/services/international-market-research", description: "Demand validation & intelligence" },
      { name: "Global Branding & Digital Marketing", path: "/services/global-branding-digital-marketing", description: "Authority & digital positioning" },
      { name: "International Client Acquisition", path: "/services/international-client-acquisition", description: "Pipeline engineering & outreach" },
      { name: "Operations Support", path: "/services/international-business-operations-support", description: "Cross-border SLAs & governance" }
    ]
  },
  {
    name: "Packages",
    path: "/packages",
    dropdown: [
      { name: "All Packages & Plans", path: "/packages", description: "Compare setup packages & monthly plans" },
      { name: "BASIC: Business Growth Essentials", path: "/packages/basic", description: "60-day foundation setup for 1 market" },
      { name: "ADVANCED: Growth & Development", path: "/packages/advanced", description: "60-day flagship setup for up to 3 markets" },
      { name: "PREMIUM: Complete Growth Solutions", path: "/packages/premium", description: "60-day enterprise setup for up to 5 markets" }
    ]
  },
  {
    name: "Industries",
    path: "/industries"
  },
  {
    name: "Global Markets",
    path: "/global-markets"
  },
  {
    name: "Insights",
    path: "/insights"
  },
  {
    name: "Contact",
    path: "/contact"
  }
];

export const contactInfo = {
  founder: "Suyog Walke",
  company: "GISA Global Solutions LLP",
  tagline: "Your Growth Our Mission.",
  positioning: "Strategy + Research + Branding + International Client Acquisition + Execution Support – All Under One Platform.",
  phone: "+91 9172057497",
  whatsappNumber: "919172057497",
  whatsappUrl: "https://wa.me/919172057497",
  email: "contact@gisaglobalsolutions.com",
  location: "Mumbai, Maharashtra, India",
  
  // Founder Verified Social Media Profiles (from Brief Section 15)
  founderSocials: {
    instagram: "https://www.instagram.com/suyogwalke.official/",
    facebook: "https://www.facebook.com/profile.php?id=61572059710857",
    linkedin: "https://www.linkedin.com/in/suyog-walke-6ba545154/"
  },

  // Company Verified Social Media Profiles (from Brief Section 15)
  companySocials: {
    instagram: "https://www.instagram.com/gisa_globalsolutionsllp/",
    facebook: "https://www.facebook.com/profile.php?id=61583191536993",
    linkedin: "https://www.linkedin.com/company/gisa-global-solution-llp/"
  },

  // Backwards compatibility
  socials: {
    instagram: "https://www.instagram.com/suyogwalke.official/",
    facebook: "https://www.facebook.com/profile.php?id=61572059710857",
    linkedin: "https://www.linkedin.com/in/suyog-walke-6ba545154/"
  }
};
