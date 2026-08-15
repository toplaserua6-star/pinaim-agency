import { MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="animate-scale-in flex flex-col gap-2">
          <a
            href="https://t.me/pinaim_agency"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-lg"
          >
            <Send className="h-4 w-4 text-primary" /> Telegram
          </a>
          <a
            href="https://wa.me/74951234567"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-lg"
          >
            <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
          </a>
        </div>
      )}
      <button
        aria-label="Написать нам"
        onClick={() => setOpen((v) => !v)}
        className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_40px_-10px_var(--primary)] transition hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}