import { useEffect, useState } from 'react'
import { Code2, Server, Database, Cpu } from 'lucide-react'
import profileImg from '../assets/profile.png'
import cvFile from '../assets/Lathusan_CV.pdf'

const roles = [
  'Full Stack Developer',
  'Software Engineer'
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
    <span className="gradient-text typing-cursor font-extrabold">{displayed}</span>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center hero-bg grid-pattern overflow-hidden">
      {/* Ambient background glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-primary-600/15 dark:bg-primary-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-[25rem] h-[25rem] bg-cyan-500/15 dark:bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/3 w-[20rem] h-[20rem] bg-pink-500/10 dark:bg-pink-500/15 rounded-full blur-[90px] pointer-events-none animate-float-delayed" />

      <div className="section-container w-full py-32 pt-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          <div className="flex-1 animate-slide-up">
            {/* Status Badge */}
            

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark-900 dark:text-white leading-[1.1] mb-6 transition-colors duration-300 tracking-tight">
              Transforming complex ideas
              <br />
              into <span className="gradient-text">seamless web experiences</span>
            </h1>

            <p className="text-dark-600 dark:text-dark-100 text-lg md:text-xl leading-relaxed max-w-2xl mb-8 transition-colors duration-300 font-normal">
              I'm
              <span className="gradient-text font-bold"> Lathusan</span>
              , a Software Engineering undergraduate at Sabaragamuwa University. I design and build
              full stack applications with strong attention to performance, maintainability, and user experience.
            </p>

            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-700 dark:text-white mb-8 h-10 transition-colors duration-300 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full" />
              <TypewriterText texts={roles} />
            </div>

            <div className="flex items-center gap-4 mb-10 flex-wrap">
              <div className="flex items-center gap-2.5 bg-white/60 dark:bg-dark-850/60 border border-gray-200/80 dark:border-white/[0.08] backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm hover:scale-105 transition-all duration-300 group/tech">
                <Code2 className="w-4 h-4 text-primary-500 group-hover/tech:rotate-12 transition-transform duration-300" />
                <span className="text-dark-700 dark:text-white font-extrabold text-xs tracking-wider uppercase">React</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/60 dark:bg-dark-850/60 border border-gray-200/80 dark:border-white/[0.08] backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm hover:scale-105 transition-all duration-300 group/tech">
                <Server className="w-4 h-4 text-cyan-500 group-hover/tech:rotate-12 transition-transform duration-300" />
                <span className="text-dark-700 dark:text-white font-extrabold text-xs tracking-wider uppercase">Node.js</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/60 dark:bg-dark-850/60 border border-gray-200/80 dark:border-white/[0.08] backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm hover:scale-105 transition-all duration-300 group/tech">
                <Database className="w-4 h-4 text-pink-500 group-hover/tech:rotate-12 transition-transform duration-300" />
                <span className="text-dark-700 dark:text-white font-extrabold text-xs tracking-wider uppercase">MongoDB</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/60 dark:bg-dark-850/60 border border-gray-200/80 dark:border-white/[0.08] backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm hover:scale-105 transition-all duration-300 group/tech">
                <Cpu className="w-4 h-4 text-purple-500 group-hover/tech:rotate-12 transition-transform duration-300" />
                <span className="text-dark-700 dark:text-white font-extrabold text-xs tracking-wider uppercase">REST APIs</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                See Projects
              </a>
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <svg className="w-5 h-5 text-primary-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View CV
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-outline border-transparent hover:border-primary-500/30"
              >
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2 border-t border-gray-200/60 dark:border-white/[0.08]">
              <span className="text-dark-500 dark:text-dark-100 text-sm font-medium">Find me on</span>
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
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.22 0h.003z" />
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
                  className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-dark-850 border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-dark-600 dark:text-dark-100 hover:text-primary-600 dark:hover:text-cyan-400 hover:border-primary-500/50 transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 animate-float">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem]">
              {/* Spinning gradient glow border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 via-cyan-400 to-pink-500 p-1.5 glow animate-spin-slow" />
              {/* Static inner container holding the image */}
              <div className="absolute inset-1.5 rounded-full bg-white dark:bg-dark-900 flex items-center justify-center overflow-hidden transition-colors z-10 shadow-2xl border border-white/10">
                <img src={profileImg} alt="Lathusan" className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          onClick={e => { e.preventDefault(); document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-500 dark:text-dark-100 hover:text-primary-600 dark:hover:text-cyan-400 text-xs transition-all duration-300 font-medium tracking-wider uppercase cursor-pointer group z-20"
          aria-label="Scroll to About section"
        >
          <span className="group-hover:-translate-y-0.5 transition-transform duration-300 font-bold">Scroll down</span>
          <div className="w-5 h-8 border-2 border-dark-300 dark:border-dark-600 group-hover:border-primary-600 dark:group-hover:border-cyan-400 rounded-full flex justify-center pt-1.5 transition-colors shadow-sm">
            <div className="w-1.5 h-2 bg-primary-600 dark:bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}
