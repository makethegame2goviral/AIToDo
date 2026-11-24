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

## Datenschutz
Befehle und Verlauf werden lokal im Browser gespeichert. Es gibt in dieser Version keinen externen KI-Server und keine Anmeldung. Der Verlauf lässt sich in den Einstellungen löschen.
