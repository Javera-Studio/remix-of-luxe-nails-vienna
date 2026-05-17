

## Plan: Neue Sektionen & CTAs für LUXE NAILS

### 1. Neues Bild generieren
- **`src/assets/lacquering-hands.jpg`** — Nahaufnahme einer eleganten Frauenhand, die gerade lackiert wird (warme Beleuchtung, passend zum Look).
- **4 Team-Portraits** (`team-1.jpg` … `team-4.jpg`) — professionelle, einheitliche Portraits weiblicher Nageldesignerinnen (warmes Licht, beiger/neutraler Hintergrund, im Stil des bestehenden Brandings).

### 2. Neue Inhalts-Sektion: „Im Moment der Pflege"
Direkt **nach „Unsere Leistungen"** — full-width Bild (`lacquering-hands.jpg`) mit elegantem Slogan-Overlay:
> *„Bei uns werden Sie richtig verwöhnt."*

Darunter gold-akzentuierter Untertitel und CTA-Button.

### 3. Neue Sektion: „Unser Team" (vor Galerie)
- Überschrift: **„Unser Team"** mit Section-Nummer
- Slogan: *„Hände, die Kunst erschaffen."*
- 4-Spalten-Grid (responsive: 2 auf Mobile, 4 auf Desktop) mit:
  - Portrait (Aspect 3/4)
  - Name in Serif: **Sophia M.**, **Elena K.**, **Lara V.**, **Mia R.**
  - Rolle in Gold-Tracking: z. B. „Senior Nail Artist", „Nail Designer", „Pediküre-Spezialistin", „Nail Art Expertin"

### 4. „Termin sichern"-Buttons unter jeder Section
Eine wiederverwendbare CTA-Komponente (oder inline) wird unter folgenden Sections eingefügt (zentriert, mit gold border):
- Leistungen
- Lacquering-Bild-Section (eingebaut)
- Preise
- Galerie
- Über uns
- Team

Alle linken auf `#kontakt` (Anker scrollt zur Kontaktsektion — bestehendes Verhalten).

### 5. Zusätzliche Slogans
Verteilt für Eleganz:
- Lackier-Sektion: *„Bei uns werden Sie richtig verwöhnt."*
- Team-Sektion: *„Hände, die Kunst erschaffen."*

### Technische Details
- Neue Assets via AI-Image-Generation (Nano Banana, modalities: image+text), gespeichert unter `src/assets/`.
- Edits ausschließlich in `src/routes/index.tsx` — neue `team`-Konstante, neue JSX-Sections, kleine `CTAButton`-Helfer-Komponente innerhalb der Datei für Wiederverwendung.
- Reveal-Animationen (`.reveal` class) konsistent angewendet — kein neuer Hook nötig.
- Responsive: Mobile-first, gleiche Breakpoints (`md:`) wie bestehende Sektionen.
- Keine neuen Dependencies, keine Routing-Änderungen.

