import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
} from "lucide-react";

const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 5 + 2,
  duration: Math.random() * 6 + 6,
}));

const features = [
  {
    icon: <BrainCircuit size={26} />,
    title: "AI Resume Analysis",
    text: "Smart ATS resume analysis powered by AI.",
  },
  {
    icon: <BriefcaseBusiness size={26} />,
    title: "Job Matching",
    text: "Get personalized job recommendations instantly.",
  },
  {
    icon: <Sparkles size={26} />,
    title: "AI Career Assistant",
    text: "Practice interviews and improve your career.",
  },
];

export default function WelcomePage() {
  const handleEnter = () => {
    console.log("Entering AuraHire...");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#25104d_0%,#000000_70%)]" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -top-48 left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-purple-700 blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500 blur-[160px]"
      />

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* PARTICLES */}

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -45, 0],
            opacity: [0.15, 0.9, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
          }}
        />
      ))}

      {/* NAVBAR */}

      <nav className="relative z-20 flex items-center justify-between px-12 py-8">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex items-center gap-4"
        >

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl">

            <Sparkles className="text-violet-400" size={28} />

          </div>

          <div>

            <h1 className="text-2xl font-bold tracking-wide">

              Aura<span className="text-violet-400">Hire</span>

            </h1>

            <p className="text-xs tracking-[5px] text-white/50">

              AI CAREER PLATFORM

            </p>

          </div>

        </motion.div>

        <motion.button

          whileHover={{ scale: 1.05 }}

          whileTap={{ scale: .95 }}

          className="rounded-full border border-white/20 bg-white/5 px-7 py-3 backdrop-blur-xl"

        >

          Login

        </motion.button>

      </nav>

      {/* HERO */}

      <section className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-8 pt-12">

        <motion.div

          initial={{ opacity: 0, y: 40 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className="text-center"

        >

          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-violet-500/40 bg-violet-500/10 px-6 py-2 backdrop-blur-xl">

            <Sparkles className="text-violet-400" size={18} />

            <span className="text-sm tracking-widest">

              FUTURE OF AI RECRUITMENT

            </span>

          </div>

          <h1 className="max-w-5xl text-6xl font-black leading-tight md:text-8xl">

            Build Your

            <br />

            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">

              Dream Career

            </span>

          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-white/60">

            Experience next-generation hiring with intelligent resume analysis,

            AI interviews, personalized job matching and career guidance.

          </p>
          {/* CTA Buttons */}

          <div className="mt-14 flex flex-wrap items-center justify-center gap-6">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnter}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-10 py-5 font-semibold shadow-[0_0_40px_rgba(124,58,237,.45)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Enter AuraHire
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>

              <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
              className="rounded-full border border-white/20 bg-white/5 px-10 py-5 backdrop-blur-xl transition hover:border-violet-500"
            >
              Learn More
            </motion.button>

          </div>

        </motion.div>

        {/* FEATURES */}

        <div className="mt-24 grid w-full gap-8 md:grid-cols-3">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .2,
                duration: .8
              }}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-lg">

                  {item.icon}

                </div>

                <h3 className="mb-4 text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="leading-8 text-white/60">

                  {item.text}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

        {/* FLOATING GLASS CARD */}

        <motion.div

          animate={{
            y: [0, -15, 0]
          }}

          transition={{
            duration: 6,
            repeat: Infinity
          }}

          className="relative mt-24 w-full max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl"

        >

          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-violet-600/30 blur-[90px]" />

          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-cyan-500/20 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center text-center">

            <span className="mb-4 rounded-full border border-violet-500/40 bg-violet-500/10 px-5 py-2 text-sm tracking-widest">

              AI POWERED CAREER ECOSYSTEM

            </span>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight">

              Everything You Need To Land Your Dream Job

            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-white/60">

              AuraHire combines artificial intelligence, resume optimization,
              interview coaching, portfolio management and job discovery into
              one futuristic platform.

            </p>

          </div>

        </motion.div>
        {/* ================= STATS ================= */}

        <div className="mt-24 grid w-full max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">

          {[
            { number: "50K+", label: "Active Users" },
            { number: "10K+", label: "Jobs Matched" },
            { number: "95%", label: "ATS Score Accuracy" },
            { number: "24/7", label: "AI Assistant" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >
              <h2 className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-5xl font-black text-transparent">
                {item.number}
              </h2>

              <p className="mt-4 text-white/60 tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

        {/* ================= BIG CTA ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative mt-28 w-full max-w-6xl overflow-hidden rounded-[40px] border border-violet-500/20 bg-gradient-to-br from-violet-900/20 to-cyan-900/10 p-16 backdrop-blur-3xl"
        >

          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

          <div className="relative z-10 flex flex-col items-center">

            <motion.h2
              initial={{ y: 25 }}
              whileInView={{ y: 0 }}
              transition={{ duration: .8 }}
              viewport={{ once: true }}
              className="text-center text-5xl font-black md:text-6xl"
            >
              Ready To Shape
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Your Future?
              </span>
            </motion.h2>

            <p className="mt-8 max-w-3xl text-center text-lg leading-9 text-white/60">
              Join thousands of professionals using artificial intelligence to
              build stronger resumes, crack interviews and discover the perfect
              opportunities.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px rgba(139,92,246,.6)"
              }}
              whileTap={{ scale: .95 }}
              onClick={handleEnter}
              className="mt-12 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-12 py-5 text-lg font-bold"
            >
              Get Started Free
            </motion.button>

          </div>

        </motion.div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="relative z-20 mt-28 border-t border-white/10 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 md:flex-row">

          <div>

            <h3 className="text-2xl font-bold">
              Aura<span className="text-violet-400">Hire</span>
            </h3>

            <p className="mt-2 text-white/40">
              AI Powered Career Platform © 2026
            </p>

          </div>

          <div className="flex gap-8 text-white/50">

            <a href="#" className="transition hover:text-violet-400">
              About
            </a>

            <a href="#" className="transition hover:text-violet-400">
              Features
            </a>

            <a href="#" className="transition hover:text-violet-400">
              Contact
            </a>

            <a href="#" className="transition hover:text-violet-400">
              Privacy
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}        