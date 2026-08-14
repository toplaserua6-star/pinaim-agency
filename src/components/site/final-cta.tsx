import { MessageCircle, Phone, Send } from "lucide-react";
import { LeadForm } from "./lead-form";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section id="lead" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-border p-8 lg:p-16"
            style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elevate)" }}
          >
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.0] font-bold">
                  Готовы к росту? Перезвоним за 15 минут
                </h2>
                <p className="mt-5 max-w-lg text-muted-foreground">
                  Оставьте заявку — проведём бесплатный аудит рекламы и покажем, где вы теряете
                  бюджет и сколько заявок можно получать при текущих вложениях.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://t.me/romi_agency"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
                  >
                    <Send className="h-4 w-4 text-primary" /> Telegram
                  </a>
                  <a
                    href="https://wa.me/74951234567"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
                  >
                    <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
                  </a>
                  <a
                    href="tel:+74951234567"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" /> +7 495 123-45-67
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-7 lg:p-8">
                <h3 className="font-display text-xl font-bold">Заявка на бесплатный аудит</h3>
                <div className="mt-6">
                  <LeadForm withNiche cta="Оставить заявку" source="Форма аудита" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}