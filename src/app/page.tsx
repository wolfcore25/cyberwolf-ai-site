import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[var(--cyber-border)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[var(--cyber-blue)] font-bold text-xl tracking-tight">
            CYBERWOLF
          </span>
          <span className="text-[var(--cyber-chrome)] text-sm font-light">AI SYSTEMS</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#services" className="hover:text-[var(--cyber-blue)] transition-colors">Services</a>
          <a href="#how-we-work" className="hover:text-[var(--cyber-blue)] transition-colors">How We Work</a>
          <a href="#portfolio" className="hover:text-[var(--cyber-blue)] transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-[var(--cyber-blue)] transition-colors">About</a>
          <a
            href="#contact"
            className="px-4 py-2 bg-[var(--cyber-blue)] text-white font-semibold rounded hover:bg-[var(--cyber-blue-dim)] transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="grid-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--cyber-blue)] rounded-full opacity-[0.04] blur-[120px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 pt-20">
        <div className="inline-block px-4 py-1 border border-[var(--cyber-blue)]/30 rounded-full text-[var(--cyber-blue)] text-xs tracking-widest uppercase mb-8">
          Production AI Agent Development
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-white">Cyber</span>
          <span className="text-[var(--cyber-blue)] glow-text">Wolf</span>
          <br />
          <span className="text-[var(--cyber-chrome)] text-3xl md:text-4xl font-light">
            AI Systems
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We build AI agents that answer phones, qualify leads, book appointments,
          and automate workflows — deployed on <em>your</em> accounts,
          owned by <em>you</em>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-[var(--cyber-blue)] text-white font-bold rounded glow-blue hover:bg-[var(--cyber-blue-dim)] transition-all"
          >
            Start Your Project →
          </a>
          <a
            href="#services"
            className="px-8 py-3 border border-gray-700 text-gray-300 rounded hover:border-[var(--cyber-blue)]/50 hover:text-white transition-all"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: "🤖",
    title: "AI Agent Development",
    desc: "Custom autonomous agents built with OpenClaw, Claude, and GPT-4o. From simple chatbots to complex multi-step reasoning systems that handle real business logic.",
  },
  {
    icon: "📞",
    title: "Voice AI & Phone Automation",
    desc: "AI-powered phone systems using ElevenLabs and Twilio. Inbound call handling, outbound campaigns, voicemail drops, and natural-sounding voice agents.",
  },
  {
    icon: "🔗",
    title: "Multi-Agent Architecture",
    desc: "Orchestrated AI systems where specialized agents collaborate — research, execute, verify, and report. Enterprise-grade reliability with startup speed.",
  },
  {
    icon: "🎓",
    title: "AI Consultation & Training",
    desc: "Hands-on training for your team. We demystify AI tooling and help you build internal capabilities. From prompt engineering to full agent deployment.",
  },
  {
    icon: "⚡",
    title: "Workflow Automation",
    desc: "Connect your CRM, APIs, SMS, and email into intelligent automated pipelines. Reduce manual work by 80% with AI-driven decision routing.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We <span className="text-[var(--cyber-blue)]">Build</span>
          </h2>
          <div className="gradient-line max-w-xs mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card bg-[var(--cyber-gray)] rounded-lg p-6"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 px-6 bg-[var(--cyber-dark)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How We <span className="text-[var(--cyber-blue)]">Work</span>
        </h2>
        <div className="gradient-line max-w-xs mx-auto mb-12" />

        <div className="border-glow rounded-xl p-8 md:p-12 bg-[var(--cyber-gray)]">
          <p className="text-2xl md:text-3xl font-bold text-white mb-6">
            We build on <span className="text-[var(--cyber-blue)]">YOUR</span>{" "}
            accounts.
            <br />
            You own <span className="text-[var(--cyber-blue)]">everything</span>.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            No vendor lock-in. No proprietary platforms you can&apos;t leave.
            Every agent, every API key, every line of code lives in your
            infrastructure. If we part ways, your systems keep running.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We map your workflows and identify where AI agents create the most leverage.",
              },
              {
                step: "02",
                title: "Build & Deploy",
                desc: "Rapid development on your accounts. Working prototypes in days, not months.",
              },
              {
                step: "03",
                title: "Optimize & Scale",
                desc: "Monitor performance, refine behavior, and expand capabilities as you grow.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-[var(--cyber-blue)] font-mono text-sm mb-2">
                  {item.step}
                </div>
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recent <span className="text-[var(--cyber-blue)]">Work</span>
          </h2>
          <div className="gradient-line max-w-xs mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "AI Phone Agent",
              desc: "Inbound call handling system with natural voice, appointment booking, and CRM integration. Handles 200+ calls/day.",
              tag: "Voice AI",
            },
            {
              title: "Multi-Agent Workflow",
              desc: "Orchestrated system with research, drafting, and quality-check agents. Reduced manual review time by 85%.",
              tag: "Agent Architecture",
            },
            {
              title: "Lead Qualification Bot",
              desc: "AI agent that qualifies inbound leads via SMS and voice, scoring and routing to the right sales rep in real-time.",
              tag: "Automation",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="service-card bg-[var(--cyber-gray)] rounded-lg overflow-hidden"
            >
              {/* Placeholder image area */}
              <div className="h-48 bg-gradient-to-br from-[var(--cyber-gray)] to-black flex items-center justify-center border-b border-[var(--cyber-border)]">
                <span className="text-gray-600 text-sm">Screenshot coming soon</span>
              </div>
              <div className="p-6">
                <span className="text-xs text-[var(--cyber-blue)] font-mono uppercase tracking-wider">
                  {p.tag}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[var(--cyber-dark)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About the <span className="text-[var(--cyber-blue)]">Founder</span>
          </h2>
          <div className="gradient-line max-w-xs mx-auto" />
        </div>

        <div className="border-glow rounded-xl p-8 md:p-12 bg-[var(--cyber-gray)] text-center">
          {/* Avatar placeholder */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--cyber-blue)] to-[var(--cyber-blue-dim)] mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-black">
            GS
          </div>
          <h3 className="text-2xl font-bold mb-2">Greg Schwartz</h3>
          <p className="text-[var(--cyber-blue)] text-sm font-mono mb-6">
            Founder & AI Engineer
          </p>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            20+ years of enterprise sales and business development, now building
            production AI systems daily. Graduate of the ODSC AI Engineering
            Accelerator program. I don&apos;t just talk about AI — I deploy agents
            that handle real calls, real customers, and real revenue. Every system
            I build runs in production, not in a demo.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s <span className="text-[var(--cyber-blue)]">Build</span>
        </h2>
        <div className="gradient-line max-w-xs mx-auto mb-8" />
        <p className="text-gray-400 text-lg mb-10">
          Ready to deploy AI agents that actually work? Let&apos;s talk.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              label: "Email",
              value: "Gregory.schwartz525@gmail.com",
              href: "mailto:Gregory.schwartz525@gmail.com",
            },
            {
              label: "Upwork",
              value: "View Profile →",
              href: "https://www.upwork.com/freelancers/~01placeholder",
            },
            {
              label: "LinkedIn",
              value: "Connect →",
              href: "https://www.linkedin.com/in/placeholder",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="service-card bg-[var(--cyber-gray)] rounded-lg p-6 block text-center"
            >
              <div className="text-xs text-[var(--cyber-blue)] font-mono uppercase tracking-wider mb-2">
                {c.label}
              </div>
              <div className="text-white text-sm">{c.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--cyber-border)] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div>
          © {new Date().getFullYear()} CyberWolf AI Systems. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-[var(--cyber-blue)] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[var(--cyber-blue)] transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <HowWeWork />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
