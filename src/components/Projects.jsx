const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured MERN stack e-commerce application with product management, cart, user authentication with JWT, and Stripe payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com/SanmuganathanLathusan/ecommerce-app',
    live: '#',
    emoji: '🛒',
    color: 'from-blue-600 to-cyan-600',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A Kanban-style task manager with drag & drop, real-time updates, team collaboration features, and due date reminders.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'DnD'],
    github: 'https://github.com/SanmuganathanLathusan',
    live: '#',
    emoji: '📋',
    color: 'from-purple-600 to-pink-600',
    featured: true,
  },
  {
    id: 3,
    title: 'University Result Portal',
    description: 'A web application for Sabaragamuwa University students to view semester results, GPA calculations, and transcript downloads.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'HTML/CSS'],
    github: 'https://github.com/SanmuganathanLathusan/result-portal',
    live: '#',
    emoji: '🎓',
    color: 'from-emerald-600 to-teal-600',
    featured: false,
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather application using the OpenWeather API with 7-day forecasts, interactive maps, hourly data, and city search.',
    tags: ['React', 'REST API', 'Chart.js', 'CSS3'],
    github: 'https://github.com/SanmuganathanLathusan/weather-app',
    live: 'https://weather-app-tan-psi-36.vercel.app/',
    emoji: '🌤️',
    color: 'from-orange-600 to-yellow-600',
    featured: false,
  },
  {
    id: 5,
    title: 'Blog REST API',
    description: 'A RESTful API for a blogging platform built with Node.js, featuring JWT auth, CRUD endpoints, pagination, and Swagger documentation.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    github: 'https://github.com/SanmuganathanLathusan/blog-api',
    live: null,
    emoji: '📝',
    color: 'from-rose-600 to-red-600',
    featured: false,
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'This very portfolio! Built with React, Vite, and Tailwind CSS. Features smooth animations, responsive design, and modern UI patterns.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/SanmuganathanLathusan/portfolio',
    live: '#',
    emoji: '⚡',
    color: 'from-indigo-600 to-violet-600',
    featured: false,
  },
]

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function ProjectCard({ project }) {
  return (
    <div className={`card flex flex-col h-full group ${project.featured ? 'ring-1 ring-primary-600/30' : ''}`}>
      {project.featured && (
        <div className="flex items-center gap-1 mb-4">
          <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider bg-primary-900/40 border border-primary-800/50 px-2 py-0.5 rounded-full">
            ⭐ Featured
          </span>
        </div>
      )}

      {/* Project header */}
      <div className="flex items-start gap-3 mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-2xl flex-shrink-0`}>
          {project.emoji}
        </div>
        <div>
          <h3 className="text-dark-900 dark:text-white font-bold text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed mb-5 flex-1 transition-colors">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white text-sm font-medium transition-colors"
        >
          <GitHubIcon />
          Code
        </a>
        {project.live && (
          <>
            <span className="text-gray-300 dark:text-dark-700">|</span>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium transition-colors"
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
          </>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section-padding bg-dark-800/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 tag mb-4">Portfolio</div>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A selection of projects I've built to sharpen my skills and solve real problems.
          </p>
        </div>

        {/* Featured grid (2 cols) */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featured.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other projects (3 cols) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <p className="text-dark-400 mb-4">Want to see more?</p>
          <a
            href="https://github.com/SanmuganathanLathusan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <GitHubIcon />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
