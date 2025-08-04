import Header from '@/components/header'
import Hero from '@/components/hero'
import Internships from '@/components/internships'
import Projects from '@/components/projects'
import Blog from '@/components/blog'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Internships />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}