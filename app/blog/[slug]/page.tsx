import { getPostById, getPostContent } from '@/lib/blog'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostById(params.slug)
  
  if (!post) {
    notFound()
  }

  const content = await getPostContent(post.content)

  return (
    <div className="min-h-screen pt-16">
      <div className="container-custom section-padding">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-dark-500 dark:text-dark-400 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full flex items-center gap-1"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div 
            className="prose prose-lg dark:prose-invert prose-headings:text-dark-900 dark:prose-headings:text-white prose-p:text-dark-600 dark:prose-p:text-dark-400 prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-code:text-primary-600 dark:prose-code:text-primary-400 prose-pre:bg-dark-100 dark:prose-pre:bg-dark-800 max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </div>
    </div>
  )
}