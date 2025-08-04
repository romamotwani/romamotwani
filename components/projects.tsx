'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Folder } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
    image: '/api/placeholder/400/250',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    github: 'https://github.com/yourusername/ecommerce',
    live: 'https://ecommerce-demo.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    github: 'https://github.com/yourusername/task-app',
    live: 'https://task-app-demo.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'Chart.js', 'OpenWeatherMap API', 'CSS3'],
    github: 'https://github.com/yourusername/weather-app',
    live: 'https://weather-demo.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode and smooth animations.',
    image: '/api/placeholder/400/250',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://portfolio-demo.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Machine Learning Model',
    description: 'A sentiment analysis model trained on social media data using natural language processing techniques.',
    image: '/api/placeholder/400/250',
    technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask'],
    github: 'https://github.com/yourusername/ml-sentiment',
    live: null,
    featured: false,
  },
  {
    id: 6,
    title: 'Mobile Game',
    description: 'A simple 2D mobile game built with React Native, featuring touch controls and local score tracking.',
    image: '/api/placeholder/400/250',
    technologies: ['React Native', 'Expo', 'JavaScript', 'AsyncStorage'],
    github: 'https://github.com/yourusername/mobile-game',
    live: null,
    featured: false,
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4"
          >
            Some Things I've Built
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
          >
            Here are some of the projects I've worked on. Each one presented unique challenges and learning opportunities.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg card-hover group"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Folder className="w-16 h-16 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}