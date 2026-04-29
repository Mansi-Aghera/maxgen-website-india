"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import { API, mediaUrl } from "@/lib/api"; // ✅ base url

interface Post {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function Blog() {
  const perPage = 3;
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(API.blogs) // ✅ replaced
      .then((res) => res.json())
      .then((json) => {
        const apiBlogs = json?.data || [];

        const mapped: Post[] = apiBlogs.map((b: any) => ({
          title: b.title,
          description: b.short_description || "",
          slug: b.slug,
          image: b.featured_image
            ? mediaUrl(b.featured_image) // ✅ replaced
            : "/images/blog/blog1.jpg",
        }));

        setPosts(mapped);
      })
      .catch((err) => console.error("Blog fetch error:", err));
  }, []);

  const pages = Math.ceil(posts.length / perPage);

  const visiblePosts = posts.slice(page * perPage, page * perPage + perPage);
  const limitWords = (text: string, words = 25) => {
    const arr = text.split(" ");
    return arr.length > words ? arr.slice(0, words).join(" ") + "..." : text;
  };
  return (
    <Section className="py-16 md:py-24">
      <Heading
        align="center"
        title="Latest Insights & Opportunities"
        subtitle="Explore our latest blogs, updates, and internship opportunities."
      />

      {/* CAROUSEL — UNCHANGED */}
      <div className="mt-12 overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-6"
          drag="x"
          dragConstraints={{ left: -1200, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
          animate={{ x: ["0%", "-50%"] }}
transition={{
  duration: 40,
  ease: "linear",
  repeat: Infinity,
  repeatType: "loop",
}}
style={{ willChange: "transform" }}
        >
          {[...posts, ...posts].map((post, i) => (
            <motion.div
              key={post.slug + i}
              className="min-w-[90%] sm:min-w-[60%] lg:min-w-[30%] md:min-w-[45%]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/blogs/${post.slug}`}
                className="group block rounded-[var(--radius-lg)] overflow-hidden bg-white border border-default shadow-sm hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed">
                    {limitWords(post.description, 30)}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Read more →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
