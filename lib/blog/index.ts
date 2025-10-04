import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  readingTime: string;
  published: boolean;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  readingTime: string;
  published: boolean;
}

// Obtener nombres de archivos de posts
export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

// Obtener post por slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Procesar markdown a HTML
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(content);

    const contentHtml = processedContent.toString();
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      excerpt: data.excerpt || "",
      content: contentHtml,
      author: data.author || "elpernilet",
      category: data.category || "general",
      tags: data.tags || [],
      image: data.image || undefined,
      readingTime: stats.text,
      published: data.published !== false,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

// Obtener todos los posts (solo metadata)
export function getAllPosts(): BlogPostMeta[] {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => {
      try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        const stats = readingTime(content);

        return {
          slug,
          title: data.title || "",
          date: data.date || "",
          excerpt: data.excerpt || "",
          author: data.author || "elpernilet",
          category: data.category || "general",
          tags: data.tags || [],
          image: data.image || undefined,
          readingTime: stats.text,
          published: data.published !== false,
        };
      } catch (error) {
        console.error(`Error loading post metadata ${slug}:`, error);
        return null;
      }
    })
    .filter((post) => post !== null)
    .filter((post) => post.published)
    .sort((post1, post2) =>
      post1.date > post2.date ? -1 : 1
    ) as BlogPostMeta[];

  return posts;
}

// Obtener posts por categoría
export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

// Obtener todas las categorías
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = posts.map((post) => post.category);
  return [...new Set(categories)];
}

// Obtener todos los tags
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = posts.flatMap((post) => post.tags);
  return [...new Set(tags)];
}

// Obtener posts relacionados
export function getRelatedPosts(
  currentSlug: string,
  category: string,
  tags: string[],
  limit: number = 3
): BlogPostMeta[] {
  const allPosts = getAllPosts().filter((post) => post.slug !== currentSlug);

  // Calcular score basado en categoría y tags coincidentes
  const postsWithScore = allPosts.map((post) => {
    let score = 0;

    // Mayor peso si es la misma categoría
    if (post.category === category) {
      score += 3;
    }

    // Peso por tags coincidentes
    const matchingTags = post.tags.filter((tag) => tags.includes(tag));
    score += matchingTags.length;

    return { ...post, score };
  });

  // Ordenar por score y fecha, limitar resultados
  return postsWithScore
    .sort((a, b) => {
      if (a.score !== b.score) {
        return b.score - a.score;
      }
      return a.date > b.date ? -1 : 1;
    })
    .slice(0, limit);
}
