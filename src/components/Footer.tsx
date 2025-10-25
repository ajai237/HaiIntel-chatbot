"use client";

import { Brain, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 h-[40vh]">
      <div className="max-w-7xl mx-auto px-6 py-8 h-full flex flex-col justify-between">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-linear-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">HaiIntel</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              Partnering with CIOs to embed human-rooted AI into enterprise
              transformation — accelerating outcomes through intelligence-first
              systems.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* HaiProducts */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">HaiProducts</h4>
            <ul className="space-y-3">
              {[
                "HaiIntel-Recode",
                "HaiReach",
                "HaiOnboarding",
                "HaiResolve",
                "HaiModels",
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {[
                "Intelligence HaiPODs",
                "AI Architecture",
                "Legacy Modernization",
                "CIO Partnership",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-400" />
                <a
                  href="mailto:hello@haiintel.com"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  hello@haiintel.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-400" />
                <a
                  href="tel:+15551234567"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-400 mt-0.5" />
                <div className="text-white/70">
                  <div>Global Headquarters</div>
                  <div>Enterprise AI District</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            © 2025 HaiIntel. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
