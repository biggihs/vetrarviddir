// Feature toggle configuration
// Set to true to show the section, false to show "coming soon" placeholder

export const FEATURES = {
  // Main sections
  about: true,           // About section - ready
  services: false,       // Services section - under development
  videos: false,         // YouTube videos section - not ready
  contact: false,        // Contact information - ready
  booking: false,        // Booking form - under development
  
  // Individual features
  serviceDetails: false, // Detailed service descriptions
  pricing: false,        // Price information
  testimonials: false,   // Customer testimonials
  gallery: false,        // Photo gallery
  blog: false,          // Blog/news section
} as const;

// Sections to hide completely (no "coming soon" placeholder)
// Add section names here to make them disappear entirely when disabled
export const HIDE_COMPLETELY = [
  'about',      // About section will be hidden instead of showing "coming soon"
  'contact',    // Contact section will be hidden instead of showing "coming soon"
  'videos',     // Videos section will be hidden instead of showing "coming soon"
  'services',   // Services section will be hidden instead of showing "coming soon"
  'booking',    // Booking section will be hidden instead of showing "coming soon"
] as const;

// Coming soon messages for different sections
export const COMING_SOON_MESSAGES = {
  services: {
    title: "Adventure Packages",
    message: "We're putting together amazing winter expedition packages for you. Check back soon for detailed trip information and booking options!",
    icon: "🏔️"
  },
  videos: {
    title: "Adventure Stories",
    message: "Our YouTube channel featuring expedition documentaries and winter survival tutorials is launching soon. Get ready for epic content!",
    icon: "🎬"
  },
  booking: {
    title: "Book Your Adventure", 
    message: "Our online booking system is being finalized. For now, contact us directly to plan your perfect winter expedition!",
    icon: "📅"
  },
  gallery: {
    title: "Photo Gallery",
    message: "We're curating stunning photos from our expeditions. Coming soon!",
    icon: "📸"
  },
  testimonials: {
    title: "What Adventurers Say",
    message: "Customer stories and testimonials coming soon!",
    icon: "⭐"
  }
} as const;