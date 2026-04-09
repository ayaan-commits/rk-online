export interface University {
  slug: string
  name: string
  shortName: string
  established: number
  location: string
  country: string
  ranking: {
    qsAsia?: number
    centralAsia?: number
    kazakhstan?: number
    world?: number
  }
  fees: {
    tuitionPerYear: number
    hostelPerYear: number
    admissionFee: number
    currency: string
    totalSixYear: number
  }
  programs: {
    bachelor: number
    master: number
    phd: number
  }
  recognitions: string[]
  highlights: { icon: string; title: string; description: string }[]
  facilities: string[]
  gallery: string[]
  faqs: { question: string; answer: string }[]
  curriculum: { year: number; title: string; subjects: string[] }[]
  eligibility: string[]
  documents: string[]
  admissionSteps: { step: number; title: string; description: string; timeline: string }[]
  hostelInfo: string[]
  description: string
  vision: string
  partnerships: string[]
  indianStudents: number
  image: string
}

export interface Testimonial {
  name: string
  year: string
  university: string
  quote: string
  avatar: string
  rating: number
}

export interface Mentor {
  name: string
  title: string
  image: string
  bio: string
  credentials: string[]
  quote: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image: string
  readingTime: string
}

export interface LeadFormData {
  fullName: string
  phone: string
  state: string
  neetScore?: number
  email?: string
  whatsapp?: string
  preferredUniversity?: string
  message?: string
  consent: boolean
  source: string
}
