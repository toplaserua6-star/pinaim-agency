import { useState } from "react";
import { Check, LineChart, Search, Target, Layers } from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "ppc",
    icon: LineChart,
    title: "Контекстная реклама",
    sub: "Яндекс Директ / Google Ads",
    text: "Собираем спрос там, где клиент уже готов купить. Чистим мусорный трафик и системно снижаем стоимость заявки.",
    bullets: [
      "Аудит и пересборка кампаний за 5 дней",
      "Сквозная аналитика и коллтрекинг",
      "A/B-тесты объявлений и посадочных",
      "Снижение CPL в среднем на 38%",
    ],
  },
  {
    id: "smm",
    icon: Target,
    title: "Таргетированная реклама",
    sub: "Соцсети и мессенджеры",
    text: "Находим аудиторию по поведению и интересам, прогреваем контентом и добиваем ретаргетингом.",
    bullets: [
      "Сегментация и look-alike по CRM-базе",
      "10-15 креативов в месяц на тесты",
      "Воронки прогрева и ретаргетинг",
      "Ежемесячное обновление связок",
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO-продвижение",
    sub: "Органика, которая приносит лиды",
    text: "Технический фундамент, контент под интенты и аккуратная ссылочная стратегия без рисков фильтров.",
    bullets: [
      "Технический аудит и устранение ошибок",
      "Семантика и кластеризация под спрос",
      "Контент-план и тексты редакции",
      "Рост органики от 2× за 6 месяцев",
    ],
  },
  {
    id: "full",
    icon: Layers,
    title: "Маркетинг под ключ",
    sub: "Стратегия + все каналы",
    text: "Берём маркетинг целиком: от юнит-экономики и позиционирования до отчётности по деньгам.",
    bullets: [
      "Стратегия и медиаплан на 6-12 месяцев",
      "Ведение всех рекламных каналов",
      "Сайты и посадочные страницы",
      "Дашборд с метриками в реальном времени",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(services[0]!.id);
  const current = services.find((s) => s.id === active)!;

  return (
    <section id="services" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Услуги</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-bold">
            Четыре направления, одна цель — заявки по нужной цене
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={cn(
                "rounded-xl border px-5 py-3 text-sm font-semibold transition",
                active === s.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-[1.1fr_1fr]">
          <div className="bg-card p-8 lg:p-12">
            <current.icon className="h-10 w-10 text-primary" />
            <h3 className="mt-6 font-display text-3xl font-bold">{current.title}</h3>
            <p className="mt-1 text-sm text-primary">{current.sub}</p>
            <p className="mt-5 max-w-lg text-muted-foreground">{current.text}</p>
            <a
              href="#lead"
              className="mt-8 inline-flex rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:brightness-110"
            >
              Узнать цену
            </a>
          </div>
          <ul className="grid gap-4 bg-background p-8 lg:p-12">
            {current.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </span>
                <span className="text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}