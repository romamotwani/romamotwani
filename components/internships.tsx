'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const internships = [
  {
    id: 1,
    company: 'Tech Company Inc.',
    position: 'Software Engineering Intern',
    location: 'San Francisco, CA',
    duration: 'May 2023 - August 2023',
    description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    link: 'https://company.com',
  },
  {
    id: 2,
    company: 'Startup XYZ',
    position: 'Frontend Developer Intern',
    location: 'Remote',
    duration: 'January 2023 - April 2023',
    description: 'Built responsive user interfaces and implemented new features for the company\'s main product. Worked closely with designers to ensure pixel-perfect implementations.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Git'],
    link: 'https://startup.com',
  },
  {
    id: 3,
    company: 'University Research Lab',
    position: 'Research Assistant',
    location: 'University Campus',
    duration: 'September 2022 - December 2022',
    description: 'Conducted research on machine learning algorithms and implemented proof-of-concept applications. Published findings in academic conferences.',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'LaTeX'],
    link: null,
  },
]

export default function Internships() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="internships" className="section-padding bg-dark-50 dark:bg-dark-800">
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
            Where I've Worked
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
          >
            Here are some of the companies and organizations where I've had the opportunity to learn and grow.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              variants={itemVariants}
              className="bg-white dark:bg-dark-900 rounded-xl p-6 md:p-8 shadow-lg card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-dark-900 dark:text-white">
                      {internship.position}
                    </h3>
                    {internship.link && (
                      <a
                        href={internship.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
                    {internship.company}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-dark-600 dark:text-dark-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{internship.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-dark-600 dark:text-dark-400 mb-4 leading-relaxed">
                {internship.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {internship.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}