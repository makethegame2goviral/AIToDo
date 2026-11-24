# Nova – iPad Assistant

Kostenlose deutschsprachige Assistenten-Webseite für iPad, iPhone und Desktop.

## Funktionen
- Deutsche Spracheingabe über die Web Speech API, wenn der Browser sie unterstützt.
- Deutsche Sprachausgabe über SpeechSynthesis.
- Befehle für GoodNotes (App-Link), YouTube, Google und Wikipedia.
- Datum und Uhrzeit direkt im Browser.
- Export einer gestalteten PNG-Ansicht der letzten Antwort.
- Lokaler Befehlsverlauf mit Löschfunktion.
- PWA-Manifest und Service Worker für Home-Bildschirm und Offline-Grundfunktionen.

## Veröffentlichen mit GitHub Pages
1. Repository auf GitHub öffnen.
2. **Settings → Pages** öffnen.
3. Unter **Build and deployment** bei **Source** „Deploy from a branch“ auswählen.
4. Branch `main` und Ordner `/(root)` auswählen, dann **Save**.
5. Warten, bis GitHub Pages die Website veröffentlicht hat.

Danach ist die Seite normalerweise unter https://makethegame2goviral.github.io/AIToDo/ erreichbar.

## Auf dem iPad installieren
1. Veröffentlichte Adresse in Safari öffnen.
2. Teilen antippen.
3. „Zum Home-Bildschirm“ wählen.

Es ist keine kostenpflichtige App nötig.

## Grenzen von iPadOS
Eine Website kann nicht beliebige Apps fernsteuern, Safari aus sich selbst heraus starten oder einen Screenshot des gesamten iPad-Bildschirms aufnehmen. Der GoodNotes-App-Link wird nur funktionieren, wenn GoodNotes installiert ist und iPadOS den Link akzeptiert. Der PNG-Export erstellt nur eine gestaltete Ansicht der Nova-Webseite, keinen System-Screenshot.

Spracherkennung, Mikrofonfreigabe, PWA-Installation und Offline-Verhalten hängen vom Browser und iPadOS ab. Dauerhaftes Mithören im Hintergrund wird von einer normalen Website nicht unterstützt.

## Gemini mit Firebase AI Logic einrichten (ohne Cloudflare)

Nova ist vorbereitet für Firebase AI Logic mit der Gemini Developer API. Der geheime Gemini-API-Key wird **nicht** in diese öffentliche GitHub-Datei eingefügt. Firebase AI Logic verwaltet die Verbindung; Firebase App Check schützt den Zugriff.

1. Öffne die [Firebase Console](https://console.firebase.google.com/) und füge Firebase zum vorhandenen Google-Cloud-Projekt `gen-lang-client-0004942648` hinzu.
2. Registriere eine **Web-App** und kopiere die Firebase-Web-Konfiguration.
3. Öffne **AI Services → AI Logic → Get started** und wähle **Gemini Developer API**.
4. Richte **App Check** für die Web-App mit **reCAPTCHA Enterprise** ein. Trage als erlaubte Domain `makethegame2goviral.github.io` ein und kopiere den öffentlichen Site-Key.
5. Trage die Werte in `firebase-config.js` ein: Firebase `apiKey`, `authDomain`, `projectId`, `appId` sowie den reCAPTCHA-Enterprise-Site-Key.
6. Speichere und committe `firebase-config.js`. Danach kann Nova Gemini verwenden, sobald AI Logic und App Check im Firebase-Projekt korrekt aktiviert sind.

**Kosten-Schutz:** Wähle nur die Gemini Developer API. Wenn Firebase oder Google ein Upgrade auf Blaze, eine Zahlungsmethode oder eine kostenpflichtige Aktivierung verlangt, brich ab und frage zuerst nach. App Check/reCAPTCHA hat ein kostenloses Kontingent; Nutzung oberhalb des Kontingents kann kostenpflichtig werden. Hier wurde kein Billing aktiviert.

**Wichtig:** Ohne Firebase-Konfiguration und App-Check-Site-Key bleibt die Gemini-Funktion absichtlich deaktiviert. Keine Gemini-API-Schlüssel in GitHub, HTML oder Chatnachrichten einfügen. Für Freunde muss die Produktions-App-Check-Prüfung funktionieren.

Offizielle Anleitungen:
- [Firebase AI Logic für Web einrichten](https://firebase.google.com/docs/ai-logic/get-started?platform=web)
- [App Check mit reCAPTCHA Enterprise](https://firebase.google.com/docs/app-check/web/recaptcha-enterprise-provider)

## Datenschutz
Befehle und Verlauf werden lokal im Browser gespeichert. Nachrichten, die du Nova als KI-Frage stellst, werden zur Verarbeitung an Firebase AI Logic und Gemini gesendet. Der Verlauf lässt sich in den Einstellungen löschen.
