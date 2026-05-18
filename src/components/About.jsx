const stats = [
  { value: '2+', label: 'Years Building' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '3rd', label: 'Academic Year' },
  { value: '6+', label: 'Core Technologies' },
]

const highlights = [
  {
    title: 'Engineering Mindset',
    text: 'I focus on clean architecture, reusable components, and maintainable code that teams can scale.',
  },
  {
    title: 'Product Thinking',
    text: 'I prioritize real user needs, clear interfaces, and measurable outcomes in every project.',
  },
  {
    title: 'Collaboration Ready',
    text: 'I communicate clearly, document decisions, and work effectively in team environments.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent via-dark-850/30 to-transparent relative overflow-hidden">
      {/* Background glowing accent orb */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] pointer-events-none animate-float" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="card group">
            <div className="inline-flex items-center gap-2 tag mb-6">Profile</div>
            <h2 className="section-title mb-6">
              Software Engineering Student with
              <span className="gradient-text"> Full Stack Focus</span>
            </h2>
            <p className="text-dark-600 dark:text-dark-300 text-base md:text-lg leading-relaxed mb-6 transition-colors duration-300 font-normal">
              I am a third-year Software Engineering undergraduate at Sabaragamuwa University of Sri Lanka.
              My work centers on building dependable web applications from frontend interface design to backend API development.
            </p>
            <p className="text-dark-600 dark:text-dark-300 text-base md:text-lg leading-relaxed mb-10 transition-colors duration-300 font-normal">
              I have hands-on experience with React, Node.js, Express, MongoDB, and MySQL, with strong programming fundamentals
              in Python, Java, and C. I am actively seeking Software Engineering and Full Stack internship opportunities.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="rounded-2xl border border-gray-200/60 dark:border-white/[0.08] bg-white/70 dark:bg-dark-850/60 backdrop-blur-md p-5 group/item hover:border-primary-500/50 transition-all duration-300 hover:scale-[1.02]">
                <p className="text-dark-500 dark:text-dark-400 text-xs uppercase tracking-wider mb-1 font-medium group-hover/item:text-primary-600 dark:group-hover/item:text-cyan-400 transition-colors">University</p>
                <p className="text-dark-900 dark:text-white text-base font-bold">SUSL</p>
              </div>
              <div className="rounded-2xl border border-gray-200/60 dark:border-white/[0.08] bg-white/70 dark:bg-dark-850/60 backdrop-blur-md p-5 group/item hover:border-primary-500/50 transition-all duration-300 hover:scale-[1.02]">
                <p className="text-dark-500 dark:text-dark-400 text-xs uppercase tracking-wider mb-1 font-medium group-hover/item:text-primary-600 dark:group-hover/item:text-cyan-400 transition-colors">Location</p>
                <p className="text-dark-900 dark:text-white text-base font-bold">Mannar, Sri Lanka</p>
              </div>
              <div className="rounded-2xl border border-gray-200/60 dark:border-white/[0.08] bg-white/70 dark:bg-dark-850/60 backdrop-blur-md p-5 group/item hover:border-primary-500/50 transition-all duration-300 hover:scale-[1.02]">
                <p className="text-dark-500 dark:text-dark-400 text-xs uppercase tracking-wider mb-1 font-medium group-hover/item:text-primary-600 dark:group-hover/item:text-cyan-400 transition-colors">Primary Stack</p>
                <p className="text-dark-900 dark:text-white text-base font-bold">MERN + MySQL</p>
              </div>
              <div className="rounded-2xl border border-gray-200/60 dark:border-white/[0.08] bg-white/70 dark:bg-dark-850/60 backdrop-blur-md p-5 group/item hover:border-primary-500/50 transition-all duration-300 hover:scale-[1.02]">
                <p className="text-dark-500 dark:text-dark-400 text-xs uppercase tracking-wider mb-1 font-medium group-hover/item:text-primary-600 dark:group-hover/item:text-cyan-400 transition-colors">Availability</p>
                <p className="text-dark-900 dark:text-white text-base font-bold">Internships</p>
              </div>
            </div>

            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary shadow-[0_4px_14px_rgba(108,99,255,0.35)]"
            >
              Let's Connect
            </a>
          </div>

          <div className="space-y-6">
            {highlights.map(item => (
              <div key={item.title} className="card group/card hover:border-primary-500/40 dark:hover:border-cyan-400/30 transition-all duration-500">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mb-4 group-hover/card:w-20 transition-all duration-500" />
                <h3 className="text-dark-900 dark:text-white font-extrabold text-xl mb-3 group-hover/card:text-primary-600 dark:group-hover/card:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-dark-600 dark:text-dark-300 text-base leading-relaxed font-normal">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {stats.map(stat => (
            <div key={stat.label} className="card text-center transition-all duration-500 hover:scale-105 group/stat hover:border-primary-500/40 dark:hover:border-cyan-400/30">
              <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2 group-hover/stat:scale-110 transition-transform duration-300 inline-block">{stat.value}</div>
              <div className="text-dark-600 dark:text-dark-300 text-sm md:text-base font-medium transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}