import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  contact: z.string().trim().min(5).max(80),
  niche: z.string().trim().max(100).optional(),
  source: z.string().trim().max(80).optional(),
});

// Группа была преобразована в супергруппу, поэтому основной ID — с префиксом -100.
const CHAT_ID = "-1004373285241";
const LEGACY_CHAT_ID = "-5392774031";

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export const sendLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const token = process.env["TELEGRAM_BOT_TOKEN"];
    if (!token) throw new Error("TELEGRAM_BOT_TOKEN is not configured");

    const lines = [
      "<b>Новая заявка с сайта PinAim.agency</b>",
      `Имя: ${escapeHtml(data.name)}`,
      `Контакт: ${escapeHtml(data.contact)}`,
      data.niche ? `Ниша: ${escapeHtml(data.niche)}` : null,
      data.source ? `Форма: ${escapeHtml(data.source)}` : null,
    ].filter(Boolean);

    const text = lines.join("\n");
    const send = async (chatId: string | number) => {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        description?: string;
        parameters?: { migrate_to_chat_id?: number };
      };
      return { status: response.status, result };
    };

    let { status, result } = await send(CHAT_ID);

    // Фолбэк на старый ID группы / новый ID после миграции.
    if (!result.ok) {
      const fallback = result.parameters?.migrate_to_chat_id ?? LEGACY_CHAT_ID;
      console.error(`Telegram retry with chat_id ${fallback}: ${result.description}`);
      ({ status, result } = await send(fallback));
    }

    if (!result.ok) {
      console.error(`Telegram sendMessage failed [${status}]: ${result.description}`);
      throw new Error(`Telegram sendMessage failed [${status}]: ${result.description}`);
    }

    // Дублируем заявку на почту через Web3Forms.
    try {
      const mail = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "8bab22a8-3ed9-4cae-af76-e9cd4f3b9210",
          subject: "Новая заявка с сайта PinAim.agency",
          from_name: "PinAim.agency",
          name: data.name,
          contact: data.contact,
          niche: data.niche ?? "—",
          form: data.source ?? "—",
        }),
      });
      const mailResult = (await mail.json()) as { success?: boolean; message?: string };
      if (!mailResult.success) console.error(`Web3Forms failed: ${mailResult.message}`);
    } catch (error) {
      console.error("Web3Forms request error", error);
    }

    return { ok: true as const };
  });