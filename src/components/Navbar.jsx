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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-b border-gray-200 dark:border-dark-800 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={e => handleNavClick(e, '#hero')}
          className="text-xl font-bold tracking-tight text-dark-900 dark:text-white"
        >
          <span className="gradient-text">LA</span>
          <span className="text-dark-500 dark:text-dark-400 font-mono text-sm ml-1">.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className={`nav-link text-sm ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary-600 dark:text-white after:w-full'
                    : ''
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
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-800 transition-colors focus:outline-none"
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
            className="btn-primary text-sm py-2 px-5"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-800 transition-colors focus:outline-none text-dark-800 dark:text-white"
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
            className="flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-dark-900 dark:bg-white transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-dark-900 dark:bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-dark-900 dark:bg-white transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white/98 dark:bg-dark-900/98 backdrop-blur-md border-b border-gray-200 dark:border-dark-800 shadow-xl ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="section-container py-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className={`block py-3 text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white font-medium transition-colors border-b border-gray-100 dark:border-dark-800 last:border-0 ${
                  activeSection === link.href.slice(1) ? 'text-primary-600 dark:text-white font-bold' : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={e => handleNavClick(e, '#contact')}
              className="btn-primary w-full justify-center"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
