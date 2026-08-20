import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "./reveal";
import { LeadForm } from "./lead-form";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Старт",
    price: "от 60 000 ₽/мес",
    for: "Один канал, быстрый запуск",
    features: ["Аудит и стратегия", "Контекст или таргет", "До 3 посадочных", "Отчёт раз в месяц"],
  },
  {
    name: "Рост",
    price: "от 120 000 ₽/мес",
    for: "Два канала и масштабирование",
    features: [
      "Контекст + таргет",
      "Сквозная аналитика и коллтрекинг",
      "10-15 креативов в месяц",
      "Еженедельные отчёты и созвоны",
    ],
    featured: true,
  },
  {
    name: "Комплекс",
    price: "от 250 000 ₽/мес",
    for: "Маркетинг под ключ",
    features: [
      "Все каналы + SEO",
      "Стратегия на 6-12 месяцев",
      "Разработка посадочных",
      "Личный менеджер и дашборд 24/7",
    ],
  },
];

const niches = [
  { name: "E-commerce", k: 0.85 },
  { name: "Услуги", k: 1 },
  { name: "B2B", k: 1.4 },
  { name: "Недвижимость", k: 1.8 },
  { name: "Медицина", k: 1.15 },
  { name: "Другое", k: 1.05 },
];
const goals = [
  { id: "leads", label: "Больше заявок", k: 1 },
  { id: "cpl", label: "Снизить стоимость лида", k: 1.1 },
  { id: "scale", label: "Масштабирование", k: 1.25 },
];

export function Pricing() {
  const [niche, setNiche] = useState(niches[0]!.name);
  const [budget, setBudget] = useState(300000);
  const [goal, setGoal] = useState(goals[0]!.id);

  const calc = useMemo(() => {
    const k = goals.find((g) => g.id === goal)!.k;
    const nk = niches.find((n) => n.name === niche)!.k;
    const fee = Math.round((45000 + budget * 0.12) * k);
    const cpl = Math.max(350, Math.round((2600 - budget / 900) * nk * (goal === "cpl" ? 0.82 : 1)));
    const leads = Math.round(budget / cpl);
    return { fee, cpl, leads };
  }, [budget, goal, niche]);

  return (
    <section id="pricing" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Цены</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-bold">
            Тарифы и расчёт стоимости
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-8",
                  p.featured ? "border-primary bg-primary/[0.06]" : "border-border bg-card",
                )}
              >
                {p.featured && (
                  <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    Выбирают чаще всего
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.for}</p>
                <p className="mt-5 font-display text-2xl font-bold text-primary">{p.price}</p>
                <ul className="mt-6 grid flex-1 gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#lead"
                  className={cn(
                    "mt-8 rounded-xl py-3.5 text-center text-sm font-bold transition",
                    p.featured
                      ? "bg-primary text-primary-foreground hover:brightness-110"
                      : "border border-border hover:border-primary hover:text-primary",
                  )}
                >
                  Обсудить тариф
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-2">
            <div className="bg-card p-8 lg:p-12">
              <h3 className="font-display text-2xl font-bold">Рассчитать стоимость продвижения</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ориентировочный расчёт за 20 секунд. Точные цифры — после бесплатного аудита.
              </p>

              <div className="mt-8 grid gap-6">
                <div>
                  <p className="mb-3 text-xs tracking-widest text-muted-foreground uppercase">Ниша</p>
                  <div className="flex flex-wrap gap-2">
                    {niches.map((n) => (
                      <button
                        key={n.name}
                        onClick={() => setNiche(n.name)}
                        className={cn(
                          "rounded-lg border px-3 py-2 text-sm transition",
                          niche === n.name
                            ? "border-primary text-primary"
                            : "border-border text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {n.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-xs tracking-widest text-muted-foreground uppercase">
                    Рекламный бюджет: {budget.toLocaleString("ru-RU")} ₽/мес
                  </p>
                  <input
                    type="range"
                    min={50000}
                    max={2000000}
                    step={10000}
                    value={budget}
                    aria-label="Рекламный бюджет"
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-[var(--primary)]"
                  />
                </div>

                <div>
                  <p className="mb-3 text-xs tracking-widest text-muted-foreground uppercase">Цель</p>
                  <div className="flex flex-wrap gap-2">
                    {goals.map((g) => (
                      <button
                        key={g.id}
                        onClick={() => setGoal(g.id)}
                        className={cn(
                          "rounded-lg border px-3 py-2 text-sm transition",
                          goal === g.id
                            ? "border-primary text-primary"
                            : "border-border text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>

                <a
                  href="#lead"
                  className="rounded-xl bg-primary py-3.5 text-center text-sm font-bold text-primary-foreground transition hover:brightness-110"
                >
                  Получить точный расчёт
                </a>
              </div>
            </div>

            <div className="bg-background p-8 lg:p-12">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Предварительный расчёт · {niche}
              </p>
              <div className="mt-6 grid gap-6">
                  <div>
                    <div className="font-display text-4xl font-bold text-primary">
                      {calc.fee.toLocaleString("ru-RU")} ₽
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">стоимость работ в месяц</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="font-display text-3xl font-bold">
                        ~{calc.leads.toLocaleString("ru-RU")}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">заявок в месяц</p>
                    </div>
                    <div>
                      <div className="font-display text-3xl font-bold">
                        ~{calc.cpl.toLocaleString("ru-RU")} ₽
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">прогноз CPL</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="mb-4 text-sm font-semibold">
                      Пришлём детальный расчёт и план на 3 месяца
                    </p>
                    <LeadForm cta="Получить расчёт" source="Калькулятор стоимости" />
                  </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}