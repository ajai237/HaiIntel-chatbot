"use client";

import { useState } from "react";
import Link from "next/link";
import { Crown, User, Settings, HelpCircle, Brain } from "lucide-react";
import Footer from "@/components/Footer";

// Header Component for Leadership page
const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-linear-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Haiintel</h1>
            <p className="text-xs text-white/70">SAY HELLO TO AI</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/haiproducts"
            className="text-white/80 hover:text-white transition-colors"
          >
            HaiProducts
          </a>
          <a
            href="/haipods"
            className="text-white/80 hover:text-white transition-colors"
          >
            HaiPODs
          </a>
          <Link
            href="/leadership"
            className="text-white hover:text-white transition-colors"
          >
            Leadership
          </Link>
          <Link
            href="/techstack"
            className="text-white/80 hover:text-white transition-colors"
          >
            Tech Stack
          </Link>
        </nav>

        <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  </header>
);

// Leadership Page Component
export default function Leadership() {
  const leadership = [
    {
      id: 1,
      role: "Chairman",
      description:
        "Seasoned technologist and transformation strategist with global CIO leadership experience.",
      icon: Crown,
    },
    {
      id: 2,
      role: "CEO",
      description:
        "Business builder and enterprise innovator focused on scaling human-centered AI solutions.",
      icon: User,
    },
    {
      id: 3,
      role: "CTO",
      description:
        "AI engineering and systems expert shaping the architecture behind Hailntel's core intelligence platform.",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Guided by Visionaries in Technology and Transformation
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Meet the team behind Hailntel — leaders with deep enterprise
                experience, proven AI execution, and a shared commitment to
                building the future of intelligence-first transformation.
              </p>
            </div>

            {/* Leadership Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {leadership.map((leader) => {
                const Icon = leader.icon;

                return (
                  <div
                    key={leader.id}
                    className="bg-white border border-blue-200 rounded-xl p-8 text-center relative"
                  >
                    {/* Question Mark Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <HelpCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Main Icon */}
                    <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Soon to be revealed */}
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      Soon to be revealed
                    </p>

                    {/* Role */}
                    <h3 className="text-xl font-bold text-orange-600 mb-4">
                      {leader.role}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {leader.description}
                    </p>

                    {/* Coming Soon Link */}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Coming Soon
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Collective Experience Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Collective Experience
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                Our leadership team brings together 50+ years of combined
                experience in enterprise transformation, AI architecture, and
                business strategy across Fortune 500 companies and high-growth
                startups.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
