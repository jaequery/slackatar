export default function Footer() {
  return (
    <footer className="border-t border-slate-700/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Slackatar</h3>
            <p className="text-slate-400 text-sm">Automated daily avatar video generation for teams.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400">GitHub</a></li>
              <li><a href="#" className="hover:text-indigo-400">Docs</a></li>
              <li><a href="#" className="hover:text-indigo-400">Issues</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Built With</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="https://fal.ai" className="hover:text-indigo-400">FAL.ai</a></li>
              <li><a href="https://linear.app" className="hover:text-indigo-400">Linear</a></li>
              <li><a href="https://digitalocean.com" className="hover:text-indigo-400">DigitalOcean</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Status</h4>
            <div className="text-sm">
              <p className="text-green-400">✓ Open Source</p>
              <p className="text-green-400">✓ Production Ready</p>
              <p className="text-green-400">✓ Self-Hosted</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 pt-8 text-center text-sm text-slate-500">
          <p>&copy; 2026 Slackatar. Made with ❤️ for makers and teams.</p>
        </div>
      </div>
    </footer>
  )
}
