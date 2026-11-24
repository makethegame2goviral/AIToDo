import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app-check.js";
import { getAI, getGenerativeModel, GoogleAIBackend } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-ai.js";
import { firebaseConfig, recaptchaEnterpriseSiteKey } from "./firebase-config.js";

const required = ["apiKey", "authDomain", "projectId", "appId"];
const configured = required.every(k => firebaseConfig[k] && !firebaseConfig[k].startsWith("HIER_")) &&
  recaptchaEnterpriseSiteKey && !recaptchaEnterpriseSiteKey.startsWith("HIER_");

window.novaGeminiReady = (async () => {
  if (!configured) {
    window.novaGeminiStatus = "setup-needed";
    return false;
  }
  const app = initializeApp(firebaseConfig);
  initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(recaptchaEnterpriseSiteKey),
    isTokenAutoRefreshEnabled: true
  });
  const ai = getAI(app, { backend: new GoogleAIBackend() });
  window.novaGeminiModel = getGenerativeModel(ai, {
    model: "gemini-3.8-flash",
    systemInstruction: "Du bist Nova, ein hilfreicher deutschsprachiger Assistent. Antworte freundlich, klar und altersgerecht. Gib keine gefährlichen Anleitungen. Wenn du etwas nicht weißt, sage es ehrlich."
  });
  window.novaGeminiStatus = "ready";
  return true;
})().catch(error => {
  console.error("Nova Firebase AI initialisation failed:", error);
  window.novaGeminiStatus = "error";
  return false;
});

window.novaGeminiAsk = async function(messages, userName = "") {
  const ready = await window.novaGeminiReady;
  if (!ready || !window.novaGeminiModel) {
    throw new Error("Gemini ist noch nicht eingerichtet. Firebase-Konfiguration und App Check fehlen noch.");
  }
  const transcript = "Der Nutzer heißt " + String(userName || "Freund") + ". Sprich ihn gelegentlich mit seinem Namen an, aber nicht in jedem Satz.\n\n" + messages.slice(-10).map(m =>
    (m.role === "assistant" ? "Nova" : "Nutzer") + ": " + String(m.content || "")
  ).join("\n\n");
  const result = await window.novaGeminiModel.generateContent(transcript);
  const answer = result.response.text();
  if (!answer) throw new Error("Gemini hat keine Textantwort zurückgegeben.");
  return answer;
};
