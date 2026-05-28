"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionTemplate, useMotionValue, useSpring, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  ChevronRight,
  Cpu,
  Fingerprint,
  Layers3,
  LineChart,
  LockKeyhole,
  Mail,
  Orbit,
  PanelTop,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon
} from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const productLaunchLinks = [
  { href: "https://spendfence.app", label: "SpendFence" },
  { href: "https://tradersdelight.vercel.app", label: "TradersDelight" }
];

const LOGO_FULL_SRC = "/brand/lippa-labs-logo.png";
const LOGO_MARK_SRC = "/brand/lippa-labs-mark.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } }
};

const labProducts = [
  {
    name: "SpendFence",
    category: "Adaptive Budgeting",
    status: "ACTIVE",
    statusLabel: "Live product",
    icon: BarChart3,
    description:
      "AI-assisted budgeting built around spending fences, pacing awareness, bank syncing, and calmer financial decisions.",
    features: ["Adaptive budgeting", "AI insights", "Bank syncing", "Pacing analysis"],
    href: "https://spendfence.app",
    ctaLabel: "Launch SpendFence",
    accent: "from-[#00E6FF]/34 via-[#16F7A8]/18 to-transparent",
    ring: "group-hover:border-[#16F7A8]/55",
    iconTone: "text-[#D8FFF3] bg-[#16F7A8]/12",
    statusTone: "bg-[#16F7A8] shadow-[0_0_18px_rgb(22_247_168_/_0.72)]",
    ctaTone: "border-[#7CFBE0]/45 bg-[#00E6FF]/14 text-[#E7FFF9] shadow-[0_0_36px_rgb(0_230_255_/_0.18),inset_0_1px_0_rgb(216_255_243_/_0.18)] hover:border-[#B7FFF0]/70 hover:bg-[#16F7A8]/18 hover:shadow-[0_0_64px_rgb(22_247_168_/_0.28),inset_0_1px_0_rgb(216_255_243_/_0.28)]",
    chipTone:
      "border-[#7CFBE0]/40 bg-[#092529]/80 text-[#E7FFF9] shadow-[0_10px_28px_rgb(0_230_255_/_0.16),0_0_22px_rgb(22_247_168_/_0.14),inset_0_1px_0_rgb(216_255_243_/_0.24),inset_0_-1px_0_rgb(22_247_168_/_0.10)] hover:border-[#B7FFF0]/60 hover:bg-[#0D3233]/90 hover:shadow-[0_14px_34px_rgb(0_230_255_/_0.20),0_0_30px_rgb(22_247_168_/_0.22),inset_0_1px_0_rgb(216_255_243_/_0.32)]",
    preview: ["budget.signal", "fence status", "adaptive pacing"]
  },
  {
    name: "TradersDelight",
    category: "Trading Journal",
    status: "EVOLVING",
    statusLabel: "Active development",
    icon: LineChart,
    description:
      "Trading review system for ticker tracking, disciplined execution, AI-assisted reflection, and behavioral analysis.",
    features: ["Trade review", "Ticker tracking", "Execution notes", "Behavior loops"],
    href: "https://tradersdelight.vercel.app",
    ctaLabel: "Launch TradersDelight",
    accent: "from-[#B14CFF]/34 via-[#7A3CFF]/18 to-transparent",
    ring: "group-hover:border-[#B14CFF]/55",
    iconTone: "text-[#F1D7FF] bg-[#B14CFF]/12",
    statusTone: "bg-[#B14CFF] shadow-[0_0_18px_rgb(177_76_255_/_0.82)]",
    ctaTone: "border-[#BDA4FF]/45 bg-[#B14CFF]/16 text-[#F5DFFF] shadow-[0_0_36px_rgb(177_76_255_/_0.20),inset_0_1px_0_rgb(241_215_255_/_0.18)] hover:border-[#D9CBFF]/70 hover:bg-[#B14CFF]/24 hover:shadow-[0_0_64px_rgb(177_76_255_/_0.30),inset_0_1px_0_rgb(241_215_255_/_0.28)]",
    chipTone:
      "border-[#BDA4FF]/40 bg-[#1A1233]/80 text-[#F1E9FF] shadow-[0_10px_28px_rgb(122_60_255_/_0.17),0_0_22px_rgb(177_76_255_/_0.15),inset_0_1px_0_rgb(241_215_255_/_0.24),inset_0_-1px_0_rgb(122_60_255_/_0.12)] hover:border-[#D9CBFF]/60 hover:bg-[#211744]/90 hover:shadow-[0_14px_34px_rgb(122_60_255_/_0.22),0_0_30px_rgb(177_76_255_/_0.23),inset_0_1px_0_rgb(241_215_255_/_0.32)]",
    preview: ["market.session", "execution quality", "behavior loop"]
  },
  {
    name: "Future Experiments",
    category: "Experimental Systems",
    status: "Research",
    statusLabel: "In development",
    icon: Cpu,
    description: "Early-stage tools exploring AI-assisted workflows, automation, and decision support.",
    features: ["Decision support", "Workflow AI", "Automation", "Adaptive systems"],
    ctaLabel: "More systems in development",
    accent: "from-[#F7F8FF]/22 via-[#482CFF]/16 to-transparent",
    ring: "group-hover:border-white/28",
    iconTone: "text-[#F7F8FF] bg-white/10",
    statusTone: "bg-white/70 shadow-[0_0_18px_rgb(255_255_255_/_0.34)]",
    ctaTone: "border-white/12 bg-white/[0.055] text-slate-300",
    chipTone:
      "border-[#B9C7FF]/30 bg-[#11182F]/80 text-[#EDF1FF] shadow-[0_10px_28px_rgb(72_44_255_/_0.15),0_0_22px_rgb(125_168_255_/_0.12),inset_0_1px_0_rgb(247_248_255_/_0.22),inset_0_-1px_0_rgb(125_168_255_/_0.10)] hover:border-[#D6DEFF]/50 hover:bg-[#17203C]/90 hover:shadow-[0_14px_34px_rgb(72_44_255_/_0.18),0_0_30px_rgb(125_168_255_/_0.18),inset_0_1px_0_rgb(247_248_255_/_0.30)]",
    preview: ["prototype queue", "cloud systems", "decision surfaces"]
  }
];

