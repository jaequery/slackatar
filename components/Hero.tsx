export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-3xl text-center">
        <div className="mb-6 inline-block px-4 py-2 bg-indigo-500/20 border border-indigo-500/50 rounded-full text-sm text-indigo-300">
          🎬 Automated Daily Video Generation
        </div>
        
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          Your day in motion.
        </h1>
        
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          Slackatar generates beautiful, professional avatar videos every day at 5pm PST. 
          Automatically summarize your completed tickets with a talking avatar. 
          No manual work. Just results.
        </p>
        
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">
            View on GitHub
          </button>
          <button className="px-8 py-3 border border-slate-600 hover:border-indigo-400 rounded-lg font-semibold transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
