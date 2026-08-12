import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Case = {
  id: string;
  client: string;
  niche: string;
  tag: string;
  task: string;
  did: string;
  metrics: { v: string; l: string }[];
  chart: number[];
  details: string[];
};

const filters = [
  { id: "all", label: "Все" },
  { id: "ecom", label: "E-commerce" },
  { id: "services", label: "Услуги" },
  { id: "b2b", label: "B2B" },
  { id: "realty", label: "Недвижимость" },
];

const cases: Case[] = [
  {
    id: "1",
    client: "NORDLY",
    niche: "Интернет-магазин мебели",
    tag: "ecom",
    task: "Реклама работала в минус: ДРР 42% при плане 15%.",
    did: "Пересобрали товарные кампании, внедрили фиды и динамический ретаргетинг.",
    metrics: [
      { v: "×3.2", l: "заявок в месяц" },
      { v: "−47%", l: "CPL" },
      { v: "410%", l: "ROMI" },
    ],
    chart: [18, 26, 31, 44, 58, 79],
    details: [
      "Было: 210 заказов/мес, CPO 3 900 ₽, ДРР 42%.",
      "Стало за 4 месяца: 670 заказов/мес, CPO 2 070 ₽, ДРР 13%.",
      "Ключевое: сегментация фида по маржинальности и отдельные бюджеты на топ-категории.",
    ],
  },
  {
    id: "2",
    client: "Клиника «Ортодент»",
    niche: "Стоматология, 3 филиала",
    tag: "services",
    task: "Заявки дорогие и нецелевые, запись падала в межсезонье.",
    did: "Разделили кампании по услугам, подключили коллтрекинг и квиз-лендинг.",
    metrics: [
      { v: "−38%", l: "стоимость записи" },
      { v: "×2.4", l: "первичных пациентов" },
      { v: "92%", l: "целевых звонков" },
    ],
    chart: [22, 24, 35, 41, 52, 63],
    details: [
      "Было: 1 850 ₽ за запись, 40% нецелевых обращений.",
      "Стало: 1 140 ₽ за запись, доля нецелевых — 8%.",
      "Ключевое: скрипты + прослушка звонков и еженедельная чистка запросов.",
    ],
  },
  {
    id: "3",
    client: "SteelPro",
    niche: "Производство металлоконструкций",
    tag: "b2b",
    task: "Длинный цикл сделки, нет прогноза по лидам.",
    did: "SEO + контекст по коммерческим кластерам, отчёт по сделкам из CRM.",
    metrics: [
      { v: "×4.1", l: "органический трафик" },
      { v: "68", l: "лидов/мес" },
      { v: "₽21 млн", l: "выручка с канала" },
    ],
    chart: [10, 15, 24, 38, 55, 72],
    details: [
      "Технический аудит: устранено 340 ошибок индексации.",
      "Написано 46 коммерческих страниц под кластеры спроса.",
      "ТОП-10 по 214 запросам за 7 месяцев.",
    ],
  },
  {
    id: "4",
    client: "ЖК «Панорама»",
    niche: "Застройщик, комфорт-класс",
    tag: "realty",
    task: "Дорогие лиды в высококонкурентном регионе.",
    did: "Таргет по look-alike на базе CRM + чат-бот квалификации в Telegram.",
    metrics: [
      { v: "−31%", l: "CPL" },
      { v: "×1.9", l: "квалифицированных лидов" },
      { v: "17", l: "сделок за квартал" },
    ],
    chart: [30, 33, 40, 47, 58, 66],
    details: [
      "Было: 4 300 ₽ за лид, квалификация 22%.",
      "Стало: 2 960 ₽ за лид, квалификация 41%.",
      "Бот отсекает нецелевых до передачи в отдел продаж.",
    ],
  },
  {
    id: "5",
    client: "GreenBox",
    niche: "Доставка готовой еды",
    tag: "ecom",
    task: "Высокий отток, реклама не окупалась на первом заказе.",
    did: "Перестроили экономику на LTV, запустили ретаргет и реферальную механику.",
    metrics: [
      { v: "×2.7", l: "повторных заказов" },
      { v: "−24%", l: "CAC" },
      { v: "365%", l: "ROMI" },
    ],
    chart: [20, 28, 30, 42, 49, 61],
    details: [
      "Когортный анализ показал окупаемость на 2.3 заказе.",
      "Ретаргет по неактивным 14+ дней вернул 18% базы.",
      "Средний чек вырос на 340 ₽ за счёт апселлов.",
    ],
  },
  {
    id: "6",
    client: "LegalOne",
    niche: "Юридические услуги для бизнеса",
    tag: "services",
    task: "Заявки от физлиц вместо целевого B2B-сегмента.",
    did: "Переписали офферы, сузили семантику, ввели скоринг лидов.",
    metrics: [
      { v: "×3.0", l: "целевых заявок" },
      { v: "−52%", l: "нецелевые обращения" },
      { v: "₽6.4 млн", l: "новых контрактов" },
    ],
    chart: [12, 19, 27, 33, 46, 58],
    details: [
      "Отдельные посадочные под 4 сегмента B2B.",
      "Минус-слова из 2 400 запросов физлиц.",
      "Скоринг в CRM: приоритет заявкам с оборотом от 50 млн ₽.",
    ],
  },
];

