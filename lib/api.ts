// export const API_BASE =
//   process.env.NEXT_PUBLIC_API_BASE ||
//   "https://maxproject.pythonanywhere.com"

// export const API = {
//   services: `${API_BASE}/services/`,
//   blogs: `${API_BASE}/blogs/`,
//   portfolio: `${API_BASE}/portfolio/`,
//   quotes: `${API_BASE}/quotes/`,
//   contact: `${API_BASE}/contact/`,
// }


export const API_BASE = process.env.NEXT_PUBLIC_API_BASE ||
  // "https://maxproject.pythonanywhere.com"
  "https://maxgenapi.maxgentechnologies.com"

export const API = {
  services: `${API_BASE}/services/`,
  blogs: `${API_BASE}/blogs/`,
  portfolio: `${API_BASE}/portfolio/`,
  quotes: `${API_BASE}/quotes/`,
  contact: `${API_BASE}/contact/`,

  // ✅ ADD THESE
   internshipList: `${API_BASE}/career_internship/`,
  internshipApply: `${API_BASE}/internship/`,

  jobList: `${API_BASE}/jobs/`,
  jobApply: `${API_BASE}/career/`,
  faqs: `${API_BASE}/faqs/`,
  testimonials: `${API_BASE}/testimonial/`,
  
clients: `${API_BASE}/clients/`,
}

/**
 * Convert relative media path → full URL
 * example: /media/img.jpg → https://.../media/img.jpg
 */
export function mediaUrl(path?: string | null) {
  if (!path) return ""
  // console.log(path,"path")
  if (path.startsWith("http")) return path
  return `${API_BASE}${path}`
}