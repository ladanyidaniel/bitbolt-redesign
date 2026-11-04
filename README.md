# BIT BOLT – weboldal-koncepció

Modernizált látványterv a [bitbolt.hu](https://www.bitbolt.hu/) számítástechnikai szaküzlet (Győr) weboldalához, és egy tartalomkezelő (admin) felület mockupja.

> **Bemutató / koncepció.** Ez nem a BIT BOLT hivatalos weboldala. A tartalom (termékek, árak, elérhetőségek) a jelenlegi bitbolt.hu oldalról származik, csak a bemutatás kedvéért.

## Tartalom

| Fájl | Mi ez |
|---|---|
| `index.html` | Az új főoldal: nyitórész kiemelt ajánlattal, szolgáltatások, kiemelt termékek, notebook akció, csoportosított kategóriák működő keresővel, **kosár** (darabszám és végösszeg a fejlécben, mennyiség módosítása) és **megrendelés** (adatok, átvétel, fizetés, visszaigazolás rendelésszámmal), adattörlő-kódos tájékoztató, elérhetőségek. Mobilon is működik. |
| `admin.html` | A bolt tartalomkezelője (CMS): belépés, vezérlőpult, **rendelések** (státuszkezeléssel, élőben érkeznek), terméklista (keresés, szűrés, kiemelés és láthatóság kapcsolóval), termékszerkesztő képfeltöltéssel és élő előnézettel, a nyitóoldal fő ajánlata és a kiemeltek sorrendje, kategóriák, árlista, bolt adatai, nyitvatartás, rendkívüli közlemény. |
| `data.js` | A közös adattár: a kezdő tartalom és a mentés. |
| `assets/` | Ide kerülnek a bolt logói (lásd lent). |

## Így működik a bemutató

1. Nyisd meg az `admin.html`-t, és kattints a **Belépés** gombra (az adatok előre ki vannak töltve).
2. Módosíts valamit: írd át egy termék árát, tölts fel képet, kapcsolj ki egy terméket, cseréld le a nyitóoldal fő ajánlatát, vagy írj be egy közleményt a *Bolt adatai* menüben.
3. A weboldalon tegyél termékeket a kosárba, és adj le egy próbarendelést: az adminban a *Rendelések* menüben azonnal megjelenik, a státusza ott állítható.
4. Nyisd meg mellette a weboldalt (*Weboldal megtekintése* gomb): a változás ott is megjelenik, ha nyitva van, akkor újratöltés nélkül is.

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

## Termékfotók

A termékkártyákon lévő fotók **illusztrációk** (a kártyán is így jelölve), nem a konkrét termékek képei. Forrás: [Unsplash](https://unsplash.com/license), szabadon felhasználható képek:

- Videókártya, AMD processzor – Christian Wiediger
- Router (fekete) – dlxmedia.hu · Router (fehér) – Compare Fibre
- Dell notebook – Erick Cerritos · Notebook (fehér asztalon) – Ihor Dvoretskyi
- Pendrive – Barry A · Egér – chris panas · Billentyűzet – mirza mustofa
- Intel processzor – Thorium · Alaplap – Rémy · Memória – OMAR SABRA

Az adminban feltöltött saját fotó ezeket felülírja (és nem kap „Illusztráció” jelölést).

## Színek és betűk

- Piros `#D7141A`, sötét `#111111`, fehér háttér
- Címek: Archivo · szöveg: Inter · műszaki adatok, árak címkéi: JetBrains Mono (Google Fonts)

## Következő lépések (ha a bolt érdeklődik)

- A főoldal összekötése a meglévő termékadatbázissal, vagy új rendszer (pl. egyedi backend vagy CMS) választása
- Az admin felület valódi bejelentkezéssel és mentéssel
- Termékfotók, aloldalak (Magunkról, Referenciák, Elérhetőség, kategóriaoldalak)
