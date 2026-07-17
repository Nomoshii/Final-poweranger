import { useEffect, useRef } from 'react'

function Hero() {
  const typedRef = useRef(null)
  const typedInstanceRef = useRef(null)

  useEffect(() => {
    const initTyped = () => {
      if (window.Typed && typedRef.current && !typedInstanceRef.current) {
        typedInstanceRef.current = new window.Typed(typedRef.current, {
          strings: ['Software Engineer', 'Web Developer', 'AI Trainer', 'IT Officer'],
          loop: true,
          typeSpeed: 90,
          backSpeed: 45,
          backDelay: 2000,
        })
      }
    }

    initTyped()
    const interval = setInterval(() => {
      if (window.Typed) { initTyped(); clearInterval(interval) }
    }, 300)

    return () => {
      clearInterval(interval)
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy()
        typedInstanceRef.current = null
      }
    }
  }, [])

  return (
    <section id="hero" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', background: '#040b14' }}>

      {/* Ambient background video fill (100% screen) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(45px) brightness(0.18)',
          zIndex: 0,
          transform: 'scale(1.1)',
        }}
      >
        <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
        <source src="https://assets.mixkit.co/videos/preview/mixkit-code-animation-on-a-computer-screen-41580-large.mp4" type="video/mp4" />
      </video>

      {/* Dark tint overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(4, 11, 20, 0.45)', zIndex: 1 }} />

      {/* Hero Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 10, padding: '60px 15px' }}>
        <div className="row align-items-center gy-4">

          {/* Left Column: Bio & Text */}
          <div className="col-lg-6 col-md-6">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'rgba(20, 157, 221, 0.1)',
              border: '1px solid rgba(20, 157, 221, 0.3)',
              color: '#149ddd',
              fontSize: '0.8rem',
              fontWeight: 600,
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#149ddd', boxShadow: '0 0 8px #149ddd' }}></span>
              Available for new opportunities
            </div>

            <h1 style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '16px', lineHeight: 1.1 }}>
              Hun Visey
            </h1>

            <p style={{ fontSize: '1.35rem', color: 'rgba(255,255,255,0.9)', marginBottom: '16px' }}>
              I&apos;m a <span ref={typedRef} style={{ color: '#1ad4f4', fontWeight: 700 }}></span>
            </p>

            <p style={{ fontSize: '1.02rem', color: '#a8b2c1', maxWidth: '480px', lineHeight: 1.75, marginBottom: '32px' }}>
              Building modern web applications, full-stack solutions, and training next-gen AI systems.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#resume"
                onClick={e => { e.preventDefault(); document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' }) }}
                style={{
                  padding: '13px 32px',
                  borderRadius: '0px',
                  background: 'linear-gradient(135deg, #149ddd, #1ad4f4)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(20, 157, 221, 0.4)',
                  transition: 'all 0.3s ease',
                }}
              >
                View Resume
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                style={{
                  padding: '13px 32px',
                  borderRadius: '0px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column: Video Display Card with Massive RGB Sunrise Aura Glow */}
          <div className="col-lg-6 col-md-6 text-start d-flex justify-content-start">
            <div style={{ position: 'relative', width: 'fit-content', margin: '20px 0' }}>

              {/* Massive Spreading RGB Sunrise Glow Aura (Layer 1 - Outward Spreading Shadow) */}
              <div
                className="giant-rgb-aura"
                style={{
                  position: 'absolute',
                  inset: '-20px',
                  background: 'linear-gradient(45deg, #ff0055, #ff6600, #ffcc00, #33ff00, #00ffff, #0066ff, #9900ff, #ff00aa, #ff0055)',
                  filter: 'blur(45px)',
                  opacity: 0.9,
                  animation: 'rgbHueSpin 3.5s linear infinite',
                  zIndex: 0,
                }}
              />

              {/* Glowing RGB Animated Border (Layer 2) */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '4px',
                  background: 'linear-gradient(45deg, #ff0055, #ff6600, #ffcc00, #33ff00, #00ffff, #0066ff, #9900ff, #ff00aa, #ff0055)',
                  animation: 'rgbHueSpin 3.5s linear infinite',
                  width: 'fit-content',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: 'fit-content',
                    maxWidth: '100%',
                    background: '#040b14',
                    overflow: 'hidden',
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      height: '76vh',
                      width: 'auto',
                      maxWidth: '100%',
                      display: 'block',
                      objectFit: 'cover',
                    }}
                  >
                    <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-code-animation-on-a-computer-screen-41580-large.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
