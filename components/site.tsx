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
  Cpu,
  LineChart,
  LockKeyhole,
  Mail,
  MessageSquare,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
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
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.2, 0.8, 0.2, 1] } }
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } }
};

const products = [
  {
    name: "SpendFence",
    category: "Adaptive Budgeting",
    status: "Active Development",
    icon: BarChart3,
    description:
      "AI-assisted budgeting platform focused on spending fences, pacing awareness, adaptive insights, and clean financial decision support.",
    features: ["Adaptive budgeting", "AI insights", "Bank syncing", "Pacing analysis", "Intelligent fence recommendations"],
    accent: "from-indigo-500/18 via-sky-500/10 to-transparent"
  },
  {
    name: "TradersDelight",
    category: "Trading Journal",
    status: "In Development",
    icon: LineChart,
    description:
      "Trading review and journaling platform focused on disciplined execution, ticker tracking, AI-assisted trade reflection, and behavioral analysis.",
    features: ["Trade review", "Ticker tracking", "Execution notes", "AI-assisted reflection", "Behavioral analysis"],
    accent: "from-cyan-500/16 via-indigo-500/10 to-transparent"
  },
  {
    name: "Future Labs",
    category: "Experimental Systems",
    status: "Research Pipeline",
    icon: Cpu,
    description:
      "Future tools exploring AI-assisted workflows, behavioral systems, and practical automation for everyday decisions.",
    features: ["Decision support", "Workflow intelligence", "Practical automation", "Adaptive systems", "Calm product surfaces"],
    accent: "from-violet-500/16 via-slate-500/10 to-transparent"
  }
];

const values = [
  { title: "Practical AI", body: "AI should clarify decisions, not create another layer of noise.", icon: Bot },
  { title: "User Control", body: "Recommendations stay visible, explainable, and optional.", icon: ShieldCheck },
  { title: "Clean Design", body: "Interfaces should feel calm, readable, and efficient on first use.", icon: Sparkles },
  { title: "Fast Iteration", body: "Small, focused releases keep products close to real user needs.", icon: Rocket },
  { title: "Behavioral Insight", body: "Useful software respects patterns, timing, pressure, and context.", icon: BrainCircuit },
  { title: "Privacy Awareness", body: "Sensitive workflows deserve careful data boundaries from day one.", icon: LockKeyhole }
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-dvh overflow-x-clip">
      <div className="page-grid pointer-events-none fixed inset-0 opacity-70" />
      <div className="noise pointer-events-none fixed inset-0 opacity-[0.025] dark:opacity-[0.045]" />
      <div className="pointer-events-none fixed left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl [animation:glow-drift_9s_ease-in-out_infinite]" />
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
    <header className="sticky top-0 z-50 border-b border-slate-900/8 bg-white/70 px-4 pt-[env(safe-area-inset-top)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/62">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 py-3">
        <Link href="/" aria-label="Lippa Labs home" className="group flex min-w-0 items-center gap-3">
          <BrandMark />
          <span className="truncate text-base font-black tracking-tight text-slate-950 dark:text-white sm:text-lg">Lippa Labs</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-slate-900/8 bg-white/70 p-1 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.7)] dark:border-white/10 dark:bg-white/[0.055] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-black transition",
                pathname === item.href
                  ? "bg-slate-950 text-white shadow-soft dark:bg-white dark:text-slate-950"
                  : "text-slate-600 hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden min-h-10 items-center rounded-2xl bg-slate-950 px-4 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950 sm:inline-flex">
          Contact
        </Link>
      </div>
      <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-3 text-sm font-black text-slate-600 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "shrink-0 rounded-full border px-3 py-1.5 transition",
              pathname === item.href
                ? "border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:text-indigo-200"
                : "border-slate-900/8 bg-white/55 dark:border-white/10 dark:bg-white/[0.055] dark:text-slate-300"
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
    <footer className="relative z-10 border-t border-slate-900/8 px-5 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <BrandMark />
          <div>
            <p className="font-black text-slate-950 dark:text-white">Lippa Labs</p>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Building practical apps for real-life decisions.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-bold text-slate-500 dark:text-slate-400">
          <Link href="/privacy" className="hover:text-slate-950 dark:hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:text-slate-950 dark:hover:text-white">Terms</Link>
          <Link href="/contact" className="hover:text-slate-950 dark:hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

function BrandMark() {
  return (
    <span aria-hidden="true" className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-2xl border border-slate-900/8 bg-slate-950 text-sm font-black text-white shadow-card dark:border-white/10 dark:bg-white dark:text-slate-950">
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgb(99_102_241_/_0.42),transparent_55%)]" />
      <span className="relative">LL</span>
    </span>
  );
}

export function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <MissionSection />
      <ProductsPreview />
      <ValuesSection />
      <CtaBand />
    </SiteShell>
  );
}

