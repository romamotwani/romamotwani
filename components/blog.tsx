'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'
import { BlogPost } from '@/lib/blog'

// Sample blog posts data (in a real app, this would come from the blog utility)
const samplePosts: BlogPost[] = [
  {
    id: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 14',
    date: '2024-01-15',
    excerpt: 'Learn how to build modern web applications with Next.js 14, including the new App Router and server components.',
    content: '',
    tags: ['Next.js', 'React', 'Web Development'],
    readTime: 5,
  },
  {
    id: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS: A Complete Guide',
    date: '2024-01-10',
    excerpt: 'Discover the power of utility-first CSS with Tailwind CSS and learn how to build beautiful, responsive designs efficiently.',
    content: '',
    tags: ['CSS', 'Tailwind CSS', 'Design'],
    readTime: 8,
  },
  {
    id: 'typescript-best-practices',
    title: 'TypeScript Best Practices for 2024',
    date: '2024-01-05',
    excerpt: 'Explore the latest TypeScript best practices and patterns to write more maintainable and type-safe code.',
    content: '',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    readTime: 6,
  },
]

export default function Blog() {
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
    <section id="blog" className="section-padding bg-dark-50 dark:bg-dark-800">
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
            Latest Blog Posts
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
          >
            Thoughts, tutorials, and insights about web development, technology, and my journey as a developer.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {samplePosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg card-hover group"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-dark-500 dark:text-dark-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-dark-600 dark:text-dark-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200 group-hover:gap-3"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform duration-200" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mt-12"
        >
          <a
            href="/blog"
            className="btn-secondary"
          >
            View All Posts
          </a>
        </motion.div>
      </div>
    </section>
  )
}