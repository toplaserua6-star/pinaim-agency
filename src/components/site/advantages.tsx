import { BarChart3, UserCheck, Wallet, BadgeCheck, PieChart, FileSignature } from "lucide-react";
import { Reveal } from "./reveal";

const items = [
  { icon: BarChart3, t: "Прозрачная аналитика", d: "Дашборд с расходом, лидами и CPL онлайн + еженедельная сводка в Telegram." },
  { icon: UserCheck, t: "Личный менеджер", d: "Один ответственный за проект, на связи в рабочее время, отвечает до 30 минут." },
  { icon: Wallet, t: "Гибкие тарифы", d: "Фиксированная ставка или модель с бонусом за достижение KPI по заявкам." },
  { icon: BadgeCheck, t: "Сертифицированные специалисты", d: "Действующие сертификаты Яндекса, Google и Meta у всей команды по трафику." },
  { icon: PieChart, t: "Без процента от бюджета", d: "Мы не зарабатываем на росте вашего расхода — только на результате и работе." },
  { icon: FileSignature, t: "Гарантии в договоре", d: "Прогноз по CPL и объёму лидов фиксируем письменно, с планом действий при отклонении." },
];

export function Advantages() {
  return (
    <section id="about" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">О нас</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-bold">
            Почему выбирают ROMI.agency
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/60">
                <it.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-5 text-lg font-bold">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}