import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const title = "Спасибо за заявку — PinAim.agency";
const description =
  "Заявка отправлена. Свяжемся с вами в течение 15 минут в рабочее время и подготовим бесплатный экспресс-аудит рекламы.";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto flex max-w-7xl items-center px-5 py-24 lg:px-8 lg:py-32">
        <div
          className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-border p-8 text-center lg:p-16"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elevate)" }}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mt-8 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-bold">
            Спасибо! Заявка принята
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Мы уже получили ваши данные. Свяжемся в течение 15 минут в рабочее время,
            зададим пару уточняющих вопросов и подготовим бесплатный экспресс-аудит рекламы.
          </p>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
            {[
              { step: "1", text: "Созвон 15 минут: цели, ниша, текущие результаты" },
              { step: "2", text: "Экспресс-аудит рекламы и точки роста" },
              { step: "3", text: "Медиаплан с прогнозом заявок и CPL" },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-border bg-card p-5">
                <span className="font-display text-sm font-bold text-primary">
                  Шаг {item.step}
                </span>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:brightness-110"
            >
              Вернуться на сайт
            </Link>
            <a
              href="https://t.me/managaaaaa"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3.5 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              <Send className="h-4 w-4 text-primary" /> Telegram
            </a>
            <a
              href="https://wa.me/79152336011"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3.5 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}