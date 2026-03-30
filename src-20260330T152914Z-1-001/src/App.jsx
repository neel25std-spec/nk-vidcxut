import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const projects = [
  {
    title: 'YouTube Cinematic Travel Edit',
    label: 'Travel Storytelling',
    description:
      'Aerial transitions, emotional pacing, layered sound moments, and a polished grade designed for immersive long-form viewing.',
    gradient: 'from-cyan-400/70 via-sky-500/20 to-transparent',
    stats: '4K timeline | Drone montage | Narrative pacing',
  },
  {
    title: 'Brand Advertisement Video',
    label: 'Commercial Campaign',
    description:
      'Luxury ad film editing with rhythm-first cuts, product-focused framing, motion text, and conversion-ready delivery.',
    gradient: 'from-fuchsia-500/70 via-violet-500/20 to-transparent',
    stats: 'Paid ads | Product reveals | Clean typography',
  },
  {
    title: 'Instagram Reel Campaign',
    label: 'Social Growth',
    description:
      'Retention-driven short-form edits built for hooks, fast value delivery, and visual consistency across a full campaign series.',
    gradient: 'from-blue-400/70 via-indigo-500/20 to-transparent',
    stats: 'Vertical format | Hook timing | Series templates',
  },
  {
    title: 'Short Film Editing',
    label: 'Narrative Cinema',
    description:
      'Story-led post-production with mood-sensitive cuts, dialogue shaping, and cinematic finishing for emotional impact.',
    gradient: 'from-emerald-400/70 via-cyan-500/15 to-transparent',
    stats: 'Story arc | Dialogue polish | Festival-ready finish',
  },
];

const services = [
  'Video Editing',
  'Color Grading',
  'Motion Graphics',
  'Social Media Content Editing',
];

const skillBars = [
  { label: 'Premiere Pro', value: 95 },
  { label: 'After Effects', value: 88 },
  { label: 'DaVinci Resolve', value: 84 },
];

const testimonials = [
  {
    quote:
      'Neelanjan turned our raw footage into a premium launch film that instantly felt more valuable than what we imagined.',
    name: 'Arjun Mehta',
    role: 'Marketing Director, Luxe Active',
  },
  {
    quote:
      'He understands speed and polish at the same time. Our reels finally looked cinematic without losing performance.',
    name: 'Sara Khan',
    role: 'Social Media Strategist',
  },
  {
    quote:
      'Every cut felt intentional. The final short film had the emotional shape and visual finish we were missing in post.',
    name: 'Ritwik Bose',
    role: 'Independent Filmmaker',
  },
];

const socialLinks = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: (
      <path d="M21.6 7.2a2.72 2.72 0 0 0-1.92-1.92C18 4.8 12 4.8 12 4.8s-6 0-7.68.48A2.72 2.72 0 0 0 2.4 7.2 28.8 28.8 0 0 0 1.92 12a28.8 28.8 0 0 0 .48 4.8 2.72 2.72 0 0 0 1.92 1.92C6 19.2 12 19.2 12 19.2s6 0 7.68-.48a2.72 2.72 0 0 0 1.92-1.92 28.8 28.8 0 0 0 .48-4.8 28.8 28.8 0 0 0-.48-4.8ZM9.6 15.12V8.88L15.36 12Z" />
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <>
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.5" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <>
        <path d="M6.5 9.2V19" />
        <path d="M6.44 6.37a1.18 1.18 0 1 1 0-.01" />
        <path d="M11 19v-5.28a2.82 2.82 0 0 1 5.64 0V19" />
        <path d="M11 10.2V19" />
      </>
    ),
  },
];

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-white/5 shadow-glow backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300/80 sm:text-lg">{description}</p>
    </div>
  );
}

function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      setPosition({ x: event.clientX - 120, y: event.clientY - 120 });
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-30 hidden h-60 w-60 rounded-full md:block"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 18, stiffness: 120, mass: 0.45 }}
      style={{
        background:
          'radial-gradient(circle at center, rgba(77, 226, 255, 0.16), rgba(111, 92, 255, 0.08) 35%, transparent 70%)',
        filter: 'blur(12px)',
      }}
    />
  );
}