function Hero() {
  return (
    <section className="relative px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <motion.div variants={fadeUp} className="text-center lg:text-left">
          <Badge>Independent software studio</Badge>
          <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[1.02] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:mx-0 lg:text-7xl">
            Building practical apps for real-life decisions.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-8 text-slate-600 dark:text-slate-300 sm:text-lg lg:mx-0">
            Lippa Labs creates clean, AI-assisted software designed to reduce friction, surface patterns, and help people make better everyday decisions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <PrimaryLink href="/products">View Products</PrimaryLink>
            <SecondaryLink href="/contact">Contact</SecondaryLink>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-[linear-gradient(135deg,rgb(99_102_241_/_0.24),rgb(14_165_233_/_0.12),transparent)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/72 p-4 shadow-glow backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70 sm:p-5">
            <StudioPreview />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StudioPreview() {
  return (
    <div className="grid gap-3">
      <div className="flex items-center justify-between rounded-3xl border border-slate-900/8 bg-slate-950 p-4 text-white dark:border-white/10">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-indigo-200">Product pipeline</p>
          <p className="mt-2 text-2xl font-black">3 focused systems</p>
        </div>
        <Sparkles className="text-indigo-200" size={22} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <PreviewTile icon={BarChart3} title="SpendFence" body="Adaptive budgeting with pacing intelligence." />
        <PreviewTile icon={LineChart} title="TradersDelight" body="Trading journal for review and discipline." />
      </div>
      <div className="rounded-3xl border border-slate-900/8 bg-white/80 p-4 dark:border-white/10 dark:bg-white/[0.055]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-black text-slate-950 dark:text-white">Studio principles</p>
          <span className="rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-black text-indigo-700 dark:text-indigo-200">Practical AI</span>
        </div>
        <div className="mt-4 grid gap-2">
          {["Clear interfaces", "Behavioral insight", "Privacy-aware systems"].map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-2xl bg-slate-950/[0.035] px-3 py-2 text-sm font-bold text-slate-700 dark:bg-white/[0.055] dark:text-slate-300">
              <CheckCircle2 size={15} className="text-indigo-500" /> {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewTile({ icon: Icon, title, body }: { icon: LucideIcon; title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-slate-900/8 bg-white/80 p-4 dark:border-white/10 dark:bg-white/[0.055]">
      <Icon size={20} className="text-indigo-600 dark:text-indigo-300" />
      <p className="mt-3 font-black text-slate-950 dark:text-white">{title}</p>
      <p className="mt-1 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400">{body}</p>
    </div>
  );
}

function MissionSection() {
  return (
    <Section eyebrow="Mission" title="Software should reduce friction.">
      <motion.div variants={fadeUp} className="max-w-4xl rounded-[2rem] border border-slate-900/8 bg-white/70 p-6 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055] sm:p-8">
        <p className="text-lg font-semibold leading-8 text-slate-700 dark:text-slate-300">
          Lippa Labs focuses on clarity over complexity, thoughtful UX, practical AI, and tools grounded in real human behavior. The goal is to build systems that feel calm instead of overwhelming, especially around decisions that people revisit every day.
        </p>
      </motion.div>
    </Section>
  );
}

function ProductsPreview() {
  return (
    <Section eyebrow="Products" title="Focused products with room to grow.">
      <ProductGrid />
    </Section>
  );
}

export function ProductsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Products" title="Applications for finance, review, and practical decision support." body="Lippa Labs products are built around clean product surfaces, useful AI assistance, and feedback loops that help people understand behavior over time." />
      <Section>
        <ProductGrid />
      </Section>
    </SiteShell>
  );
}

function ProductGrid() {
  return (
    <motion.div variants={stagger} className="grid gap-5 lg:grid-cols-3">
      {products.map((product) => (
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
  accent
}: {
  name: string;
  category: string;
  status: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  accent: string;
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-[2rem] border border-slate-900/8 bg-white/72 p-5 shadow-card backdrop-blur-xl transition dark:border-white/10 dark:bg-white/[0.055]"
    >
      <div className={cn("absolute inset-x-0 top-0 h-40 bg-gradient-to-br opacity-90", accent)} />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white shadow-soft dark:bg-white dark:text-slate-950">
            <Icon size={22} />
          </div>
          <span className="rounded-full border border-slate-900/8 bg-white/70 px-3 py-1 text-xs font-black text-slate-600 dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-300">
            {status}
          </span>
        </div>
        <p className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">{category}</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 dark:text-white">{name}</h2>
        <p className="mt-3 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {features.map((feature) => (
            <span key={feature} className="rounded-full border border-slate-900/8 bg-white/68 px-2.5 py-1 text-xs font-black text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
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
    <Section eyebrow="Values" title="Built with restraint, clarity, and momentum.">
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
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-[1.75rem] border border-slate-900/8 bg-white/68 p-5 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055]"
    >
      <div className="absolute -right-10 -top-12 h-28 w-28 rounded-full bg-indigo-500/12 blur-2xl" />
      <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-indigo-500/10 text-indigo-700 dark:text-indigo-200">
        <Icon size={20} />
      </div>
      <h3 className="relative mt-5 text-lg font-black text-slate-950 dark:text-white">{title}</h3>
      <p className="relative mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">{body}</p>
    </motion.article>
  );
}

export function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About"
        title="A founder-led studio building useful software with modern AI."
        body="Lippa Labs is an independent software studio founded by Nicholas Lippa. The studio focuses on products that combine clean interfaces, practical AI, and real-world usefulness."
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div variants={fadeUp} className="rounded-[2rem] border border-slate-900/8 bg-slate-950 p-6 text-white shadow-glow dark:border-white/10 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-indigo-200">Founder-led development</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight">Independent, iterative, product-focused.</h2>
            <p className="mt-4 text-base font-semibold leading-8 text-slate-300">
              Lippa Labs builds in focused loops: ship useful surfaces, learn from real usage, and refine the product until the workflow feels natural.
            </p>
          </motion.div>
          <motion.div variants={stagger} className="grid gap-4">
            {[
              ["Modern AI", "AI assistance is used to surface patterns, reduce friction, and support reflection."],
              ["Clean interfaces", "Products are designed to feel calm, legible, and trustworthy across devices."],
              ["Real-world practicality", "Every product starts with a specific human workflow, not a vague technology demo."],
              ["User-centered philosophy", "People should stay in control of decisions, especially in sensitive domains like finance."]
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
    <motion.div variants={fadeUp} className="rounded-[1.5rem] border border-slate-900/8 bg-white/70 p-5 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055]">
      <h3 className="font-black text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">{body}</p>
    </motion.div>
  );
}

export function ContactPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Contact" title="Let’s talk about products, partnerships, or support." body="For business, product, and support inquiries, reach out through the form below or email the studio directly." />
      <Section>
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div variants={fadeUp} className="rounded-[2rem] border border-slate-900/8 bg-white/70 p-6 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055]">
            <Mail className="text-indigo-600 dark:text-indigo-300" size={24} />
            <h2 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">Contact details</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
              Email: <span className="font-black text-slate-950 dark:text-white">hello@lippalabs.com</span>
            </p>
            <div className="mt-5 grid gap-2">
              {["LinkedIn placeholder", "X/Twitter placeholder", "GitHub placeholder"].map((item) => (
                <span key={item} className="rounded-2xl bg-slate-950/[0.035] px-3 py-2 text-sm font-bold text-slate-600 dark:bg-white/[0.055] dark:text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.form variants={fadeUp} className="grid gap-4 rounded-[2rem] border border-slate-900/8 bg-white/74 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055] sm:p-6">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" placeholder="you@example.com" type="email" />
            <label className="grid gap-2 text-sm font-black text-slate-700 dark:text-slate-200">
              Message
              <textarea className="min-h-36 rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white" placeholder="Tell us what you are working on or what you need." />
            </label>
            <button type="button" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950">
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
    <label className="grid gap-2 text-sm font-black text-slate-700 dark:text-slate-200">
      {label}
      <input type={type} className="min-h-12 rounded-2xl border border-slate-900/10 bg-white/80 px-4 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white" placeholder={placeholder} />
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
          <motion.div variants={fadeUp} className="rounded-[1.5rem] border border-slate-900/8 bg-white/70 p-5 text-sm font-semibold leading-7 text-slate-600 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055] dark:text-slate-300">
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
      <motion.div variants={fadeUp} className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-900/8 bg-slate-950 p-6 text-white shadow-glow dark:border-white/10 sm:p-8 lg:p-10">
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-indigo-200">Lippa Labs</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">Building calm software for high-friction decisions.</h2>
          </div>
          <PrimaryLink href="/contact" light>Start a conversation</PrimaryLink>
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
        <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base font-semibold leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">{body}</p>
      </motion.div>
    </section>
  );
}

function Section({ eyebrow, title, children }: { eyebrow?: string; title?: string; children: React.ReactNode }) {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {title ? (
          <motion.div variants={fadeUp} className="mb-8 max-w-4xl">
            {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">{eyebrow}</p> : null}
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">{title}</h2>
          </motion.div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-900/8 bg-white/70 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-indigo-700 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.72)] backdrop-blur dark:border-white/10 dark:bg-white/[0.055] dark:text-indigo-200">
      <Radar size={14} /> {children}
    </span>
  );
}

function PrimaryLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-black shadow-soft transition hover:-translate-y-0.5",
        light ? "bg-white text-slate-950" : "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
      )}
    >
      {children} <ArrowRight size={17} />
    </Link>
  );
}

function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-slate-900/8 bg-white/70 px-5 text-sm font-black text-slate-700 shadow-card backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.055] dark:text-slate-200">
      {children} <ChevronRight size={17} />
    </Link>
  );
}
