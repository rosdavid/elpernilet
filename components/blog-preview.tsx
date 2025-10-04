import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3); // Solo los 3 más recientes

  if (posts.length === 0) {
    return null; // No mostrar la sección si no hay posts
  }

  return (
    <section id="blog" className="py-24 md:py-32 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-balance">
            Últimos artículos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Consejos de expertos, tendencias gastronómicas y secretos del
            catering premium para hacer de tus eventos una experiencia
            inolvidable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image || "/evento-boda-1.webp"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 backdrop-blur-sm"
                  >
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readingTime}
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn text-xs cursor-pointer"
                    >
                      Leer más
                      <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action para ver todos los posts */}
        <div className="text-center">
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="group cursor-pointer"
            >
              Ver todos los artículos
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
