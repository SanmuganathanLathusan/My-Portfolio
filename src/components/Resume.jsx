import cvFile from '../assets/Lathusan_CV.pdf'
import { GraduationCap, BookOpen, Book, Award, Briefcase, Globe, Calendar, Rocket, Sparkles, Eye, Download } from 'lucide-react'

const experiences = [
  {
    type: 'education',
    title: 'BSc (Hons) Software Engineering',
    org: 'Sabaragamuwa University of Sri Lanka',
    period: '2022 – Present',
    desc: 'Currently in 3rd year. Relevant coursework: Data Structures & Algorithms, Web Development, Database Systems, OOP, Software Architecture.',
    icon: <GraduationCap size={16} />,
  },
  {
    type: 'education',
    title: 'GCE Advanced Level (A/L)',
    org: 'Maths Stream | 2020',
    period: '2020',
    desc: 'Combined Maths, Physics, Chemistry. Qualified for University admissions.',
    icon: <BookOpen size={16} />,
  },
  {
    type: 'education',
    title: 'G.C.E. Ordinary Level (O/L)',
    org: '2018 Examination',
    period: '2018',
    desc: 'Successfully completed G.C.E. O/L with 6A passes and 3B passes.',
    icon: <Book size={16} />,
  },
]

const certifications = [
  {
    name: 'Foundations: Data, Data, Everywhere',
    issuer: 'Coursera',
    year: '2025',
    badge: <Award size={24} className="text-primary-500" />,
    link: '[Link]'
  },
  {
    name: 'Crash Course: AWS Basics',
    issuer: 'KodeKloud',
    year: '2025',
    badge: <Award size={24} className="text-primary-500" />,
    link: '[Link]'
  },
  {
    name: 'Introduction to AI',
    issuer: 'Coursera',
    year: '2025',
    badge: <Award size={24} className="text-primary-500" />,
    link: '[Link]'
  },
  {
    name: 'Java Programming for Beginners',
    issuer: 'Simplilearn',
    year: '2026',
    badge: <Award size={24} className="text-primary-500" />,
    link: '[Link]'
  },
  {
    name: 'IEEE Day Program Team',
    issuer: 'IEEE',
    year: '2025',
    badge: <Award size={24} className="text-primary-500" />,
    link: '[Link]'
  },
  {
    name: 'Assured Diploma in Information Technology (DITEC)',
    issuer: 'ESOFT Metro Campus / Pearson Education Ltd',
    year: '2023',
    badge: <GraduationCap size={24} className="text-primary-500" />,
    link: '[Link]'
  },
  {
    name: 'Assured Diploma in English (DIE)',
    issuer: 'ESOFT Metro Campus / Pearson Education Ltd',
    year: '2023',
    badge: <GraduationCap size={24} className="text-primary-500" />,
    link: '[Link]'
  }
]

