import { Counter } from "./counter";
import { Reveal } from "./reveal";

const stats = [
  { value: 120, suffix: "+", label: "проектов запущено" },
  { value: 5, suffix: " лет", label: "на рынке performance" },
  { value: 850, prefix: "₽", suffix: " млн", label: "освоенного бюджета" },
  { value: 340, suffix: "%", label: "средний ROMI клиентов" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(70% 60% at 50% 30%, black, transparent)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Performance-агентство полного цикла
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] font-bold">
            Приводим клиентов,
            <br />
            <span className="text-primary">а не просто трафик</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground">
            Контекст, таргет, SEO и комплексный маркетинг под ключ для малого и среднего бизнеса.
            Считаем не клики, а заявки и деньги: окупаемость первых связок — в среднем за 30 дней.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#lead"
              className="rounded-xl bg-primary px-7 py-4 text-base font-bold text-primary-foreground transition hover:brightness-110"
            >
              Бесплатный аудит
            </a>
            <a
              href="#cases"
              className="rounded-xl border border-border px-7 py-4 text-base font-semibold transition hover:border-primary/60 hover:text-primary"
            >
              Смотреть кейсы
            </a>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="bg-background">
              <div className="p-6 lg:p-8">
                <div className="font-display text-4xl font-bold text-primary lg:text-5xl">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}