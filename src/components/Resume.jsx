import cvFile from '../assets/Lathusan_CV.pdf'

const experiences = [
  {
    type: 'education',
    title: 'BSc (Hons) Software Engineering',
    org: 'Sabaragamuwa University of Sri Lanka',
    period: '2022 – Present',
    desc: 'Currently in 3rd year. Relevant coursework: Data Structures & Algorithms, Web Development, Database Systems, OOP, Software Architecture.',
    icon: '🎓',
  },
  {
    type: 'education',
    title: 'GCE Advanced Level (A/L)',
    org: 'Maths Stream | 2020',
    period: '2020',
    desc: 'Combined Maths, Physics, Chemistry. Qualified for University admissions.',
    icon: '📚',
  },
  {
  type: 'education',
  title: 'G.C.E. Ordinary Level (O/L)',
  org: '2018 Examination',
  period: '2018',
  desc: 'Successfully completed G.C.E. O/L with 6A passes and 3B passes.',
  icon: '📘',
},
]

const certifications = [
  {
    name: 'Foundations: Data, Data, Everywhere',
    issuer: 'Coursera',
    year: '2025',
    badge: '🏅',
    link: '[Link]'
  },
  {
    name: 'Crash Course: AWS Basics',
    issuer: 'KodeKloud',
    year: '2025',
    badge: '🏅',
    link: '[Link]'
  },
  {
    name: 'Introduction to AI',
    issuer: 'Coursera',
    year: '2025',
    badge: '🏅',
    link: '[Link]'
  },
  {
    name: 'Java Programming for Beginners',
    issuer: 'Simplilearn',
    year: '2026',
    badge: '🏅',
    link: '[Link]'
  },
  {
    name: 'IEEE Day Program Team',
    issuer: 'IEEE',
    year: '2025',
    badge: '🏅',
    link: '[Link]'
  },
  {
    name: 'Assured Diploma in Information Technology (DITEC)',
    issuer: 'ESOFT Metro Campus / Pearson Education Ltd',
    year: '2023',
    badge: '🎓',
    link: '[Link]'
  },
  {
    name: 'Assured Diploma in English (DIE)',
    issuer: 'ESOFT Metro Campus / Pearson Education Ltd',
    year: '2023',
    badge: '🎓',
    link: '[Link]'
  }
]
const highlights = [
  { icon: '💼', text: 'Open to Full Stack, Backend & Frontend Internships' },
  { icon: '🌍', text: 'Willing to Work Remotely or On-site in Sri Lanka' },
  { icon: '📅', text: 'Available from June 2025 for 6-month internships' },
  { icon: '🚀', text: 'Fast learner with strong teamwork & communication' },
]

export default function Resume() {
  return (
    <section id="resume" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 tag mb-4">Resume</div>
          <h2 className="section-title">Education & <span className="gradient-text">Experience</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            My academic background, certifications, and what I bring to the table.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Education timeline */}
          <div>
            <h3 className="text-dark-900 dark:text-white font-bold text-xl mb-8 flex items-center gap-3 transition-colors">
              <span className="w-8 h-8 rounded-lg bg-primary-600/20 border border-primary-600/30 flex items-center justify-center text-primary-600 dark:text-primary-400">🎓</span>
              Education
            </h3>
            <div className="relative border-l-2 border-gray-200 dark:border-dark-700 pl-8 space-y-8 transition-colors">
              {experiences.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[2.875rem] top-0 w-7 h-7 rounded-full bg-white dark:bg-dark-800 border-2 border-primary-600 flex items-center justify-center text-sm transition-colors">
                    {exp.icon}
                  </div>
                  <div className="card">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-dark-900 dark:text-white font-semibold transition-colors">{exp.title}</h4>
                      <span className="tag whitespace-nowrap flex-shrink-0">{exp.period}</span>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-2 transition-colors">{exp.org}</p>
                    <p className="text-dark-600 dark:text-dark-300 text-sm transition-colors">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications + highlights */}
          <div className="space-y-10">
            {/* Certifications */}
            <div>
              <h3 className="text-dark-900 dark:text-white font-bold text-xl mb-8 flex items-center gap-3 transition-colors">
                <span className="w-8 h-8 rounded-lg bg-primary-600/20 border border-primary-600/30 flex items-center justify-center text-primary-600 dark:text-primary-400">🏅</span>
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map(cert => (
                  <div key={cert.name} className="flex items-center gap-4 bg-gray-50 border border-gray-200 dark:bg-dark-800 dark:border-dark-700 rounded-xl p-4 hover:border-primary-500/40 dark:hover:border-primary-600/40 transition-colors duration-300">
                    <span className="text-2xl">{cert.badge}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-dark-900 dark:text-white text-sm font-medium truncate transition-colors">{cert.name}</p>
                      <p className="text-dark-500 dark:text-dark-400 text-xs transition-colors">{cert.issuer} · {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-dark-900 dark:text-white font-bold text-xl mb-6 flex items-center gap-3 transition-colors">
                <span className="w-8 h-8 rounded-lg bg-primary-600/20 border border-primary-600/30 flex items-center justify-center text-primary-600 dark:text-primary-400">✨</span>
                Why Hire Me?
              </h3>
              <div className="space-y-3">
                {highlights.map(h => (
                  <div key={h.text} className="flex items-center gap-3 text-dark-600 dark:text-dark-300 text-sm transition-colors">
                    <span className="text-xl flex-shrink-0">{h.icon}</span>
                    {h.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Download CV CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gray-50 border border-gray-200 dark:bg-dark-800 dark:border-dark-700 rounded-2xl p-8 transition-colors duration-300">
            <div className="text-left">
              <h3 className="text-dark-900 dark:text-white font-bold text-xl mb-1 transition-colors">{`Download My CV`}</h3>
              <p className="text-dark-600 dark:text-dark-400 text-sm transition-colors">Get the full picture — education, skills, projects, and references.</p>
            </div>
            <div className="flex items-center gap-3 mt-4 sm:mt-0">
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline whitespace-nowrap flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View CV
              </a>
              <a
                href={cvFile}
                download="Lathusan_CV.pdf"
                className="btn-primary whitespace-nowrap flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
