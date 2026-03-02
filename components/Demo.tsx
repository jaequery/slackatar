export default function Demo() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">See It In Action</h2>
        
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 text-center">
          <div className="bg-slate-900 rounded-lg aspect-video flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="text-6xl mb-4">🎬</div>
              <p className="text-slate-400">Daily avatar video generated automatically</p>
              <p className="text-sm text-slate-500 mt-2">Sample: asian man with glasses summarizing day's work</p>
            </div>
          </div>
          
          <a href="#" className="inline-block px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition">
            View Sample Video →
          </a>
        </div>
      </div>
    </section>
  )
}
