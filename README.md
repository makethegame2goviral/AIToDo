# Nova – iPad Assistant

Kostenlose deutschsprachige Assistenten-Webseite für iPad, iPhone und Desktop.

## Funktionen
- Deutsche Spracheingabe und Sprachausgabe, soweit vom Browser unterstützt.
- Chat mit Gemini über eine Supabase Edge Function.
- Supabase-Projekt NEXYRON als Backend; der KI-Schlüssel liegt serverseitig und nicht in GitHub.
- Eigene Sprachbefehle und lokale Einstellungen.
- Befehle für GoodNotes, YouTube, Google und Wikipedia.
- Datum, Uhrzeit, Verlauf, PNG-Ansicht und PWA-Grundfunktionen.

## Veröffentlichung mit GitHub Pages
1. Repository auf GitHub öffnen.
2. **Settings → Pages** öffnen.
3. Unter **Build and deployment** „Deploy from a branch“ auswählen.
4. Branch `main` und Ordner `/(root)` auswählen.
5. Warten, bis GitHub Pages veröffentlicht wurde.

Website: https://makethegame2goviral.github.io/AIToDo/

## KI-Verbindung einrichten (einmalig)
Das Backend und die Edge Function `nova-ai` sind im Supabase-Projekt NEXYRON angelegt.

Damit die KI antworten kann, muss im Supabase-Dashboard unter **Project Settings → Edge Functions → Secrets** ein Secret angelegt werden:
- Name: `GEMINI_API_KEY`
- Wert: dein eigener Gemini API-Schlüssel

Den Schlüssel niemals in GitHub, HTML, JavaScript oder Chatnachrichten einfügen. Wenn Google oder Supabase eine Zahlungsmethode oder ein kostenpflichtiges Upgrade verlangt, abbrechen; es wurde hier kein Billing aktiviert.

Die Edge Function begrenzt Anfragen derzeit auf 15 pro Stunde und IP-Adresse. Diese Begrenzung ist ein Basisschutz, kein vollständiger Schutz vor Missbrauch.

## iPad
In Safari öffnen → Teilen → „Zum Home-Bildschirm“. Eine kostenpflichtige native App ist nicht nötig.

## Grenzen
- Eine normale Website kann auf iPadOS nicht zuverlässig im Hintergrund oder bei gesperrtem Bildschirm mithören.
- App-Links wie GoodNotes funktionieren nur, wenn die App installiert ist und iPadOS den Link akzeptiert.
- Der PNG-Export ist eine gestaltete Nova-Ansicht, kein System-Screenshot.

## Datenschutz
Name, Sprachregeln und Verlauf werden lokal auf dem jeweiligen Gerät gespeichert. Nachrichten, die an Nova als KI-Frage gesendet werden, gehen an die Supabase Edge Function und anschließend an Gemini zur Antwortverarbeitung.
