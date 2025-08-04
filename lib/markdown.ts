import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content", "posts");

export function getAllPosts() {
  const files = fs.readdirSync(postsDir);
  return files.map(file => {
    const slug = file.replace(/\.md$/, "");
    const { data } = matter(fs.readFileSync(path.join(postsDir, file), "utf8"));
    return { slug, frontmatter: data };
  });
}

export function getPostBySlug(slug: string) {
  const file = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf8");
  const { content, data } = matter(file);
  return { frontmatter: data, content };
}