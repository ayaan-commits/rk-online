export const SITE = {
  name: "RK Online",
  tagline: "Your Medical Career Starts Here",
  url: "https://rkonline.in", // PLACEHOLDER — replace before launch
  phone: "+91-XXXXXXXXXX", // PLACEHOLDER — replace before launch
  whatsapp: "+91-XXXXXXXXXX", // PLACEHOLDER — replace before launch
  email: "hello@rkonline.in", // PLACEHOLDER — replace before launch
  address: {
    line1: "Office Address TBD", // PLACEHOLDER
    city: "New Delhi", // PLACEHOLDER
    state: "Delhi",
    country: "India",
    pincode: "110001", // PLACEHOLDER
  },
  social: {
    instagram: "#", // PLACEHOLDER
    facebook: "#", // PLACEHOLDER
    youtube: "#", // PLACEHOLDER
    linkedin: "#", // PLACEHOLDER
  },
  googleMapsEmbed: "", // PLACEHOLDER — paste embed URL
  ga4Id: "G-XXXXXXXXXX", // PLACEHOLDER — paste GA4 ID
} as const

export const WHATSAPP_MESSAGE =
  "Hi RK Online, I'm interested in MBBS at Kokshetau. Please share details."

export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman & Nicobar Islands",
  "Chandigarh",
  "Dadra & Nagar Haveli and Daman & Diu",
  "Delhi",
  "Jammu & Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
] as const

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "MBBS in Kazakhstan", href: "/mbbs-kazakhstan" },
  { label: "Admission", href: "/admission" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const

export const UNIVERSITY_NAV = [
  { label: "Kokshetau State University", href: "/universities/kokshetau" },
] as const

export const RECOGNITIONS = [
  { name: "NMC", label: "NMC Approved" },
  { name: "WHO", label: "WHO Listed" },
  { name: "FAIMER", label: "FAIMER" },
  { name: "WDOMS", label: "WDOMS" },
  { name: "UNESCO", label: "UNESCO" },
  { name: "USMLE", label: "USMLE Eligible" },
] as const
