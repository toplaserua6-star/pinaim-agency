import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

const faq = [
  { q: "Когда будут первые результаты?", a: "Первые заявки — обычно на 3-7 день после запуска контекста и таргета. Стабильная экономика связок выходит на плановые показатели за 4-8 недель. SEO даёт первый заметный прирост трафика на 3-4 месяце." },
  { q: "Какой минимальный рекламный бюджет?", a: "От 50 000 ₽/мес на канал. При меньшем бюджете тестов слишком мало, чтобы алгоритмы обучились, и мы не сможем гарантировать прогноз по CPL." },
  { q: "Как вы считаете эффективность?", a: "По деньгам: CPL, CAC, ROMI и выручка с канала. Подключаем сквозную аналитику и коллтрекинг, сверяем данные с вашей CRM. Клики и показы — служебные метрики, а не результат." },
  { q: "Работаете ли вы с моей нишей?", a: "Мы вели проекты в e-commerce, услугах, B2B-производстве, недвижимости и медицине. Если в нише нет опыта — говорим об этом прямо и делаем расширенный аудит перед стартом." },
  { q: "Берёте ли процент от рекламного бюджета?", a: "Нет. Стоимость работ фиксированная либо привязана к KPI по заявкам. Нам невыгодно раздувать ваш расход." },
  { q: "Кому принадлежат рекламные кабинеты?", a: "Вам. Работаем в ваших аккаунтах или передаём доступы при старте, все данные и наработки остаются у клиента после завершения сотрудничества." },
  { q: "Что входит в бесплатный аудит?", a: "Разбор текущих кампаний и аналитики, оценка конкурентов, список ошибок с потенциальной экономией бюджета и прогноз по заявкам. Занимает 2-3 рабочих дня." },
  { q: "Какие гарантии вы даёте?", a: "Фиксируем в договоре прогноз по CPL и объёму лидов. При отклонении более чем на 20% — бесплатный месяц работ и согласованный план исправления." },
];

export function Faq() {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">FAQ</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-bold">
              Частые вопросы
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((f, i) => (
                <AccordionItem key={f.q} value={`i${i}`} className="border-border">
                  <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold no-underline hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}