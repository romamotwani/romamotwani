import Link from "next/link";
import { getAllPosts } from "../../lib/markdown";

export async function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}

export default function Blog({ posts }: { posts: any[] }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-4">
        {posts.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`} className="text-brand hover:underline">
              {frontmatter.title}
            </Link>
            <span className="ml-2 text-sm text-gray-500">{frontmatter.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}