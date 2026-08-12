import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Reveal } from "./reveal";

const reviews = [
  {
    name: "Игорь Ветров",
    role: "Коммерческий директор, NORDLY",
    text: "За первый квартал ДРР упал с 42% до 13%. Главное — не отчёты ради отчётов, а понятные решения каждую неделю. Впервые вижу подрядчика, который говорит на языке денег.",
    source: "Отзыв в Google Картах",
    video: true,
    initials: "ИВ",
  },
  {
    name: "Марина Соколова",
    role: "Владелица клиники «Ортодент»",
    text: "Записи выросли в 2.4 раза, при этом стоимость записи снизилась. Отдельно ценю прослушку звонков — нам показали, где теряет администратор, а не только реклама.",
    source: "Видеоотзыв",
    video: false,
    initials: "МС",
  },
  {
    name: "Алексей Дорохов",
    role: "CEO, SteelPro",
    text: "B2B с длинным циклом — сложная история, но ребята выстроили прогноз по сделкам, а не по кликам. 21 млн выручки с канала за год говорят сами за себя.",
    source: "Отзыв в Telegram-канале",
    video: false,
    initials: "АД",
  },
  {
    name: "Ольга Панина",
    role: "Маркетинг-директор, ЖК «Панорама»",
    text: "Квалификация лидов выросла почти вдвое. Отдел продаж перестал тратить время на нецелевые обращения — это то, ради чего мы меняли подрядчика.",
    source: "Отзыв в Google Картах",
    video: true,
    initials: "ОП",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i]!;

  return (
    <section id="reviews" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div className="min-w-0">
              <p className="text-sm font-semibold tracking-widest text-primary uppercase">Отзывы</p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-bold">
                Говорят клиенты
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">4.9 из 5</span> — 87 отзывов
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-[1fr_1.3fr]">
            <div className="relative grid min-h-56 place-items-center bg-card p-8">
              <div className="grid h-24 w-24 place-items-center rounded-full bg-primary/15 font-display text-2xl font-bold text-primary">
                {r.initials}
              </div>
              {r.video && (
                <button className="absolute bottom-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold transition hover:border-primary hover:text-primary">
                  <Play className="h-3.5 w-3.5 text-primary" /> Смотреть видеоотзыв
                </button>
              )}
            </div>
            <div className="bg-background p-8 lg:p-12">
              <p className="font-display text-xl leading-relaxed font-medium lg:text-2xl">
                «{r.text}»
              </p>
              <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                <div className="min-w-0">
                  <p className="truncate font-bold">{r.name}</p>
                  <p className="truncate text-sm text-muted-foreground">{r.role}</p>
                  <p className="mt-1 text-xs text-primary">{r.source}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    aria-label="Предыдущий отзыв"
                    onClick={() => setI((p) => (p - 1 + reviews.length) % reviews.length)}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-border transition hover:border-primary hover:text-primary"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    aria-label="Следующий отзыв"
                    onClick={() => setI((p) => (p + 1) % reviews.length)}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-border transition hover:border-primary hover:text-primary"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}