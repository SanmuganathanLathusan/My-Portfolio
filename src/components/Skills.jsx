const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 82 },
      { name: 'TypeScript', level: 65 },
      { name: 'Next.js', level: 60 },
    ]
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'REST APIs', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 72 },
      { name: 'PHP', level: 65 },
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'VS Code', level: 95 },
      { name: 'Docker (Basics)', level: 50 },
      { name: 'Linux / CLI', level: 70 },
      { name: 'Postman', level: 82 },
      { name: 'Figma', level: 60 },
    ]
  },
  {
    title: 'Languages',
    icon: '💻',
    color: 'from-orange-500 to-yellow-500',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'C', level: 75 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 65 },
      { name: 'SQL', level: 80 },
    ]
  }
]

const techBadges = [
  'React', 'Node.js', 'Express', 'MongoDB', 'MySQL',
  'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind',
  'Git', 'GitHub', 'REST API', 'PHP', 'Python', 'Java',
  'Next.js', 'Postman', 'Linux', 'Figma', 'VS Code', 'Docker'
]

function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-dark-700 dark:text-dark-200 text-sm font-medium transition-colors">{name}</span>       
        <span className="text-dark-500 dark:text-dark-400 text-sm transition-colors">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden transition-colors">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 tag mb-4">My Skills</div>
          <h2 className="section-title">Technical <span className="gradient-text">Expertise</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Technologies I've worked with throughout my studies and personal projects.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map(cat => (
            <div key={cat.title} className="card">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${cat.color} flex items-center justify-center text-xl mb-4`}>
                {cat.icon}
              </div>
              <h3 className="text-dark-900 dark:text-white font-bold text-lg mb-6 transition-colors">{cat.title}</h3>
              {cat.skills.map(skill => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="text-center">
          <p className="text-dark-400 text-sm mb-6 uppercase tracking-widest">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map(tech => (
              <span key={tech} className="skill-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
