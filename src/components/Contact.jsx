import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-primary-600 dark:text-cyan-400" />,
    label: 'Email',
    value: 'lathusanlathusan40@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=lathusanlathusan40@gmail.com&su=Hello%20Lathusan',
  },
  {
    icon: <Phone className="w-6 h-6 text-primary-600 dark:text-cyan-400" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/Lathusan',
    href: 'https://www.linkedin.com/in/lathusan-lathusan-90b89b372/',
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary-600 dark:text-cyan-400" />,
    label: 'GitHub',
    value: 'github.com/Lathusan',
    href: 'https://github.com/SanmuganathanLathusan',
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary-600 dark:text-cyan-400" />,
    label: 'Location',
    value: 'Vellankulam, Mannar, Sri Lanka',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    
    if (form.name && form.email && form.subject && form.message) {
      try {
        const response = await fetch("https://formsubmit.co/ajax/lathusanlathusan40@gmail.com", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            _replyto: form.email,
            _subject: form.subject,
            message: form.message
          })
        });
        
        if (response.ok) {
          setStatus('success')
          setForm({ name: '', email: '', subject: '', message: '' })
          setTimeout(() => setStatus(null), 5000)
        } else {
          setStatus('error')
          setTimeout(() => setStatus(null), 3000)
        }
      } catch (error) {
        setStatus('error')
        setTimeout(() => setStatus(null), 3000)
      }
    } else {
      setStatus('error')
      setTimeout(() => setStatus(null), 3000)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-transparent via-dark-850/30 to-transparent relative overflow-hidden">
      {/* Ambient background glowing orb */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-float-delayed" />

      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 tag mb-4">Contact</div>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto font-normal">
            Interested in working together or have an internship opportunity? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left info cards */}
          <div className="lg:col-span-2 space-y-8">
            <div className="card group hover:border-primary-500/40 dark:hover:border-cyan-400/30 transition-all duration-500 shadow-xl">
              <h3 className="text-dark-900 dark:text-white font-extrabold text-2xl mb-4 transition-colors">Get in Touch</h3>
              <p className="text-dark-600 dark:text-dark-300 text-base leading-relaxed mb-8 transition-colors font-normal">
                Whether you have a project in mind, an internship opportunity, or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-6 pt-6 border-t border-gray-200/60 dark:border-white/[0.08] transition-colors">
                {contactInfo.map(info => (
                  <div key={info.label} className="flex items-start gap-5 group/item">
                    <div className="p-3.5 rounded-2xl bg-primary-500/10 dark:bg-cyan-500/10 border border-primary-500/20 dark:border-cyan-500/20 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-sm">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-dark-500 dark:text-dark-400 text-xs uppercase tracking-wider font-medium mb-1 transition-colors">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dark-900 dark:text-white text-base font-extrabold hover:text-primary-600 dark:hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-dark-900 dark:text-white text-base font-extrabold transition-colors">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Connect Prompt */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-primary-600/10 to-cyan-500/10 border border-primary-500/20 dark:border-cyan-500/20 backdrop-blur-xl shadow-lg">
              <h4 className="text-dark-900 dark:text-white font-extrabold text-lg mb-2">Fast Response Guaranteed</h4>
              <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed font-normal">I actively monitor my email and WhatsApp messages. You can expect a reply within 24 hours.</p>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3 card hover:border-primary-500/40 dark:hover:border-cyan-400/30 transition-all duration-500 shadow-xl">
            <h3 className="text-dark-900 dark:text-white font-extrabold text-2xl mb-8 transition-colors">Send Me a Message</h3>

            {status === 'success' && (
              <div className="mb-8 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-4 text-emerald-600 dark:text-emerald-400 animate-slide-up shadow-sm backdrop-blur-md">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <p className="text-sm font-semibold leading-relaxed">Message sent successfully! I'll reply within 24 hours.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-8 p-6 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-4 text-rose-600 dark:text-rose-400 animate-slide-up shadow-sm backdrop-blur-md">
                <AlertCircle className="w-6 h-6 flex-shrink-0" />
                <p className="text-sm font-semibold leading-relaxed">Please fill in all required fields correctly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-700 dark:text-dark-200 mb-2.5 transition-colors">
                    Your Name <span className="text-primary-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/50 dark:bg-dark-850/50 border border-gray-200/60 dark:border-white/[0.08] text-dark-900 dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-cyan-400 focus:ring-4 focus:ring-primary-500/10 dark:focus:ring-cyan-400/10 transition-all duration-300 backdrop-blur-md shadow-inner font-normal"
                    placeholder="Victor"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark-700 dark:text-dark-200 mb-2.5 transition-colors">
                    Email Address <span className="text-primary-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/50 dark:bg-dark-850/50 border border-gray-200/60 dark:border-white/[0.08] text-dark-900 dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-cyan-400 focus:ring-4 focus:ring-primary-500/10 dark:focus:ring-cyan-400/10 transition-all duration-300 backdrop-blur-md shadow-inner font-normal"
                    placeholder="softcore@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-dark-700 dark:text-dark-200 mb-2.5 transition-colors">
                  Subject <span className="text-primary-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-2xl bg-white/50 dark:bg-dark-850/50 border border-gray-200/60 dark:border-white/[0.08] text-dark-900 dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-cyan-400 focus:ring-4 focus:ring-primary-500/10 dark:focus:ring-cyan-400/10 transition-all duration-300 backdrop-blur-md shadow-inner font-normal"
                  placeholder="Internship Opportunity at XYZ Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-dark-700 dark:text-dark-200 mb-2.5 transition-colors">
                  Message <span className="text-primary-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-2xl bg-white/50 dark:bg-dark-850/50 border border-gray-200/60 dark:border-white/[0.08] text-dark-900 dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-cyan-400 focus:ring-4 focus:ring-primary-500/10 dark:focus:ring-cyan-400/10 transition-all duration-300 backdrop-blur-md shadow-inner font-normal resize-none"
                  placeholder="Tell me about the opportunity or how I can help..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center py-4 text-base shadow-[0_4px_14px_rgba(108,99,255,0.35)] hover:shadow-[0_6px_20px_rgba(0,212,255,0.4)]"
              >
                <div className="flex items-center gap-3">
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