const buildAreas = [
  { title: "AI-assisted apps", body: "Software that turns noisy context into clear next actions.", icon: Bot },
  { title: "Behavioral finance tools", body: "Products that respect timing, pressure, habits, and tradeoffs.", icon: BrainCircuit },
  { title: "Trading/workflow systems", body: "Review loops for discipline, pattern awareness, and better execution.", icon: Workflow },
  { title: "Decision support software", body: "Interfaces built to help people choose without drowning in inputs.", icon: Radar },
  { title: "Mobile-first PWAs", body: "Fast, focused product surfaces designed for daily use.", icon: PanelTop }
];

const values = [
  { title: "Practical AI", body: "AI as leverage for clarity, not novelty for its own sake.", icon: Sparkles },
  { title: "User Control", body: "People stay in the loop when products make recommendations.", icon: ShieldCheck },
  { title: "Clean Design", body: "High signal, low clutter, and interfaces that feel intentional.", icon: Layers3 },
  { title: "Fast Iteration", body: "Tight product loops that move from idea to working surface quickly.", icon: Rocket },
  { title: "Behavioral Insight", body: "Software shaped around how people actually act under pressure.", icon: Fingerprint },
  { title: "Privacy Awareness", body: "Sensitive workflows get careful data boundaries from day one.", icon: LockKeyhole }
];

const particleField = [
  { left: "8%", top: "18%", size: 3, delay: "0s" },
  { left: "18%", top: "72%", size: 2, delay: "1.6s" },
  { left: "32%", top: "28%", size: 2, delay: "2.2s" },
  { left: "48%", top: "64%", size: 3, delay: "0.8s" },
  { left: "62%", top: "16%", size: 2, delay: "3.1s" },
  { left: "74%", top: "78%", size: 2, delay: "1.2s" },
  { left: "86%", top: "38%", size: 3, delay: "2.8s" },
  { left: "93%", top: "12%", size: 2, delay: "4s" }
];

