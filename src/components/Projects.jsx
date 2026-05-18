import { ShoppingCart, MapPin, GraduationCap, Stethoscope, Pizza, Brain } from 'lucide-react'
import buyzaarImg from '../assets/projects/buyzaar.png'
import busTrackerImg from '../assets/projects/bus_tracker.png'
import primelearnImg from '../assets/projects/primelearn.png'
import intervueaiImg from '../assets/projects/intervueai.png'

const projects = [
  {
    id: 1,
    title: 'Buyzaar',
    description: 'A full-featured MERN stack multi-vendor e-commerce platform where multiple sellers can manage products, customers can browse and purchase items, with secure JWT authentication, shopping cart functionality, order management, and Stripe payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com/SanmuganathanLathusan/Buyzaar',
    live: null,
    image: buyzaarImg,
    featured: true,
  },
  {
    id: 2,
    title: 'Bus Tracker App',
    description: 'A real-time bus tracking application that allows users to monitor live bus locations, estimated arrival times, route details, and travel updates with a smooth mobile experience.',
    tags: ['Flutter', 'Node.js', 'Express.js', 'MongoDB Atlas'],
    github: 'https://github.com/SanmuganathanLathusan/bus_tracker',
    live: null,
    youtube: 'https://youtu.be/uUI3g-0C7OE',
    image: busTrackerImg,
    featured: true,
  },
  {
    id: 3,
    title: 'IntervueAI',
    description: 'AI-powered interview preparation platform featuring resume analysis, adaptive mock interviews, AI career coaching, speech recognition, and performance analytics.',
    tags: ['React', 'FastAPI', 'MongoDB', 'Gemini API'],
    github: 'https://github.com/SanmuganathanLathusan/intervueai',
    live: '#',
    image: intervueaiImg,
    featured: true,
  },
  {
    id: 4,
    title: 'PrimeLearn - Online Learning Platform',
    description: 'A modern e-learning platform inspired by Udemy, where users can explore a wide range of courses, enroll in learning programs, track progress, and earn certifications upon course completion.',
    tags: ['React.js', 'Laravel', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/SanmuganathanLathusan/LMS',
    live: null,
    image: primelearnImg,
    featured: false,
  },
  {
    id: 5,
    title: 'BodyLogic - Doctor Appointment Web App',
    description: 'A modern healthcare web application built with Next.js and MongoDB Atlas, allowing users to book doctor appointments, manage schedules, view available time slots, and access a smooth responsive interface.',
    tags: ['Next.js', 'MongoDB Atlas', 'JavaScript'],
    github: 'https://github.com/SanmuganathanLathusan/BodyLogic',
    live: 'https://body-logic-iota.vercel.app/',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: 6,
    title: 'Yumzy - Food Delivery Website',
    description: 'A modern food delivery front-end website built with React.js, featuring responsive design, interactive menus, smooth navigation, and a user-friendly ordering interface for an enhanced customer experience.',
    tags: ['React.js', 'JavaScript', 'CSS3'],
    github: 'https://github.com/SanmuganathanLathusan/Yumzy',
    live: null,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
]

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a2.964 2.964 0 00-2.088-2.094C19.57 3.5 12 3.5 12 3.5s-7.57 0-9.41.592A2.964 2.964 0 00.502 6.186 30.78 30.78 0 000 12a30.78 30.78 0 00.502 5.814 2.964 2.964 0 002.088 2.094C4.43 20.5 12 20.5 12 20.5s7.57 0 9.41-.592a2.964 2.964 0 002.088-2.094A30.78 30.78 0 0024 12a30.78 30.78 0 00-.502-5.814zM9.6 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  )
}

