"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Wrench,
  Users,
  Globe,
  Rocket,
  Bot,
  Brain,
  MessageCircle,
  ChevronLeft,
} from "lucide-react";
import Footer from "@/components/Footer";

// Header Component for HaiProducts page
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
          <Link
            href="/haiproducts"
            className="text-white hover:text-white transition-colors"
          >
            HaiProducts
          </Link>
          <Link
            href="/haipods"
            className="text-white/80 hover:text-white transition-colors"
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

// HaiProducts Page Component
export default function HaiProducts() {
  const [activeCard, setActiveCard] = useState(0);

  const products = [
    {
      id: 1,
      name: "HaiIntel-Recode",
      description:
        "Modernize legacy systems with intelligence-first code transformation",
      icons: [Code, Wrench],
      color: "blue",
      features: [
        "AI-powered agents analyze and restructure legacy codebases",
        "Aligns with TM Forum standards and future-ready microservices",
        "Human-in-loop architecture validation workflows",
        "Outcome pricing: APIs migrated, rules extracted, code modularized",
      ],
    },
    {
      id: 2,
      name: "HaiReach",
      description:
        "Discover, qualify, and activate relationships with smart discovery intelligence",
      icons: [Users, Globe],
      color: "orange",
      features: [
        "Crawls external and internal data sources (LinkedIn, CAC, CRM)",
        "Intelligent lead scoring, targeting, and enrichment",
        "For B2B growth teams, field sales, and outreach",
        "Outcome pricing: qualified leads, time-to-contact, campaign ROI",
      ],
    },
    {
      id: 3,
      name: "HaiOnboarding",
      description: "Accelerate customer journeys with AI-powered onboarding",
      icons: [Rocket, Rocket],
      color: "pink",
      features: [
        "Orchestrate onboarding journeys with AI prompts and validations",
        "KYC, document understanding, risk scoring built-in",
        "Plug into core banking, telecom stacks, and ID tools",
        "Outcome pricing: faster onboarding, lower drop-offs, higher NPS",
      ],
    },
    {
      id: 4,
      name: "HaiResolve",
      description: "Co-pilot agents for smarter ticketing and resolution",
      icons: [Bot, Bot],
      color: "blue",
      features: [
        "AI classification, triage, and resolution suggestions",
        "Integrates with ITSM, CRM, and contact centers",
        "Learns from agent feedback and closed tickets",
        "Outcome pricing: MTTR reduction, FCR improvement, ticket auto-resolution",
      ],
    },
    {
      id: 5,
      name: "HaiModels",
      description: "Fine-tuned LLMs tailored to your industry context",
      icons: [Brain, MessageCircle],
      color: "orange",
      features: [
        "Enterprise-hosted, privacy-compliant, and domain-aware",
        "APIs for summarization, co-pilot functions, semantic search",
        "Embedded across other HaiProducts",
        "Outcome pricing: value-per-usage, not just tokens",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          linkColor: "text-blue-600",
          linkHover: "hover:text-blue-700",
        };
      case "orange":
        return {
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
          linkColor: "text-orange-600",
          linkHover: "hover:text-orange-700",
        };
      case "pink":
        return {
          iconBg: "bg-pink-100",
          iconColor: "text-pink-600",
          linkColor: "text-pink-600",
          linkHover: "hover:text-pink-700",
        };
      default:
        return {
          iconBg: "bg-gray-100",
          iconColor: "text-gray-600",
          linkColor: "text-gray-600",
          linkHover: "hover:text-gray-700",
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
                AI Accelerators That Deliver Outcomes — Not Just Tools
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Each HaiProduct is modular, intelligence-powered, and built to
                drive measurable business results. Use them standalone or
                combine within an end-to-end HaiIntel engagement.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {products.map((product, index) => {
                const colors = getColorClasses(product.color);
                const Icon1 = product.icons[0];
                const Icon2 = product.icons[1];

                return (
                  <div
                    key={product.id}
                    className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setActiveCard(index)}
                  >
                    {/* Icons */}
                    <div className="flex items-center space-x-2 mb-6">
                      <div
                        className={`w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center`}
                      >
                        <Icon1 className={`w-5 h-5 ${colors.iconColor}`} />
                      </div>
                      <div
                        className={`w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center`}
                      >
                        <Icon2 className={`w-5 h-5 ${colors.iconColor}`} />
                      </div>
                    </div>

                    {/* Product Info */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 shrink-0"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <div className="flex items-center">
                      <a
                        href="#"
                        className={`${colors.linkColor} ${colors.linkHover} font-medium flex items-center transition-colors`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Unified Platform Section */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Unified Intelligence Platform
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                All products share a unified memory, governance layer, and
                interface design — ready for fast adoption and responsible
                scaling across your enterprise.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
