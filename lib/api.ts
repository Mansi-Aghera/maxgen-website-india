export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ||
  "https://maxproject.pythonanywhere.com"

export const API = {
  services: `${API_BASE}/services/`,
  blogs: `${API_BASE}/blogs/`,
  portfolio: `${API_BASE}/portfolio/`,
  quotes: `${API_BASE}/quotes/`,
  contact: `${API_BASE}/contact/`,
}