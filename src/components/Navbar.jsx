import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ scrolled, isDarkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/70 dark:bg-[#0b0f19]/75 backdrop-blur-2xl border-b border-gray-200/50 dark:border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container h-20 flex items-center justify-between">
        <a
          href="#hero"
          onClick={e => handleNavClick(e, '#hero')}
          className="flex items-end gap-2 text-dark-900 dark:text-white group"
        >
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight leading-none group-hover:gradient-text transition-all duration-300">Lathusan</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-primary-600 dark:text-cyan-400 pb-0.5">Portfolio</span>
        </a>

        <ul className="hidden md:flex items-center gap-1.5 p-1.5 rounded-2xl bg-gray-100/80 dark:bg-dark-850/60 border border-gray-200/60 dark:border-white/[0.08] backdrop-blur-md shadow-sm">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className={`text-sm px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-1 ${
                  activeSection === link.href.slice(1)
                    ? 'bg-white dark:bg-dark-700 text-primary-600 dark:text-cyan-400 shadow-md dark:shadow-[0_4px_12px_rgba(0,212,255,0.15)] font-semibold'
                    : 'text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-dark-800/50'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4 text-dark-800 dark:text-white">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-gray-100/80 dark:bg-dark-850/60 border border-gray-200/60 dark:border-white/[0.08] hover:bg-gray-200 dark:hover:bg-dark-800 text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-cyan-400 transition-all duration-300 shadow-sm focus:outline-none hover:scale-105 active:scale-95"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          {/* CTA */}
          <a
            href="#contact"
            onClick={e => handleNavClick(e, '#contact')}
            className="btn-primary text-sm py-2.5 px-6 shadow-[0_4px_14px_rgba(108,99,255,0.35)] hover:shadow-[0_6px_20px_rgba(0,212,255,0.4)]"
          >
            Let's Talk
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-gray-100/80 dark:bg-dark-850/60 border border-gray-200/60 dark:border-white/[0.08] hover:bg-gray-200 dark:hover:bg-dark-800 text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-cyan-400 transition-all duration-300 shadow-sm focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2.5 rounded-xl bg-gray-100/80 dark:bg-dark-850/60 border border-gray-200/60 dark:border-white/[0.08] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-dark-900 dark:bg-white transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-5 h-0.5 bg-dark-900 dark:bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-dark-900 dark:bg-white transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden transition-all duration-500 overflow-hidden bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-2xl border-b border-gray-200/50 dark:border-white/[0.08] shadow-2xl ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="section-container py-6 flex flex-col gap-2">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className={`block py-3 px-4 rounded-xl text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-850/50 font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1) ? 'text-primary-600 dark:text-cyan-400 bg-primary-50 dark:bg-dark-800 font-bold border-l-4 border-primary-600 dark:border-cyan-400' : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4 px-4">
            <a
              href="#contact"
              onClick={e => handleNavClick(e, '#contact')}
              className="btn-primary w-full justify-center py-3 shadow-[0_4px_14px_rgba(108,99,255,0.35)]"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
