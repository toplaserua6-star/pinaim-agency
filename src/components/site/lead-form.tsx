import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Укажите имя").max(80, "Слишком длинное имя"),
  contact: z
    .string()
    .trim()
    .min(5, "Укажите телефон или Telegram")
    .max(80, "Слишком длинное значение"),
  niche: z.string().trim().max(100).optional(),
});

export function LeadForm({
  withNiche = false,
  layout = "stack",
  cta = "Оставить заявку",
}: {
  withNiche?: boolean;
  layout?: "stack" | "row";
  cta?: string;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [open, setOpen] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      contact: String(fd.get("contact") ?? ""),
      niche: String(fd.get("niche") ?? ""),
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (next[String(i.path[0])] = i.message));
      setErrors(next);
      return;
    }
    setErrors({});
    // TODO: подключить backend/CRM — сюда приходят валидные данные заявки
    e.currentTarget.reset();
    setOpen(true);
  };

  const field =
    "w-full rounded-xl border border-border bg-secondary/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary/70 focus:ring-2 focus:ring-primary/20";

  return (
    <>
      <form
        onSubmit={submit}
        noValidate
        className={cn("w-full gap-3", layout === "row" ? "grid sm:grid-cols-[1fr_1fr_auto]" : "grid")}
      >
        <div className="min-w-0">
          <input name="name" placeholder="Ваше имя" className={field} aria-label="Имя" />
          {errors["name"] && <p className="mt-1 text-xs text-destructive">{errors["name"]}</p>}
        </div>
        <div className="min-w-0">
          <input name="contact" placeholder="Телефон или @telegram" className={field} aria-label="Телефон или Telegram" />
          {errors["contact"] && <p className="mt-1 text-xs text-destructive">{errors["contact"]}</p>}
        </div>
        {withNiche && (
          <div className="min-w-0">
            <input name="niche" placeholder="Ниша бизнеса" className={field} aria-label="Ниша бизнеса" />
          </div>
        )}
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:brightness-110 active:scale-[0.99]"
        >
          {cta}
        </button>
        <p className="text-xs text-muted-foreground sm:col-span-full">
          Уже 120+ компаний доверили нам маркетинг. Перезвоним за 15 минут.
        </p>
      </form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="border-border bg-card">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Спасибо за заявку</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Свяжемся с вами в течение 15 минут в рабочее время и подготовим бесплатный
              экспресс-аудит вашей рекламы.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}