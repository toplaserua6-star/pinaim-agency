import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  contact: z.string().trim().min(5).max(80),
  niche: z.string().trim().max(100).optional(),
  source: z.string().trim().max(80).optional(),
});

const CHAT_ID = "-5392774031";

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export const sendLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const token = process.env["TELEGRAM_BOT_TOKEN"];
    if (!token) throw new Error("TELEGRAM_BOT_TOKEN is not configured");

    const lines = [
      "<b>Новая заявка с сайта ROMI.agency</b>",
      `Имя: ${escapeHtml(data.name)}`,
      `Контакт: ${escapeHtml(data.contact)}`,
      data.niche ? `Ниша: ${escapeHtml(data.niche)}` : null,
      data.source ? `Форма: ${escapeHtml(data.source)}` : null,
    ].filter(Boolean);

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: lines.join("\n"),
        parse_mode: "HTML",
      }),
    });

    const result = (await response.json()) as { ok?: boolean; description?: string };
    if (!response.ok || !result.ok) {
      console.error(`Telegram sendMessage failed [${response.status}]: ${result.description}`);
      throw new Error(`Telegram sendMessage failed [${response.status}]: ${result.description}`);
    }

    return { ok: true as const };
  });