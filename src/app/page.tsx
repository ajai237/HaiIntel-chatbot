"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Users,
  ArrowRight,
  Brain,
  Network,
  Target,
  TrendingUp,
  Shield,
  Zap,
  Building2,
  UserCheck,
  ChevronRight,
  Workflow,
  CheckCircle,
  BarChart3,
  Layers,
  Clock,
  Calendar,
  MessageCircle,
  FileText,
  X,
} from "lucide-react";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";

// Animated Background Component
const AnimatedBackground = () => {
  // Pre-defined positions to avoid hydration mismatch
  const networkLines = [
    { top: 31.98, left: 49.21, width: 96.49, rotation: 4.1 },
    { top: 46.52, left: 2.66, width: 107.64, rotation: 279.2 },
    { top: 33.57, left: 17.05, width: 100.33, rotation: 170.42 },
    { top: 76.01, left: 75.32, width: 141.41, rotation: 44.74 },
    { top: 10.35, left: 46.44, width: 104.23, rotation: 254.53 },
    { top: 35.25, left: 38.73, width: 127.0, rotation: 271.23 },
    { top: 58.91, left: 15.85, width: 90.45, rotation: 122.58 },
    { top: 6.45, left: 65.95, width: 139.87, rotation: 235.38 },
    { top: 67.91, left: 1.49, width: 69.99, rotation: 150.54 },
    { top: 35.86, left: 7.3, width: 92.13, rotation: 157.79 },
    { top: 67.96, left: 16.0, width: 130.78, rotation: 44.12 },
    { top: 96.81, left: 52.47, width: 112.85, rotation: 143.56 },
    { top: 5.92, left: 25.73, width: 107.57, rotation: 27.1 },
    { top: 50.45, left: 89.45, width: 138.63, rotation: 195.67 },
    { top: 7.14, left: 53.97, width: 99.1, rotation: 177.23 },
    { top: 25.61, left: 37.04, width: 111.88, rotation: 127.94 },
    { top: 27.08, left: 80.21, width: 146.58, rotation: 198.46 },
    { top: 73.07, left: 40.65, width: 79.31, rotation: 194.71 },
    { top: 63.34, left: 49.02, width: 76.13, rotation: 244.52 },
    { top: 96.98, left: 99.39, width: 50.05, rotation: 219.39 },
  ];

  const dots = [
    { top: 73.46, left: 33.48, color: "#0ea5e9" },
    { top: 63.02, left: 9.01, color: "#10b981" },
    { top: 52.16, left: 8.63, color: "#0ea5e9" },
    { top: 61.39, left: 89.02, color: "#0ea5e9" },
    { top: 11.5, left: 5.62, color: "#10b981" },
    { top: 44.82, left: 98.3, color: "#0ea5e9" },
    { top: 17.04, left: 20.47, color: "#0ea5e9" },
    { top: 3.39, left: 75.03, color: "#10b981" },
    { top: 51.38, left: 7.6, color: "#10b981" },
    { top: 11.82, left: 17.4, color: "#10b981" },
    { top: 40.59, left: 53.45, color: "#0ea5e9" },
    { top: 41.31, left: 51.27, color: "#0ea5e9" },
    { top: 17.38, left: 99.01, color: "#0ea5e9" },
    { top: 31.32, left: 42.08, color: "#10b981" },
    { top: 49.19, left: 36.23, color: "#0ea5e9" },
    { top: 22.55, left: 21.26, color: "#10b981" },
    { top: 98.22, left: 71.44, color: "#0ea5e9" },
    { top: 2.71, left: 47.54, color: "#0ea5e9" },
    { top: 27.78, left: 82.49, color: "#10b981" },
    { top: 12.15, left: 33.69, color: "#10b981" },
    { top: 14.66, left: 39.21, color: "#0ea5e9" },
    { top: 38.36, left: 48.54, color: "#10b981" },
    { top: 16.19, left: 48.42, color: "#10b981" },
    { top: 35.99, left: 74.65, color: "#10b981" },
    { top: 59.52, left: 62.36, color: "#0ea5e9" },
    { top: 29.27, left: 14.35, color: "#0ea5e9" },
    { top: 12.32, left: 4.99, color: "#0ea5e9" },
    { top: 82.28, left: 99.43, color: "#10b981" },
    { top: 42.03, left: 6.15, color: "#10b981" },
    { top: 35.96, left: 36.9, color: "#0ea5e9" },
    { top: 35.97, left: 31.52, color: "#0ea5e9" },
    { top: 62.77, left: 73.09, color: "#10b981" },
    { top: 32.78, left: 8.31, color: "#10b981" },
    { top: 75.66, left: 96.26, color: "#10b981" },
    { top: 44.1, left: 41.55, color: "#10b981" },
    { top: 29.51, left: 43.91, color: "#0ea5e9" },
    { top: 44.01, left: 24.33, color: "#10b981" },
    { top: 65.62, left: 4.0, color: "#10b981" },
    { top: 40.31, left: 78.59, color: "#10b981" },
    { top: 51.81, left: 92.06, color: "#0ea5e9" },
    { top: 75.62, left: 59.83, color: "#0ea5e9" },
    { top: 85.63, left: 92.13, color: "#10b981" },
    { top: 3.55, left: 0.76, color: "#0ea5e9" },
    { top: 24.57, left: 10.34, color: "#0ea5e9" },
    { top: 3.52, left: 50.04, color: "#10b981" },
    { top: 62.49, left: 87.57, color: "#10b981" },
    { top: 95.9, left: 84.0, color: "#10b981" },
    { top: 63.13, left: 2.32, color: "#10b981" },
    { top: 80.28, left: 59.16, color: "#10b981" },
    { top: 95.21, left: 82.99, color: "#0ea5e9" },
  ];

  const circuits = [
    { top: 29.21, left: 86.63, color: "#0ea5e9" },
    { top: 18.15, left: 61.8, color: "#14b8a6" },
    { top: 43.97, left: 40.35, color: "#0ea5e9" },
    { top: 47.26, left: 66.84, color: "#0ea5e9" },
    { top: 21.38, left: 38.11, color: "#14b8a6" },
    { top: 57.74, left: 37.74, color: "#0ea5e9" },
    { top: 23.6, left: 39.24, color: "#14b8a6" },
    { top: 47.41, left: 85.01, color: "#14b8a6" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* City Skyline Background */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* City buildings silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-black via-slate-800 to-transparent"></div>

        {/* Animated network lines */}
        {networkLines.map((line, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-purple-400 opacity-30"
            style={{
              top: `${line.top}%`,
              left: `${line.left}%`,
              width: `${line.width}px`,
              transform: `rotate(${line.rotation}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              x: [-20, 20, -20],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + (i % 3) * 0.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated dots */}
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              top: `${dot.top}%`,
              left: `${dot.left}%`,
              backgroundColor: dot.color,
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              x: [-15, 15, -15],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 3 + (i % 3) * 0.5,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* AI circuit icons */}
        {circuits.map((circuit, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 border-2 rounded-full flex items-center justify-center"
            style={{
              top: `${circuit.top}%`,
              left: `${circuit.left}%`,
              borderColor: circuit.color,
            }}
            animate={{
              rotate: 360,
              opacity: [0.5, 1, 0.5],
              x: [-10, 10, -10],
            }}
            transition={{
              rotate: {
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              },
              opacity: {
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              },
              x: {
                duration: 5 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              },
            }}
          >
            <div className="w-8 h-8 bg-current opacity-60 rounded-full"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Header Component
const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-linear-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-white/20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Haiintel</h1>
            <p className="text-xs text-white/70">SAY HELLO TO AI</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/haiproducts"
            className="text-white/80 hover:text-white transition-colors"
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

        <motion.button
          className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  </header>
);

// Screen 1: "Intelligence. Not Just Software."
const Screen1 = ({ isActive }: { isActive: boolean }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, x: -1000, filter: "blur(20px)" }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            x: 1000,
            filter: "blur(20px)",
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
            <motion.h1
              className="text-7xl md:text-8xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Intelligence.
            </motion.h1>

            <motion.h2
              className="text-5xl md:text-6xl font-bold text-teal-400 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Not Just Software.
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Haiintel partners with CIOs to embed human-rooted AI into
              enterprise transformation — accelerating outcomes through
              domain-aware, intelligence-first systems.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.button
                className="bg-teal-500 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-teal-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Meet Haiintel HaiPODs</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="border border-gray-400 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore HaiProducts
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Screen 2: "Say hello to AI."
const Screen2 = ({ isActive }: { isActive: boolean }) => (
  <AnimatePresence>
    {isActive && (
      <motion.div
        initial={{ opacity: 0, x: 1000, filter: "blur(20px)" }}
        animate={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          x: -1000,
          filter: "blur(20px)",
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
        className="absolute inset-0 flex items-center justify-center bg-linear-to-r from-orange-900/20 via-red-900/20 to-orange-900/20"
      >
        <div className="text-center max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-7xl md:text-8xl font-bold text-blue-400 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Say hello to AI.
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Where human intelligence meets artificial intelligence to create
            unprecedented enterprise transformation.
          </motion.p>

          <motion.div
            className="flex items-center justify-center space-x-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="flex items-center space-x-4">
              <motion.div
                className="w-20 h-20 border-4 border-teal-400 rounded-full bg-teal-400/20 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Users className="w-8 h-8 text-teal-400" />
              </motion.div>
              <span className="text-white font-medium">Human</span>
            </div>

            <motion.div
              className="w-12 h-0.5 bg-purple-400"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="flex items-center space-x-4">
              <motion.div
                className="w-20 h-20 border-4 border-green-400 rounded-full bg-green-400/20 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Network className="w-8 h-8 text-green-400" />
              </motion.div>
              <span className="text-white font-medium">AI</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.button
              className="bg-black/50 border border-white/30 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Meet Haiintel HaiPODs</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="bg-black/50 border border-white/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore HaiProducts
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Mission Section Component
const MissionSection = () => (
  <section className="bg-gray-50 min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto px-6 w-full">
      {/* Mission Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center space-x-2 bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          <span>Our Mission</span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Business-Led Intelligence,
          <br />
          Built for CIOs
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          HaiIntel helps CIOs lead the shift from software delivery to
          intelligence delivery. We believe the most valuable AI systems
          aren&apos;t tools — they&apos;re{" "}
          <span className="text-blue-600 font-semibold">teammates</span>. Our
          mission is to embed continuous intelligence into the heart of business
          architecture.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* Intelligence-First Card */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Intelligence-First
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Every system designed with AI embedded at its core, not bolted on as
            an afterthought.
          </p>
        </div>

        {/* Continuous Learning Card */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Continuous Learning
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Systems that evolve and improve with every interaction, creating
            compounding value.
          </p>
        </div>

        {/* Enterprise-Ready Card */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center mb-6">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Enterprise-Ready
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Built with governance, security, and compliance at the foundation,
            not as an add-on.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Evolution Section Component
const EvolutionSection = () => (
  <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-6">
      {/* Evolution Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center space-x-2 bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-medium">
          <Zap className="w-4 h-4" />
          <span>The Evolution</span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Enterprise AI Is Entering Its Business-Led Phase
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          The power center is shifting to domain experts and frontline teams.
          This is a strategic tilt:{" "}
          <span className="font-bold text-gray-900">business leads</span>, and
          software follows.
        </p>
      </div>

      {/* Evolution Path */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-12">
          The Evolution Path
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* IT-Led Tools Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm max-w-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              IT-Led Tools
            </h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              Traditional software delivery focused on technical specifications
            </p>
            <div className="flex justify-center">
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>

          {/* Co-Created Systems Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm max-w-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <UserCheck className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Co-Created Systems
            </h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              Business and IT collaboration on AI-powered solutions
            </p>
            <div className="flex justify-center">
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>

          {/* Intelligence Delivery Card */}
          <div className="bg-white border border-orange-200 rounded-xl p-8 shadow-sm max-w-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Brain className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Intelligence Delivery
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Business-led AI systems that drive measurable outcomes
            </p>
          </div>
        </div>
      </div>

      {/* What's Driving This Shift */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          What&apos;s Driving This Shift
        </h2>

        {/* Driver Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Democratizing Intelligence Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Democratizing Intelligence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Generative AI puts intelligent capabilities directly in business
              users&apos; hands
            </p>
          </div>

          {/* Business Ownership Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-orange-200">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Business Ownership
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Business units taking direct control of AI outcomes tied to
              revenue and efficiency
            </p>
          </div>

          {/* Core Capability Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Core Capability
            </h3>
            <p className="text-gray-600 leading-relaxed">
              AI transforms from isolated initiative to fundamental business
              capability
            </p>
          </div>
        </div>

        {/* Gartner Quote */}
        <div className="bg-gray-100 rounded-xl p-8 text-center">
          <blockquote className="text-lg text-gray-700 italic mb-4">
            &quot;Top-performing organizations adopt co-ownership models between
            IT and business&quot;
          </blockquote>
          <cite className="text-blue-600 font-semibold">— Gartner</cite>
        </div>
      </div>
    </div>
  </section>
);

// What We Do Section Component
const WhatWeDoSection = () => (
  <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-6">
      {/* Services Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center space-x-2 bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          <span>Our Services</span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          What We Do
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          We transform enterprise architecture through intelligence-first
          design, creating systems that learn, adapt, and deliver{" "}
          <span className="font-bold text-gray-900">
            measurable business outcomes
          </span>
          .
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* AI-Native Architecture Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <Workflow className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            AI-Native Architecture
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Design end-to-end systems with AI embedded at every layer — data,
            decisions, workflows.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              System Integration
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Data Pipelines
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Workflow Intelligence
            </span>
          </div>

          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
          >
            Learn More <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Continuous Learning Systems Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
            <Brain className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Continuous Learning Systems
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Architect adaptive systems that get smarter with every transaction
            and interaction.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
              Adaptive Models
            </span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
              Real-time Learning
            </span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
              Performance Optimization
            </span>
          </div>

          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
          >
            Learn More <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* CIO-Centric AI Integration Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
            <Shield className="w-6 h-6 text-gray-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            CIO-Centric AI Integration
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            AI solutions that plug into existing systems — with governance,
            controls, and context built in.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
              Governance Framework
            </span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
              Security Controls
            </span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
              Compliance Ready
            </span>
          </div>

          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
          >
            Learn More <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Intelligence HaiPODs Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Intelligence HaiPODs
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Cross-functional teams that combine domain leaders and AI engineers
            to deliver outcome-tied engagements.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Expert Teams
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Rapid Deployment
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Measurable Outcomes
            </span>
          </div>

          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
          >
            Learn More <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-linear-to-br from-blue-900 to-blue-800 rounded-xl p-12 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to embed intelligence into your enterprise architecture?
        </h3>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Discover how our Intelligence HaiPODs can transform your business
          operations
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium flex items-center mx-auto transition-colors">
          Explore Intelligence HaiPODs <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  </section>
);

// Built for CIOs Section Component
const BuiltForCIOsSection = () => (
  <section className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-6">
      {/* CIOs Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center space-x-2 bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-medium">
          <Zap className="w-4 h-4" />
          <span>For CIOs</span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Built for CIOs Driving the Next Generation of Value
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          CIOs today aren&apos;t just guardians of infrastructure — they&apos;re{" "}
          <span className="font-bold text-gray-900">
            enablers of enterprise intelligence
          </span>
          . HaiIntel equips them with tools, talent, and architecture to evolve
          from delivery managers to transformation co-pilots.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Respects Existing Investments Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Respects Existing Investments
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We work inside your ecosystem, turning current tech into AI-native
            growth engines without rip-and-replace
          </p>
        </div>

        {/* Measurable Business Impact Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Measurable Business Impact
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Focus on revenue lift, operational efficiency, and experience
            transformation — not endless pilots
          </p>
        </div>

        {/* Enterprise-Grade Architecture Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <Layers className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Architecture
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Built with governance, security, and compliance from day one,
            designed for responsible scaling
          </p>
        </div>

        {/* Rapid Value Delivery Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <Clock className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Rapid Value Delivery
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Intelligence HaiPODs deliver working solutions in weeks, not months,
            with continuous improvement built-in
          </p>
        </div>
      </div>

      {/* Key Transformation Areas */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Key Transformation Areas
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Transformation Area Cards */}
          {[
            "Infrastructure Intelligence",
            "Customer Journey AI",
            "Operational Automation",
            "Risk & Compliance",
            "Digital Experience",
            "Legacy Modernization",
          ].map((area) => (
            <div
              key={area}
              className="bg-white border border-gray-200 rounded-lg p-6 flex items-center space-x-4"
            >
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
              </div>
              <span className="text-gray-900 font-medium">{area}</span>
            </div>
          ))}
        </div>

        {/* From Delivery Manager to Transformation Co-pilot */}
        <div className="bg-linear-to-br from-blue-900 to-blue-800 rounded-xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                From Delivery Manager to{" "}
                <span className="text-yellow-400">Transformation Co-pilot</span>
              </h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                We help CIOs lead the strategic shift from traditional IT
                delivery to intelligence-driven business transformation,
                positioning them as essential partners in enterprise growth.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium flex items-center transition-colors">
                Start Your Transformation{" "}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              {[
                { text: "Strategic Business Partner", highlight: true },
                { text: "Innovation Catalyst", highlight: false },
                { text: "Intelligence Architect", highlight: true },
                { text: "Value Driver", highlight: false },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      item.highlight ? "bg-orange-500" : "bg-white"
                    }`}
                  ></div>
                  <span className="text-white text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Schedule Modal Component
const ScheduleModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState({
    fullName: "John Smith",
    email: "john@company.com",
    company: "Your Company",
    phone: "+1 (555) 123-4567",
    companySize: "",
    industry: "",
    projectType: "Strategy Session",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Schedule a Strategy Session
            </h2>
            <p className="text-gray-600 mt-1">
              Free 60-minute consultation with our CIO Partners to explore your
              AI transformation roadmap.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Company Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Size
              </label>
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-1000">201-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select industry</option>
                <option value="technology">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="retail">Retail</option>
                <option value="education">Education</option>
                <option value="government">Government</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Project Type */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Type *
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="Strategy Session">Strategy Session</option>
              <option value="Assessment">Assessment</option>
              <option value="Pilot Project">Pilot Project</option>
              <option value="Full Implementation">Full Implementation</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your AI transformation goals, current challenges, or specific areas where you'd like to embed intelligence..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Final Section Component
const FinalSection = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section className="bg-linear-to-br from-blue-900 to-blue-800 py-16 relative overflow-hidden">
    {/* Background dots pattern */}
    <div className="absolute inset-0 opacity-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      ></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let&apos;s Co-Create Your Intelligence Future
        </h2>
        <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
          Book a strategic session with our leadership to explore how HaiIntel
          can embed intelligence into your operations, accelerate
          transformation, and drive measurable outcomes.
        </p>

        {/* Main CTA Button */}
        <div className="mb-4">
          <button
            onClick={onOpenModal}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium flex items-center mx-auto transition-colors"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule a Strategy Session
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        <p className="text-white/70 text-sm">
          Free 60-minute consultation with our CIO Partners
        </p>
      </div>

      {/* Engagement Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Quick Chat Card */}
        <div className="bg-blue-800/50 border border-blue-700/50 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Chat</h3>
          <p className="text-white/80 leading-relaxed">
            Start with a brief conversation about your AI transformation goals
          </p>
        </div>

        {/* Assessment Card */}
        <div className="bg-blue-800/50 border border-blue-700/50 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Assessment</h3>
          <p className="text-white/80 leading-relaxed">
            Get a comprehensive AI readiness assessment for your enterprise
          </p>
        </div>

        {/* Direct Engagement Card */}
        <div className="bg-blue-800/50 border border-blue-700/50 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ArrowRight className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">
            Direct Engagement
          </h3>
          <p className="text-white/80 leading-relaxed">
            Jump straight into a pilot project with our Intelligence HaiPODs
          </p>
        </div>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* What to Expect */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">
            What to Expect:
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
              <span className="text-white text-lg">AI maturity assessment</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
              <span className="text-white text-lg">
                Custom transformation roadmap
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
              <span className="text-white text-lg">
                ROI projections and business case
              </span>
            </li>
          </ul>
        </div>

        {/* Next Steps */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Next Steps:</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
              <span className="text-white text-lg">
                AI Pod deployment strategy
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
              <span className="text-white text-lg">
                Technology integration plan
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
              <span className="text-white text-lg">
                Success metrics and timeline
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-rotate between screens every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % 2);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-black relative overflow-hidden pt-24">
        <AnimatedBackground />

        <main className="relative z-10 h-screen flex items-center justify-center">
          <Screen1 isActive={currentScreen === 0} />
          <Screen2 isActive={currentScreen === 1} />
        </main>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <ChatWidget />
      </div>

      <MissionSection />

      <EvolutionSection />

      <WhatWeDoSection />

      <BuiltForCIOsSection />

      <FinalSection onOpenModal={() => setIsModalOpen(true)} />

      <Footer />

      {/* Schedule Modal */}
      <ScheduleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
