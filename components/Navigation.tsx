export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Slackatar
        </div>
        <div className="flex gap-8">
          <a href="#features" className="hover:text-indigo-400 transition">Features</a>
          <a href="#how" className="hover:text-indigo-400 transition">How it works</a>
          <a href="#github" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition">Get Started</a>
        </div>
      </div>
    </nav>
  )
}
