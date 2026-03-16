const stats = [
  { value: '2+', label: 'Years Coding' },
  { value: '10+', label: 'Projects Built' },
  { value: '3rd', label: 'Year Student' },
  { value: '5+', label: 'Technologies' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-800/30">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Code block visual */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="relative bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden max-w-md mx-auto shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-dark-900 border-b border-dark-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-dark-400 text-sm font-mono">about.js</span>
              </div>

              {/* Code content */}
              <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-purple-400">const</span>
                  <span className="text-white"> developer </span>
                  <span className="text-cyan-400">= </span>
                  <span className="text-yellow-400">{'{'}</span>
                  {'\n'}
                  {'  '}
                  <span className="text-blue-400">name</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"sanmuganathan Lathusan"</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  {'  '}
                  <span className="text-blue-400">university</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"SUSL"</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  {'  '}
                  <span className="text-blue-400">degree</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"BSc Software Engineering"</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  {'  '}
                  <span className="text-blue-400">year</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-400">3</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  {'  '}
                  <span className="text-blue-400">seeking</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"SE & Full Stack Internship"</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  {'  '}
                  <span className="text-blue-400">languages</span>
                  <span className="text-white">: [</span>
                  <span className="text-green-400">"Python"</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">"Java"</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">"C"</span>
                  <span className="text-white">],</span>
                  {'\n'}
                  {'  '}
                  <span className="text-blue-400">passions</span>
                  <span className="text-white">: [</span>
                  {'\n'}
                  {'    '}
                  <span className="text-green-400">"Full Stack Dev"</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  {'    '}
                  <span className="text-green-400">"Open Source"</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  {'    '}
                  <span className="text-green-400">"Problem Solving"</span>
                  {'\n'}
                  {'  '}
                  <span className="text-white">],</span>
                  {'\n'}
                  {'  '}
                  <span className="text-blue-400">available</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-400">true</span>
                  {'\n'}
                  <span className="text-yellow-400">{'}'}</span>
                  <span className="text-white">;</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 tag mb-4">About Me</div>
            <h2 className="section-title">
              Passionate Developer &amp;{' '}
              <span className="gradient-text">Problem Solver</span>
            </h2>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-6 transition-colors duration-300">
              I'm a 3rd-year <strong className="text-dark-900 dark:text-white">Software Engineering undergraduate</strong> at
              Sabaragamuwa University of Sri Lanka. I'm deeply passionate about building web applications
              that make a difference — from clean frontends to robust backends.
            </p>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-8 transition-colors duration-300">
              With hands-on experience in <strong className="text-primary-600 dark:text-primary-400">React, Node.js, Express</strong>, programming languages like <strong className="text-primary-600 dark:text-primary-400">Python, Java, and C</strong>, and databases like MongoDB and MySQL, I thrive in collaborative environments and love tackling
              complex challenges with elegant, efficient solutions. I'm actively seeking <strong className="text-dark-900 dark:text-white">Software Engineering</strong> and <strong className="text-dark-900 dark:text-white">Full Stack Development</strong> internship opportunities
              to gain industry exposure and contribute to meaningful projects.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: '🎓', label: 'University', value: 'Sabaragamuwa University of Sri Lanka' },
                { icon: '📍', label: 'Location', value: 'Vellankulam,Mannar, Sri Lanka' },
                { icon: '📧', label: 'Email', value: 'lathusanlathusan40@example.com' },
                { icon: '🎯', label: 'Goal', value: 'Full Stack / Software Engineering Internship' },
              ].map(item => (
                <div key={item.label} className="bg-gray-50 border border-gray-200 dark:bg-dark-800 dark:border-dark-700 rounded-xl p-4 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <span>{item.icon}</span>
                    <span className="text-dark-500 dark:text-dark-400 text-xs uppercase tracking-wider transition-colors">{item.label}</span>
                  </div>
                  <p className="text-dark-900 dark:text-white text-sm font-medium transition-colors">{item.value}</p>
                </div>
              ))}
            </div>

            <a href="#contact" onClick={e => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }} className="btn-primary">
              Let's Connect
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
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
