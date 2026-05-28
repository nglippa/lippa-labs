"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Code2,
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
  Zap,
  type LucideIcon
} from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" }
];

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
    status: "Active Development",
    icon: BarChart3,
    description:
      "AI-assisted budgeting built around spending fences, pacing awareness, bank syncing, and calmer financial decisions.",
    features: ["Adaptive budgeting", "AI insights", "Bank syncing", "Pacing analysis"],
    accent: "from-sky-400/32 via-blue-600/18 to-transparent",
    ring: "group-hover:border-sky-300/45",
    iconTone: "text-sky-200 bg-sky-400/12"
  },
  {
    name: "TradersDelight",
    category: "Trading Journal",
    status: "In Development",
    icon: LineChart,
    description:
      "Trading review system for ticker tracking, disciplined execution, AI-assisted reflection, and behavioral analysis.",
    features: ["Trade review", "Ticker tracking", "Execution notes", "Behavior loops"],
    accent: "from-violet-400/34 via-fuchsia-600/18 to-transparent",
    ring: "group-hover:border-violet-300/45",
    iconTone: "text-violet-200 bg-violet-400/12"
  },
  {
    name: "Future Experiments",
    category: "Experimental Systems",
    status: "Research Pipeline",
    icon: Cpu,
    description:
      "Explorations in AI-assisted workflows, decision support, practical automation, and adaptive product surfaces.",
    features: ["Decision support", "Workflow AI", "Automation", "Adaptive systems"],
    accent: "from-slate-200/22 via-indigo-500/16 to-transparent",
    ring: "group-hover:border-white/28",
    iconTone: "text-slate-100 bg-white/10"
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

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-dvh overflow-x-clip bg-[#05060a] text-white">
      <div className="lab-grid pointer-events-none fixed inset-0" />
      <div className="lab-noise pointer-events-none fixed inset-0 opacity-[0.07]" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-sky-500/22 blur-[110px]"
        animate={{ x: [0, 70, 0], y: [0, 34, 0], opacity: [0.42, 0.72, 0.42] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-[-14rem] right-[-10rem] h-[38rem] w-[38rem] rounded-full bg-violet-600/24 blur-[120px]"
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05060a]/72 px-4 pt-[env(safe-area-inset-top)] shadow-[0_1px_0_rgb(255_255_255_/_0.04)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 py-3">
        <Link href="/" aria-label="Lippa Labs home" className="group flex min-w-0 items-center gap-3">
          <BrandMark />
          <span className="truncate text-base font-black tracking-tight text-white sm:text-lg">Lippa Labs</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-black transition",
                pathname === item.href
                  ? "bg-white text-slate-950 shadow-[0_10px_34px_rgb(125_211_252_/_0.14)]"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden min-h-10 items-center rounded-2xl border border-sky-300/25 bg-sky-300/10 px-4 text-sm font-black text-sky-100 shadow-[0_0_34px_rgb(56_189_248_/_0.14)] transition hover:-translate-y-0.5 hover:bg-sky-300/20 sm:inline-flex">
          Contact
        </Link>
      </div>
      <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-3 text-sm font-black [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "shrink-0 rounded-full border px-3 py-1.5 transition",
              pathname === item.href
                ? "border-sky-300/30 bg-sky-300/10 text-sky-100"
                : "border-white/10 bg-white/[0.045] text-slate-300"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <BrandMark />
          <div>
            <p className="font-black text-white">Lippa Labs</p>
            <p className="text-sm font-semibold text-slate-400">Independent product studio for practical AI software.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-bold text-slate-400">
          <Link href="/products" className="hover:text-white">Products</Link>
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

function BrandMark() {
  return (
    <span aria-hidden="true" className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] text-sm font-black text-white shadow-[0_0_38px_rgb(56_189_248_/_0.16)]">
      <span className="absolute inset-0 bg-[conic-gradient(from_160deg_at_50%_50%,rgb(56_189_248_/_0.75),rgb(124_58_237_/_0.55),rgb(255_255_255_/_0.12),rgb(56_189_248_/_0.75))]" />
      <span className="absolute inset-[1px] rounded-[15px] bg-[#070910]" />
      <span className="relative">LL</span>
    </span>
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
    <section className="relative px-5 pb-14 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <motion.div variants={fadeUp} className="text-center lg:text-left">
          <Badge icon={Orbit}>Independent product lab</Badge>
          <h1 className="mx-auto mt-7 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:mx-0 lg:text-7xl">
            Lippa Labs builds intelligent software for real-world decisions.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-base font-semibold leading-8 text-slate-300 sm:text-lg lg:mx-0">
            Independent product studio creating AI-assisted tools across finance, markets, productivity, and behavioral systems.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <PrimaryLink href="/products">View Products</PrimaryLink>
            <SecondaryLink href="/contact">Contact</SecondaryLink>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-xl">
          <HeroLabConsole />
        </motion.div>
      </div>
    </section>
  );
}

function HeroLabConsole() {
  return (
    <div className="relative min-h-[430px] sm:min-h-[500px]">
      <motion.div
        aria-hidden="true"
        className="absolute inset-4 rounded-[3rem] bg-[conic-gradient(from_210deg_at_50%_50%,rgb(56_189_248_/_0.30),rgb(124_58_237_/_0.32),rgb(255_255_255_/_0.08),rgb(56_189_248_/_0.30))] blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-0 top-8 w-[82%] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.065] p-4 shadow-lab backdrop-blur-2xl sm:p-5"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-violet-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          </div>
          <span className="rounded-full bg-sky-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-sky-100">Live lab</span>
        </div>
        <div className="mt-5 grid gap-3">
          <div className="rounded-2xl border border-sky-300/20 bg-sky-300/[0.075] p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-200">Signal engine</p>
            <p className="mt-2 text-2xl font-black tracking-tight text-white">3 products moving</p>
          </div>
          {[
            ["decision.patterns", "behavior + context"],
            ["workflow.loop", "capture + reflect"],
            ["interface.state", "fast + mobile"]
          ].map(([key, value]) => (
            <div key={key} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/24 px-4 py-3 font-mono text-xs">
              <span className="text-slate-400">{key}</span>
              <span className="text-slate-100">{value}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <FloatingProductCard className="absolute right-0 top-0 w-[52%]" product={labProducts[0]} delay={0} />
      <FloatingProductCard className="absolute bottom-16 right-2 w-[58%]" product={labProducts[1]} delay={0.4} />
      <motion.div
        className="absolute bottom-0 left-4 w-[64%] rounded-[1.75rem] border border-white/10 bg-[#080b14]/86 p-4 shadow-lab backdrop-blur-2xl"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      >
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-violet-400/12 text-violet-100">
            <Code2 size={19} />
          </div>
          <div>
            <p className="text-sm font-black text-white">Future Experiments</p>
            <p className="text-xs font-bold text-slate-400">AI workflow systems</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-1.5">
          {[42, 70, 58, 86].map((height, index) => (
            <span key={height} className="rounded-full bg-gradient-to-t from-violet-500/55 to-sky-300/70" style={{ height: `${height}px`, opacity: 0.55 + index * 0.1 }} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function FloatingProductCard({ product, className, delay }: { product: (typeof labProducts)[number]; className: string; delay: number }) {
  const Icon = product.icon;

  return (
    <motion.div
      className={cn("rounded-[1.75rem] border border-white/10 bg-[#080b14]/82 p-4 shadow-lab backdrop-blur-2xl", className)}
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
    <Section eyebrow="Current Labs" title="Products with sharp edges and real-world use cases.">
      <ProductGrid />
    </Section>
  );
}

function BuilderSection() {
  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
      <motion.div variants={fadeUp} className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-lab backdrop-blur-2xl sm:p-8">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-400/18 blur-3xl" />
          <Badge icon={Fingerprint}>Founder / builder</Badge>
          <h2 className="relative mt-6 text-4xl font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl">Built by Nicholas Lippa</h2>
          <p className="relative mt-5 text-base font-semibold leading-8 text-slate-300">
            Lippa Labs is founder-led, product-obsessed, and built around fast iteration. The focus is simple: practical AI, clean interfaces, and tools that make hard decisions easier to act on.
          </p>
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
    <motion.div variants={fadeUp} whileHover={{ y: -6, rotate: -0.5 }} className="rounded-[1.75rem] border border-white/10 bg-[#080b14]/72 p-5 shadow-lab backdrop-blur-2xl">
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
        title="A compact lab portfolio across finance, markets, and adaptive systems."
        body="Lippa Labs products are built as focused systems: clean interfaces, AI-assisted feedback loops, and workflows that become more useful over time."
      />
      <Section>
        <ProductGrid />
      </Section>
    </SiteShell>
  );
}

function ProductGrid() {
  return (
    <motion.div variants={stagger} className="grid gap-5 lg:grid-cols-3">
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
  icon: Icon,
  description,
  features,
  accent,
  ring,
  iconTone
}: {
  name: string;
  category: string;
  status: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  accent: string;
  ring: string;
  iconTone: string;
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -9, rotateX: 1.5, rotateY: -1.5, transition: { duration: 0.22 } }}
      className={cn(
        "group relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b14]/78 p-5 shadow-lab backdrop-blur-2xl transition",
        ring
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-52 bg-gradient-to-br opacity-100", accent)} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(255_255_255_/_0.11),transparent_34rem)]" />
      <div className="relative flex min-h-[25.5rem] flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className={cn("grid h-12 w-12 place-items-center rounded-2xl border border-white/10 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)]", iconTone)}>
            <Icon size={23} />
          </div>
          <span className="rounded-full border border-white/10 bg-black/28 px-3 py-1 text-xs font-black text-slate-200">
            {status}
          </span>
        </div>
        <p className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-sky-200/90">{category}</p>
        <h2 className="mt-2 text-3xl font-black tracking-[-0.035em] text-white">{name}</h2>
        <p className="mt-4 text-sm font-semibold leading-7 text-slate-300">{description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-7">
          {features.map((feature) => (
            <span key={feature} className="rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1 text-xs font-black text-slate-300">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
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
            <h2 className="relative mt-4 text-4xl font-black tracking-[-0.04em] text-white">Independent, iterative, product-focused.</h2>
            <p className="relative mt-5 text-base font-semibold leading-8 text-slate-300">
              The studio builds in focused loops: identify a real workflow, ship a working surface, learn from usage, and refine until the product feels obvious.
            </p>
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
          <motion.form variants={fadeUp} className="grid gap-4 rounded-[2rem] border border-white/10 bg-[#080b14]/78 p-5 shadow-lab backdrop-blur-2xl sm:p-6">
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
    <section className="px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
      <motion.div variants={fadeUp} className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 text-white shadow-lab backdrop-blur-2xl sm:p-8 lg:p-10">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/18 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-violet-600/16 blur-3xl" />
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-200">Lippa Labs</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl">Building software that makes high-friction decisions easier to move through.</h2>
          </div>
          <PrimaryLink href="/contact">Start a conversation</PrimaryLink>
        </div>
      </motion.div>
    </section>
  );
}

function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <motion.div variants={fadeUp} className="mx-auto max-w-7xl">
        <Badge>{eyebrow}</Badge>
        <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-slate-300 sm:text-lg">{body}</p>
      </motion.div>
    </section>
  );
}

function Section({ eyebrow, title, children }: { eyebrow?: string; title?: string; children: React.ReactNode }) {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {title ? (
          <motion.div variants={fadeUp} className="mb-8 max-w-4xl sm:mb-10">
            {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-200">{eyebrow}</p> : null}
            <h2 className="mt-3 text-4xl font-black leading-[1.03] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">{title}</h2>
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
