const nav = [
  { href: "#services", label: "Услуги" },
  { href: "#cases", label: "Кейсы" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#about", label: "О нас" },
  { href: "#pricing", label: "Цены" },
];

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary font-display text-lg font-bold text-primary-foreground">
                R
              </span>
              <span className="font-display text-lg font-bold">
                ROMI<span className="text-primary">.</span>agency
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              Performance-агентство полного цикла: контекст, таргет, SEO и комплексный маркетинг
              под ключ. Работаем на заявки и окупаемость, а не на отчёты о показах.
            </p>
          </div>

          <nav className="grid content-start gap-3">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Разделы</p>
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-foreground/90 hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="grid content-start gap-3">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Контакты</p>
            <a href="tel:+74951234567" className="text-sm hover:text-primary">+7 495 123-45-67</a>
            <a href="mailto:hello@romi.agency" className="text-sm hover:text-primary">hello@romi.agency</a>
            <p className="text-sm text-muted-foreground">Москва, ул. Лесная, 7, офис 402</p>
            <div className="mt-1 flex gap-4 text-sm">
              <a href="https://t.me/" target="_blank" rel="noreferrer" className="hover:text-primary">Telegram</a>
              <a href="https://wa.me/74951234567" target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-3 border-t border-border pt-7 text-xs text-muted-foreground sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ROMI.agency. Все права защищены.</p>
          <a href="#top" className="hover:text-primary">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}