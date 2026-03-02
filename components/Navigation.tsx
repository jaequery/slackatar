'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
          </div>
          <span className="text-lg font-bold text-white tracking-tight">Slackatar</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <a href="#features" className="px-4 py-2 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all">Features</a>
          <a href="#how" className="px-4 py-2 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all">How it works</a>
          <a href="https://github.com/jaequery/slackatar" className="ml-2 px-5 py-2 text-sm font-medium text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.08] rounded-lg transition-all">
            GitHub
          </a>
          <a href="#cta" className="ml-1 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 rounded-lg transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
