import { NAV_LINKS, UNIVERSITY_NAV, SITE } from "@/lib/constants"

export const siteConfig = {
  nav: {
    links: NAV_LINKS,
    universities: UNIVERSITY_NAV,
  },

  footer: {
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "MBBS in Kazakhstan", href: "/mbbs-kazakhstan" },
      { label: "Admission Process", href: "/admission" },
      { label: "About RK Online", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],

    destinations: [
      {
        label: "Kokshetau State University",
        href: "/universities/kokshetau",
      },
    ],

    socialLinks: [
      {
        label: "Instagram",
        href: SITE.social.instagram,
        icon: "Instagram",
      },
      {
        label: "Facebook",
        href: SITE.social.facebook,
        icon: "Facebook",
      },
      {
        label: "YouTube",
        href: SITE.social.youtube,
        icon: "Youtube",
      },
      {
        label: "LinkedIn",
        href: SITE.social.linkedin,
        icon: "Linkedin",
      },
    ],
  },

  blogCategories: [
    "Admission",
    "Fees",
    "Life in Kazakhstan",
    "FMGE",
    "NMC News",
  ],
} as const
