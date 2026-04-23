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
    <section id="about" className="section-padding bg-dark-800/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="card">
            <p className="text-dark-500 dark:text-dark-400 text-xs uppercase tracking-[0.22em] mb-5">Profile</p>
            <h2 className="section-title mb-5">
              Software Engineering Student with
              <span className="gradient-text"> Full Stack Focus</span>
            </h2>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-5 transition-colors duration-300">
              I am a third-year Software Engineering undergraduate at Sabaragamuwa University of Sri Lanka.
              My work centers on building dependable web applications from frontend interface design to backend API development.
            </p>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-8 transition-colors duration-300">
              I have hands-on experience with React, Node.js, Express, MongoDB, and MySQL, with strong programming fundamentals
              in Python, Java, and C. I am actively seeking Software Engineering and Full Stack internship opportunities.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="rounded-xl border border-gray-200 dark:border-dark-700 bg-white/70 dark:bg-dark-800/60 p-3">
                <p className="text-dark-500 dark:text-dark-400 text-[11px] uppercase tracking-wider mb-1">University</p>
                <p className="text-dark-900 dark:text-white text-sm font-semibold">SUSL</p>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-dark-700 bg-white/70 dark:bg-dark-800/60 p-3">
                <p className="text-dark-500 dark:text-dark-400 text-[11px] uppercase tracking-wider mb-1">Location</p>
                <p className="text-dark-900 dark:text-white text-sm font-semibold">Mannar, Sri Lanka</p>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-dark-700 bg-white/70 dark:bg-dark-800/60 p-3">
                <p className="text-dark-500 dark:text-dark-400 text-[11px] uppercase tracking-wider mb-1">Primary Stack</p>
                <p className="text-dark-900 dark:text-white text-sm font-semibold">MERN + MySQL</p>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-dark-700 bg-white/70 dark:bg-dark-800/60 p-3">
                <p className="text-dark-500 dark:text-dark-400 text-[11px] uppercase tracking-wider mb-1">Availability</p>
                <p className="text-dark-900 dark:text-white text-sm font-semibold">Internships</p>
              </div>
            </div>

            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              Let's Connect
            </a>
          </div>

          <div className="space-y-4">
            {highlights.map(item => (
              <div key={item.title} className="card">
                <h3 className="text-dark-900 dark:text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {stats.map(stat => (
            <div key={stat.label} className="card text-center transition-colors duration-300">
              <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
              <div className="text-dark-600 dark:text-dark-400 text-sm transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}