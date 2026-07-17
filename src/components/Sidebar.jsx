function Sidebar({ mobileNavOpen, setMobileNavOpen, activeSection, onNavClick }) {
  const navItems = [
    { id: 'hero',      icon: 'bi-house',             label: 'Home' },
    { id: 'about',     icon: 'bi-person',            label: 'About' },
    { id: 'portfolio', icon: 'bi-images',            label: 'Portfolio' },
    { id: 'resume',    icon: 'bi-file-earmark-text', label: 'Resume' },
    { id: 'contact',   icon: 'bi-envelope',          label: 'Contact' },
  ]

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const top = el.offsetTop
      window.scrollTo({ top: top - 10, behavior: 'smooth' })
    }
    onNavClick()
  }

  return (
    <header id="header" className={`header dark-background d-flex flex-column justify-content-between${mobileNavOpen ? ' header-show' : ''}`}>
      <i
        className={`header-toggle d-xl-none bi ${mobileNavOpen ? 'bi-x' : 'bi-list'}`}
        onClick={() => setMobileNavOpen(v => !v)}
      ></i>

      <div>
        {/* Profile Card Container */}
        <div
          className="profile-card"
          style={{
            background: '#060e1a',
            border: '1px solid rgba(20, 157, 221, 0.3)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5), 0 0 20px rgba(20, 157, 221, 0.12)',
            padding: '22px 14px 16px',
            margin: '16px 12px 20px',
            borderRadius: '0px',
            position: 'relative',
          }}
        >
          {/* Top cyan accent border line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #149ddd, #1ad4f4)',
          }} />

          {/* Profile Header: Enlarged 190x190 Avatar */}
          <div className="profile-img text-center pb-2">
            <div style={{
              width: '190px',
              height: '190px',
              margin: '0 auto',
              position: 'relative',
              border: '2px solid rgba(20, 157, 221, 0.6)',
              boxShadow: '0 0 25px rgba(20, 157, 221, 0.35)',
              background: '#040b14',
            }}>
              <img
                src="/assets/img/my-profile-img.jpg?v=2"
                alt="Hun Visey"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '0px',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* Name & Subtitle */}
          <a
            href="#hero"
            className="logo text-center d-block mt-3 mb-2"
            onClick={e => handleNavClick(e, 'hero')}
            style={{ textDecoration: 'none' }}
          >
            <h1 className="sitename" style={{
              fontSize: '1.25rem',
              fontWeight: '800',
              letterSpacing: '0.08em',
              color: '#ffffff',
              textTransform: 'uppercase',
              margin: 0,
            }}>
              HUN VISEY
            </h1>
            <span style={{
              fontSize: '0.75rem',
              color: '#1ad4f4',
              fontWeight: '600',
              letterSpacing: '0.04em',
              display: 'block',
              marginTop: '4px',
            }}>
              Software Engineer / AI Trainer
            </span>
          </a>

          {/* Social Links */}
          <div className="social-links text-center mt-3" style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
            <a href="https://x.com/Morm_chhypor" className="twitter" target="_blank" rel="noreferrer" style={{ borderRadius: '0px' }}>
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://www.facebook.com/chhaypor4" className="facebook" target="_blank" rel="noreferrer" style={{ borderRadius: '0px' }}>
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/chhay_porzzzz/" className="instagram" target="_blank" rel="noreferrer" style={{ borderRadius: '0px' }}>
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/morn-chhaypor-07458336b/" className="linkedin" target="_blank" rel="noreferrer" style={{ borderRadius: '0px' }}>
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '18px 0' }} />

        {/* Navigation */}
        <nav id="navmenu" className="navmenu">
          <ul style={{ padding: 0 }}>
            {navItems.map(item => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id} style={{ marginBottom: '4px' }}>
                  <a
                    href={`#${item.id}`}
                    className={isActive ? 'active' : ''}
                    onClick={e => handleNavClick(e, item.id)}
                    style={{
                      borderRadius: '0px',
                      padding: '10px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '0.9rem',
                      fontWeight: isActive ? '600' : '400',
                      color: isActive ? '#ffffff' : '#a8b2c1',
                      background: isActive ? 'rgba(20, 157, 221, 0.12)' : 'transparent',
                      borderLeft: isActive ? '3px solid #149ddd' : '3px solid transparent',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <i
                      className={`bi ${item.icon} navicon`}
                      style={{
                        fontSize: '1.1rem',
                        marginRight: '12px',
                        color: isActive ? '#1ad4f4' : '#6b7c93',
                        transition: 'color 0.2s ease',
                      }}
                    ></i>
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Footer Status Badge */}
      <div className="sidebar-footer pb-4 text-center">
        <div style={{
          fontSize: '0.75rem',
          color: 'rgba(255, 255, 255, 0.45)',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          padding: '8px 12px',
          borderRadius: '0px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#2dc97e',
            boxShadow: '0 0 8px #2dc97e',
          }}></span>
          Phnom Penh, Cambodia
        </div>
      </div>
    </header>
  )
}

export default Sidebar
