import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Blog de elpernilet | Consejos de Cortador de Jamón y Organización de Eventos",
  description:
    "Guías prácticas sobre cortadores de jamón, barras de bebidas y planificación de eventos. Precios, cantidades por invitado y checklists descargables.",
  keywords: [
    "blog eventos España",
    "consejos eventos bodas",
    "tendencias eventos",
    "jamón ibérico consejos",
    "organización eventos",
    "servicios premium blog",
    "bodas España blog",
    "eventos corporativos blog",
  ],
  alternates: {
    canonical: "https://elpernilet.com/blog",
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
    title:
      "Blog de elpernilet | Consejos de Cortador de Jamón y Organización de Eventos",
    description:
      "Guías prácticas sobre cortadores de jamón, barras de bebidas y planificación de eventos. Precios, cantidades por invitado y checklists descargables.",
    url: "https://elpernilet.com/blog",
    siteName: "elpernilet",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://elpernilet.com/elpernilet-event-image.webp",
        width: 1200,
        height: 630,
        alt: "Blog de elpernilet | Consejos de Cortador de Jamón y Organización de Eventos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Blog de elpernilet | Consejos de Cortador de Jamón y Organización de Eventos",
    description:
      "Guías prácticas sobre cortadores de jamón, barras de bebidas y planificación de eventos. Precios, cantidades por invitado y checklists descargables.",
    creator: "@elpernilet",
    site: "@elpernilet",
    images: ["https://elpernilet.com/elpernilet-event-image.webp"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const featuredPost = posts[0]; // El post más reciente como destacado
  const otherPosts = posts.slice(1);

  // JSON-LD structured data para el blog
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de elpernilet | Consejos de Cortador de Jamón y Organización de Eventos",
    description:
      "Guías prácticas sobre cortadores de jamón, barras de bebidas y planificación de eventos. Precios, cantidades por invitado y checklists descargables.",
    url: "https://elpernilet.com/blog",
    publisher: {
      "@type": "Organization",
      name: "elpernilet",
      url: "https://elpernilet.com",
      logo: {
        "@type": "ImageObject",
        url: "https://elpernilet.com/elpernilet-logo.svg",
      },
    },
    inLanguage: "es-ES",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://elpernilet.com/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: post.author,
      },
      articleSection: post.category,
      keywords: post.tags.join(", "),
    })),
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gradient-to-b from-background to-accent/20">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Blog elpernilet
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Consejos de expertos, tendencias gastronómicas y secretos para
                hacer de tus eventos una experiencia inolvidable.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 md:py-16">
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                  Último Post
                </h2>
                <div className="w-20 h-1 bg-primary rounded"></div>
              </div>

              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  {featuredPost.image && (
                    <div className="md:w-1/2">
                      <div className="relative aspect-[16/9] md:aspect-[4/3]">
                        <Image
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                  <div
                    className={`${
                      featuredPost.image ? "md:w-1/2" : "w-full"
                    } p-8`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString(
                          "es-ES",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readingTime}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {featuredPost.author}
                        </div>
                      </div>

                      <Link href={`/blog/${featuredPost.slug}`}>
                        <Button className="group cursor-pointer">
                          Leer más
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Categories Filter */}
        {categories.length > 0 && (
          <section className="py-8 bg-accent/10">
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/blog">
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    Todos
                  </Badge>
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/blog/categoria/${category.toLowerCase()}`}
                  >
                    <Badge
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      {category}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        {otherPosts.length > 0 && (
          <section className="py-12 md:py-16">
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                  Más posts de tu interés
                </h2>
                <div className="w-20 h-1 bg-primary rounded"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPosts.map((post) => (
                  <Card
                    key={post.slug}
                    className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
                  >
                    {post.image && (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString("es-ES")}
                        </div>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </CardHeader>

                    <CardContent className="py-3">
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readingTime}
                          </div>
                        </div>

                        <Link href={`/blog/${post.slug}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="group/btn text-xs cursor-pointer"
                          >
                            Leer
                            <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Empty State */}
        {posts.length === 0 && (
          <section className="py-16 md:py-24">
            <div className="w-full max-w-7xl mx-auto px-4 text-center">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Próximamente
                </h2>
                <p className="text-muted-foreground mb-8">
                  Estamos preparando contenido increíble para ti. ¡Vuelve pronto
                  para descubrir nuestros primeros posts!
                </p>
                <Link href="/">
                  <Button>Volver al inicio</Button>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
