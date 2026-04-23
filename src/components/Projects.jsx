const projects = [
  {
    id: 1,
    title: 'Buyzaar',
    description: 'A full-featured MERN stack multi-vendor e-commerce platform where multiple sellers can manage products, customers can browse and purchase items, with secure JWT authentication, shopping cart functionality, order management, and Stripe payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com/SanmuganathanLathusan/Buyzaar',
    live: null,
    color: 'from-blue-600 to-cyan-600',
    featured: true,
  },
  {
    id: 2,
    title: 'Bus Tracker App',
    description: 'A real-time bus tracking application that allows users to monitor live bus locations, estimated arrival times, route details, and travel updates with a smooth mobile experience.',
    tags: ['Flutter', 'Node.js', 'Express.js', 'MongoDB Atlas'],
    github: 'https://github.com/SanmuganathanLathusan/bus_tracker',
    live: null,
    color: 'from-blue-600 to-green-600',
    featured: true,
  },
  {
    id: 3,
    title: 'PrimeLearn - Online Learning Platform',
    description: 'A modern e-learning platform inspired by Udemy, where users can explore a wide range of courses, enroll in learning programs, track progress, and earn certifications upon course completion.',
    tags: ['React.js', 'Laravel', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/SanmuganathanLathusan/LMS',
    live: null,
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
    color: 'from-orange-600 to-yellow-600',
    featured: false,
  },
  {
    id: 5,
    title: 'BodyLogic - Doctor Appointment Web App',
    description: 'A modern healthcare web application built with Next.js and MongoDB Atlas, allowing users to book doctor appointments, manage schedules, view available time slots, and access a smooth responsive interface.',
    tags: ['Next.js', 'MongoDB Atlas', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/SanmuganathanLathusan/BodyLogic',
    live: null,
    color: 'from-cyan-600 to-blue-600',
    featured: false,
  },
  {
    id: 6,
    title: 'Yumzy - Food Delivery Website',
    description: 'A modern food delivery front-end website built with React.js, featuring responsive design, interactive menus, smooth navigation, and a user-friendly ordering interface for an enhanced customer experience.',
    tags: ['React.js', 'JavaScript', 'CSS', 'Responsive Design'],
    github: 'https://github.com/SanmuganathanLathusan/Yumzy',
    live: null,
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
          <span className="text-xs font-semibold text-primary-700 dark:text-primary-300 uppercase tracking-wider bg-primary-100 dark:bg-primary-900/40 border border-primary-200 dark:border-primary-800/50 px-2 py-0.5 rounded-full">
            Featured
          </span>
        </div>
      )}

      <div className="flex items-start gap-3 mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white text-sm font-semibold tracking-widest flex-shrink-0`}>
          CASE
        </div>
        <div>
          <h3 className="text-dark-900 dark:text-white font-bold text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed mb-5 flex-1 transition-colors">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white text-sm font-medium transition-colors"
        >
          <GitHubIcon />
          Source
        </a>
        {project.live && project.live !== '#' && (
          <>
            <span className="text-gray-300 dark:text-dark-700">|</span>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium transition-colors"
            >
              <ExternalLinkIcon />
              Live
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 tag mb-4">Selected Work</div>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A curated set of applications that demonstrate my engineering process and delivery quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featured.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-dark-400 mb-4">Explore additional repositories</p>
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
