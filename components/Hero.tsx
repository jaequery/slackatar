export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[128px]" style={{ animation: 'pulse-glow 8s ease-in-out infinite' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[128px]" style={{ animation: 'pulse-glow 8s ease-in-out infinite 4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-4xl mx-auto text-center px-6 pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm" style={{ animation: 'slide-up 0.8s ease-out both' }}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-zinc-400">Open source &middot; Self-hosted &middot; Free forever</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6" style={{ animation: 'slide-up-delay-1 1s ease-out both' }}>
          <span className="text-white">Your daily work,</span>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">in a talking avatar.</span>
        </h1>

        {/* Subhead */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-400 leading-relaxed mb-10" style={{ animation: 'slide-up-delay-2 1.2s ease-out both' }}>
          Slackatar pulls your completed tickets from Linear, generates a photorealistic
          AI avatar video, and delivers it daily at 5pm. Zero effort standups.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center" style={{ animation: 'slide-up-delay-3 1.4s ease-out both' }}>
          <a
            href="https://github.com/jaequery/slackatar"
            className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl hover:from-indigo-500 hover:to-violet-500 transition-all shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-zinc-300 bg-white/[0.05] border border-white/[0.08] rounded-xl hover:bg-white/[0.08] hover:text-white transition-all hover:-translate-y-0.5"
          >
            See how it works
          </a>
        </div>

        {/* Terminal preview */}
        <div className="mt-16 sm:mt-20 max-w-2xl mx-auto" style={{ animation: 'slide-up-delay-3 1.6s ease-out both' }}>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-1 shadow-2xl shadow-black/40">
            <div className="rounded-xl bg-[#0d0d14] overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-xs text-zinc-600 font-mono">slackatar</span>
              </div>
              {/* Terminal body */}
              <div className="p-5 font-mono text-sm leading-7 text-left">
                <p><span className="text-emerald-400">$</span> <span className="text-zinc-300">slackatar run</span></p>
                <p className="text-zinc-500">Fetching completed tickets from Linear...</p>
                <p className="text-zinc-500">Found <span className="text-indigo-400">4 tickets</span> completed today</p>
                <p className="text-zinc-500">Generating avatar video with FAL.ai...</p>
                <p className="text-zinc-500">Uploading to S3...</p>
                <p className="text-emerald-400">Done! Video ready at s3://videos/2026-03-02.mp4</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  )
}
