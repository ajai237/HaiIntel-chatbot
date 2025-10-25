"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ShoppingCart,
  Server,
  Users,
  Sparkles,
  Brain,
} from "lucide-react";
import Footer from "@/components/Footer";

// Header Component for HaiPODs page
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
          <Link
            href="/haipods"
            className="text-white hover:text-white transition-colors"
          >
            HaiPODs
          </Link>
          <Link
            href="/leadership"
            className="text-white/80 hover:text-white transition-colors"
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

// HaiPODs Page Component
export default function HaiPODs() {
  const [activeCard, setActiveCard] = useState(0);

  const haipods = [
    {
      id: 1,
      name: "Customer Onboarding AI POD",
      description:
        "Streamline customer acquisition with AI-powered verification, risk assessment, and journey orchestration",
      icon: Building2,
      color: "blue",
      tags: ["Banking", "Government"],
    },
    {
      id: 2,
      name: "Rewards AI POD",
      description:
        "Design intelligent loyalty systems that personalize rewards and predict customer behavior",
      icon: ShoppingCart,
      color: "orange",
      tags: ["Retail", "Telecom"],
    },
    {
      id: 3,
      name: "Modernization AI POD",
      description:
        "Transform legacy systems with AI-first architecture while preserving business continuity",
      icon: Server,
      color: "gray",
      tags: ["Legacy Transformation"],
    },
    {
      id: 4,
      name: "Citizen Services AI POD",
      description:
        "Enhance public service delivery through intelligent automation and citizen experience design",
      icon: Users,
      color: "blue",
      tags: ["GovTech"],
    },
    {
      id: 5,
      name: "Experience AI POD",
      description:
        "Create human-centered AI experiences that adapt to user needs and business objectives",
      icon: Sparkles,
      color: "orange",
      tags: ["CX & UX AI"],
    },
  ];

  const industries = [
    "Banking",
    "Retail",
    "Government",
    "Telecom",
    "Healthcare",
    "Manufacturing",
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          borderColor: "border-blue-200",
          tagBg: "bg-blue-100",
          tagText: "text-blue-800",
        };
      case "orange":
        return {
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
          borderColor: "border-orange-200",
          tagBg: "bg-orange-100",
          tagText: "text-orange-800",
        };
      case "gray":
        return {
          iconBg: "bg-gray-100",
          iconColor: "text-gray-600",
          borderColor: "border-gray-200",
          tagBg: "bg-gray-100",
          tagText: "text-gray-800",
        };
      default:
        return {
          iconBg: "bg-gray-100",
          iconColor: "text-gray-600",
          borderColor: "border-gray-200",
          tagBg: "bg-gray-100",
          tagText: "text-gray-800",
        };
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Intelligence HaiPODs — Where Domain Meets Delivery
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Hailntel deploys domain-agnostic Intelligence HaiPODs that pair
                AI engineers with business leaders to rapidly deliver value.
                These HaiPODs specialize in industry-specific transformation
                challenges.
              </p>
            </div>

            {/* HaiPODs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {haipods.map((haipod, index) => {
                const colors = getColorClasses(haipod.color);
                const Icon = haipod.icon;

                return (
                  <div
                    key={haipod.id}
                    className={`bg-white border ${colors.borderColor} rounded-xl p-8 hover:shadow-lg transition-shadow cursor-pointer`}
                    onClick={() => setActiveCard(index)}
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center mb-6`}
                    >
                      <Icon className={`w-6 h-6 ${colors.iconColor}`} />
                    </div>

                    {/* HaiPOD Info */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {haipod.name}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {haipod.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 ${colors.tagBg} ${colors.tagText} text-sm font-medium rounded-full`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {haipod.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Cross-Industry Expertise Section */}
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Cross-Industry Expertise
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {industries.map((industry, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            {/* Domain-Agnostic Methodology Section */}
            <div className="bg-white border border-orange-200 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Domain-Agnostic Methodology
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Each AI POD follows our proven framework: Business Discovery →
                AI Architecture → Rapid Prototyping → Production Deployment →
                Continuous Intelligence
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
