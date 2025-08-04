import { getAllPosts } from '@/lib/blog'
import { format } from 'date-fns'
import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen pt-16">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology, and my journey as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
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

                <h2 className="text-xl font-semibold text-dark-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {post.title}
                </h2>

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

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200 group-hover:gap-3"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform duration-200" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-dark-600 dark:text-dark-400 text-lg">
              No blog posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}