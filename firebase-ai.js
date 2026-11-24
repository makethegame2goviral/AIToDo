const SUPABASE_URL = "https://xbefkwirfijxglgoogrn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_3hsQ2uEpBBYOQ2rh44J2BQ_6mt9md6T";
const NOVA_ENDPOINT = SUPABASE_URL + "/functions/v1/nova-ai";

window.novaGeminiStatus = "connecting";

window.novaGeminiAsk = async function(messages, userName = "") {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error("Schreibe zuerst eine Nachricht an Nova.");
  }
  let response;
  try {
    response = await fetch(NOVA_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_PUBLISHABLE_KEY,
        "Authorization": "Bearer " + SUPABASE_PUBLISHABLE_KEY
      },
      body: JSON.stringify({
        messages: messages.slice(-10),
        userName: String(userName || "").slice(0, 30)
      }),
      signal: AbortSignal.timeout(30000)
    });
  } catch (error) {
    if (error && error.name === "TimeoutError") {
      throw new Error("Nova braucht gerade zu lange. Bitte versuche es noch einmal.");
    }
    throw new Error("Keine Verbindung zu Nova. Prüfe dein Internet und versuche es erneut.");
  }

  let data = {};
  try { data = await response.json(); } catch (_) {}
  if (!response.ok) {
    const fallback = response.status === 429
      ? "Nova hat gerade zu viele Anfragen. Bitte warte kurz."
      : "Nova konnte gerade nicht antworten. Bitte versuche es erneut.";
    throw new Error(typeof data.error === "string" ? data.error : fallback);
  }
  if (typeof data.answer !== "string" || !data.answer.trim()) {
    throw new Error("Nova hat keine gültige Antwort erhalten.");
  }
  window.novaGeminiStatus = "ready";
  return data.answer.trim();
};

window.novaGeminiStatus = "ready";
window.dispatchEvent(new Event("nova-ready"));
