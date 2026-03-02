export default function HowItWorks() {
  const steps = [
    { num: "1", title: "Fetch", desc: "Your completed tickets are pulled from Linear" },
    { num: "2", title: "Generate", desc: "A photorealistic avatar video is created" },
    { num: "3", title: "Upload", desc: "Video is uploaded to your S3 storage" },
    { num: "4", title: "Share", desc: "Get a public link to share with your team" }
  ]

  return (
    <section id="how" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 text-center">
              <div className="mb-4 text-5xl font-bold text-indigo-500">{step.num}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-400">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/3 text-slate-600">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
