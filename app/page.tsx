"use client";

import React, { useState } from "react";
import {
  partners,
  team,
  solutions,
  services,
  contactDetails
} from "./data";
import {
  Terminal,
  Smartphone,
  Brain,
  BarChart,
  Shield,
  Cloud,
  Briefcase,
  Zap,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  User,
  ChevronRight,
  Sparkles,
  Search,
  ArrowUpRight,
  Award,
  Clock,
  HeartHandshake,
  Database,
  Handshake,
  Network,
  Cpu
} from "lucide-react";
import Image from "next/image"

import { Button } from "@heroui/react";

const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
  switch (iconName) {
    case "Terminal":
      return <Terminal className={className} />;
    case "Smartphone":
      return <Smartphone className={className} />;
    case "Brain":
      return <Brain className={className} />;
    case "BarChart":
      return <BarChart className={className} />;
    case "Shield":
      return <Shield className={className} />;
    case "Cloud":
      return <Cloud className={className} />;
    case "Briefcase":
      return <Briefcase className={className} />;
    case "Zap":
      return <Zap className={className} />;
    default:
      return <Terminal className={className} />;
  }
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [partnerFilter, setPartnerFilter] = useState<string>("All");
  const [solutionSearch, setSolutionSearch] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scope: "Arqelion (Secure Check-in/out)",
    requirements: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const partnerCategories = ["All", "Global Technology Partner", "Public Sector Alliance", "Innovation Ecosystem"];

  const filteredPartners = partners.filter((p) => {
    if (partnerFilter === "All") return true;
    return p.category === partnerFilter;
  });

  const filteredSolutions = solutions.filter((s) => {
    return (
      s.name.toLowerCase().includes(solutionSearch.toLowerCase()) ||
      s.category.toLowerCase().includes(solutionSearch.toLowerCase()) ||
      s.description.toLowerCase().includes(solutionSearch.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0b294f] selection:bg-[#67b32f] selection:text-white">

      {/* HEADER: Inspired by Chrivon's design, premium white background with modern border */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo Section */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleTabChange("home")}>
              <Image src="/tr3-g.png" width={100} height={100} className="w-24" alt="alternative text" />
            </div>

            {/* Desktop Navigation Link Tabs: Modeled after Chrivon's navigation design */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "solutions", label: "Solutions" },
                { id: "about", label: "About" },
                { id: "team", label: "Team" },
                { id: "partners", label: "Partners" },
                { id: "contact", label: "Contact" }
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-[#67b32f] bg-[#67b32f]/5"
                        : "text-gray-600 hover:text-[#0b294f] hover:bg-gray-50"
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#67b32f]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action Call Button - HeroUI Button used */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                onClick={() => handleTabChange("contact")}
                className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#0b294f] hover:bg-[#0b294f]/90 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#0b294f]/15 overflow-hidden border border-transparent hover:border-[#67b32f] h-auto"
              >
                Start a Project <ArrowUpRight className="w-4 h-4 text-[#67b32f]" />
              </Button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-[#0b294f] hover:bg-gray-100 transition-all"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 animate-in slide-in-from-top">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "solutions", label: "Solutions" },
                { id: "about", label: "About" },
                { id: "team", label: "Team" },
                { id: "partners", label: "Partners" },
                { id: "contact", label: "Contact" }
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all ${
                      isActive
                        ? "text-[#67b32f] bg-[#67b32f]/5"
                        : "text-gray-600 hover:text-[#0b294f] hover:bg-gray-50"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
              <div className="pt-4 px-4">
                <Button
                  onClick={() => handleTabChange("contact")}
                  className="w-full py-3 rounded-full text-center text-sm font-extrabold text-white bg-[#0b294f] hover:bg-[#67b32f] transition-all duration-300 h-auto"
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* CORE PAGES RENDERING */}
      <main className="flex-grow">

        {/* ==================================== HOME TAB ==================================== */}
        {activeTab === "home" && (
          <div>
            {/* HERO SECTION: High-impact typography, modern glass cards, 3D look layout, light-mode optimized */}
            <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-gradient-to-b from-[#0b294f]/5 via-white to-white">

              {/* Background Glow */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#67b32f]/10 blur-[120px] pointer-events-none" />
              <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-[#0b294f]/5 blur-[80px] pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                  {/* Hero Copy */}
                  <div className="lg:col-span-7 space-y-8 text-center lg:text-left">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#67b32f]/10 border border-[#67b32f]/20 text-[#0b294f] font-bold text-xs tracking-wider uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-[#67b32f]" /> Next-Gen Enterprise Platforms
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0b294f] tracking-tight leading-[1.1]">
                      Developing software foundations for <span className="text-[#67b32f] underline decoration-wavy decoration-2">global leaders</span>
                    </h1>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                      TR3-G Innovations Limited designs and builds custom high-performance digital ecosystems. Moving organizations past offline constraints with automated, bulletproof platforms.
                    </p>

                    {/* CTAs - HeroUI Buttons used */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                      <Button
                        onClick={() => handleTabChange("contact")}
                        className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white bg-[#0b294f] hover:bg-[#67b32f] transition-all duration-300 shadow-lg shadow-[#0b294f]/20 hover:shadow-[#67b32f]/20 flex items-center justify-center gap-2 h-auto"
                      >
                        Initiate Consultation <ArrowUpRight className="w-5 h-5" />
                      </Button>
                      <Button
                        onClick={() => handleTabChange("solutions")}
                        className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 h-auto"
                      >
                        Explore Solutions
                      </Button>
                    </div>

                    {/* Stats Stream */}
                    <div className="pt-6 grid grid-cols-3 gap-4 border-t border-gray-100 max-w-md mx-auto lg:mx-0">
                      <div>
                        <p className="text-3xl font-black text-[#0b294f]">11+</p>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Alliances</p>
                      </div>
                      <div>
                        <p className="text-3xl font-black text-[#67b32f]">99.9%</p>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Platform Uptime</p>
                      </div>
                      <div>
                        <p className="text-3xl font-black text-[#0b294f]">24/7</p>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Enterprise SLA</p>
                      </div>
                    </div>

                  </div>

                  {/* Interactive Tech Preview Widget */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-gradient-to-tr from-[#0b294f] to-[#0b294f]/90 p-1 shadow-2xl shadow-[#0b294f]/30">
                      <div className="bg-[#0b294f] rounded-[22px] overflow-hidden p-6 space-y-6 text-white text-left">

                        {/* Terminal Header */}
                        <div className="flex justify-between items-center pb-4 border-b border-white/10">
                          <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500" />
                            <span className="w-3 h-3 rounded-full bg-[#67b32f]" />
                          </div>
                          <span className="text-xs font-mono text-gray-400">SERVICE_v4.2_ACTIVE</span>
                        </div>

                        {/* Interactive Widget Body */}
                        <div className="space-y-4 font-mono text-sm">
                          <div className="space-y-1">
                            <p className="text-gray-400">$ tr3g-core-engine initialize</p>
                            <p className="text-[#67b32f]">✓ Secure connection protocols mapped.</p>
                            <p className="text-[#67b32f]">✓ Database transaction locks validated.</p>
                          </div>

                          <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2">
                            <p className="text-xs font-bold uppercase text-gray-400">Deployed Ecosystems</p>
                            <div className="flex justify-between text-xs font-bold">
                              <span>Arqelion Access</span>
                              <span className="text-[#67b32f]">ACTIVE</span>
                            </div>
                            <div className="flex justify-between text-xs font-bold">
                              <span>Revenue Portal</span>
                              <span className="text-[#67b32f]">SECURED</span>
                            </div>
                          </div>

                          <div className="text-xs text-gray-400 italic">
                            Analyzing continuous stream optimization logs...
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Decorative Float Box */}
                    <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 hidden sm:flex items-center gap-3 animate-bounce">
                      <div className="w-10 h-10 rounded-xl bg-[#67b32f]/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-[#67b32f]" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#0b294f]">100% Secure</p>
                        <p className="text-[10px] font-bold text-gray-400">Verified Infrastructure</p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </section>

            {/* WHY TEAMS CHOOSE US (UPGRADED SECTION with Why Choose Us Cards) */}
            <section className="py-24 bg-white border-t border-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
                  <span className="text-xs font-black tracking-widest text-[#67b32f] uppercase">The TR3-G Advantage</span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b294f] tracking-tight">
                    Why Choose TR3-G Innovations?
                  </h2>
                  <p className="text-gray-500 font-semibold text-lg">
                    We deliver clean, secure, and modern digital backbones tailored to solve legacy challenges.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  {[
                    {
                      icon: <Award className="w-8 h-8 text-[#67b32f]" />,
                      title: "Proven Administrative Excellence",
                      desc: "Strategic partnerships with Ogun State OGIRS and federal ministries prove our software architecture handles complex governance collections, document vaults, and student security frameworks flawlessly."
                    },
                    {
                      icon: <Clock className="w-8 h-8 text-[#67b32f]" />,
                      title: "Continuous 24/7 SLA Performance",
                      desc: "Our high-tier operational hub coordinates distributed software engineering cohorts, assuring absolute uptime, rapid patch deployment, and real-time security scanning."
                    },
                    {
                      icon: <HeartHandshake className="w-8 h-8 text-[#67b32f]" />,
                      title: "Deep Technical Integration",
                      desc: "We don't provide rigid pre-built templates. We build bespoke full-stack ecosystems mapped around your custom security layers, billing structures, and offline procedures."
                    },
                    {
                      icon: <Database className="w-8 h-8 text-[#67b32f]" />,
                      title: "Silicon-Level Security",
                      desc: "Zero-trust environments utilizing robust cryptographic verification to safeguard and archive proprietary documents, identity actions, and database streams seamlessly."
                    }
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="p-8 rounded-3xl bg-gray-50/50 border border-gray-100 hover:border-[#67b32f]/20 hover:bg-white hover:shadow-xl hover:shadow-[#0b294f]/5 transition-all duration-300 flex flex-col sm:flex-row gap-6 text-left"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                        {card.icon}
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-[#0b294f]">
                          {card.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed font-semibold">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* PROCESS MAP */}
            <section className="py-20 bg-gray-50/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                  <span className="text-xs font-black tracking-widest text-[#67b32f] uppercase">Core Execution Strategy</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#0b294f]">
                    Built for precision, scale, and clarity
                  </h2>
                  <p className="text-gray-500 font-medium">
                    Our systemic approach guarantees predictable milestones and beautiful, high-performing software integrations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: <Shield className="w-6 h-6 text-[#67b32f]" />,
                      title: "Secure by Design",
                      desc: "Zero-trust database architecture and robust cryptographic compliance embedded into every solution."
                    },
                    {
                      icon: <Terminal className="w-6 h-6 text-[#67b32f]" />,
                      title: "Reliable Delivery",
                      desc: "Clean codebase implementations with predictable release cycles and transparent project sprints."
                    },
                    {
                      icon: <Briefcase className="w-6 h-6 text-[#67b32f]" />,
                      title: "Strategic Consulting",
                      desc: "Maximizing ROI on technological systems, optimizing infrastructure frameworks with custom blueprints."
                    },
                    {
                      icon: <Zap className="w-6 h-6 text-[#67b32f]" />,
                      title: "High-Tier Optimization",
                      desc: "Sub-millisecond platform actions built to handle heavy user traffic and transactions seamlessly."
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#67b32f]/30 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 space-y-6 text-left"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 group-hover:bg-[#67b32f]/10 flex items-center justify-center transition-all">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#0b294f] group-hover:text-[#67b32f] transition-all">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed font-semibold">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </section>

          </div>
        )}

        {/* ==================================== SERVICES TAB ==================================== */}
        {activeTab === "services" && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
                <span className="text-xs font-black tracking-widest text-[#67b32f] uppercase">Ecosystem Capabilities</span>
                <h2 className="text-4xl font-black text-[#0b294f]">
                  Developing the Future State.
                </h2>
                <p className="text-gray-500 font-semibold text-lg leading-relaxed">
                  TR3-G Innovations Limited provides bespoke full-stack engineered systems built to achieve long-term agility and enterprise scalability.
                </p>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#67b32f]/40 hover:shadow-2xl hover:shadow-[#0b294f]/5 transition-all duration-300 space-y-6 flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 group-hover:bg-[#67b32f]/10 flex items-center justify-center text-[#0b294f] group-hover:text-[#67b32f] transition-all">
                        {renderIcon(service.iconName, "w-6 h-6")}
                      </div>
                      <h3 className="text-2xl font-bold text-[#0b294f] group-hover:text-[#67b32f] transition-all">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed font-medium">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-gray-400 group-hover:text-[#67b32f] transition-all">
                      <span>Enterprise Protocol</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Promo Banner */}
              <div className="mt-16 bg-[#0b294f]/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left space-y-2">
                  <h4 className="text-xl font-bold text-[#0b294f]">Need a bespoke software solution?</h4>
                  <p className="text-sm text-gray-500 font-semibold">Our tech architects will map out custom plans for your systems.</p>
                </div>
                <Button
                  onClick={() => handleTabChange("contact")}
                  className="px-6 py-3 rounded-full text-sm font-extrabold text-white bg-[#0b294f] hover:bg-[#67b32f] transition-all h-auto"
                >
                  Book Technical Consultation
                </Button>
              </div>

            </div>
          </section>
        )}

        {/* ==================================== SOLUTIONS TAB ==================================== */}
        {activeTab === "solutions" && (
          <section className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <span className="text-xs font-black tracking-widest text-[#67b32f] uppercase">Digital Suite</span>
                <h2 className="text-4xl font-black text-[#0b294f]">
                  Ecosystems for Global Scale.
                </h2>
                <p className="text-gray-500 font-medium">
                  Explore our live precision software instruments built to automate organizational operations and secure core structural files.
                </p>

                {/* Search Box - Standard styled Input used */}
                <div className="pt-6 max-w-md mx-auto">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search active portals..."
                      value={solutionSearch}
                      onChange={(e) => setSolutionSearch(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:border-[#67b32f] text-sm text-[#0b294f] font-semibold transition-all duration-300"
                    />
                    <Search className="absolute left-4 top-3.5 w-4 h-4 text-gray-400 shrink-0" />
                  </div>
                </div>
              </div>

              {/* Solutions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSolutions.map((solution, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4 text-left">

                      <div className="flex justify-between items-start gap-2">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                          {solution.category}
                        </span>
                        {solution.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-[#67b32f]/10 text-[#0b294f] border border-[#67b32f]/20">
                            {solution.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-[#0b294f]">
                        {solution.name}
                      </h3>

                      <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                        {solution.description}
                      </p>

                      {solution.features && (
                        <div className="pt-3 space-y-2">
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Key Capabilities</p>
                          <ul className="space-y-1">
                            {solution.features.map((feat, fIdx) => (
                              <li key={fIdx} className="text-xs text-gray-600 flex items-center gap-1.5 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#67b32f]" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    </div>

                    <div className="pt-4 mt-6 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-gray-400">STATUS: PROD_LOCK</span>
                      <button
                        onClick={() => handleTabChange("contact")}
                        className="text-xs font-bold text-[#67b32f] hover:underline flex items-center gap-1"
                      >
                        Request Demo <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* ==================================== ABOUT TAB ==================================== */}
        {activeTab === "about" && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Story Panel */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  <span className="text-xs font-black tracking-widest text-[#67b32f] uppercase">Corporate History</span>
                  <h2 className="text-4xl font-black text-[#0b294f]">
                    Modern Software Partners.
                  </h2>
                  <p className="text-lg font-bold text-[#0b294f]/80">
                    TR3-G Innovations Limited is not just a consultancy. We are developers of next-generation digital foundations.
                  </p>

                  <div className="space-y-4 text-sm text-gray-500 leading-relaxed font-semibold">
                    <p>
                      Founded on the principle that standard IT consultancy had become static, TR3-G emerged to inject modern development standards into the infrastructure of enterprise businesses.
                    </p>
                    <p>
                      We recognized a critical gap: organizations were being sold templates, not custom development. Our journey began with a mission to revolutionize this landscape, moving away from simple "box-shifting" towards high-tier strategic consultancy.
                    </p>
                    <p>
                      Today, TR3-G stands as a beacon for structural excellence, partnering with global leaders to integrate tech not as a support utility, but as the primary engine of corporate growth.
                    </p>
                  </div>

                  <div className="pt-4 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Our Mission</p>
                      <p className="text-sm text-gray-600 font-bold mt-1">To revolutionize IT consultancy by providing precision-developed solutions that empower organizations to transcend legacy bottlenecks.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Our Vision</p>
                      <p className="text-sm text-gray-600 font-bold mt-1">To become the global standard for structural tech excellence, where security and automated governance are seamless and human-centric.</p>
                    </div>
                  </div>

                </div>

                {/* Methodology Panel */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  <div className="bg-[#0b294f] rounded-3xl p-8 text-white space-y-8">

                    <h3 className="text-2xl font-black text-white">The TR3-G Methodology</h3>

                    <div className="space-y-6">
                      {[
                        { step: "01", title: "Discovery", desc: "Deep-dive into existing legacy bottlenecks and operational pain points." },
                        { step: "02", title: "Infrastructure Design", desc: "Modeling resilient, zero-trust digital ecosystems tailored to scale." },
                        { step: "03", title: "Precision Deployment", desc: "Writing clean, high-performance systems and integrating them." },
                        { step: "04", title: "Continuous Scale", desc: "Optimization, monitoring, and patch administration for uptime." }
                      ].map((m, idx) => (
                        <div key={idx} className="flex gap-4">
                          <span className="text-lg font-black text-[#67b32f] font-mono">{m.step}</span>
                          <div>
                            <p className="font-bold text-base text-white">{m.title}</p>
                            <p className="text-xs text-gray-300 font-medium">{m.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

              </div>

              {/* Nigeria operations block */}
              <div className="mt-20 pt-12 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
                <div className="space-y-4">
                  <span className="text-xs font-black tracking-widest text-[#67b32f] uppercase">Operations Base</span>
                  <h3 className="text-2xl font-black text-[#0b294f]">Nigeria Operations Hub</h3>
                  <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                    Our primary operations are orchestrated from our high-tier development hub in Abuja, coordinating distributed teams to ensure continuous 24/7 technical excellence.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
                    <MapPin className="w-5 h-5 text-[#67b32f]" />
                    <span>No 43 Area 3, FCT Abuja, Nigeria</span>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg h-60 relative bg-gray-100">
                  <iframe
                    src={contactDetails.mapUrl}
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    allowFullScreen
                    loading="lazy"
                    title="TR3-G Abuja Base"
                  />
                </div>
              </div>

            </div>
          </section>
        )}

        {/* ==================================== TEAM TAB ==================================== */}
        {activeTab === "team" && (
          <section className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <span className="text-xs font-black tracking-widest text-[#67b32f] uppercase">The Expert Collective</span>
                <h2 className="text-4xl font-black text-[#0b294f]">
                  The IT Experts of Change.
                </h2>
                <p className="text-gray-500 font-medium">
                  Meet the specialized developers, financial strategists, and operations directors building next-generation infrastructure.
                </p>
              </div>

              {/* MD/CEO Highlight Banner */}
              {team.slice(0, 1).map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-md mb-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                    <div className="w-24 h-24 rounded-2xl bg-[#0b294f]/10 flex items-center justify-center border-2 border-[#67b32f] overflow-hidden">
                      <Image src={member.image || "/tr3-g.png"} width={100} height={100} className="w-48" alt="alternative text" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-[#0b294f]">{member.name}</h3>
                      <p className="text-sm font-bold text-[#67b32f] uppercase tracking-wider">{member.role}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    {member.quote && (
                      <p className="text-lg font-bold text-gray-700 italic border-l-4 border-[#67b32f] pl-4 leading-relaxed">
                        "{member.quote}"
                      </p>
                    )}
                    <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                      {member.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {member.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600 border border-gray-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Core Members List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {team.slice(1).map((member, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 text-gray-400 overflow-hidden">
                          <Image src={member.image || "/tr3-g.png"} width={100} height={100} className="w-36" alt="alternative text" />
                        </div>
                        <div>
                          <h4 className="text-lg font-black text-[#0b294f]">{member.name}</h4>
                          <p className="text-xs font-bold text-[#67b32f] uppercase tracking-widest">{member.role}</p>
                        </div>
                      </div>

                      <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                        {member.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-gray-50 flex flex-wrap gap-1.5">
                      {member.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-50 text-gray-500 border border-gray-100">
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* ==================================== PARTNERS TAB ==================================== */}
        {activeTab === "partners" && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <span className="text-xs font-black tracking-widest text-[#67b32f] uppercase">Ecosystem Structure</span>
                <h2 className="text-4xl font-black text-[#0b294f]">
                  Strategic Partnerships.
                </h2>
                <p className="text-gray-500 font-medium">
                  Collaborating with global tech giants and key public institutions to implement robust administrative transformations.
                </p>

                {/* Filter Tabs */}
                <div className="pt-8 flex flex-wrap justify-center gap-2">
                  {partnerCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setPartnerFilter(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                        partnerFilter === cat
                          ? "bg-[#0b294f] text-white border-[#0b294f]"
                          : "bg-white text-gray-500 border-gray-200 hover:border-[#67b32f]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Partners Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {filteredPartners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <div className="w-12 h-12 rounded-xl bg-[#0b294f] flex items-center justify-center shadow-md">
                        <span className="text-white font-extrabold text-xs tracking-wider">{partner.logoText}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-[#67b32f]/10 text-[#0b294f] border border-[#67b32f]/20">
                        {partner.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0b294f]">
                      {partner.name}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                      {partner.description}
                    </p>

                  </div>
                ))}
              </div>

              {/* WHY BE A PARTNER SECTION */}
              <div className="mt-24 pt-16 border-t border-gray-100 text-left">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5 space-y-6">
                    <span className="text-xs font-black tracking-widest text-[#67b32f] uppercase">Ecosystem Expansion</span>
                    <h3 className="text-3xl lg:text-4xl font-black text-[#0b294f] tracking-tight">
                      Why Be a Partner with TR3-G Innovations?
                    </h3>
                    <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                      We bridge the gap between complex software systems and context-relevant institutional deployment. Partnering with us offers a reliable path to strategic innovation and market reach.
                    </p>
                    <div className="pt-2">
                      <Button
                        onClick={() => handleTabChange("contact")}
                        className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#0b294f] hover:bg-[#67b32f] transition-all h-auto"
                      >
                        Initiate Alliance Talks <Handshake className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      {
                        icon: <Network className="w-6 h-6 text-[#67b32f]" />,
                        title: "High-Tier Public Trust",
                        desc: "Connect your core products to validated Ogun State revenue (OGIRS) and federal education pipelines with verified deployment protocols."
                      },
                      {
                        icon: <Cpu className="w-6 h-6 text-[#67b32f]" />,
                        title: "Custom Integration Sync",
                        desc: "Our full-stack engineers design native wrappers, custom biometric layers, and automated triggers to sync your platform seamlessly."
                      },
                      {
                        icon: <Shield className="w-6 h-6 text-[#67b32f]" />,
                        title: "Bulletproof Security SLA",
                        desc: "Every partnership integration is backed by audited cryptographic layers, automated intrusion monitoring, and complete zero-trust access loops."
                      },
                      {
                        icon: <Zap className="w-6 h-6 text-[#67b32f]" />,
                        title: "Agile Scale Velocity",
                        desc: "Fast-track your solution's rollout with a dedicated project manager coordinating high-fidelity iterations and rapid server scaling."
                      }
                    ].map((ben, bIdx) => (
                      <div
                        key={bIdx}
                        className="p-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-lg transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-gray-100 shadow-sm mb-4">
                          {ben.icon}
                        </div>
                        <h4 className="font-bold text-[#0b294f] mb-1.5">{ben.title}</h4>
                        <p className="text-xs text-gray-500 font-semibold leading-relaxed">{ben.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* ==================================== CONTACT TAB ==================================== */}
        {activeTab === "contact" && (
          <section className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left mb-16">

                {/* Contact Info and Details */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="space-y-4">
                    <span className="text-xs font-black tracking-widest text-[#67b32f] uppercase">Inquiry Pipeline</span>
                    <h2 className="text-4xl font-black text-[#0b294f]">Connect with the modern expert.</h2>
                    <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                      Custom software deployment requires precise structural dialogue. Log your project requirement details to initiate transmission.
                    </p>
                  </div>

                  <div className="space-y-4 font-bold text-sm text-gray-600">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <MapPin className="w-5 h-5 text-[#67b32f] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Nigeria Base</p>
                        <p className="text-[#0b294f] font-bold mt-0.5">{contactDetails.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <Phone className="w-5 h-5 text-[#67b32f] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Voice Terminal</p>
                        <p className="text-[#0b294f] font-bold mt-0.5">{contactDetails.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <Mail className="w-5 h-5 text-[#67b32f] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Technical Mail</p>
                        <p className="text-[#0b294f] font-bold mt-0.5">{contactDetails.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* Operational Flow */}
                  <div className="p-6 bg-[#0b294f] rounded-3xl text-white space-y-4">
                    <p className="font-bold text-base text-white">Project Sequence</p>
                    <div className="space-y-4 text-xs text-gray-300">
                      <div className="flex gap-3">
                        <span className="w-5 h-5 rounded-full bg-white/10 text-[#67b32f] flex items-center justify-center font-bold font-mono">1</span>
                        <p className="font-medium mt-0.5">Initial requirements analysis and infrastructure discovery session.</p>
                      </div>
                      <div className="flex gap-3">
                        <span className="w-5 h-5 rounded-full bg-white/10 text-[#67b32f] flex items-center justify-center font-bold font-mono">2</span>
                        <p className="font-medium mt-0.5">Bespoke software architecture modeling & proof-of-concept maps.</p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Form Module - Standard styled inputs and textareas used for bulletproof compilation */}
                <div className="lg:col-span-7">
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md">

                    {formSubmitted ? (
                      <div className="text-center py-12 space-y-6">
                        <div className="w-16 h-16 rounded-full bg-[#67b32f]/10 flex items-center justify-center mx-auto">
                          <CheckCircle className="w-10 h-10 text-[#67b32f]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-black text-[#0b294f]">Transmission Received</h3>
                          <p className="text-sm text-gray-500 font-semibold max-w-md mx-auto">
                            Your core project requirements have been successfully logged. Our infrastructure experts will get back to you within 24 hours.
                          </p>
                        </div>
                        <Button
                          onClick={() => {
                            setFormSubmitted(false);
                            setFormData({ name: "", email: "", scope: "Arqelion (Secure Check-in/out)", requirements: "" });
                          }}
                          className="px-6 py-2.5 rounded-full text-xs font-bold text-[#0b294f] bg-[#67b32f]/10 hover:bg-[#67b32f]/20 transition-all h-auto"
                        >
                          Send Another Requirements Log
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-6">

                        <h3 className="text-2xl font-black text-[#0b294f]">Log Project Requirements</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-1.5 text-left">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                            <input
                              type="text"
                              name="name"
                              required
                              placeholder="Fadare Babatunde"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#67b32f] text-sm text-[#0b294f] font-semibold transition-all duration-300"
                            />
                          </div>

                          <div className="space-y-1.5 text-left">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                            <input
                              type="email"
                              name="email"
                              required
                              placeholder="samson@tr3-g.com.ng"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#67b32f] text-sm text-[#0b294f] font-semibold transition-all duration-300"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Project Scope</label>
                          <select
                            name="scope"
                            value={formData.scope}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#67b32f] text-sm text-[#0b294f] font-semibold transition-all duration-300"
                          >
                            <option value="Arqelion (Secure Check-in/out)">Arqelion (Secure Check-in/out)</option>
                            <option value="Revenue Management Infrastructure">Revenue Management Infrastructure</option>
                            <option value="Self-Storage Booking Portal">Self-Storage Booking Portal</option>
                            <option value="Hotel Management Engine">Hotel Management Engine</option>
                            <option value="Federal Unity School DTP">Federal Unity School DTP</option>
                            <option value="Custom Enterprise Software Dev">Custom Enterprise Software Dev</option>
                          </select>
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Requirements Specification</label>
                          <textarea
                            name="requirements"
                            required
                            rows={5}
                            placeholder="Please detail your custom systems integration specs, timeline, or operational legacy constraints..."
                            value={formData.requirements}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#67b32f] text-sm text-[#0b294f] placeholder:text-gray-400 font-semibold transition-all duration-300"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full py-4 rounded-xl font-bold text-white bg-[#0b294f] hover:bg-[#67b32f] transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-[#0b294f]/10 h-auto"
                        >
                          Initiate Transmission <Send className="w-4 h-4" />
                        </Button>

                      </form>
                    )}

                  </div>
                </div>

              </div>

              {/* MAP ADDED DIRECTLY UNDER THE CONTACT FORM */}
              <div className="mt-16 text-left space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-black tracking-widest text-[#67b32f] uppercase">Geographical Core</span>
                  <h3 className="text-2xl font-black text-[#0b294f]">Our Nigeria Operations Map</h3>
                  <p className="text-sm text-gray-500 font-semibold max-w-xl">
                    Our developers and project managers coordinate from our primary operations base in Abuja to guarantee seamless tech system rollouts across West Africa.
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl h-96 relative bg-gray-100">
                  <iframe
                    src={contactDetails.mapUrl}
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    allowFullScreen
                    loading="lazy"
                    title="TR3-G Abuja Base Map"
                  />
                </div>
              </div>

            </div>
          </section>
        )}

      </main>

      {/* FOOTER: Premium, highly professional dark/white hybrid matching Chrivon's design */}
      <footer className="bg-white border-t border-gray-100 text-[#0b294f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-left">

            {/* Column 1: Info and logo */}
            <div className="lg:col-span-2 space-y-6">
              <Image src="/tr3-g.png" width={100} height={100} className="w-48" alt="alternative text" />
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Ecosystem</h4>
              <ul className="space-y-2.5 text-sm font-semibold text-gray-600">
                <li><button onClick={() => handleTabChange("home")} className="hover:text-[#67b32f]">Home Interface</button></li>
                <li><button onClick={() => handleTabChange("services")} className="hover:text-[#67b32f]">Core Services</button></li>
                <li><button onClick={() => handleTabChange("solutions")} className="hover:text-[#67b32f]">Digital Solutions</button></li>
                <li><button onClick={() => handleTabChange("about")} className="hover:text-[#67b32f]">Identity Story</button></li>
              </ul>
            </div>

            {/* Column 3: Corporate */}
            <div className="space-y-4">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Company</h4>
              <ul className="space-y-2.5 text-sm font-semibold text-gray-600">
                <li><button onClick={() => handleTabChange("team")} className="hover:text-[#67b32f]">Our Team</button></li>
                <li><button onClick={() => handleTabChange("partners")} className="hover:text-[#67b32f]">Alliances</button></li>
                <li><button onClick={() => handleTabChange("contact")} className="hover:text-[#67b32f]">Contact Channels</button></li>
                <li><button onClick={() => handleTabChange("contact")} className="hover:text-[#67b32f]">Career Portals</button></li>
              </ul>
            </div>

            {/* Column 4: Contact Shortcuts */}
            <div className="space-y-4">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Technical Support</h4>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                Connect with our Abuja operations hub directly for SLA queries.
              </p>
              <p className="text-sm font-bold text-[#0b294f]">{contactDetails.email}</p>
              <p className="text-sm font-bold text-[#67b32f]">{contactDetails.phone}</p>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-400">
            <p>© 2026 TR3-G Innovations Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#67b32f]">Privacy Policy</a>
              <a href="#" className="hover:text-[#67b32f]">Terms of Service</a>
              <a href="#" className="hover:text-[#67b32f]">Security Core</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
