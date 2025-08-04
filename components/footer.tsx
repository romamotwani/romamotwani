'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 dark:bg-black text-white py-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@yourname.com"
              className="p-3 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <p className="text-dark-400 mb-4">
            © {currentYear} Your Name. All rights reserved.
          </p>

          <p className="text-dark-500 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}