export default function Features() {
  const features = [
    {
      title: "Automatic Generation",
      desc: "Runs daily at 5pm PST. No setup, no hassle.",
      icon: "⚡"
    },
    {
      title: "Real Avatar Voice",
      desc: "Photorealistic talking avatar with natural speech synthesis.",
      icon: "🎤"
    },
    {
      title: "Linear Integration",
      desc: "Pulls your completed tickets automatically from Linear.",
      icon: "📋"
    },
    {
      title: "S3 Storage",
      desc: "Videos uploaded to your DigitalOcean Spaces for easy sharing.",
      icon: "☁️"
    },
    {
      title: "Open Source",
      desc: "100% free. Customize and deploy however you want.",
      icon: "🔓"
    },
    {
      title: "Production Ready",
      desc: "Battle-tested. Used daily in production workflows.",
      icon: "✅"
    }
  ]

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Why Slackatar?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-indigo-500/50 transition">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
