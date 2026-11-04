# BIT BOLT – weboldal-koncepció

Modernizált látványterv a [bitbolt.hu](https://www.bitbolt.hu/) számítástechnikai szaküzlet (Győr) weboldalához, és egy tartalomkezelő (admin) felület mockupja.

> **Bemutató / koncepció.** Ez nem a BIT BOLT hivatalos weboldala. A tartalom (termékek, árak, elérhetőségek) a jelenlegi bitbolt.hu oldalról származik, csak a bemutatás kedvéért.

## Tartalom

| Fájl | Mi ez |
|---|---|
| `index.html` | Az új főoldal: nyitórész kiemelt ajánlattal, szolgáltatások, kiemelt termékek, notebook akció, csoportosított kategóriák működő keresővel, adattörlő-kódos tájékoztató, elérhetőségek. Mobilon is működik. |
| `admin.html` | A bolt tartalomkezelője (CMS): belépés, vezérlőpult, terméklista (keresés, szűrés, kiemelés és láthatóság kapcsolóval), termékszerkesztő képfeltöltéssel és élő előnézettel, a nyitóoldal fő ajánlata és a kiemeltek sorrendje, kategóriák, árlista, bolt adatai, nyitvatartás, rendkívüli közlemény. |
| `data.js` | A közös adattár: a kezdő tartalom és a mentés. |
| `assets/` | Ide kerülnek a bolt logói (lásd lent). |

## Így működik a bemutató

1. Nyisd meg az `admin.html`-t, és kattints a **Belépés** gombra (az adatok előre ki vannak töltve).
2. Módosíts valamit: írd át egy termék árát, tölts fel képet, kapcsolj ki egy terméket, cseréld le a nyitóoldal fő ajánlatát, vagy írj be egy közleményt a *Bolt adatai* menüben.
3. Nyisd meg mellette a weboldalt (*Weboldal megtekintése* gomb): a változás ott is megjelenik, ha nyitva van, akkor újratöltés nélkül is.

A módosítások **csak abban a böngészőben** mentődnek, ahol végezték őket (localStorage). Más látogatók mindig az eredeti tartalmat látják, és egymás változtatásait sem látják. A *Vezérlőpult → Alaphelyzet* gomb visszaállítja az eredeti tartalmat. Egy éles rendszerben ugyanez egy szerveren futó adatbázisba menne.

## Megnyitás

- **Helyben:** elég duplán kattintani az `index.html` vagy az `admin.html` fájlra, nem kell hozzá szerver.
- **Online (GitHub Pages):** Settings → Pages → *Deploy from a branch* → `main` / `(root)` → Save. Pár perc múlva elérhető: `https://ladanyidaniel.github.io/bitbolt-redesign/` (admin: `.../admin.html`).

## Logók

A logók helyén most piros szaggatott keret látszik. Ha az alábbi fájlokat bemásolod az `assets/` mappába, automatikusan megjelennek:

- `assets/logo.png` – BIT BOLT logó (210×70)
- `assets/service_fb.gif` – Facebook gomb
- `assets/bankcards.png` – elfogadott bankkártyák
- `assets/veglegestorles.png` – NMHH adattörlés logó

## Színek és betűk

- Piros `#D7141A`, sötét `#111111`, fehér háttér
- Címek: Archivo · szöveg: Inter · műszaki adatok, árak címkéi: JetBrains Mono (Google Fonts)

## Következő lépések (ha a bolt érdeklődik)

- A főoldal összekötése a meglévő termékadatbázissal, vagy új rendszer (pl. egyedi backend vagy CMS) választása
- Az admin felület valódi bejelentkezéssel és mentéssel
- Termékfotók, aloldalak (Magunkról, Referenciák, Elérhetőség, kategóriaoldalak)