const dataFragments = ["model.sync", "signal.map", "cloud.intel", "lab.deploy"];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { damping: 38, stiffness: 90 });
  const smoothY = useSpring(pointerY, { damping: 38, stiffness: 90 });
  const cursorLight = useMotionTemplate`radial-gradient(620px circle at ${smoothX}px ${smoothY}px, rgb(0 230 255 / 0.12), rgb(177 76 255 / 0.09) 34%, transparent 70%)`;

  return (
    <div
      className="relative min-h-dvh overflow-x-clip bg-[#010208] text-white"
      onPointerMove={(event) => {
        pointerX.set(event.clientX);
        pointerY.set(event.clientY);
      }}
    >
      <div className="lab-grid pointer-events-none fixed inset-0" />
      <div className="lab-noise pointer-events-none fixed inset-0 opacity-[0.07]" />
      <LabAtmosphere />
      <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1]" style={{ background: cursorLight }} />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-[-12rem] top-[-10rem] h-[38rem] w-[38rem] rounded-full bg-[#482CFF]/22 blur-[118px]"
        animate={{ x: [0, 70, 0], y: [0, 34, 0], opacity: [0.42, 0.72, 0.42] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-[-14rem] right-[-10rem] h-[42rem] w-[42rem] rounded-full bg-[#B14CFF]/20 blur-[128px]"
        animate={{ x: [0, -54, 0], y: [0, -28, 0], opacity: [0.38, 0.68, 0.38] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <Header pathname={pathname} />
      <motion.main initial="hidden" animate="show" variants={stagger} className="relative z-10">
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

function Header({ pathname }: { pathname: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-200/10 bg-[#010208]/78 px-3 pt-[env(safe-area-inset-top)] shadow-[0_1px_0_rgb(255_255_255_/_0.04),0_18px_70px_rgb(0_0_0_/_0.26)] backdrop-blur-2xl sm:px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 py-3 sm:gap-4">
        <Link href="/" aria-label="Lippa Labs home" className="group flex min-w-0 shrink-0 items-center gap-3">
          <BrandMark />
          <span className="hidden truncate text-base font-black tracking-tight text-white sm:block sm:text-lg">Lippa Labs</span>
        </Link>
        <nav className="flex min-w-0 flex-1 items-center justify-start gap-0.5 overflow-x-auto rounded-full border border-white/10 bg-white/[0.055] p-1 text-xs font-black shadow-[0_0_44px_rgb(0_230_255_/_0.06),inset_0_1px_0_rgb(255_255_255_/_0.08)] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:justify-end sm:gap-1 sm:text-sm [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "shrink-0 rounded-full px-2.5 py-2 transition hover:shadow-[0_0_28px_rgb(0_230_255_/_0.12)] sm:px-3",
                pathname === item.href
                  ? "bg-white text-slate-950 shadow-[0_10px_34px_rgb(0_230_255_/_0.14)]"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-cyan-200/10 px-5 py-12 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#482CFF]/18 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:items-start">
        <div className="flex max-w-xl flex-col gap-4 sm:flex-row sm:items-center">
          <img src={LOGO_FULL_SRC} alt="Lippa Labs" className="h-20 w-24 shrink-0 rounded-2xl object-contain shadow-[0_0_34px_rgb(72_44_255_/_0.22)] sm:h-24 sm:w-28" />
          <div className="min-w-0">
            <p className="text-lg font-black text-white">Lippa Labs</p>
            <p className="mt-1 text-sm font-semibold leading-6 text-slate-400">Independent product studio creating AI-assisted tools for real-world decisions.</p>
            <a href="mailto:hello@lippalabs.com" className="mt-3 inline-flex text-sm font-black text-cyan-100 transition hover:text-white">
              hello@lippalabs.com
            </a>
            <FounderTagline className="mt-4" />
          </div>
        </div>
        <div className="grid gap-3 text-sm font-bold text-slate-400">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-200">Studio</p>
          <Link href="/products" className="transition hover:text-white">Products</Link>
          <Link href="/about" className="transition hover:text-white">About</Link>
          <Link href="/contact" className="transition hover:text-white">Contact</Link>
          <Link href="/privacy" className="transition hover:text-white">Privacy</Link>
          <Link href="/terms" className="transition hover:text-white">Terms</Link>
        </div>
        <div className="grid gap-3 text-sm font-bold text-slate-400">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-200">Products</p>
          {productLaunchLinks.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-1.5 transition hover:text-white">
              {item.label}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function BrandMark() {
  return (
    <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/15 bg-[#232838] shadow-[0_0_34px_rgb(0_230_255_/_0.18),0_0_44px_rgb(177_76_255_/_0.16)]">
      <img src={LOGO_MARK_SRC} alt="Lippa Labs" className="h-full w-full object-cover" />
    </span>
  );
}

function FounderTagline({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "relative inline-flex w-fit items-center rounded-full border border-cyan-200/12 bg-cyan-300/[0.045] px-3 py-1.5 text-xs font-black tracking-[0.08em] text-cyan-100/80 shadow-[0_0_28px_rgb(0_230_255_/_0.08),inset_0_1px_0_rgb(255_255_255_/_0.08)] backdrop-blur transition hover:border-cyan-200/22 hover:text-cyan-50 hover:shadow-[0_0_34px_rgb(0_230_255_/_0.12),inset_0_1px_0_rgb(255_255_255_/_0.12)]",
        className
      )}
    >
      Built by Buster @ Lippa Labs
    </p>
  );
}

function LabAtmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-[8%] top-[18%] h-32 w-32 rounded-full border border-sky-200/10 opacity-60 [transform:rotateX(62deg)_rotateZ(-18deg)]">
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/70 shadow-[0_0_28px_rgb(125_211_252_/_0.45)]" />
      </div>
      <div className="absolute right-[9%] top-[22%] h-40 w-40 rounded-[2.5rem] border border-violet-200/10 bg-white/[0.018] opacity-70 [transform:rotate(18deg)]" />
      <div className="absolute bottom-[16%] left-[42%] h-28 w-28 rounded-full border border-white/10 opacity-50 [transform:rotateX(68deg)]" />
      {particleField.map((particle, index) => (
        <span
          key={`${particle.left}-${particle.top}`}
          className="lab-particle absolute rounded-full bg-sky-100/70 shadow-[0_0_18px_rgb(125_211_252_/_0.48)]"
          style={{
            animationDelay: particle.delay,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            width: particle.size,
            opacity: 0.42 + index * 0.04
          }}
        />
      ))}
      {dataFragments.map((fragment, index) => (
        <span
          key={fragment}
          className="data-fragment absolute hidden rounded-full border border-white/10 bg-black/20 px-3 py-1 font-mono text-[0.65rem] font-bold text-cyan-100/55 backdrop-blur md:block"
          style={{
            animationDelay: `${index * 1.4}s`,
            left: `${12 + index * 21}%`,
            top: `${38 + (index % 2) * 28}%`
          }}
        >
          {fragment}
        </span>
      ))}
    </div>
  );
}

export function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <CurrentLabsSection />
      <BuilderSection />
      <WhatWeBuildSection />
      <ValuesSection />
      <CtaBand />
    </SiteShell>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:min-h-[calc(100dvh-4.5rem)] lg:px-8 lg:pb-24 lg:pt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
      <div className="absolute left-1/2 top-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(72_44_255_/_0.20),transparent_68%)] blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <motion.div variants={fadeUp} className="text-center lg:text-left">
          <Badge icon={Orbit}>Independent AI product lab</Badge>
          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.045em] text-white sm:text-7xl sm:tracking-[-0.055em] lg:mx-0 lg:text-7xl 2xl:text-8xl">
            Building intelligent systems for real-world decisions.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:mx-0">
            Lippa Labs is an independent product studio creating AI-assisted tools for finance, markets, productivity, and behavioral systems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <PrimaryLink href="/products">View Products</PrimaryLink>
            <SecondaryLink href="/contact">Contact</SecondaryLink>
          </div>
          <div className="mx-auto mt-7 grid max-w-xl gap-2 text-left sm:grid-cols-2 lg:mx-0">
            {productLaunchLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-black text-slate-200 shadow-lab backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-cyan-300/[0.075] hover:text-white"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_16px_rgb(0_230_255_/_0.76)] motion-safe:animate-pulse" />
                  {item.label}
                </span>
                <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-2xl">
          <HeroLabConsole />
        </motion.div>
      </div>
    </section>
  );
}

function HeroLabConsole() {
  return (
    <div className="relative flex min-h-[420px] flex-col items-center justify-center gap-4 sm:min-h-[660px]">
      <LogoParticleField />
      <motion.div
        aria-hidden="true"
        className="absolute inset-4 rounded-full bg-[conic-gradient(from_210deg_at_50%_50%,rgb(0_230_255_/_0.24),rgb(72_44_255_/_0.28),rgb(177_65_255_/_0.28),rgb(0_122_255_/_0.24),rgb(0_230_255_/_0.24))] blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="relative z-20 w-[min(33rem,90vw)] overflow-hidden rounded-[2rem] border border-white/10 bg-black/58 p-3 shadow-[0_42px_140px_rgb(72_44_255_/_0.25),0_0_90px_rgb(0_230_255_/_0.10),inset_0_1px_0_rgb(255_255_255_/_0.10)] backdrop-blur-2xl sm:w-[min(33rem,92vw)] sm:rounded-[2.25rem] sm:p-4"
        initial={{ opacity: 0, scale: 0.94, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{ opacity: { duration: 0.8 }, scale: { duration: 0.8 }, y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgb(177_65_255_/_0.16),transparent_15rem),radial-gradient(circle_at_78%_42%,rgb(0_230_255_/_0.12),transparent_16rem)]" />
        <div className="scanline absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent" />
        <img src={LOGO_FULL_SRC} alt="Lippa Labs particle-cloud logo" className="relative z-10 aspect-[1076/960] w-full rounded-[1.65rem] object-cover shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)]" />
      </motion.div>
      <motion.div variants={stagger} className="relative z-30 hidden w-full gap-3 sm:grid sm:grid-cols-3">
        {labProducts.map((product, index) => (
          <FloatingProductCard key={product.name} className="w-full" product={product} delay={index * 0.16} />
        ))}
      </motion.div>
    </div>
  );
}

function LogoParticleField() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-[3rem]">
      <div className="absolute inset-10 rounded-full border border-cyan-200/10 bg-[radial-gradient(circle_at_50%_42%,rgb(72_44_255_/_0.14),transparent_62%)] opacity-80" />
      <div className="particle-ring absolute left-1/2 top-[42%] h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70" />
      {Array.from({ length: 22 }).map((_, index) => (
        <span
          key={index}
          className="logo-spark absolute rounded-full bg-cyan-100 shadow-[0_0_18px_rgb(0_230_255_/_0.75)]"
          style={{
            animationDelay: `${index * 0.18}s`,
            height: `${2 + (index % 4)}px`,
            left: `${8 + ((index * 37) % 84)}%`,
            top: `${10 + ((index * 29) % 78)}%`,
            width: `${2 + (index % 4)}px`
          }}
        />
      ))}
      <div className="absolute bottom-16 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent" />
      <div className="absolute left-[18%] top-[24%] h-2 w-2 rounded-full bg-[#B14CFF] shadow-[0_0_26px_rgb(177_76_255_/_0.85)]" />
      <div className="absolute right-[16%] top-[40%] h-2.5 w-2.5 rounded-full bg-[#00E6FF] shadow-[0_0_28px_rgb(0_230_255_/_0.85)]" />
    </div>
  );
}

function FloatingProductCard({ product, className, delay }: { product: (typeof labProducts)[number]; className: string; delay: number }) {
  const Icon = product.icon;

  return (
    <motion.div
      className={cn("rounded-[1.75rem] border border-white/10 bg-[#05030b]/82 p-4 shadow-lab backdrop-blur-2xl", className)}
      animate={{ y: [0, -14, 0], rotate: [0, 1.2, 0] }}
      transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className={cn("grid h-10 w-10 place-items-center rounded-2xl", product.iconTone)}>
        <Icon size={19} />
      </div>
      <p className="mt-4 text-sm font-black text-white">{product.name}</p>
      <p className="mt-1 text-xs font-bold leading-5 text-slate-400">{product.category}</p>
    </motion.div>
  );
}

function CurrentLabsSection() {
  return (
    <Section eyebrow="Live systems" title="Real products, active experiments, and launchable software.">
      <ProductGrid />
    </Section>
  );
}

function BuilderSection() {
  return (
    <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/24 to-transparent" />
      <div className="absolute left-0 top-12 h-80 w-80 rounded-full bg-[#B14CFF]/12 blur-3xl" />
      <motion.div variants={fadeUp} className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-200/10 bg-white/[0.052] p-6 shadow-lab backdrop-blur-2xl sm:p-8">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/16 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgb(255_255_255_/_0.04),transparent_36%,rgb(177_76_255_/_0.07))]" />
          <Badge icon={Fingerprint}>Founder / builder</Badge>
          <h2 className="relative mt-6 text-3xl font-black leading-[1.04] tracking-[-0.035em] text-white sm:text-5xl">Built by Nicholas Lippa</h2>
          <p className="relative mt-5 text-base font-semibold leading-8 text-slate-300">
            Lippa Labs is founder-led, product-obsessed, and built around fast iteration. The focus is simple: practical AI, clean interfaces, and tools that make hard decisions easier to act on.
          </p>
          <p className="relative mt-4 text-base font-semibold leading-8 text-slate-300">
            Built by Nicholas Lippa with a focus on practical tools, fast iteration, and software that feels useful in real life.
          </p>
          <FounderTagline className="mt-5" />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <MetricCard value="01" label="Founder-led product direction" />
          <MetricCard value="AI" label="Practical intelligence, not decoration" />
          <MetricCard value="PWA" label="Mobile-first surfaces for daily workflows" />
        </div>
      </motion.div>
    </section>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -6, rotate: -0.5 }} className="rounded-[1.75rem] border border-white/10 bg-[#05030b]/72 p-5 shadow-lab backdrop-blur-2xl">
      <p className="text-4xl font-black tracking-[-0.04em] text-white">{value}</p>
      <p className="mt-4 text-sm font-bold leading-6 text-slate-400">{label}</p>
    </motion.div>
  );
}

function WhatWeBuildSection() {
  return (
    <Section eyebrow="What we build" title="AI product systems for decisions, workflows, and momentum.">
      <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {buildAreas.map((area) => (
          <MiniLabCard key={area.title} {...area} />
        ))}
      </motion.div>
    </Section>
  );
}

function MiniLabCard({ title, body, icon: Icon }: { title: string; body: string; icon: LucideIcon }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -7, rotateX: 2, rotateY: -2 }}
      className="group relative min-h-56 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-lab backdrop-blur-2xl transition"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-sky-400/18 via-violet-500/12 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="relative grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-sky-100">
        <Icon size={20} />
      </div>
      <h3 className="relative mt-6 text-lg font-black tracking-tight text-white">{title}</h3>
      <p className="relative mt-3 text-sm font-semibold leading-6 text-slate-400">{body}</p>
    </motion.article>
  );
}

