# AI Assistant – iPad

Erste deutschsprachige Web-Oberfläche für einen Sprachassistenten auf dem iPad.

## Aktueller Stand
- Dunkle, responsive Oberfläche
- Deutsche Spracheingabe über die Web Speech API, sofern der Browser sie unterstützt
- Deutsche Sprachausgabe über SpeechSynthesis
- Einstellungs-Schalter für Sprachausgabe und Bestätigung
- Erste Beispielbefehle und klare Hinweise zu iPadOS-Grenzen

## Wichtig: iPad-Steuerung
Eine Website kann iPadOS und andere Apps nicht uneingeschränkt fernsteuern. Für echte Aktionen müssen wir später Apple-Kurzbefehle und unterstützte App-Links einrichten. Mikrofonzugriff und Spracherkennung hängen von Safari/iPadOS und den erteilten Berechtigungen ab. Dauerhaftes Mithören im Hintergrund wird von einer normalen Website nicht bereitgestellt.

## Start
GitHub Pages für dieses Repository aktivieren (Settings → Pages → Deploy from a branch → main → /root). Danach die veröffentlichte Pages-Adresse in Safari öffnen und den Mikrofonzugriff erlauben.

## Nächste Schritte
1. Apple-Kurzbefehle für erlaubte Aktionen einrichten.
2. Die Befehle sicher mit der Oberfläche verbinden.
3. Optional Supabase für Nutzerprofile und synchronisierte Einstellungen ergänzen. Keine geheimen Schlüssel in den Frontend-Code legen.
