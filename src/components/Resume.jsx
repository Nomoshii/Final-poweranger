function Resume() {
  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          A comprehensive overview of my professional experience, education background,
          and technical qualifications in the IT field.
        </p>
      </div>

      <div className="container">
        <div className="row">

          {/* Left Column: Summary + Education */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Hun Visey</h4>
              <p>
                <em>
                  Motivated and dependable IT Officer with experience in providing on-site and
                  remote technical support, managing IT infrastructure, and maintaining network
                  systems. Strong communication skills and a team-player mindset.
                </em>
              </p>
              <ul>
                <li>Phnom Penh, Cambodia</li>
                <li>mornchhaypor@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Information Technology</h4>
              <h5>2024– Present</h5>
              <p><em>Western University, Phnom Penh, Cambodia</em></p>
              <p>
                Studying core computer science and IT fundamentals including networking, databases,
                programming, and system administration. Active participant in university IT projects
                and extracurricular tech activities.
              </p>
            </div>

            <div className="resume-item">
              <h4>High School Diploma</h4>
              <h5>2018 – 2021</h5>
              <p><em>Steung Mean Chey High School, Phnom Penh, Cambodia</em></p>
              <p>
                Completed secondary education with focus on mathematics and sciences.
                Developed early interest in computers and technology.
              </p>
            </div>
          </div>

          {/* Right Column: Professional Experience */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>

            <div className="resume-item">
              <h4>Software Engineer / Web Developer &amp; AI Trainer</h4>
              <h5>Oct 2024 – Present</h5>
              <p><em>Freelance / Self-Employed, Phnom Penh, Cambodia</em></p>
              <ul>
                <li>Design, develop, and deploy full-stack web applications using modern frameworks including React.js and Node.js.</li>
                <li>Build responsive and accessible user interfaces with a focus on performance, UX, and clean code practices.</li>
                <li>Work as an AI Trainer — creating, curating, and validating datasets used to train and fine-tune large language models (LLMs).</li>
                <li>Write and evaluate high-quality prompts, code solutions, and instructional content to improve AI model accuracy and reasoning.</li>
                <li>Collaborate with clients and AI platforms to deliver domain-specific training data for software engineering tasks.</li>
                <li>Continuously research emerging AI tools and integrate them into development workflows to boost productivity.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>IT Officer</h4>
              <h5>2023 – Present</h5>
              <p><em>I7 Ranch, Phnom Penh, Cambodia</em></p>
              <ul>
                <li>Manage and maintain the company's IT infrastructure, servers, and network systems.</li>
                <li>Provide first-line technical support to staff for hardware, software, and connectivity issues.</li>
                <li>Install, configure, and troubleshoot computers, printers, and peripheral devices.</li>
                <li>Monitor network performance and ensure uptime and security of systems.</li>
                <li>Coordinate with vendors for equipment procurement and maintenance services.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>IT Support Officer</h4>
              <h5>2022 – 2023</h5>
              <p><em>Domrey Meas, Phnom Penh, Cambodia</em></p>
              <ul>
                <li>Responded to IT support tickets and resolved technical issues for 50+ staff members.</li>
                <li>Set up and maintained Windows workstations and managed Active Directory accounts.</li>
                <li>Assisted in the deployment of LAN/WAN network infrastructure.</li>
                <li>Performed regular data backups and system maintenance to prevent downtime.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>IT Intern</h4>
              <h5>2021 – 2022</h5>
              <p><em>I RECYCLING Cambogia CO.Ltd., Phnom Penh, Cambodia</em></p>
              <ul>
                <li>Assist IT Manager in maintaining printer and computer.</li>
                <li>Provided technical assistance to staffs</li>
                <li>Learned fundamentals of system administration and networking in a working environment.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Resume
