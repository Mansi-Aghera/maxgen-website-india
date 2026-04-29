"use client";

import { useState } from "react";
import Image from "next/image";

interface Industry {
  title: string;
  description: string;
  image: string;
}

const industries: Industry[] = [
  {
    title: "IT & Technology Companies",
    description:
      "Running an IT business is not easy. You manage projects, staff, and keep everything running smoothly. Our digital commerce solutions connect your systems and simplify your platform, so you can focus on growing your business.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Startups & SaaS Businesses",
    description:
      "Launching a startup is challenging. We provide scalable web solutions, custom apps, and MVP development to turn your vision into a successful and growing software business.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Healthcare",
    description:
      "We build secure, compliant, and patient-centric healthcare software. From telemedicine platforms to hospital management systems, our technology enhances care delivery and clinical operations.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Education & Training Institutes",
    description:
      "Transforming education with digital learning platforms. We create immersive e-learning solutions, student portals, and virtual classrooms that make education accessible anywhere.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Real Estate",
    description:
      "Empowering real estate professionals with smart property management systems, immersive 3D tours, and CRM platforms to close deals faster and streamline operations.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "E-commerce Businesses",
    description:
      "Scale your online store with our robust e-commerce solutions. We build seamless shopping experiences, secure payment gateways, and inventory systems to drive sales.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Manufacturing Companies",
    description:
      "Optimizing production lines with Industry 4.0 software. We provide custom ERP, IoT integrations, and supply chain tools to increase efficiency and reduce operational costs.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState<Industry>(
    industries[0]
  );

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Industries We Serve
        </h2>
        <p className="text-gray-600 text-lg">
          We provide digital solutions for a wide range of industries. Our
          experience helps solve business challenges with practical and
          innovative ideas.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <div className="flex-1 space-y-6">
          {industries.map((industry) => {
            const isActive = industry.title === activeIndustry.title;

            return (
              <div
                key={industry.title}
                onMouseEnter={() => setActiveIndustry(industry)}
                className={`flex justify-between items-center cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500 font-normal"
                }`}
              >
                <span className="text-xl">{industry.title}</span>

                {isActive && (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                )}
              </div>
            );
          })}
        </div>

        {/* Image Card */}
        <div className="relative flex-1 min-h-[450px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={activeIndustry.image}
            alt={activeIndustry.title}
            fill
            className="object-cover transition-all duration-500"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />

          {/* Text Content */}
          <div className="absolute bottom-0 p-10 z-20 text-white">
            <h3 className="text-2xl font-bold mb-3">
              {activeIndustry.title}
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed max-w-md">
              {activeIndustry.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}