import { LayoutDashboard, Server, Wrench, Code2 } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: <LayoutDashboard className="text-white" size={24} />,
    color: 'from-primary-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript ', level: 88 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 82 },
      { name: 'TypeScript', level: 65 },
      { name: 'Next.js', level: 60 },
    ]
  },
  {
    title: 'Backend',
    icon: <Server className="text-white" size={24} />,
    color: 'from-cyan-500 to-teal-500',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'REST APIs', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 72 },
      { name: 'Laravel', level: 65 },
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: <Wrench className="text-white" size={24} />,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'VS Code', level: 95 },
      { name: 'Docker (Basics)', level: 50 },
      { name: 'Linux / CLI', level: 70 },
      { name: 'Postman', level: 82 },
      { name: 'Figma', level: 60 },
      { name: 'Stitch', level: 65 },
    ]
  },
  {
    title: 'Languages',
    icon: <Code2 className="text-white" size={24} />,
    color: 'from-pink-500 to-orange-500',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'C', level: 75 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 65 },
      { name: 'SQL', level: 80 },
      { name: 'PHP', level: 65 },
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
    <div className="mb-5 group/bar">
      <div className="flex justify-between mb-1.5">
        <span className="text-dark-700 dark:text-dark-200 text-sm font-semibold group-hover/bar:text-primary-600 dark:group-hover/bar:text-cyan-400 transition-colors">{name}</span>       
        <span className="text-dark-500 dark:text-dark-400 text-sm font-medium transition-colors">{level}%</span>
      </div>
      <div className="h-2.5 bg-gray-200/80 dark:bg-dark-800 rounded-full overflow-hidden p-0.5 border border-gray-300/50 dark:border-white/[0.05] backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-primary-500 via-cyan-400 to-primary-600 rounded-full transition-all duration-1000 shadow-[0_0_12px_rgba(0,212,255,0.5)]"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-transparent via-dark-850/20 to-transparent relative overflow-hidden">
      {/* Ambient background glowing orb */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-float-delayed" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 tag mb-4">My Skills</div>
          <h2 className="section-title">Technical <span className="gradient-text">Expertise</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto font-normal">
            Technologies I've worked with throughout my studies and personal projects.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map(cat => (
            <div key={cat.title} className="card group/card hover:border-primary-500/40 dark:hover:border-cyan-400/30 transition-all duration-500 hover:shadow-[0_15px_35px_rgba(108,99,255,0.2)]">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${cat.color} flex items-center justify-center text-xl mb-6 shadow-lg group-hover/card:scale-110 transition-transform duration-300`}>
                {cat.icon}
              </div>
              <h3 className="text-dark-900 dark:text-white font-extrabold text-xl mb-8 group-hover/card:text-primary-600 dark:group-hover/card:text-cyan-400 transition-colors">{cat.title}</h3>
              {cat.skills.map(skill => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="text-center max-w-4xl mx-auto p-8 rounded-3xl bg-white/40 dark:bg-dark-850/40 border border-gray-200/60 dark:border-white/[0.08] backdrop-blur-xl shadow-xl">
          <p className="text-dark-500 dark:text-dark-400 text-xs font-bold mb-8 uppercase tracking-[0.25em]">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map(tech => (
              <span key={tech} className="skill-badge hover:scale-110 transition-all duration-300 shadow-sm">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
