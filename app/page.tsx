"use client";

import Link from "next/link";
import Image from "next/image";
import { Shield, TrendingUp, CheckCircle, Eye, Brain, RefreshCw, FileCheck, Zap, AlertTriangle, Clock, FileText, Award, ChevronDown, Sparkles, ArrowRight, Scan, Rocket, CheckCircle2, Lock, Cloud, Server, Code2 } from "lucide-react";
import { motion } from "motion/react";
import { Ripple } from "@/components/ui/ripple";
import { useState } from "react";

const problemCards = [
  {
    icon: AlertTriangle,
    title: "Data Overwhelm",
    description: "Too many vulnerabilities, no prioritization. Security teams drown in data while critical risks go unnoticed."
  },
  {
    icon: Clock,
    title: "Slow Remediation",
    description: "Manual processes and disconnected tools mean weeks to patch. Critical vulnerabilities remain exposed far too long."
  },
  {
    icon: FileText,
    title: "Compliance Nightmare",
    description: "Constant audits with no clear reporting. struggling to prove security posture to auditors and stakeholders."
  }
];

const stats = [
  { value: "50K+", label: "Vulnerabilities Tracked", icon: Shield },
  { value: "73%", label: "Faster Remediation", icon: TrendingUp },
  { value: "15+", label: "Compliance Frameworks", icon: CheckCircle },
  { value: "99.9%", label: "Uptime SLA", icon: Cloud }
];

const capabilities = [
  {
    icon: Eye,
    title: "Vulnerability Monitoring",
    description: "Continuous scanning across your entire infrastructure with real-time alerts and instant visibility into emerging threats.",
    image: "/images/products/vulsphere/1.png"
  },
  {
    icon: Brain,
    title: "Risk Intelligence",
    description: "AI-powered prioritization engine analyzes threat context, exploitability, and business impact to focus on what matters most.",
    image: "/images/products/vulsphere/2.png"
  },
  {
    icon: RefreshCw,
    title: "Lifecycle Management",
    description: "Track every vulnerability from discovery to resolution with automated workflows, SLA tracking, and remediation verification.",
    image: "/images/products/vulsphere/3.png"
  },
  {
    icon: FileCheck,
    title: "Compliance & Reporting",
    description: "Automated reports for SOC 2, ISO 27001, PCI DSS, and 15+ frameworks. Always audit-ready with executive dashboards.",
    image: "/images/products/vulsphere/4.png"
  },
  {
    icon: Zap,
    title: "Integrations & Automation",
    description: "Connect to your existing scanners, ticketing systems, and CI/CD pipelines. Orchestrate security at scale.",
    image: "/images/products/vulsphere/5.png"
  }
];

const techStack = [
  { name: "Microservices Architecture", icon: Server },
  { name: "Real-time Processing Engine", icon: Zap },
  { name: "AI/ML Prioritization", icon: Brain },
  { name: "RESTful API", icon: Code2 },
  { name: "Cloud-Native Deployment", icon: Cloud },
  { name: "End-to-End Encryption", icon: Lock }
];

const integrationCategories = [
  {
    category: "Vulnerability Scanners",
    tools: [
      { name: "Nessus", logo: "/images/integrations/nessus.png" },
      { name: "OpenVAS", logo: "/images/integrations/openVAS.png" },
      { name: "Qualys", logo: "/images/integrations/qualys.png" },
      { name: "Acunetix", logo: "/images/integrations/acunetix-logo.png" },
      { name: "Rapid7", logo: '/images/integrations/rapid7.png' },
    ]
  },
  {
    category: "Ticketing Systems",
    tools: [
      { name: "Jira", logo: "/images/integrations/jira.svg" },
      { name: "Zendesk", logo: "/images/integrations/zendesk.svg" },
    ]
  }
];

const complianceBadges = [
  { name: "SOC 2 Type II", icon: Award },
  { name: "ISO 27001", icon: Shield },
  { name: "HIPAA Compliant", icon: Lock },
  { name: "PCI DSS", icon: CheckCircle2 }
];

const pricingPlans = [
  {
    name: "Free Demo",
    description: "Experience VulSphere with full access",
    price: "14-day trial",
    features: [
      "Full platform access",
      "Up to 1,000 assets",
      "All vulnerability scanners",
      "Basic reporting",
      "Community support"
    ],
    cta: "Start Free Trial",
    highlighted: false
  },
  {
    name: "On-Premise",
    description: "Self-hosted deployment for complete control",
    price: "Custom pricing",
    features: [
      "Unlimited assets",
      "All integrations included",
      "Advanced analytics & AI",
      "Custom compliance reports",
      "24/7 priority support",
      "On-premise deployment"
    ],
    cta: "Contact Sales",
    highlighted: true
  },
  {
    name: "Managed Services",
    description: "We handle everything for you",
    price: "Contact sales",
    features: [
      "Fully managed deployment",
      "Continuous monitoring",
      "Expert remediation guidance",
      "Custom integrations",
      "Dedicated success manager",
      "SLA guarantees"
    ],
    cta: "Get Started",
    highlighted: false
  }
];

