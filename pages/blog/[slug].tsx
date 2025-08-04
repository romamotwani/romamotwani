import { getAllPosts, getPostBySlug } from "../../lib/markdown";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Post({ frontmatter, content }: any) {
  return (
    <article className="prose dark:prose-invert mx-auto px-4 py-16">
      <h1>{frontmatter.title}</h1>
      <p className="text-sm text-gray-500">{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPosts().map(p => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { frontmatter, content } = getPostBySlug(params?.slug as string);
  const processed = await remark().use(html).use(gfm).process(content);
  return { props: { frontmatter, content: processed.toString() } };
};