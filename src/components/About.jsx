import { useEffect, useRef } from 'react'

const skills = [
  { name: 'HTML / CSS', value: 85 },
  { name: 'JavaScript', value: 70 },
  { name: 'React.js', value: 65 },
  { name: 'Python', value: 75 },
  { name: 'C# (.NET)', value: 60 },
  { name: 'C++', value: 60 },
  { name: 'Networking (TCP/IP)', value: 80 },
  { name: 'Windows Server / AD', value: 75 },
  { name: 'Linux Administration', value: 70 },
]

function SkillBar({ name, value }) {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = value + '%'
        }
      },
      { threshold: 0.4 }
    )
    if (barRef.current) observer.observe(barRef.current.parentElement.parentElement)
    return () => observer.disconnect()
  }, [value])

  return (
    <div className="progress">
      <span className="skill">
        <span>{name}</span> <i className="val">{value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          ref={barRef}
          className="progress-bar"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: '0%', transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          Dedicated and detail-oriented IT professional with hands-on experience in IT support,
          system administration, and network management. Passionate about providing efficient
          technical solutions and continuously expanding technology knowledge.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="/assets/img/my-profile-img.jpg?v=2" className="img-fluid" alt="Hun Visey" />
          </div>
          <div className="col-lg-8 content">
            <h2>Software Engineer / Web Developer &amp; AI Trainer</h2>
            <p className="fst-italic py-3">
              Experienced IT Officer with a background in hardware maintenance, software troubleshooting,
              network configuration, and user support. Committed to delivering reliable and timely
              technical assistance to ensure smooth operations.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Hun Visey</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>University:</strong> <span>Western University</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Phnom Penh, Cambodia</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of IT</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>mornchhaypor@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              With a strong foundation in both hardware and software, I bring a proactive approach to
              problem-solving and a commitment to ensuring systems run efficiently. I am comfortable
              working in fast-paced environments and collaborating with cross-functional teams.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="skills section light-background" style={{ marginTop: '2rem' }}>
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>Core technical competencies built through professional experience and continuous learning.</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              {skills.slice(0, 5).map(s => <SkillBar key={s.name} {...s} />)}
            </div>
            <div className="col-lg-6">
              {skills.slice(5).map(s => <SkillBar key={s.name} {...s} />)}
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default About
