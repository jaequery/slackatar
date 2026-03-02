const features = [
  {
    title: "Automatic Generation",
    desc: "Runs daily at 5pm PST. Cron-powered, fully automated. Set it and forget it.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    title: "AI Avatar Voice",
    desc: "Photorealistic talking avatar powered by FAL.ai with natural speech synthesis.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "group-hover:border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    title: "Linear Integration",
    desc: "Pulls your completed tickets automatically from Linear. Native API integration.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    ),
    gradient: "from-indigo-500/20 to-blue-500/20",
    border: "group-hover:border-indigo-500/30",
    iconColor: "text-indigo-400",
  },
  {
    title: "S3 Cloud Storage",
    desc: "Videos uploaded to your DigitalOcean Spaces. Shareable public links instantly.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    gradient: "from-cyan-500/20 to-teal-500/20",
    border: "group-hover:border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    title: "Fully Open Source",
    desc: "100% free, MIT licensed. Fork it, customize it, deploy it your way.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    gradient: "from-emerald-500/20 to-green-500/20",
    border: "group-hover:border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    title: "Production Ready",
    desc: "Battle-tested in daily workflows. Reliable, fast, and built to last.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    gradient: "from-rose-500/20 to-pink-500/20",
    border: "group-hover:border-rose-500/30",
    iconColor: "text-rose-400",
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-indigo-400 tracking-wider uppercase mb-3">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything you need, nothing you don&apos;t.
          </h2>
          <p className="max-w-lg mx-auto text-zinc-400">
            A focused set of capabilities designed to do one thing exceptionally well.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 ${feature.border}`}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 ${feature.iconColor}`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