function Navigation() {
  const items = [
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Showreel', '#showreel'],
    ['Services', '#services'],
    ['Contact', '#contact'],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/10 bg-slate-950/60 px-5 py-3 shadow-glow backdrop-blur-xl">
        <a href="#home" className="font-display text-sm font-bold uppercase tracking-[0.35em] text-white">
          NK
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {items.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-slate-300 transition hover:text-cyan-100"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
        >
          Hire Me
        </a>
      </div>
      <div className="mx-auto mt-3 flex max-w-7xl gap-2 overflow-x-auto px-2 pb-1 lg:hidden">
        {items.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="whitespace-nowrap rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-xs text-slate-300 shadow-glow backdrop-blur-xl transition hover:border-cyan-300/35 hover:text-cyan-100"
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}

function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden px-6 pb-20 pt-24 sm:px-10 lg:px-16"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(77,226,255,0.12),transparent_22%),radial-gradient(circle_at_80%_0%,rgba(111,92,255,0.18),transparent_24%),linear-gradient(180deg,#070817_0%,#04050d_100%)]" />
      <div className="absolute inset-0 -z-10 bg-hero-grid opacity-80" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black_45%,transparent_85%)]" />
      <motion.div
        aria-hidden="true"
        className="absolute left-[8%] top-16 -z-10 h-80 w-80 rounded-full bg-cyan-400/15 blur-[120px]"
        style={{ transform: `translateY(${offset * -0.16}px)` }}
        animate={{ opacity: [0.45, 0.62, 0.45] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[-6rem] top-24 -z-10 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]"
        style={{ transform: `translateY(${offset * -0.1}px)` }}
        animate={{ x: [0, -16, 0], y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200/90"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            Cinematic Post Production
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="mt-8 max-w-4xl font-display text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
          >
            Neelanjan Karmakar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.9 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300/85 sm:text-xl"
          >
            Professional Video Editor | 5+ Years Experience
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.9 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-400"
          >
            A premium portfolio built like a futuristic production studio interface, showcasing
            edits for brands, creators, and films that need every frame to feel expensive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:shadow-neon"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
            >
              Hire Me
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.8 }}
            className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3"
          >
            {[
              ['5+', 'Years of editorial experience'],
              ['120+', 'Campaign, reel, and film deliveries'],
              ['24h', 'Fast-turnaround support available'],
            ].map(([value, copy]) => (
              <GlassCard key={value} className="p-5">
                <p className="font-display text-3xl font-bold text-white">{value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300/70">{copy}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative mx-auto w-full max-w-xl"
          style={{ transform: `translateY(${offset * -0.04}px)` }}
        >
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-cyan-400/30 via-transparent to-violet-500/20 blur-3xl" />
          <GlassCard className="relative overflow-hidden p-5">
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-cyan-400/30 via-white/5 to-violet-500/30 blur-2xl" />
            <div className="relative rounded-[28px] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
                <span>Showreel Interface</span>
                <span>4K UHD</span>
              </div>
              <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(77,226,255,0.18),transparent_30%),linear-gradient(160deg,rgba(12,16,35,0.98),rgba(6,8,18,0.95))]">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(77,226,255,0.04)_50%,transparent_100%)] bg-[size:100%_14px] opacity-70" />
                <motion.div
                  aria-hidden="true"
                  className="absolute left-6 top-8 h-36 w-36 rounded-full border border-cyan-400/20 bg-cyan-400/10 blur-sm"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.82, 0.55] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                  aria-hidden="true"
                  className="absolute bottom-10 right-4 h-56 w-44 rounded-[2rem] bg-gradient-to-t from-violet-500/20 via-cyan-400/10 to-transparent"
                  animate={{ y: [0, -16, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <div className="absolute inset-x-6 bottom-6 rounded-[24px] border border-white/10 bg-slate-950/65 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                        Live Timeline
                      </p>
                      <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                        Premium story-driven edits
                      </h2>
                    </div>
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-neon">
                      ▶
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[72, 92, 56].map((width, index) => (
                      <div key={width} className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-slate-500">
                          <span>Layer 0{index + 1}</span>
                          <span>{['Audio', 'Color', 'Motion'][index]}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/5">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                            initial={{ width: 0 }}
                            animate={{ width: `${width}%` }}
                            transition={{ delay: 0.75 + index * 0.2, duration: 1.15 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <motion.section
      id="about"
      className="px-6 py-24 sm:px-10 lg:px-16"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <GlassCard className="relative overflow-hidden p-8 sm:p-10">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-cyan-400/10 via-transparent to-violet-500/20" />
          <SectionHeading
            eyebrow="About Me"
            title="Editing built around emotion, clarity, and high-end visual polish."
            description="For five years, I’ve shaped raw footage into cinematic stories for YouTube, ads, reels, and short films, balancing speed with a premium finish."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              '5 years of editing experience across multiple content formats',
              'Expertise in cinematic editing, ads, reels, and creator content',
              'Premium pacing, transitions, and visual rhythm',
              'Collaborative post-production from rough cut to final export',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-sm leading-6 text-slate-300/85"
              >
                {item}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-8 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/75">Toolkit</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                Post-production expertise
              </h3>
            </div>
            <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              Studio-grade workflows
            </div>
          </div>

          <div className="mt-10 space-y-7">
            {skillBars.map((skill, index) => (
              <div key={skill.label}>
                <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 shadow-neon"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              ['Cinematic Editing', 'Narrative pacing with atmosphere'],
              ['Commercial Ads', 'Sharper brand storytelling'],
              ['Creator Content', 'Platform-smart editing systems'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </motion.section>
  );
}

function Projects() {
  return (
    <motion.section
      id="projects"
      className="px-6 py-24 sm:px-10 lg:px-16"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected edits presented like premium production previews."
          description="Fictional project cards designed to feel realistic and client-facing, with hover motion, cinematic framing, and editorial context."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.28 }}
              className="group"
            >
              <GlassCard className="h-full overflow-hidden p-5">
                <div className="relative aspect-video overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/60 p-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  <motion.div
                    aria-hidden="true"
                    className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-white/10 blur-3xl"
                    animate={{ x: [0, 58, 0], y: [0, 18, 0] }}
                    transition={{ duration: 9 + index, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-slate-300/60">
                        <span>{project.label}</span>
                        <span>0{index + 1}</span>
                      </div>
                      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-cyan-200/90">
                        <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-neon" />
                        Thumbnail Preview
                      </div>
                      <h3 className="mt-5 max-w-sm font-display text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-6 text-slate-300/75">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-8">
                      <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-2">
                        {['Scene', 'Color', 'FX'].map((item) => (
                          <div
                            key={item}
                            className="rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-center text-xs uppercase tracking-[0.28em] text-slate-300/60"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                          {project.stats}
                        </p>
                        <a
                          href="#showreel"
                          className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition group-hover:bg-cyan-300/20"
                        >
                          Watch Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Showreel() {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.section
      id="showreel"
      className="px-6 py-24 sm:px-10 lg:px-16"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Showreel"
          title="A glowing player frame that keeps the first load fast."
          description="The embedded reel stays lazy until requested, preserving performance while still giving the page a strong cinematic centerpiece."
          centered
        />

        <GlassCard className="relative mt-12 overflow-hidden p-4 sm:p-6">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-cyan-400/20 via-transparent to-violet-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/85 shadow-neon">
            <div className="absolute left-6 top-5 z-10 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-300/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
            <div className="relative aspect-video bg-[radial-gradient(circle_at_top,rgba(77,226,255,0.12),transparent_28%),linear-gradient(180deg,rgba(4,5,13,0.25),rgba(4,5,13,0.95))]">
              <AnimatePresence mode="wait">
                {loaded ? (
                  <motion.iframe
                    key="video"
                    title="Neelanjan Karmakar showreel"
                    className="h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0&modestbranding=1"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                ) : (
                  <motion.div
                    key="poster"
                    className="flex h-full flex-col items-center justify-center px-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="mb-8 grid h-24 w-24 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-3xl text-cyan-100 shadow-neon"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2.6, repeat: Infinity }}
                    >
                      ▶
                    </motion.div>
                    <h3 className="font-display text-3xl font-semibold text-white">
                      Watch the highlight reel
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300/80">
                      Studio-inspired presentation, soft glow framing, and lazy video loading so
                      the page still feels fast and polished on first visit.
                    </p>
                    <button
                      type="button"
                      onClick={() => setLoaded(true)}
                      className="mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                    >
                      Load Showreel
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </GlassCard>
      </div>
    </motion.section>
  );
}

function Services() {
  return (
    <motion.section
      id="services"
      className="px-6 py-24 sm:px-10 lg:px-16"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Editing services packaged for premium visual storytelling."
          description="A clean service layout for agencies, hiring managers, and direct clients who need to understand the offer in seconds."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div key={service} whileHover={{ y: -8, scale: 1.01 }}>
              <GlassCard className="h-full p-6">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 font-display text-lg text-cyan-100">
                    0{index + 1}
                  </div>
                  <div className="h-px flex-1 animate-pulseline bg-gradient-to-r from-cyan-300/40 to-transparent" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold text-white">{service}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300/75">
                  Designed for polished delivery, visual consistency, and edits that feel sharp,
                  modern, and professionally finished.
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="px-6 py-24 sm:px-10 lg:px-16"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Signals of trust for clients who care about quality."
          description="Three realistic testimonials to reinforce premium positioning and help the website read like a serious production partner."
          centered
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <GlassCard key={item.name} className="h-full p-6">
              <div className="mb-6 text-4xl text-cyan-200/70">“</div>
              <p className="text-sm leading-7 text-slate-300/80">{item.quote}</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm text-slate-400">{item.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const emailAddress = useMemo(() => ['nilanjan1877', 'gmail.com'].join('@'), []);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (formData.message.trim().length < 20) {
      nextErrors.message = 'Please include at least 20 characters in the message.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      `Project inquiry from ${formData.name.trim()}`,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`,
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <motion.section
      id="contact"
      className="px-6 pb-20 pt-24 sm:px-10 lg:px-16"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <GlassCard className="p-8 sm:p-10">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s Work Together"
            description="The contact area is built to feel direct, premium, and simple for potential clients who are ready to start."
          />
          <div className="mt-10 space-y-5 text-sm text-slate-300/80">
            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Name</p>
              <p className="mt-2 text-lg font-semibold text-white">Neelanjan Karmakar</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Phone</p>
              <a href="tel:707074144585" className="mt-2 block text-lg font-semibold text-white">
                707074144585
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Email</p>
              <a
                href={`mailto:${emailAddress}`}
                className="mt-2 block break-all text-lg font-semibold text-white"
                aria-label="Email Neelanjan Karmakar"
              >
                {emailAddress}
              </a>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-8 sm:p-10">
          <form noValidate onSubmit={handleSubmit} className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-200">Your Name</span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                maxLength="80"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-slate-950/70"
              />
              {errors.name ? <span className="mt-2 block text-sm text-rose-300">{errors.name}</span> : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-200">Email Address</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                maxLength="120"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-slate-950/70"
              />
              {errors.email ? (
                <span className="mt-2 block text-sm text-rose-300">{errors.email}</span>
              ) : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-200">Project Details</span>
              <textarea
                name="message"
                rows="6"
                maxLength="1000"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the edit, style, deadline, and what success looks like."
                className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-slate-950/70"
              />
              {errors.message ? (
                <span className="mt-2 block text-sm text-rose-300">{errors.message}</span>
              ) : null}
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Let’s Work Together
              </button>
              <p className="text-sm leading-6 text-slate-400">
                Validated on the client with a direct email handoff.
              </p>
            </div>

            {submitted ? (
              <p className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                Your email client should open with the inquiry prefilled and ready to send.
              </p>
            ) : null}
          </form>
        </GlassCard>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Neelanjan Karmakar. Premium post-production portfolio.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {link.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-white">
      <CursorGlow />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(111,92,255,0.16),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(77,226,255,0.12),transparent_22%)]" />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Showreel />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
