export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to automate your daily videos?</h2>
        <p className="text-lg mb-8 text-white/90">
          Get started in 5 minutes. Open source, self-hosted, no subscriptions.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="https://github.com/jaequery/slackatar" className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            View on GitHub
          </a>
          <a href="#" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
            Read Docs
          </a>
        </div>
      </div>
    </section>
  )
}
