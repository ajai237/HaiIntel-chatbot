"use client";

import { useState } from "react";
import Link from "next/link";
import { Server, Mic, Search, Zap, Building2, Code, Brain } from "lucide-react";
import Footer from "@/components/Footer";

// Header Component for Tech Stack page
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
          <a
            href="/leadership"
            className="text-white/80 hover:text-white transition-colors"
          >
            Leadership
          </a>
          <Link
            href="/techstack"
            className="text-white hover:text-white transition-colors"
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

// Tech Stack Page Component
export default function TechStack() {
  const techCategories = [
    {
      id: 1,
      name: "LLMs & Agent Platforms",
      icon: Server,
      color: "blue",
      tools: [
        "ChatGPT",
        "Claude",
        "Gemini",
        "LLaMA",
        "DeepSeek",
        "Grok",
        "AutoGen",
        "LangChain",
        "CrewAI",
      ],
    },
    {
      id: 2,
      name: "Speech & Vision",
      icon: Mic,
      color: "orange",
      tools: ["ElevenLabs", "Google TTS", "Midjourney", "Sora", "Runway"],
    },
    {
      id: 3,
      name: "Collaboration & Search",
      icon: Search,
      color: "gray",
      tools: [
        "Slack AI",
        "Notion",
        "Confluence AI",
        "Grammarly",
        "Amazon Kendra",
        "Coveo",
      ],
    },
    {
      id: 4,
      name: "AI Integration & Automation",
      icon: Zap,
      color: "blue",
      tools: ["n8n", "Zapier", "Appian", "UiPath", "Workato"],
    },
    {
      id: 5,
      name: "Enterprise Platforms",
      icon: Building2,
      color: "orange",
      tools: [
        "ServiceNow",
        "Microsoft Copilot Studio",
        "SAP AI Core",
        "Agentforce",
      ],
    },
    {
      id: 6,
      name: "Dev Tools",
      icon: Code,
      color: "gray",
      tools: [
        "Cursor",
        "GitHub Copilot",
        "Replit",
        "Windsurf",
        "Manus",
        "Bolt.new",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          toolBg: "bg-blue-600",
          toolText: "text-white",
        };
      case "orange":
        return {
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
          toolBg: "bg-orange-600",
          toolText: "text-white",
        };
      case "gray":
        return {
          iconBg: "bg-gray-100",
          iconColor: "text-gray-600",
          toolBg: "bg-gray-600",
          toolText: "text-white",
        };
      default:
        return {
          iconBg: "bg-gray-100",
          iconColor: "text-gray-600",
          toolBg: "bg-gray-600",
          toolText: "text-white",
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
                An Ecosystem of Tools to Deliver Intelligence at Scale
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We leverage best-in-class AI tools and platforms to build
                robust, scalable intelligence solutions that integrate
                seamlessly with your enterprise architecture.
              </p>
            </div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {techCategories.map((category) => {
                const colors = getColorClasses(category.color);
                const Icon = category.icon;

                return (
                  <div
                    key={category.id}
                    className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center mb-6`}
                    >
                      <Icon className={`w-6 h-6 ${colors.iconColor}`} />
                    </div>

                    {/* Category Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      {category.name}
                    </h3>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 ${colors.toolBg} ${colors.toolText} text-sm font-medium rounded-full`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Feature Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Enterprise-Grade Card */}
              <div className="bg-white border border-blue-200 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Enterprise-Grade
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  All tools selected for security, compliance, and enterprise
                  scalability requirements.
                </p>
              </div>

              {/* Best-in-Class Card */}
              <div className="bg-white border border-orange-200 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Best-in-Class
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Leading platforms and models to ensure optimal performance and
                  cutting-edge capabilities.
                </p>
              </div>

              {/* Integration-Ready Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Integration-Ready
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  APIs and connectors designed for seamless integration with
                  existing enterprise systems.
                </p>
              </div>
            </div>

            {/* Technology-Agnostic Approach Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Technology-Agnostic Approach
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                We select the right tool for each use case, ensuring vendor
                independence while maintaining consistency across your AI
                initiatives. Our platform abstracts complexity while preserving
                flexibility.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