function TechTag({ name }) {
  const techIcons = {
    'React': 'https://cdn.simpleicons.org/react/61DAFB',
    'React.js': 'https://cdn.simpleicons.org/react/61DAFB',
    'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
    'MongoDB': 'https://cdn.simpleicons.org/mongodb/47A248',
    'MongoDB Atlas': 'https://cdn.simpleicons.org/mongodb/47A248',
    'Express': 'https://cdn.simpleicons.org/express/000000',
    'Express.js': 'https://cdn.simpleicons.org/express/000000',
    'Stripe': 'https://cdn.simpleicons.org/stripe/008CDD',
    'Flutter': 'https://cdn.simpleicons.org/flutter/02569B',
    'Laravel': 'https://cdn.simpleicons.org/laravel/FF2D20',
    'MySQL': 'https://cdn.simpleicons.org/mysql/4479A1',
    'Bootstrap': 'https://cdn.simpleicons.org/bootstrap/7952B3',
    'Chart.js': 'https://cdn.simpleicons.org/chartdotjs/FF6384',
    'CSS3': 'https://cdn.simpleicons.org/css/1572B6',
    'CSS': 'https://cdn.simpleicons.org/css/1572B6',
    'Next.js': 'https://cdn.simpleicons.org/nextdotjs/000000',
    'JavaScript': 'https://cdn.simpleicons.org/javascript/F7DF1E',
    'FastAPI': 'https://cdn.simpleicons.org/fastapi/009688',
    'Gemini API': 'https://cdn.simpleicons.org/google/4285F4',
  }

  const iconUrl = techIcons[name]
  const invertInDarkMode = ['Express', 'Express.js', 'Next.js'].includes(name)

  return (
    <span className="tag flex items-center gap-1.5 py-1 px-3 shadow-sm">
      {iconUrl && (
        <img 
          src={iconUrl} 
          alt={name} 
          className={`w-3.5 h-3.5 ${invertInDarkMode ? 'dark:invert' : ''}`} 
        />
      )}
      {name}
    </span>
  )
}

function ProjectCard({ project }) {
  return (
    <div className={`card flex flex-col h-full group overflow-hidden ${project.featured ? 'border-primary-500/50 dark:border-cyan-400/40 shadow-[0_10px_30px_rgba(108,99,255,0.15)]' : ''}`}>
      {/* Project Image Header */}
      <div className="relative aspect-video overflow-hidden -mx-8 -mt-8 mb-8 rounded-t-3xl border-b border-gray-200/60 dark:border-white/[0.08]">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          {project.featured && (
            <span className="text-xs font-bold text-white uppercase tracking-wider bg-gradient-to-r from-primary-600 to-cyan-500 px-4 py-1.5 rounded-full shadow-lg border border-white/20">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="flex items-start gap-3 mb-4">
        <h3 className="text-dark-900 dark:text-white font-extrabold text-2xl group-hover:text-primary-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
      </div>

      <p className="text-dark-600 dark:text-dark-300 text-base leading-relaxed mb-8 flex-1 transition-colors font-normal">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <TechTag key={tag} name={tag} />
        ))}
      </div>

      <div className="flex items-center gap-6 mt-auto pt-6 border-t border-gray-200/60 dark:border-white/[0.08]">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-cyan-400 text-sm font-semibold transition-colors"
        >
          <GitHubIcon />
          <span>Source</span>
        </a>
        
        {project.live && project.live !== '#' && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-cyan-400 text-sm font-semibold transition-colors"
          >
            <ExternalLinkIcon />
            <span>Live Demo</span>
          </a>
        )}
        
        {project.youtube && project.youtube !== '#' && (
          <a
            href={project.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-dark-500 dark:text-dark-400 hover:text-pink-500 dark:hover:text-pink-400 text-sm font-semibold transition-colors"
          >
            <YouTubeIcon />
            <span>Video</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-transparent via-dark-850/30 to-transparent relative overflow-hidden">
      {/* Ambient background glowing orb */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none animate-float-delayed" />

      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 tag mb-4">Selected Work</div>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto font-normal">
            A showcase of my recent work, ranging from full-stack applications to mobile solutions and AI-powered platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featured.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="p-12 rounded-3xl bg-white/40 dark:bg-dark-850/40 border border-gray-200/60 dark:border-white/[0.08] backdrop-blur-xl shadow-2xl max-w-3xl mx-auto">
            <p className="text-dark-600 dark:text-dark-300 mb-8 text-lg font-normal">Want to see more of my code?</p>
            <a
              href="https://github.com/SanmuganathanLathusan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline group inline-flex items-center gap-3"
            >
              <GitHubIcon />
              <span>View Full Archive on GitHub</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
