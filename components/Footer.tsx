export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <span className="text-base font-bold text-white">Slackatar</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Automated daily avatar video generation. Open source, self-hosted, zero subscriptions.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-4">Project</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="https://github.com/jaequery/slackatar" className="text-zinc-500 hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://github.com/jaequery/slackatar/issues" className="text-zinc-500 hover:text-white transition-colors">Issues</a></li>
                <li><a href="https://github.com/jaequery/slackatar#readme" className="text-zinc-500 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-4">Powered by</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="https://fal.ai" className="text-zinc-500 hover:text-white transition-colors">FAL.ai</a></li>
                <li><a href="https://linear.app" className="text-zinc-500 hover:text-white transition-colors">Linear</a></li>
                <li><a href="https://digitalocean.com" className="text-zinc-500 hover:text-white transition-colors">DigitalOcean</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Slackatar. MIT License.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/jaequery/slackatar" className="text-zinc-600 hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