function Spark({ data }: { data: number[] }) {
  const max = Math.max(...data);
  return (
    <div className="flex h-16 items-end gap-1.5" aria-hidden>
      {data.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-t bg-primary/25 transition-all group-hover:bg-primary/60"
          style={{ height: `${(v / max) * 100}%` }}
        />
      ))}
    </div>
  );
}

export function Cases() {
  const [filter, setFilter] = useState("all");
  const [openCase, setOpenCase] = useState<Case | null>(null);
  const list = filter === "all" ? cases : cases.filter((c) => c.tag === filter);

  return (
    <section id="cases" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Кейсы</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-bold">
            Результаты, которые можно посчитать
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                filter === f.id
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((c, i) => (
            <Reveal key={c.id} delay={i * 70}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/60">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-xl font-bold">{c.client}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{c.niche}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-primary opacity-0 transition group-hover:opacity-100" />
                </div>
                <p className="mt-5 text-sm text-muted-foreground">{c.task}</p>
                <p className="mt-2 text-sm text-foreground/90">{c.did}</p>
                <div className="mt-6"><Spark data={c.chart} /></div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {c.metrics.map((m) => (
                    <div key={m.l}>
                      <div className="font-display text-2xl font-bold text-primary">{m.v}</div>
                      <div className="mt-1 text-[11px] leading-tight text-muted-foreground">{m.l}</div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setOpenCase(c)}
                  className="mt-7 rounded-xl border border-border py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
                >
                  Читать кейс полностью
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#lead"
            className="rounded-xl bg-primary px-7 py-4 text-base font-bold text-primary-foreground transition hover:brightness-110"
          >
            Хочу такой же результат
          </a>
        </div>
      </div>

      <Dialog open={!!openCase} onOpenChange={(o) => !o && setOpenCase(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto border-border bg-card sm:max-w-2xl">
          {openCase && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{openCase.client}</DialogTitle>
                <DialogDescription>{openCase.niche}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-3 gap-4 rounded-xl border border-border bg-background p-5">
                {openCase.metrics.map((m) => (
                  <div key={m.l}>
                    <div className="font-display text-2xl font-bold text-primary">{m.v}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{m.l}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-border bg-background p-5">
                <p className="mb-3 text-xs tracking-widest text-muted-foreground uppercase">
                  Динамика заявок, 6 месяцев
                </p>
                <Spark data={openCase.chart} />
              </div>
              <ul className="grid gap-3">
                {openCase.details.map((d) => (
                  <li key={d} className="text-sm text-foreground/90">— {d}</li>
                ))}
              </ul>
              <a
                href="#lead"
                onClick={() => setOpenCase(null)}
                className="rounded-xl bg-primary py-3.5 text-center text-sm font-bold text-primary-foreground"
              >
                Обсудить мой проект
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}