const faqs = [
  {
    question: "What is VulSphere?",
    answer: "VulSphere is an enterprise vulnerability management platform that helps security teams discover, prioritize, and remediate vulnerabilities faster. It integrates with your existing scanners, uses AI to prioritize risks, and automates the remediation workflow."
  },
  {
    question: "How does the free trial work?",
    answer: "The 14-day free trial gives you full access to all VulSphere features with no credit card required. You can scan up to 1,000 assets, test all integrations, and experience our AI-powered risk prioritization firsthand."
  },
  {
    question: "What scanners do you support?",
    answer: "VulSphere integrates with all major vulnerability scanners including Nessus, OpenVAS, Qualys, Rapid7, and more. We also support cloud provider security tools like AWS Inspector, Azure Security Center, and GCP Security Command Center."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. VulSphere is SOC 2 Type II certified and ISO 27001 compliant. All data is encrypted in transit and at rest. We offer both cloud and on-premise deployment options for organizations with strict data residency requirements."
  },
  {
    question: "Can I self-host VulSphere?",
    answer: "Yes! We offer a fully self-hosted deployment option for enterprises that require on-premise installation. Our team handles the entire setup process and provides ongoing maintenance and support."
  },
  {
    question: "What compliance standards do you support?",
    answer: "VulSphere supports 15+ compliance frameworks including SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR, NIST, CIS Controls, and more. Our automated reporting makes audit preparation effortless."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy. Sign up for a free trial, schedule a demo with our team, or contact sales for enterprise pricing. Most teams are up and running within a day."
  },
  {
    question: "Do you offer enterprise support?",
    answer: "Yes, we offer 24/7 enterprise support with dedicated customer success managers, custom SLA guarantees, and professional services for implementation, training, and ongoing optimization."
  }
];

