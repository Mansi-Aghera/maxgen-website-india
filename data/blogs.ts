export type Blog = {
  title: string
  desc: string
  image: string
  slug: string
}

export type BlogDetail = {
  slug: string
  title: string
  category: string
  image: string
  content: string[]
}


export const blogs: Blog[] = [
  {
    title: "Benefits of Having a E-commerce Mobile App",
    desc:
      "There are several benefits of having an e-commerce mobile app for businesses. Here are some of the key advantages:",
    image: "/images/blog/blog1.jpg",
    slug: "benefits-of-ecommerce-mobile-app",
  },
  {
    title: "Importance of Website in your Business Growth",
    desc:
      "Websites are an essential tool for business looking to grow and succeed in today's digital age. Every website plays a vital role in business growth:",
    image: "/images/blog/blog2.jpg",
    slug: "importance-of-website",
  },
  {
    title: "Summer Internship 2025",
    desc:
      "A summer internship in 2025 at Maxgen Technologies Pvt. Ltd. offers IT and Computer Science students a valuable opportunity to gain real-world experience.",
    image: "/images/blog/blog3.png",
    slug: "summer-internship-2025",
  },
  {
    title: "Why Digital Marketing is Important to Generate Revenue in Business",
    desc:
      "Digital marketing has become an essential aspect of generating revenue for businesses. Here are some reasons why digital marketing is important:",
    image: "/images/blog/blog4.jpg",
    slug: "why-digital-marketing-important",
  },
]


export const blogData = [
  {
    slug: "benefits-of-ecommerce-mobile-app",
    title: "Benefits of Having a E-commerce Mobile App",
    category: "Blogs - Mobile App Development",
    image: "/images/blog/blog1.jpg",
    content: [
      "Enhanced Customer Experience Faster Loading & Easy Navigation: Apps provide a smooth and intuitive shopping experience compared to mobile websites...",
      "Increased Sales & Revenue One-Click Purchases: Seamless checkout with saved payment methods reduces cart abandonment...",
      "Better Customer Engagement & Retention 24/7 Availability: Customers can shop anytime, increasing convenience and brand loyalty...",
      "Higher Conversion Rates Mobile-Optimized UI/UX: Apps convert visitors into buyers more effectively than websites...",
      "Brand Awareness & Customer Loyalty App Icon as a Constant Reminder...",
      "Advanced Analytics & Insights Track User Behavior...",
      "Competitive Advantage Stay Ahead of Competitors...",
      "Secure & Faster Transactions Multiple Payment Options...",
      "Offline Access & Improved Performance Cached Content...",
      "Cost-Effective Marketing & Customer Retention Push Notifications & In-App Messages..."
    ],
  },

  {
    slug: "importance-of-website",
    title: "Importance of Website in your Business Growth",
    category: "Blogs - Website Design & Development",
    image: "/images/blog/blog2.jpg",
    content: [
      "Establishing an online presence: In today's world, having an online presence is crucial for any business...",
      "Marketing and advertising: A website provides a platform for businesses to market and advertise...",
      "Customer Engagement Increase Sales...",
      "E-commerce Web Development...",
      "Customer Analytics and data tracking...",
      "Overall, having a website is essential for businesses looking to grow..."
    ],
  },

  {
    slug: "summer-internship-2025",
    title: "Summer Internship 2025",
    category: "Blogs - Internship",
    image: "/images/blog/blog3.png",
    content: [
      "Practical Exposure to Industry-Standard Technologies...",
      "Hands-On Knowledge with Expert Guidance...",
      "Enhance Your Resume & Build a Strong Portfolio...",
      "Improve Problem-Solving & Technical Skills...",
      "Networking & Career Opportunities...",
      "Soft Skills & Professional Development...",
      "Flexible Learning Options...",
      "Exposure to Emerging Technologies..."
    ],
  },

  {
    slug: "why-digital-marketing-important",
    title: "Why Digital Marketing is Important to Generate Revenue in Business",
    category: "Blogs - Digital Marketing",
    image: "/images/blog/blog4.jpg",
    content: [
      "Increased visibility and reach...",
      "Targeted advertising...",
      "Cost-effective marketing...",
      "Measurable results...",
      "Improved customer engagement...",
      "Continuous improvement...",
      "Overall, digital marketing has become an essential aspect..."
    ],
  },
]