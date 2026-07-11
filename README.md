# RAUM‑ID

RAUM‑ID ist ein leichtes Identitäts‑ und Zustands‑System, das aus
REAL‑ und TMP‑Daten einen gültigen RAUM‑Zustand erzeugt.  
Das System besteht aus drei Kernmodulen:

- GHOST_SCAN_REAL
- RAUM_KERNEL
- MOVE

Zusätzlich existiert ein Frontend (index.html / scan.html), das alle
RESPO‑Cluster lädt und deren Zustand visualisiert.

---

## 1. ID‑Struktur (6e‑Matrix)

Jede RAUM‑ID besteht aus sechs Achsen:

- ZUG     – Bewegung / Aktion
- BLATT   – Bewertung / IST-SOLL
- STATUS  – Zustand (REAL | TMP)
- LEGO    – Struktur / Baustein
- TETRIZ  – Richtung / Tiefe
- ARG     – Wahrheit / Beweis

Diese 6e‑Matrix definiert die Identität eines RAUM‑Objekts.

---

## 2. RAUM‑Datei (Zustandsmatrix)

Jedes RAUM‑Objekt besitzt fünf Zustände:

- IST
- SOLL
- NEU
- IST2
- SOLL2

Diese Werte werden vom RAUM_KERNEL ausgewertet.

---

## 3. RAUM_KERNEL

Der Kernel erzeugt aus ID + DATE den RESULT‑Wert:

```js
function RAUM_KERNEL(raum){
    raum.RESULT = (raum.STATUS === "REAL") ? raum.IST : raum.NEU;
    return raum;
}