export default function VulspherePageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] overflow-hidden">
        <Ripple
          className="absolute inset-0"
          mainCircleSize={210}
          mainCircleOpacity={0.15}
          numCircles={6}
        />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#E0E8F5]/50 via-[#E5EDF8]/30 to-transparent rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-[#F5E6D3]/40 via-[#F0DDD0]/20 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#9A1B21]/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20"
              >
                <Shield className="w-4 h-4" />
                <span>Vulnerability Management</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                Meet{" "}
                <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">VulSphere</span>
              </h1>

              <p className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
                Enterprise Vulnerability Management Platform
              </p>

              <p className="text-lg text-[#6A6A6A] max-w-2xl mb-8">
                Comprehensive vulnerability management for modern security teams. Track, prioritize, and remediate vulnerabilities 73% faster with AI-powered risk intelligence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://vulsphere.com"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 text-base font-medium"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#capabilities"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full border-2 border-[#E8E8E8] text-[#1A1A1A] hover:border-[#9A1B21]/50 hover:bg-[#9A1B21]/5 transition-all duration-300 text-base font-medium"
                >
                  View Features
                </Link>
              </div>
            </motion.div>

            {/* Right - Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 bg-[#1A1A1A] aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/1152454275?title=0&byline=0&portrait=0&autoplay=0"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="VulSphere Platform Demo"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#9A1B21]/20 to-transparent rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-[#9A1B21]/10 to-transparent rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 lg:py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20">
              <AlertTriangle className="w-4 h-4" />
              <span>The Challenge</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Why Vulnerability Management{" "}
              <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Fails Today</span>
            </h2>
            <p className="text-lg text-[#6A6A6A]">
              Security teams are drowning in vulnerability data while critical risks go unaddressed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {problemCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 hover:shadow-lg hover:shadow-[#9A1B21]/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                  <card.icon className="w-8 h-8 text-[#9A1B21]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{card.title}</h3>
                <p className="text-[#6A6A6A]">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 hover:shadow-lg hover:shadow-[#9A1B21]/5 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#9A1B21]/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#9A1B21]" />
                </div>
                <div className="text-3xl font-bold text-[#1A1A1A] mb-2">{stat.value}</div>
                <div className="text-[#6A6A6A]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities Section */}
      <section id="capabilities" className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-gradient-to-l from-[#E8E0F0]/50 via-[#E5DDF0]/20 to-transparent rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20">
              <Sparkles className="w-4 h-4" />
              <span>Platform</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Powerful{" "}
              <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-lg text-[#6A6A6A]">
              Everything you need to manage vulnerabilities at enterprise scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 hover:shadow-lg hover:shadow-[#9A1B21]/5 transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#9A1B21]/10 border border-[#9A1B21]/20 flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-[#9A1B21]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                  {capability.title}
                </h3>
                <p className="text-sm text-[#6A6A6A]">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium border border-[#9A1B21]/20">
                  <Server className="w-4 h-4" />
                  <span>Architecture</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
                  Built for{" "}
                  <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Enterprise Scale</span>
                </h2>
                <p className="text-lg text-[#6A6A6A] leading-relaxed">
                  VulSphere is architected from the ground up for performance, scalability, and reliability. Our cloud-native microservices architecture ensures your vulnerability management platform grows with your organization.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#9A1B21]/10 flex items-center justify-center flex-shrink-0">
                      <tech.icon className="w-5 h-5 text-[#9A1B21]" />
                    </div>
                    <span className="text-sm font-medium text-[#1A1A1A]">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#E8E8E8] bg-white shadow-xl">
                <Image
                  src="/images/products/vulsphere/2.png"
                  alt="VulSphere Platform Architecture"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 lg:py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20">
              <Zap className="w-4 h-4" />
              <span>Integrations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Connects to Your{" "}
              <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Existing Tools</span>
            </h2>
            <p className="text-lg text-[#6A6A6A]">
              VulSphere integrates with 100+ security and IT tools. Fit seamlessly into your existing workflow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {integrationCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 hover:shadow-lg hover:shadow-[#9A1B21]/5 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6">{category.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] hover:border-[#9A1B21]/30 hover:bg-[#9A1B21]/5 transition-all duration-300"
                    >
                      {tool.logo ? (
                        <div className="relative w-10 h-10 flex-shrink-0">
                          <Image
                            src={tool.logo}
                            alt={tool.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-[#9A1B21]/10 flex items-center justify-center flex-shrink-0">
                          <Scan className="w-5 h-5 text-[#9A1B21]" />
                        </div>
                      )}
                      <span className="text-sm font-medium text-[#1A1A1A]">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20">
              <Rocket className="w-4 h-4" />
              <span>Success Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Real{" "}
              <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Results</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#E8E8E8] bg-white shadow-xl">
                <Image
                  src="/images/products/vulsphere/3.png"
                  alt="VulSphere Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-[#9A1B21] mb-2">Expected Results</p>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Transform Your Vulnerability Management Workflow</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <AlertTriangle className="w-4 h-4 text-[#9A1B21]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">Before</p>
                      <p className="text-[#6A6A6A]">8 weeks to remediate critical vulnerabilities</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">After VulSphere</p>
                      <p className="text-[#6A6A6A]">2 weeks to remediate critical vulnerabilities</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-[#9A1B21]/10 text-center">
                    <div className="text-3xl font-bold text-[#9A1B21]">73%</div>
                    <div className="text-sm text-[#6A6A6A]">Faster Remediation</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#9A1B21]/10 text-center">
                    <div className="text-3xl font-bold text-[#9A1B21]">95%</div>
                    <div className="text-sm text-[#6A6A6A]">Compliance Score</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20">
              <Award className="w-4 h-4" />
              <span>Compliance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Audit-Ready{" "}
              <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Always</span>
            </h2>
            <p className="text-lg text-[#6A6A6A]">
              Built with security and compliance at its core.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {complianceBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 hover:shadow-lg hover:shadow-[#9A1B21]/5 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#9A1B21]/10 flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="w-8 h-8 text-[#9A1B21]" />
                </div>
                <div className="font-semibold text-[#1A1A1A]">{badge.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20">
              <Sparkles className="w-4 h-4" />
              <span>Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-lg text-[#6A6A6A]">
              Flexible pricing options for organizations of all sizes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-[#9A1B21]/5 to-white border-[#9A1B21]/30 shadow-xl shadow-[#9A1B21]/10"
                    : "bg-white border-[#E8E8E8] hover:border-[#9A1B21]/30 hover:shadow-lg hover:shadow-[#9A1B21]/5"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white text-sm font-medium">
                      Recommended
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{plan.name}</h3>
                  <p className="text-sm text-[#6A6A6A] mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">
                    {plan.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9A1B21] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#6A6A6A]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.highlighted ? "https://vulsphere.com" : "https://vulsphere.com"}
                  className={`block w-full text-center py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg"
                      : "border-2 border-[#E8E8E8] text-[#1A1A1A] hover:border-[#9A1B21]/50 hover:bg-[#9A1B21]/5"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20">
              <FileText className="w-4 h-4" />
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="rounded-2xl bg-white border border-[#E8E8E8] overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FAFAFA]/50 transition-colors"
                >
                  <span className="font-semibold text-[#1A1A1A] pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#9A1B21] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-[#6A6A6A]">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#9A1B21] via-[#B83236] to-[#9A1B21] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Infrastructure?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start managing vulnerabilities at scale with VulSphere
            </p>
            <Link
              href="https://vulsphere.com"
              className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-white text-[#9A1B21] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
