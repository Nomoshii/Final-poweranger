import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'NEXUSEC — AI Cyber Intelligence',
    tag: 'AI / Cybersecurity',
    tagIcon: 'bi-shield-lock',
    url: 'https://nexusec-cyber-system.vercel.app/',
    description:
      'An AI-powered chat assistant built for cybersecurity and security research — similar to ChatGPT but purpose-built for penetration testing, threat analysis, and vulnerability research.',
    tech: ['React.js', 'AI / LLM', 'Cybersecurity', 'Vercel'],
    icon: 'bi-cpu',
    image: '/assets/img/portfolio/pepe_hacker.png',
  },
  {
    id: 2,
    title: 'EngBong — eCommerce Platform',
    tag: 'eCommerce',
    tagIcon: 'bi-bag',
    url: 'https://engbong.com/',
    description:
      'A full-featured eCommerce web application for product browsing, ordering, and management. Designed with a clean, user-friendly interface optimized for conversion.',
    tech: ['Web Dev', 'eCommerce', 'UI/UX', 'Full-Stack'],
    icon: 'bi-shop',
    image: '/assets/img/portfolio/pepe_tennis.png',
  },
  {
    id: 3,
    title: 'Implant Register — Dental Sales',
    tag: 'Healthcare / Sales',
    tagIcon: 'bi-hospital',
    url: 'https://implant-register.vercel.app/',
    description:
      'A professional dental implant registration and information platform. Allows patients and staff to register, view product details, and manage implant records.',
    tech: ['React.js', 'Healthcare', 'Registration', 'Vercel'],
    icon: 'bi-clipboard2-pulse',
    image: '/assets/img/portfolio/pepe_tuxedo.png',
  },
]

function Portfolio() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="portfolio" style={{ padding: '80px 0', background: '#040b14' }}>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Live projects I have built and deployed — spanning AI systems, eCommerce platforms,
          and healthcare web applications.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {projects.map((p, i) => {
            const isHov = hovered === p.id
            return (
              <div
                key={p.id}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100 + i * 120}
              >
                {/* Card */}
                <div
                  onClick={() => window.open(p.url, '_blank', 'noopener noreferrer')}
                  onMouseEnter={() => setHovered(p.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    position: 'relative',
                    background: isHov ? '#0d1e35' : '#0a1628',
                    border: `1px solid ${isHov ? 'rgba(20,157,221,0.45)' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: '0px',
                    padding: '28px 26px 24px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                    transform: isHov ? 'translateY(-6px)' : 'translateY(0)',
                    boxShadow: isHov
                      ? '0 20px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(20,157,221,0.12)'
                      : '0 2px 16px rgba(0,0,0,0.35)',
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                    background: 'linear-gradient(90deg,#149ddd,#1ad4f4)',
                    borderRadius: '0',
                    transformOrigin: 'left',
                    transform: isHov ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
                  }} />

                  {/* Header: icon/image + badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: '0px',
                      background: 'rgba(20,157,221,0.12)',
                      border: '1px solid rgba(20,157,221,0.35)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                      transform: isHov ? 'scale(1.08)' : 'scale(1)',
                      flexShrink: 0,
                      overflow: 'hidden',
                      padding: '3px',
                    }}>
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.title}
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                          onError={(e) => {
                            e.target.style.display = 'none'
                            if (e.target.nextSibling) e.target.nextSibling.style.display = 'block'
                          }}
                        />
                      ) : null}
                      <i
                        className={`bi ${p.icon}`}
                        style={{
                          fontSize: '1.3rem',
                          color: '#149ddd',
                          display: p.image ? 'none' : 'block',
                        }}
                      />
                    </div>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em',
                      textTransform: 'uppercase', color: '#149ddd',
                      background: 'rgba(20,157,221,0.08)',
                      border: '1px solid rgba(20,157,221,0.25)',
                      padding: '4px 10px', borderRadius: '0px',
                    }}>
                      <i className={`bi ${p.tagIcon}`} style={{ fontSize: '0.65rem' }} />
                      {p.tag}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: 10,
                      color: isHov ? '#1ad4f4' : '#fff',
                      transition: 'color 0.3s ease',
                    }}>
                      {p.title}
                    </h4>
                    <p style={{
                      fontSize: '0.84rem', color: 'rgba(255,255,255,0.5)',
                      lineHeight: 1.75, margin: 0,
                    }}>
                      {p.description}
                    </p>
                  </div>

                  {/* Tech pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.tech.map(t => (
                      <span key={t} style={{
                        fontSize: '0.68rem', fontWeight: 500,
                        color: isHov ? 'rgba(20,157,221,0.85)' : 'rgba(255,255,255,0.4)',
                        background: isHov ? 'rgba(20,157,221,0.06)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${isHov ? 'rgba(20,157,221,0.18)' : 'rgba(255,255,255,0.07)'}`,
                        padding: '3px 9px', borderRadius: '0px',
                        transition: 'all 0.3s ease',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    paddingTop: 16,
                    borderTop: `1px solid ${isHov ? 'rgba(20,157,221,0.15)' : 'rgba(255,255,255,0.06)'}`,
                    transition: 'border-color 0.3s ease',
                  }}>
                    <span style={{
                      fontSize: '0.8rem', fontWeight: 600, color: '#149ddd',
                      display: 'flex', alignItems: 'center', gap: 7,
                    }}>
                      <i className="bi bi-box-arrow-up-right" style={{ fontSize: '0.75rem' }} />
                      View Live Site
                    </span>
                    <div style={{
                      width: 30, height: 30, borderRadius: '0px',
                      background: 'rgba(20,157,221,0.1)',
                      border: '1px solid rgba(20,157,221,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#149ddd', fontSize: '0.78rem',
                      transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                      transform: isHov ? 'translateX(4px)' : 'translateX(0)',
                    }}>
                      <i className="bi bi-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
