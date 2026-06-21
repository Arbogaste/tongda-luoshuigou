# tongda-luoshuigou — goal & stato

> Doc standard del repo. NON cancellare: consolida status, punti aperti, improvements.
> 痛打落水狗 = "colpisci il cane caduto in acqua". Hub intelligence dedollarizzazione (FILONE M del goal root).
> **Unico dedollar near-term che produce un asset reale in poche ore** (resto del filone = regolato/impossibile da soli).

## Scopo
Sito Astro 5 statico (PWA): directory tool curata (x402, BRICS Pay, IPFS, Nostr, OSINT, alt-AI) + 2 feature distintive (Mirror permanente + ResiScore country intelligence). 11 lingue. Monetizza via affiliate exchange (Binance/KuCoin) + futuro x402 premium dataset corridoi BRICS.

## Stato attuale (audit 2026-06-21)
- ✅ **Reale**: Astro build, `index.astro` + `tools.astro` (route `[lang]/`), PWA (manifest+sw), CanvasBackground, **directory tool curata buona**, i18n `src/i18n/ui.ts` (11 lingue: en/zh/ru/fa/ar/es/it/fr/hi/tr/id), referral Binance `172625725`.
- 🎭 **MOCKATO (teatro, zero funzione)** — value prop è una brochure finché non si fixa:
  - `src/components/MirrorButton.astro` → **`setTimeout(1500)` finto** + CID hardcoded. Nessun pin IPFS/Arweave reale.
  - `src/components/ResiScore.astro` → **`score = 7.5` prop fissa**, nessuna fonte dati. Storage/censorship sono props statiche.
- ⚠️ Non ancora deployato (Cloudflare Pages/Vercel).

## AZIONI PRODUCTION-READY — Claude può fare ORA
- [ ] **ResiScore reale (zero API, zero costo)**: curare dataset statico per-paese da fonti pubbliche
      (RSF Press Freedom Index + NetBlocks censorship + sanzioni OFAC/EU + connettività) →
      `src/data/resiscore.json` → componente legge `countryCode` e calcola lo score con formula documentata
      (media pesata: storage 0.25 + payment rails 0.25 + censorship 0.25 + connectivity 0.25).
      Rende il widget data-driven e **indicizzabile** (pagine paese con score reale = SEO vero).
- [ ] **Verificare parità i18n**: `ui.ts` ha 11 chiavi lingua — controllare che OGNI lingua abbia TUTTE le chiavi
      (sospetto buchi). Allineare o correggere il claim. Niente lingue a metà.
- [ ] **MirrorButton — wiring reale (codice pronto, key dopo)**: sostituire `setTimeout` con fetch a un
      pinning service (Pinata JWT o web3.storage/Storacha) → CID reale, via Function Cloudflare (key non nel client).
      Attivabile appena l'utente fornisce la key.
- [ ] Empty/error states su Mirror (pin fallito, offline) e ResiScore (paese non in dataset).

## 🙋 SOLO UTENTE (gate, bloccanti)
- [ ] **Pinata o web3.storage API key** → senza, MirrorButton resta finto (Claude scrive il wiring, la key è tua).
- [ ] **KuCoin referral** → ottenere codice e sostituire il placeholder in `src/data.ts` (verificare path esatto).
- [ ] **Deploy Cloudflare Pages** (azione tua) → poi Reddit POST #3 (draft pronto nel goal root).

## Revenue path realistico
2 feature VERE → pagine paese con ResiScore reale = traffico indicizzabile → affiliate Binance/KuCoin
+ (fase 2) x402 premium dataset corridoi BRICS. Nessun costo infra (statico Cloudflare).

## Punti aperti
- MirrorButton su statico Cloudflare: serve una Function per il pin (key non nel client). Decidere Pinata vs web3.storage.
- ResiScore: definire formula+soglie prima di curare i dati → score difendibile (non arbitrario come il 7.5 attuale).

## Doc correlati
README.md, DEPLOY.md, goal root → FILONE M + PIANO DOMANI B.
