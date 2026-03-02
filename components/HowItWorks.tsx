const steps = [
  {
    num: "01",
    title: "Fetch tickets",
    desc: "At 5pm PST, Slackatar queries the Linear API and pulls all tickets you completed today.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Generate video",
    desc: "Your ticket summaries are turned into a script, and FAL.ai generates a photorealistic avatar video.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Upload to S3",
    desc: "The finished video is uploaded to your DigitalOcean Spaces bucket with a public URL.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Share with team",
    desc: "Get a shareable link and post it to Slack, email, or anywhere your team hangs out.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-32 px-6">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-indigo-400 tracking-wider uppercase mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Four steps. Fully automated.
          </h2>
          <p className="max-w-lg mx-auto text-zinc-400">
            Once configured, Slackatar runs on autopilot. Here&apos;s the flow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:border-indigo-500/20">
                <div className="flex items-start gap-5">
                  {/* Step number */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-600 mb-1 block">STEP {step.num}</span>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
