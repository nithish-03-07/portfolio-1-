/* =============================================================================
   SITE CONFIG
   Edit the values below to rebrand this template — no other file needs
   to change. index.html reads this object on load and fills in text,
   links, colors, and particle behavior automatically.

   Notes:
   - Keep the key names exactly as they are; only change the values.
   - `content` fields ending in "Link"'s HTML sibling belongs in `links`,
     not `content` — e.g. the email address text goes in content.email,
     but the actual mailto: address goes in links.emailLink.
   - Anything you leave out simply falls back to what's already in
     index.html, so you can fill this in gradually.
   ============================================================================= */

window.SITE_CONFIG = {

  // ---------------------------------------------------------------------
  // TEXT CONTENT
  // ---------------------------------------------------------------------
  content: {
    pageTitle: "Nithish D — UI/UX Designer",

    brandInitial: "N",                 // single letter shown in the nav badge
    brandName: "NITHISH&nbsp;D",       // full name in the nav (HTML allowed, e.g. &nbsp;)

    heroGreeting: "Hi, I Am",
    heroName: "NITHISH",
    heroTagline: "UI / UX Designer",

    email: "nithishbv@gmail.com",          // displayed text in the contact list
    phoneDisplay: "+91 63826 01698",       // displayed text in the contact list
    githubHandle: "Nithish-03-07",         // displayed text in the contact list
    location: "Thoppur, Madurai",

    resumeDownloadName: "Nithish_D_Resume.pdf", // filename used when "Download Resume" is clicked

    copyright: "© 2026 Nithish D. All rights reserved.",
    footerTagline: "Web Designer · Digital Creator"
  },

  // ---------------------------------------------------------------------
  // LINKS
  // ---------------------------------------------------------------------
  links: {
    emailLink: "nithishbv@gmail.com",              // no "mailto:" prefix needed
    phoneLink: "+916382601698",                     // no "tel:" prefix needed
    githubLink: "https://github.com/Nithish-03-07",
    resumeLink: "assets/resume.pdf"                  // path to the resume file in /assets
  },

  // ---------------------------------------------------------------------
  // COLORS
  // Sets the site's CSS variables. Any valid CSS color works
  // (#hex, rgb(), hsl()). Leave a line out to keep the current color.
  // ---------------------------------------------------------------------
  colors: {
    bg: "#0a0a0a",       // main page background
    bgSoft: "#111111",   // secondary/panel background
    accent: "#ffffff"    // buttons, underlines, highlight color
  },

  // ---------------------------------------------------------------------
  // PARTICLE FIELDS
  // Tunes the two tsParticles instances: "hero" (inside the banner) and
  // "bg" (fixed behind the whole page). All fields are optional.
  // ---------------------------------------------------------------------
  particles: {
    hero: {
      count: 70,          // how many particles
      color: "#ffffff",   // particle + link-line color
      speedMin: 0.8,       // slowest drift speed (px/frame)
      speedMax: 2.2,       // fastest drift speed (px/frame)
      grabDistance: 170,   // px — how close the cursor must be to link to a particle
      linkDistance: 130    // px — how close two particles must be to link to each other
    },
    bg: {
      count: 46,
      color: "#ffffff",
      speedMin: 0.5,
      speedMax: 1.4,
      grabDistance: 170,
      linkDistance: 140
    }
  }

};
