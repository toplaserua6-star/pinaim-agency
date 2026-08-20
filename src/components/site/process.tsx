import { Reveal } from "./reveal";

const steps = [
  { n: "01", t: "Бесплатный аудит ниши", d: "Разбираем текущую рекламу, конкурентов и юнит-экономику. Показываем, где сливается бюджет." },
  { n: "02", t: "Стратегия и медиаплан", d: "Считаем прогноз по заявкам и CPL, фиксируем каналы, бюджеты и KPI в договоре." },
  { n: "03", t: "Запуск и тесты гипотез", d: "За 5-10 дней запускаем первые связки: аудитории, офферы, креативы, посадочные." },
  { n: "04", t: "Масштабирование", d: "Отключаем убыточное, докручиваем прибыльное и наращиваем объём без роста стоимости лида." },
  { n: "05", t: "Отчётность и оптимизация", d: "Еженедельные сводки, ежемесячный отчёт по деньгам и план работ на следующий период." },
];

export function Process() {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Процесс</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-bold">
            Как мы работаем
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60">
                <div className="font-display text-4xl font-bold text-primary/40 transition group-hover:text-primary">
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}