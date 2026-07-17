import { useState, useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Load vendor scripts after mount
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve) => {
        const existing = document.querySelector(`script[src="${src}"]`)
        if (existing) { resolve(); return; }
        const s = document.createElement('script')
        s.src = src
        s.onload = resolve
        document.body.appendChild(s)
      })
    }

    const initLibs = async () => {
      await loadScript('/assets/vendor/bootstrap/js/bootstrap.bundle.min.js')
      await loadScript('/assets/vendor/aos/aos.js')
      await loadScript('/assets/vendor/typed.js/typed.umd.js')
      await loadScript('/assets/vendor/purecounter/purecounter_vanilla.js')
      await loadScript('/assets/vendor/glightbox/js/glightbox.min.js')

      if (window.AOS) {
        window.AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false })
      }
      if (window.GLightbox) {
        window.GLightbox({ selector: '.glightbox' })
      }
    }

    initLibs()
  }, [])

  // Scroll spy
  useEffect(() => {
    const sections = ['hero', 'about', 'portfolio', 'resume', 'contact']
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100)
      const scrollPos = window.scrollY + 200
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = () => {
    if (mobileNavOpen) setMobileNavOpen(false)
  }

  return (
    <div className="index-page">
      <Sidebar
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />

      <main className="main">
        <Hero />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </main>

      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <div className="copyright text-center">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">Hun Visey</strong> <span>All Rights Reserved</span></p>
          </div>
        </div>
      </footer>

      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className={`scroll-top d-flex align-items-center justify-content-center${showScrollTop ? ' active' : ''}`}
        onClick={handleScrollTop}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  )
}

export default App
