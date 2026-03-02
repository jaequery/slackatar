import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Demo from '@/components/Demo'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Demo />
      <CTA />
      <Footer />
    </main>
  )
}
