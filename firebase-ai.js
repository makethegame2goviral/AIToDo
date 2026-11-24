const SUPABASE_URL = "https://xbefkwirfijxglgoogrn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_3hsQ2uEpBBYOQ2rh44J2BQ_6mt9md6T";
const NOVA_ENDPOINT = SUPABASE_URL + "/functions/v1/nova-ai";

window.novaGeminiStatus = "ready";
window.novaGeminiReady = Promise.resolve(true);

window.novaGeminiAsk = async function(messages, userName = "") {
  const response = await fetch(NOVA_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_PUBLISHABLE_KEY,
      "Authorization": "Bearer " + SUPABASE_PUBLISHABLE_KEY
    },
    body: JSON.stringify({
      messages: messages.slice(-10),
      userName: String(userName || "").slice(0, 30)
    })
  });
  let data = {};
  try { data = await response.json(); } catch (_) {}
  if (!response.ok) throw new Error(data.error || "Nova konnte gerade nicht antworten.");
  if (typeof data.answer !== "string" || !data.answer.trim()) {
    throw new Error("Nova hat keine gültige Antwort erhalten.");
  }
  return data.answer.trim();
};