export function ProductsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Products"
        title="Live products and research systems."
        body="SpendFence and TradersDelight are live Lippa Labs projects. Future Experiments is the research track for early-stage AI-assisted workflows and decision support."
      />
      <Section>
        <ProductGrid />
      </Section>
    </SiteShell>
  );
}

function ProductGrid() {
  return (
    <motion.div variants={stagger} className="grid min-w-0 grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
      {labProducts.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </motion.div>
  );
}

function ProductCard({
  name,
  category,
  status,
  statusLabel,
  icon: Icon,
  description,
  features,
  href,
  ctaLabel,
  accent,
  ring,
  iconTone,
  statusTone,
  ctaTone,
  chipTone,
  preview
}: {
  name: string;
  category: string;
  status: string;
  statusLabel: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  href?: string;
  ctaLabel?: string;
  accent: string;
  ring: string;
  iconTone: string;
  statusTone: string;
  ctaTone: string;
  chipTone: string;
  preview: string[];
}) {
  const isLive = Boolean(href);
  const displayHref = href?.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -12, rotateX: 1.8, rotateY: -1.8, transition: { duration: 0.22 } }}
      className={cn(
        "group relative min-h-[32rem] min-w-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#05030b]/82 p-4 shadow-lab backdrop-blur-2xl transition duration-300 hover:shadow-[0_34px_100px_rgb(0_0_0_/_0.48),0_0_74px_rgb(72_44_255_/_0.16)] sm:min-h-[34rem] sm:rounded-[2rem] sm:p-5",
        ring
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-52 bg-gradient-to-br opacity-100", accent)} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(255_255_255_/_0.12),transparent_34rem),radial-gradient(circle_at_90%_96%,rgb(0_230_255_/_0.08),transparent_18rem)]" />
      <div className="scanline absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition group-hover:opacity-100" />
      <SystemBackdrop icon={Icon} iconTone={iconTone} preview={preview} />
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 sm:inset-x-5 sm:bottom-5">
        {isLive ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ctaLabel}
            className={cn(
              "relative z-20 inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl border px-4 text-sm font-black transition duration-300 hover:-translate-y-0.5",
              ctaTone
            )}
          >
            {ctaLabel}
            <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : (
          <span className={cn("relative z-20 inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl border px-4 text-center text-sm font-black", ctaTone)}>
            {ctaLabel}
          </span>
        )}
      </div>
      <div className="relative z-10 flex min-h-[29.5rem] flex-col pb-16 sm:min-h-[31.5rem]">
        <div className="flex min-w-0 items-start justify-between gap-4">
          <div className={cn("grid h-12 w-12 place-items-center rounded-2xl border border-white/10 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)]", iconTone)}>
            <Icon size={23} />
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/32 px-3 py-1 text-xs font-black text-slate-100 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)]">
            <span className={cn("h-1.5 w-1.5 rounded-full motion-safe:animate-pulse", statusTone)} />
            {status}
          </span>
        </div>
        <p className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-cyan-100/90">{category}</p>
        <h2 className="mt-2 min-w-0 text-3xl font-black tracking-[-0.035em] text-white">{name}</h2>
        <p className="mt-4 min-w-0 text-sm font-semibold leading-7 text-slate-300">{description}</p>
        <div className="mt-5 flex items-center gap-2 rounded-2xl border border-white/10 bg-black/22 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-300">
          <span className={cn("h-1.5 w-1.5 rounded-full", statusTone)} />
          {statusLabel}
        </div>
        {isLive ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-cyan-200/15 bg-black/24 px-3 py-1.5 text-xs font-black text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200/30 hover:bg-cyan-300/10 hover:text-white"
          >
            {displayHref}
            <ArrowUpRight size={13} />
          </a>
        ) : null}
        <div className="relative z-30 mt-auto flex flex-wrap gap-x-2.5 gap-y-2.5 pt-7 sm:gap-x-2">
          <div aria-hidden="true" className="pointer-events-none absolute -inset-x-2 -inset-y-3 -z-10 rounded-[1.5rem] bg-[#02040b]/30 shadow-[0_18px_50px_rgb(0_0_0_/_0.28)] backdrop-blur-[2px]" />
          {features.map((feature) => (
            <span
              key={feature}
              className={cn(
                "inline-flex min-h-7 items-center justify-center rounded-full border px-3 py-1 text-[0.72rem] font-extrabold leading-none tracking-[0.01em] backdrop-blur-md transition duration-300 motion-safe:hover:-translate-y-0.5",
                chipTone
              )}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function SystemBackdrop({ icon: Icon, iconTone, preview }: { icon: LucideIcon; iconTone: string; preview: string[] }) {
  return (
    <div aria-hidden="true" className="absolute inset-x-4 bottom-[5rem] h-40 overflow-hidden rounded-[1.35rem] border border-white/[0.085] bg-black/25 opacity-[0.72] transition group-hover:opacity-[0.88] sm:inset-x-5 sm:bottom-[5.2rem] sm:h-44 sm:rounded-[1.5rem]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(255_255_255_/_0.032)_1px,transparent_1px),linear-gradient(rgb(255_255_255_/_0.028)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-[#05030b]/30 to-[#05030b]/70" />
      <motion.div
        className={cn("absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl opacity-80", iconTone)}
        animate={{ y: [0, -7, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon size={20} />
      </motion.div>
      <motion.div
        className="absolute bottom-5 right-5 h-20 w-20 rounded-full border border-sky-200/[0.14]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.24, 0.48, 0.24] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-5 top-24 grid gap-2 opacity-75">
        {preview.map((item, index) => (
          <motion.span
            key={item}
            className="w-fit rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 font-mono text-[0.65rem] font-bold text-cyan-100/60"
            animate={{ x: [0, index % 2 === 0 ? 7 : -4, 0], opacity: [0.36, 0.68, 0.36] }}
            transition={{ duration: 5.8 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
          >
            {item}
          </motion.span>
        ))}
      </div>
      <div className="absolute bottom-8 left-24 right-8 h-px bg-gradient-to-r from-sky-200/0 via-cyan-200/30 to-violet-200/0" />
      <div className="absolute bottom-14 left-20 h-1.5 w-1.5 rounded-full bg-white/50 shadow-[0_0_14px_rgb(255_255_255_/_0.28)]" />
      <div className="absolute bottom-20 right-16 h-1.5 w-1.5 rounded-full bg-sky-200/50 shadow-[0_0_14px_rgb(125_211_252_/_0.30)]" />
    </div>
  );
}

function ValuesSection() {
  return (
    <Section eyebrow="Operating values" title="The studio bias: useful, fast, controlled, and clean.">
      <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value) => (
          <ValueCard key={value.title} {...value} />
        ))}
      </motion.div>
    </Section>
  );
}

function ValueCard({ title, body, icon: Icon }: { title: string; body: string; icon: LucideIcon }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-lab backdrop-blur-2xl"
    >
      <div className="absolute -right-10 -top-12 h-28 w-28 rounded-full bg-violet-500/18 blur-2xl" />
      <div className="relative grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-violet-100">
        <Icon size={20} />
      </div>
      <h3 className="relative mt-5 text-lg font-black text-white">{title}</h3>
      <p className="relative mt-2 text-sm font-semibold leading-6 text-slate-400">{body}</p>
    </motion.article>
  );
}

export function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About"
        title="A founder-led product studio for practical AI software."
        body="Lippa Labs was founded by Nicholas Lippa to build useful software that combines modern AI, clean interfaces, and real-world practicality."
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div variants={fadeUp} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-lab backdrop-blur-2xl sm:p-8">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-sky-400/18 blur-3xl" />
            <p className="relative text-sm font-black uppercase tracking-[0.18em] text-sky-200">Built by Nicholas Lippa</p>
            <h2 className="relative mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">Independent, iterative, product-focused.</h2>
            <p className="relative mt-5 text-base font-semibold leading-8 text-slate-300">
              The studio builds in focused loops: identify a real workflow, ship a working surface, learn from usage, and refine until the product feels obvious.
            </p>
            <p className="relative mt-4 text-base font-semibold leading-8 text-slate-300">
              Built by Nicholas Lippa with a focus on practical tools, fast iteration, and software that feels useful in real life.
            </p>
            <FounderTagline className="mt-5" />
          </motion.div>
          <motion.div variants={stagger} className="grid gap-4">
            {[
              ["Modern AI", "AI assistance is used to surface patterns, reduce friction, and support reflection."],
              ["Clean interfaces", "Products are designed to feel fast, legible, and trustworthy across devices."],
              ["Real-world practicality", "Every product starts with a specific human workflow, not a vague technology demo."],
              ["User-centered philosophy", "People stay in control of decisions, especially in sensitive domains like finance and markets."]
            ].map(([title, body]) => (
              <InfoRow key={title} title={title} body={body} />
            ))}
          </motion.div>
        </div>
      </Section>
    </SiteShell>
  );
}

function InfoRow({ title, body }: { title: string; body: string }) {
  return (
    <motion.div variants={fadeUp} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-lab backdrop-blur-2xl">
      <h3 className="font-black text-white">{title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-400">{body}</p>
    </motion.div>
  );
}

export function ContactPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Contact" title="Talk to the lab." body="For business, product, support, verification, or partnership inquiries, contact Lippa Labs directly." />
      <Section>
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div variants={fadeUp} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-lab backdrop-blur-2xl">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/18 blur-3xl" />
            <Mail className="relative text-sky-200" size={24} />
            <h2 className="relative mt-5 text-2xl font-black text-white">Contact details</h2>
            <p className="relative mt-3 text-sm font-semibold leading-6 text-slate-300">
              Email: <span className="font-black text-white">hello@lippalabs.com</span>
            </p>
            <div className="relative mt-5 grid gap-2">
              {["Business inquiries", "Product support", "Partnerships and verification"].map((item) => (
                <span key={item} className="rounded-2xl border border-white/10 bg-black/24 px-3 py-2 text-sm font-bold text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.form variants={fadeUp} className="grid gap-4 rounded-[2rem] border border-white/10 bg-[#05030b]/78 p-5 shadow-lab backdrop-blur-2xl sm:p-6">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" placeholder="you@example.com" type="email" />
            <label className="grid gap-2 text-sm font-black text-slate-200">
              Message
              <textarea className="min-h-36 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/45 focus:ring-4 focus:ring-sky-400/10" placeholder="Tell us what you are working on or what you need." />
            </label>
            <button type="button" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-black text-slate-950 shadow-[0_18px_60px_rgb(255_255_255_/_0.12)] transition hover:-translate-y-0.5">
              Send Message <ArrowRight size={17} />
            </button>
          </motion.form>
        </div>
      </Section>
    </SiteShell>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm font-black text-slate-200">
      {label}
      <input type={type} className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-sm font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/45 focus:ring-4 focus:ring-sky-400/10" placeholder={placeholder} />
    </label>
  );
}

export function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const isPrivacy = type === "privacy";
  const sections = isPrivacy ? privacySections : termsSections;

  return (
    <SiteShell>
      <PageHero
        eyebrow={isPrivacy ? "Privacy" : "Terms"}
        title={isPrivacy ? "Privacy Policy" : "Terms of Service"}
        body={isPrivacy ? "A practical overview of how Lippa Labs handles information for early-stage products and public inquiries." : "Basic terms for using Lippa Labs websites and early software products."}
      />
      <Section>
        <motion.div variants={stagger} className="mx-auto grid max-w-4xl gap-4">
          <motion.div variants={fadeUp} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 text-sm font-semibold leading-7 text-slate-400 shadow-lab backdrop-blur-2xl">
            Last updated: January 2026
          </motion.div>
          {sections.map((section) => (
            <InfoRow key={section.title} title={section.title} body={section.body} />
          ))}
        </motion.div>
      </Section>
    </SiteShell>
  );
}

const privacySections = [
  {
    title: "Information we collect",
    body: "Lippa Labs may collect information you provide through contact forms, product signups, support requests, or account workflows in individual products."
  },
  {
    title: "How information is used",
    body: "Information is used to operate products, respond to inquiries, improve user experience, maintain security, and support billing or compliance workflows where applicable."
  },
  {
    title: "No selling of personal data",
    body: "Lippa Labs does not sell personal data. Product-specific analytics and service providers may be used only to operate and improve the services."
  },
  {
    title: "Security and retention",
    body: "We use reasonable technical and organizational safeguards for early-stage SaaS operations and retain information only as long as needed for product, legal, or operational purposes."
  },
  {
    title: "Contact",
    body: "For privacy questions, contact hello@lippalabs.com. Product-specific privacy details may be provided inside individual applications as they mature."
  }
];

const termsSections = [
  {
    title: "Use of services",
    body: "Lippa Labs websites and products are provided for lawful use. You agree not to misuse, disrupt, reverse engineer, or interfere with services or related systems."
  },
  {
    title: "Early-stage products",
    body: "Some Lippa Labs products may be in active development. Features may change as products improve, and availability may vary over time."
  },
  {
    title: "Accounts and billing",
    body: "Paid products, when offered, may use third-party payment processors. Users are responsible for maintaining accurate account and billing information."
  },
  {
    title: "No professional advice",
    body: "Products may surface patterns, reflections, or decision support, but they do not provide financial, investment, legal, or professional advice."
  },
  {
    title: "Limitation of liability",
    body: "Services are provided as available. To the fullest extent permitted by law, Lippa Labs is not liable for indirect, incidental, or consequential damages."
  },
  {
    title: "Contact",
    body: "Questions about these terms can be sent to hello@lippalabs.com."
  }
];

function CtaBand() {
  return (
    <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-200/34 to-transparent" />
      <motion.div variants={fadeUp} className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-cyan-200/12 bg-[#05030b]/82 p-6 text-white shadow-[0_34px_120px_rgb(0_0_0_/_0.44),0_0_80px_rgb(72_44_255_/_0.18)] backdrop-blur-2xl sm:p-8 lg:p-10">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/16 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-violet-600/18 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgb(255_255_255_/_0.045),transparent_34%,rgb(0_230_255_/_0.055))]" />
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">Lippa Labs</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-[1.04] tracking-[-0.04em] sm:text-5xl">Building software that makes high-friction decisions easier to move through.</h2>
          </div>
          <PrimaryLink href="/contact">Start a conversation</PrimaryLink>
        </div>
      </motion.div>
    </section>
  );
}

function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className="relative overflow-hidden px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#482CFF]/18 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/34 to-transparent" />
      <motion.div variants={fadeUp} className="mx-auto max-w-7xl">
        <Badge>{eyebrow}</Badge>
        <h1 className="mt-7 max-w-5xl text-3xl font-black leading-[1.08] tracking-[-0.035em] text-white sm:text-6xl sm:tracking-[-0.04em] lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-slate-300 sm:text-lg">{body}</p>
      </motion.div>
    </section>
  );
}

function Section({ eyebrow, title, children }: { eyebrow?: string; title?: string; children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute right-[-8rem] top-16 h-96 w-96 rounded-full bg-[#007AFF]/8 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        {title ? (
          <motion.div variants={fadeUp} className="mb-8 max-w-4xl sm:mb-10">
            {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">{eyebrow}</p> : null}
            <h2 className="mt-3 text-3xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">{title}</h2>
          </motion.div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

function Badge({ children, icon: Icon = Radar }: { children: React.ReactNode; icon?: LucideIcon }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/[0.075] px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-sky-100 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)] backdrop-blur">
      <Icon size={14} /> {children}
    </span>
  );
}

function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-black text-slate-950 shadow-[0_18px_60px_rgb(255_255_255_/_0.13),0_0_40px_rgb(56_189_248_/_0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_78px_rgb(255_255_255_/_0.16),0_0_52px_rgb(56_189_248_/_0.18)]"
    >
      {children} <ArrowRight size={17} />
    </Link>
  );
}

function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-5 text-sm font-black text-white shadow-lab backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-sky-300/25 hover:bg-sky-300/10">
      {children} <ChevronRight size={17} />
    </Link>
  );
}