const highlights = [
  { icon: <Briefcase size={20} className="text-primary-500" />, text: 'Open to Full Stack, Backend & Frontend Internships' },
  { icon: <Globe size={20} className="text-primary-500" />, text: 'Willing to Work Remotely or On-site in Sri Lanka' },
  { icon: <Calendar size={20} className="text-primary-500" />, text: 'Available from June 2025 for 6-month internships' },
  { icon: <Rocket size={20} className="text-primary-500" />, text: 'Fast learner with strong teamwork & communication' },
]

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-gradient-to-b from-transparent via-dark-850/20 to-transparent relative overflow-hidden">
      {/* Ambient background glowing orb */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-float-delayed" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 tag mb-4">Resume</div>
          <h2 className="section-title">Education & <span className="gradient-text">Experience</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto font-normal">
            My academic background, certifications, and what I bring to the table.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Education timeline */}
          <div>
            <h3 className="text-dark-900 dark:text-white font-extrabold text-xl mb-10 flex items-center gap-3.5 transition-colors">
              <span className="w-10 h-10 rounded-2xl bg-primary-600/20 border border-primary-600/30 flex items-center justify-center text-primary-600 dark:text-cyan-400 shadow-md"><GraduationCap size={20} /></span>
              Education
            </h3>
            <div className="relative border-l-2 border-gray-200/80 dark:border-white/[0.15] pl-8 space-y-10 transition-colors">
              {experiences.map((exp, i) => (
                <div key={i} className="relative group/timeline">
                  <div className="absolute -left-[2.875rem] top-0 w-7 h-7 rounded-full bg-white dark:bg-dark-850 border-2 border-primary-600 dark:border-cyan-400 flex items-center justify-center text-sm transition-all duration-300 group-hover/timeline:scale-125 group-hover/timeline:shadow-[0_0_15px_rgba(0,212,255,0.5)]">
                    <span className="text-primary-600 dark:text-cyan-400">{exp.icon}</span>
                  </div>
                  <div className="card group/card hover:border-primary-500/50 dark:hover:border-cyan-400/40 transition-all duration-500">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h4 className="text-dark-900 dark:text-white font-extrabold text-base group-hover/card:text-primary-600 dark:group-hover/card:text-cyan-400 transition-colors">{exp.title}</h4>
                      <span className="tag whitespace-nowrap flex-shrink-0 font-bold">{exp.period}</span>
                    </div>
                    <p className="text-primary-600 dark:text-cyan-400 text-sm font-bold mb-3 transition-colors">{exp.org}</p>
                    <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed transition-colors font-normal">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications + highlights */}
          <div className="space-y-12">
            {/* Certifications */}
            <div>
              <h3 className="text-dark-900 dark:text-white font-extrabold text-xl mb-10 flex items-center gap-3.5 transition-colors">
                <span className="w-10 h-10 rounded-2xl bg-primary-600/20 border border-primary-600/30 flex items-center justify-center text-primary-600 dark:text-cyan-400 shadow-md"><Award size={20} /></span>
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map(cert => (
                  <div key={cert.name} className="flex items-center gap-5 bg-white/50 dark:bg-dark-850/50 border border-gray-200/60 dark:border-white/[0.08] backdrop-blur-md rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 hover:border-primary-500/50 hover:shadow-[0_8px_25px_rgba(108,99,255,0.15)] group/cert">
                    <span className="text-2xl p-2.5 rounded-xl bg-primary-500/10 dark:bg-cyan-500/10 border border-primary-500/20 dark:border-cyan-500/20 group-hover/cert:scale-110 transition-transform duration-300">{cert.badge}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-dark-900 dark:text-white text-sm font-extrabold truncate group-hover/cert:text-primary-600 dark:group-hover/cert:text-cyan-400 transition-colors">{cert.name}</p>
                      <p className="text-dark-500 dark:text-dark-400 text-xs font-medium transition-colors mt-0.5">{cert.issuer} · {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-dark-900 dark:text-white font-extrabold text-xl mb-8 flex items-center gap-3.5 transition-colors">
                <span className="w-10 h-10 rounded-2xl bg-primary-600/20 border border-primary-600/30 flex items-center justify-center text-primary-600 dark:text-cyan-400 shadow-md"><Sparkles size={20} /></span>
                Why Hire Me?
              </h3>
              <div className="space-y-4 p-8 rounded-3xl bg-white/40 dark:bg-dark-850/40 border border-gray-200/60 dark:border-white/[0.08] backdrop-blur-xl shadow-xl">
                {highlights.map(h => (
                  <div key={h.text} className="flex items-center gap-4 text-dark-700 dark:text-dark-200 text-sm font-medium transition-colors">
                    <span className="p-2 rounded-xl bg-primary-500/10 dark:bg-cyan-500/10 border border-primary-500/20 dark:border-cyan-500/20 flex-shrink-0 text-primary-600 dark:text-cyan-400">{h.icon}</span>
                    {h.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Download CV CTA */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary-600/10 via-cyan-500/10 to-pink-500/10 border border-gray-200/60 dark:border-white/[0.08] backdrop-blur-2xl rounded-3xl p-10 lg:p-12 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8 w-full max-w-5xl mx-auto transition-all duration-500 hover:border-primary-500/40">
            <div className="text-center sm:text-left">
              <h3 className="text-dark-900 dark:text-white font-extrabold text-xl md:text-2xl mb-2 transition-colors">{`Download My CV`}</h3>
              <p className="text-dark-600 dark:text-dark-300 text-sm transition-colors font-normal max-w-xl">Get the full picture — education, skills, projects, and references.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4 sm:mt-0 flex-shrink-0">
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline whitespace-nowrap"
              >
                <Eye className="w-5 h-5 text-primary-600 dark:text-cyan-400" />
                View CV
              </a>
              <a
                href={cvFile}
                download="Lathusan_CV.pdf"
                className="btn-primary whitespace-nowrap"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
