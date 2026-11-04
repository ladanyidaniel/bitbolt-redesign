# BIT BOLT – weboldal-koncepció

Modernizált látványterv a [bitbolt.hu](https://www.bitbolt.hu/) számítástechnikai szaküzlet (Győr) weboldalához, és egy tartalomkezelő (admin) felület mockupja.

> **Bemutató / koncepció.** Ez nem a BIT BOLT hivatalos weboldala. A tartalom (termékek, árak, elérhetőségek) a jelenlegi bitbolt.hu oldalról származik, csak a bemutatás kedvéért.

## Tartalom

| Fájl | Mi ez |
|---|---|
| `index.html` | Az új főoldal: nyitórész kiemelt ajánlattal, szolgáltatások, kiemelt termékek, notebook akció, csoportosított kategóriák kereséssel, adattörlő-kódos tájékoztató, elérhetőségek. Mobilon is működik. |
| `admin.html` | A bolt tartalomkezelőjének (CMS) mockupja: belépés, vezérlőpult, terméklista (keresés, szűrés, kiemelés és láthatóság kapcsolóval), termékszerkesztő élő előnézettel, nyitóoldal és kiemelt ajánlatok sorrendje, kategóriák, árlista-feltöltés, bolt adatai és nyitvatartás. |
| `assets/` | Ide kerülnek a bolt logói (lásd lent). |

Az admin felület kattintható, de **semmit nem ment el**: az adatok a böngészőben, a memóriában élnek, frissítéskor visszaállnak.

## Megnyitás

Elég duplán kattintani az `index.html` vagy az `admin.html` fájlra, nem kell hozzá szerver. Az admin belépésnél bármilyen adattal be lehet lépni.

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
