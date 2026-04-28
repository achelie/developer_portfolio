import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <div className="relative min-h-screen bg-ink text-white px-[40px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(103,232,249,0.15),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.12),transparent_38%)]" />
      <div className="relative">
        <Header />
        <main className="space-y-2">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
