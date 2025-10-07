import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { EventGallery } from "@/components/event-gallery";
import { OurStory } from "@/components/our-story";
import { FAQ } from "@/components/faq";
import { BlogPreview } from "@/components/blog-preview";
import { OnlineStore } from "@/components/online-store";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <EventGallery />
      <OurStory />
      <FAQ />
      <BlogPreview />
      <OnlineStore />
      <ContactForm />
      <Footer />
    </main>
  );
}
