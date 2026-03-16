import { useEffect, useState } from 'react'
import profileImg from '../assets/image.svg'

const roles = [
  'Full Stack Developer',
  'Software Engineer',
  'React Developer',
  'Node.js Developer',
]

function TypewriterText({ texts }) {
  const [displayed, setDisplayed] = useState('')
  const [textIdx, setTextIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIdx(i => i + 1)
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setTextIdx(i => (i + 1) % texts.length)
          setCharIdx(0)
        } else {
          setCharIdx(i => i - 1)
        }
      }
    }, deleting ? 60 : 90)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, textIdx, texts])

  return (
    <span className="gradient-text typing-cursor">{displayed}</span>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center hero-bg grid-pattern overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="section-container w-full py-32 pt-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left content */}
          <div className="flex-1 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-900/40 border border-primary-800/50 text-primary-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Internships &amp; Part-time
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Hi, I'm <br />
              <span className="gradient-text">Lathusan</span>
            </h1>

            {/* Typewriter */}
            <div className="text-xl sm:text-2xl font-semibold text-dark-200 mb-6 h-8">
              <TypewriterText texts={roles} />
            </div>

            {/* Description */}
            <p className="text-dark-300 text-lg leading-relaxed max-w-xl mb-8">
              A passionate <strong className="text-white">Software Engineering undergraduate</strong> at{' '}
              <strong className="text-primary-400">Sabaragamuwa University of Sri Lanka</strong>, building
              scalable full-stack applications and seeking internship opportunities to grow my skills
              in real-world projects.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Projects
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-outline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <span className="text-dark-400 text-sm">Find me on</span>
              {[
                {
                  href: 'https://github.com/SanmuganathanLathusan',
                  label: 'GitHub',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  )
                },
                {
                  href: 'https://www.linkedin.com/in/lathusan-lathusan-90b89b372/',
                  label: 'LinkedIn',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )
                },
              ].map(social => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-dark-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Avatar placeholder */}
          <div className="flex-shrink-0 animate-float">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-cyan-500 p-1 glow">
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center overflow-hidden">
                  <img src={profileImg} alt="Lathusan" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Floating badge - University */}
              <div className="absolute -bottom-4 -left-4 bg-dark-800 border border-dark-600 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl">
                <span className="text-xl">🎓</span>
                <div>
                  <div className="text-white text-xs font-semibold">SUSL</div>
                  <div className="text-dark-400 text-xs">SE Undergrad</div>
                </div>
              </div>

              {/* Floating badge - Exp */}
              <div className="absolute -top-4 -right-4 bg-dark-800 border border-dark-600 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl">
                <span className="text-xl">💻</span>
                <div>
                  <div className="text-white text-xs font-semibold">2+ Years</div>
                  <div className="text-dark-400 text-xs">Coding</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-500 text-xs">
          <span>Scroll down</span>
          <div className="w-5 h-8 border-2 border-dark-600 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-primary-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
