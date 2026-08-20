import { Reveal } from "./reveal";

const team = [
  { n: "Дмитрий Ковалёв", r: "Founder, стратег", s: "Юнит-экономика, медиапланирование" },
  { n: "Анна Лебедева", r: "Head of PPC", s: "Яндекс Директ, Google Ads, фиды" },
  { n: "Тимур Аскеров", r: "Head of SEO", s: "Техническая оптимизация, семантика" },
  { n: "Кирилл Мороз", r: "Team Lead Targeting", s: "Соцсети, креативы, ретаргетинг" },
];

export function Team() {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Команда</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-bold">
            Кто будет вести ваш проект
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <div
                  className="mb-5 aspect-4/5 w-full rounded-xl"
                  style={{
                    background:
                      "linear-gradient(140deg, color-mix(in oklab, var(--primary) 22%, transparent), var(--secondary))",
                  }}
                />
                <h3 className="text-lg font-bold">{p.n}</h3>
                <p className="text-sm text-primary">{p.r}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}