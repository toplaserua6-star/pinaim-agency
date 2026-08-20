import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { Cases } from "@/components/site/cases";
import { Testimonials } from "@/components/site/testimonials";
import { Advantages } from "@/components/site/advantages";

import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { FloatingChat } from "@/components/site/floating-chat";

const title = "PinAim.agency — маркетинг под ключ: контекст, таргет, SEO";
const description =
  "Performance-агентство полного цикла: контекстная и таргетированная реклама, SEO и маркетинг под ключ. 120+ проектов, средний ROMI 340%. Бесплатный аудит за 3 дня.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "PinAim.agency",
          description,
          telephone: "+7 915 233-60-11",
          email: "hello@pinaim.agency",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Москва",
            streetAddress: "ул. Лесная, 7, офис 402",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "87",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Cases />
        <Testimonials />
        <Advantages />
        
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
