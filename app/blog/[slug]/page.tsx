import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ShareButtons } from "@/components/share-buttons";
import { BlogPostReadTracker } from "@/components/blog-post-read-tracker";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generar metadata dinámica para SEO
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post no encontrado | elpernilet",
      description: "El post que buscas no existe.",
    };
  }

  return {
    title: `${post.title} | Blog elpernilet`,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      "servicios España",
      "eventos bodas",
      "elpernilet blog",
    ],
    authors: [{ name: post.author }],
    category: post.category,
    alternates: {
      canonical: `https://elpernilet.com/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://elpernilet.com/blog/${slug}`,
      siteName: "elpernilet",
      locale: "es_ES",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      images: post.image
        ? [
            {
              url: `https://elpernilet.com${post.image}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [
            {
              url: "https://elpernilet.com/elpernilet-event-image.webp",
              width: 1200,
              height: 630,
              alt: "elpernilet - Servicios de corte de jamón en vivo para eventos",
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@elpernilet",
      site: "@elpernilet",
      images: post.image
        ? [`https://elpernilet.com${post.image}`]
        : ["https://elpernilet.com/elpernilet-event-image.webp"],
    },
  };
}

// Generar rutas estáticas para mejor performance
export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, post.tags);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image
      ? `https://elpernilet.com${post.image}`
      : "https://elpernilet.com/elpernilet-event-image.webp",
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://elpernilet.com",
    },
    publisher: {
      "@type": "Organization",
      name: "elpernilet",
      url: "https://elpernilet.com",
      logo: {
        "@type": "ImageObject",
        url: "https://elpernilet.com/elpernilet-logo.svg",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://elpernilet.com/blog/${slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.content.replace(/<[^>]*>/g, "").split(" ").length,
    inLanguage: "es-ES",
    potentialAction: {
      "@type": "ReadAction",
      target: `https://elpernilet.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content" className="min-h-screen pt-20">
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Post Header */}
        <section className="py-12">
          <div className="w-full max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readingTime}
                </div>
                <ShareButtons
                  url={`/blog/${slug}`}
                  title={post.title}
                  description={post.excerpt}
                />
              </div>
            </div>

            {/* Featured Image */}
            {post.image && (
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-12">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </section>

        {/* Post Content */}
        <section className="pb-16">
          <div className="w-full max-w-4xl mx-auto px-4 relative">
            <BlogPostReadTracker slug={slug} title={post.title} />
            <article
              className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-blockquote:border-l-primary prose-blockquote:bg-accent/20 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        {/* Tags */}
        {post.tags.length > 0 && (
          <section className="pb-16">
            <div className="w-full max-w-4xl mx-auto px-4">
              <Separator className="mb-8" />
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm font-medium text-foreground">
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-accent/10">
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                  Posts Relacionados
                </h2>
                <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card
                    key={relatedPost.slug}
                    className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
                  >
                    {relatedPost.image && (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {relatedPost.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(relatedPost.date).toLocaleDateString(
                            "es-ES"
                          )}
                        </div>
                      </div>

                      <h3 className="text-lg font-serif font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {relatedPost.excerpt}
                      </p>

                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="group/btn text-xs cursor-pointer"
                        >
                          Leer más
                          <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="py-12">
          <div className="w-full max-w-4xl mx-auto px-4">
            <div className="flex justify-center">
              <Link href="/blog">
                <Button variant="outline" className="group cursor-pointer">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Volver al blog
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
