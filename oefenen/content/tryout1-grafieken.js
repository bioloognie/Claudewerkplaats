/* Grafiekoefeningen (C20 patronen, C22, E38 data, E39 verbanden) try-out 1.
   Elke generator maakt bij elke aanroep een nieuwe variant met andere getallen.
   maak(r) geeft: { context, grafiek, vraag, soort: "mc"|"getal", opties, goed (mc: index) | antwoord + marge (getal), eenheid, uitleg: [stappen] }
   r.kies(lijst), r.int(a, b), r.getal(a, b) zijn toevalshulpjes. */
window.OEFENSETS = window.OEFENSETS || [];
(function () {
  const set = window.OEFENSETS.find((s) => s.id === "tryout1");
  const reeks = (a, b, stap, f) => { const p = []; for (let x = a; x <= b + 1e-9; x += stap) p.push([x, f(x)]); return p; };
  const logistisch = (K, N0, r) => (t) => K / (1 + ((K - N0) / N0) * Math.exp(-r * t));
  const PATRONEN = ["toenemend (lineair)", "exponentieel toenemend", "eerst exponentieel toenemend, daarna constant", "afnemend", "constant", "periodiek"];
  const titer = (a, b) => (d) => {
    // schematische antistofcurve: eerste contact dag 0 (top 10^a), tweede contact dag 30 (top 10^(a+b))
    if (d < 4) return 1;
    if (d <= 14) return Math.pow(10, (a * (d - 4)) / 10);
    if (d < 30) return Math.pow(10, a - (d - 14) / 16);
    if (d <= 32) return Math.pow(10, a - 1);
    if (d <= 38) return Math.pow(10, a - 1 + ((b + 1) * (d - 32)) / 6);
    return Math.pow(10, a + b - (d - 38) / 44);
  };

  set.grafieken = [
    {
      id: "g-patroon", niveaus: ["havo", "vwo"], titel: "Welk patroon zie je?", denkwijze: "C20",
      maak(r) {
        const sc = r.kies(["exp", "sig", "per", "afn", "con"]);
        if (sc === "exp") {
          const td = r.kies([30, 40, 45]), N0 = r.kies([100, 200]);
          return { context: "Onderzoekers tellen elk kwartier het aantal bacteriën in een ruime voedingsbodem bij 37 °C.",
            grafiek: { x: { min: 0, max: 180, stap: 30, label: "tijd (min)" }, y: { min: 0, label: "aantal bacteriën" }, series: [{ punten: reeks(0, 180, 15, (t) => N0 * Math.pow(2, t / td)), punten_tonen: true }] },
            vraag: "Welk patroon past het best bij deze grafiek?", soort: "mc", opties: PATRONEN, goed: 1,
            uitleg: ["De toename wordt steeds groter.", `In gelijke tijd (hier ${td} minuten) verdubbelt het aantal steeds.`, "Verdubbelen in gelijke tijd = exponentieel toenemend."] };
        }
        if (sc === "sig") {
          const f = logistisch(800, 5, r.kies([0.45, 0.5, 0.55]));
          return { context: "Bacteriën groeien 24 uur lang in een klein afgesloten buisje met weinig voedingsstoffen.",
            grafiek: { x: { min: 0, max: 24, stap: 4, label: "tijd (uur)" }, y: { min: 0, max: 1000, stap: 200, label: "aantal (× 1 000)" }, series: [{ punten: reeks(0, 24, 1, f), punten_tonen: true }] },
            vraag: "Welk patroon past het best bij deze grafiek?", soort: "mc", opties: PATRONEN, goed: 2,
            uitleg: ["Eerst verdubbelt het aantal steeds: exponentieel.", "Daarna raken voedingsstoffen op en hopen afvalstoffen zich op: de groei stopt.", "Samen geeft dat een S-vormige (sigmoïde) kromme: eerst exponentieel toenemend, daarna constant."] };
        }
        if (sc === "per") {
          const gem = r.kies([36.8, 36.9, 37.0]);
          return { context: "De lichaamstemperatuur van een gezonde student wordt drie dagen lang elke twee uur gemeten (tijd 0 = middernacht).",
            grafiek: { x: { min: 0, max: 72, stap: 12, label: "tijd (uur)" }, y: { min: 36, max: 38, stap: 0.5, label: "temperatuur (°C)" }, series: [{ punten: reeks(0, 72, 2, (t) => gem + 0.35 * Math.sin((2 * Math.PI * (t - 11)) / 24)), punten_tonen: true }] },
            vraag: "Welk patroon past het best bij deze grafiek?", soort: "mc", opties: PATRONEN, goed: 5,
            uitleg: ["De temperatuur gaat steeds op en neer.", "Het patroon herhaalt zich elke 24 uur: laag in de vroege ochtend, hoog in de middag.", "Een patroon dat zich regelmatig herhaalt, heet periodiek (een dag-nachtritme)."] };
        }
        if (sc === "afn") {
          const start = r.kies([80, 100, 120]);
          return { context: "Iemand krijgt antistoffen ingespoten (passieve immunisatie). De concentratie in het bloed wordt wekenlang gemeten.",
            grafiek: { x: { min: 0, max: 15, stap: 3, label: "tijd (weken)" }, y: { min: 0, max: 140, stap: 20, label: "antistof (willekeurige eenheid)" }, series: [{ punten: reeks(0, 15, 1, (t) => start * Math.pow(0.5, t / 3)), punten_tonen: true }] },
            vraag: "Welk patroon past het best bij deze grafiek?", soort: "mc", opties: PATRONEN, goed: 3,
            uitleg: ["De concentratie wordt steeds lager.", "De ingespoten antistoffen worden afgebroken, en er komen er geen nieuwe bij: het lichaam maakt ze niet zelf.", "Het patroon is afnemend."] };
        }
        const gem = r.kies([36.9, 37.0, 37.1]);
        const ruis = [0.04, -0.03, 0.02, -0.05, 0.03, 0, -0.02, 0.05, -0.04, 0.01, 0.03, -0.01, 0.02];
        return { context: "Tijdens een les van een uur wordt elke 5 minuten de lichaamstemperatuur van een leerling gemeten.",
          grafiek: { x: { min: 0, max: 60, stap: 10, label: "tijd (min)" }, y: { min: 36, max: 38, stap: 0.5, label: "temperatuur (°C)" }, series: [{ punten: reeks(0, 60, 5, (t) => gem + ruis[t / 5]), punten_tonen: true }] },
          vraag: "Welk patroon past het best bij deze grafiek?", soort: "mc", opties: PATRONEN, goed: 4,
          uitleg: ["De metingen schommelen een paar honderdste graad.", "Zulke kleine verschillen passen bij toeval en meetonzekerheid.", "Het patroon is constant: de temperatuur wordt in een regelkring rond de normwaarde gehouden."] };
      },
    },
    {
      id: "g-verdubbeling", niveaus: ["havo", "vwo"], titel: "Verdubbelingstijd aflezen", denkwijze: "C22 · E38",
      maak(r) {
        const td = r.kies([20, 25, 30, 40]), N0 = r.kies([500, 1000, 2000]);
        const tmax = 4 * td;
        return { context: "Een bacteriesoort groeit onder ideale omstandigheden. De grafiek toont het aantal bacteriën.",
          grafiek: { x: { min: 0, max: tmax, stap: 10, label: "tijd (min)", fijn: 5 }, y: { min: 0, max: 16 * N0, stap: 2 * N0, fijnStap: N0, label: "aantal bacteriën" }, series: [{ punten: reeks(0, tmax, 2.5, (t) => N0 * Math.pow(2, t / td)) }] },
          vraag: "Bepaal met de grafiek de verdubbelingstijd.", soort: "getal", antwoord: td, marge: 3, eenheid: "min",
          uitleg: [`Lees het beginaantal af: bij t = 0 zijn er ${N0.toLocaleString("nl-NL")} bacteriën.`, `Zoek het tijdstip waarop het aantal is verdubbeld tot ${(2 * N0).toLocaleString("nl-NL")}: dat is bij t ≈ ${td} min.`, `De verdubbelingstijd is dus ${td} minuten. Controle: na ${2 * td} min zijn er ${(4 * N0).toLocaleString("nl-NL")}.`] };
      },
    },
    {
      id: "g-logas", niveaus: ["havo", "vwo"], titel: "Aflezen op een logaritmische as", denkwijze: "E38",
      maak(r) {
        const a = r.kies([2, 3]), b = r.kies([1, 2]);
        const f = titer(a, b);
        return { context: "Iemand krijgt op dag 0 en op dag 30 een injectie met hetzelfde antigeen. De grafiek toont de antistofconcentratie (schematisch). Let op de verticale as.",
          grafiek: { x: { min: 0, max: 60, stap: 10, label: "tijd (dagen)" }, y: { log: true, min: 1, max: Math.pow(10, a + b + 1), label: "antistof (willekeurige eenheid)" }, series: [{ punten: reeks(0, 60, 1, f) }], pijlen: [{ x: 0, tekst: "1e injectie" }, { x: 30, tekst: "2e injectie" }] },
          vraag: "Hoeveel keer zo hoog is de hoogste concentratie na de tweede injectie als na de eerste?", soort: "getal", antwoord: Math.pow(10, b), marge: 0, eenheid: "keer",
          uitleg: [`Eerste top: ${fmt(Math.pow(10, a))}.`, `Tweede top: ${fmt(Math.pow(10, a + b))}.`, `Op een logaritmische as is elke volgende streep ×10. De toppen liggen ${b} ${b === 1 ? "streep" : "strepen"} uit elkaar: ${fmt(Math.pow(10, b))} keer zo hoog.`, "Biologisch: geheugencellen van het eerste contact zorgen voor een snellere en sterkere secundaire reactie."] };
      },
    },
    {
      id: "g-doorrekenen", niveaus: ["havo", "vwo"], titel: "Als het patroon doorzet…", denkwijze: "C20 · C22",
      maak(r) {
        const td = r.kies([15, 20, 30]), N0 = r.kies([100, 200, 500]), T = r.kies([2, 3]);
        const n = (T * 60) / td, N = N0 * Math.pow(2, n);
        return { context: `De grafiek toont het eerste uur van de groei van een bacteriepopulatie. De verdubbelingstijd is ${td} minuten.`,
          grafiek: { x: { min: 0, max: 60, stap: 10, label: "tijd (min)" }, y: { min: 0, label: "aantal bacteriën" }, series: [{ punten: reeks(0, 60, 5, (t) => N0 * Math.pow(2, t / td)), punten_tonen: true }] },
          vraag: `Bereken hoeveel bacteriën er na ${T} uur zijn als dit patroon doorzet.`, soort: "getal", antwoord: N, marge: 0.02 * N, eenheid: "bacteriën",
          uitleg: [`Lees het beginaantal af: ${N0.toLocaleString("nl-NL")}.`, `Aantal verdubbelingen: ${T * 60} min ÷ ${td} min = ${n}.`, `Aantal = ${N0.toLocaleString("nl-NL")} × 2^${n} = ${N.toLocaleString("nl-NL")}.`, "In werkelijkheid zet het patroon niet eindeloos door: voedingsstoffen raken op (sigmoïde groei)."] };
      },
    },
    {
      id: "g-uitschieter", niveaus: ["havo", "vwo"], titel: "Past deze meting in het patroon?", denkwijze: "C20 · E38",
      maak(r) {
        const tijden = [0, 2, 4, 6, 8, 10, 12];
        const i = r.int(1, 5), d = r.kies([1.0, -1.0]);
        const pnt = tijden.map((t, k) => [t, Math.round((39.5 - (2.5 * t) / 12 + (k === i ? d : 0)) * 10) / 10]);
        const kandidaten = [i, ...[1, 2, 3, 4, 5].filter((k) => k !== i).sort(() => Math.random() - 0.5).slice(0, 3)].sort((p, q) => p - q);
        return { context: "Bij iemand die herstelt van koorts wordt elke twee uur de lichaamstemperatuur gemeten.",
          grafiek: { x: { min: 0, max: 12, stap: 2, label: "tijd (uur)" }, y: { min: 36, max: 41, stap: 1, fijnStap: 0.5, label: "temperatuur (°C)" }, series: [{ punten: pnt, alleenPunten: true }] },
          vraag: "Welke meting past niet in het patroon?", soort: "mc", opties: kandidaten.map((k) => `de meting na ${tijden[k]} uur`), goed: kandidaten.indexOf(i),
          uitleg: ["De metingen liggen op een vloeiend dalende lijn: de koorts zakt geleidelijk.", `De meting na ${tijden[i]} uur ligt ${Math.abs(d)} °C ${d > 0 ? "boven" : "onder"} die lijn.`, "Zo'n afwijking past niet in het patroon: waarschijnlijk toeval of een meetfout. Herhaal de meting en noem de afwijking, in plaats van haar stilletjes weg te laten."] };
      },
    },
    {
      id: "g-fout", niveaus: ["vwo"], titel: "Systematische of toevallige fout?", denkwijze: "E38",
      maak(r) {
        const syst = r.kies([true, false]);
        const ref = (t) => 37 + 0.3 * Math.sin(t / 3);
        const afw = [0.3, -0.25, 0.1, -0.35, 0.2, -0.1, 0.35, -0.2, 0.05, -0.3, 0.25];
        const verschuiving = r.kies([0.5, 0.6, -0.5]);
        const gemeten = reeks(0, 20, 2, (t) => ref(t) + (syst ? verschuiving : afw[t / 2]));
        return { context: "Een nieuwe oorthermometer wordt getest naast een nauwkeurige referentiethermometer. Beide meten elke twee minuten bij dezelfde persoon.",
          grafiek: { x: { min: 0, max: 20, stap: 4, label: "tijd (min)" }, y: { min: 36, max: 38, stap: 0.5, label: "temperatuur (°C)" }, series: [{ punten: reeks(0, 20, 2, ref), naam: "referentie" }, { punten: gemeten, alleenPunten: true, naam: "nieuwe thermometer", kleur: "koraal" }] },
          vraag: "Welk soort fout maakt de nieuwe thermometer?", soort: "mc", opties: ["een systematische fout", "een toevallige fout", "geen fout"], goed: syst ? 0 : 1,
          uitleg: syst
            ? ["Alle metingen van de nieuwe thermometer wijken in dezelfde richting en evenveel af.", `Ze liggen steeds ongeveer ${Math.abs(verschuiving)} °C ${verschuiving > 0 ? "te hoog" : "te laag"}.`, "Een afwijking die steeds even groot en in dezelfde richting is, is een systematische fout. Herhalen helpt niet; ijken wel."]
            : ["De metingen wijken soms naar boven en soms naar beneden af.", "Er is geen vaste richting of grootte.", "Dat is een toevallige fout. Herhalen en middelen maakt de uitkomst betrouwbaarder."] };
      },
    },
    {
      id: "g-verband", niveaus: ["havo", "vwo"], titel: "Wat voor verband?", denkwijze: "E39",
      maak(r) {
        const lin = r.kies([true, false]);
        if (lin) {
          const v = r.kies([0.3, 0.35, 0.4]);
          return { context: "Iemand meet een maand lang hoe lang een haar is gegroeid sinds het knippen.",
            grafiek: { x: { min: 0, max: 30, stap: 5, label: "tijd (dagen)" }, y: { min: 0, max: 14, stap: 2, label: "groei (mm)" }, series: [{ punten: reeks(0, 30, 3, (t) => v * t), punten_tonen: true }] },
            vraag: "Welk verband is er tussen de tijd en de groei?", soort: "mc", opties: ["lineair", "exponentieel", "sigmoïde", "omgekeerd evenredig"], goed: 0,
            uitleg: ["Let eerst op de assen: beide zijn gewone (lineaire) assen.", `De lijn is recht: elke dag komt er evenveel bij (ongeveer ${String(v).replace(".", ",")} mm).`, "Een rechte lijn op lineaire assen is een lineair verband."] };
        }
        const td = r.kies([20, 30]);
        return { context: "In een experiment wordt het aantal virusdeeltjes in een celkweek gemeten. Let op de verticale as.",
          grafiek: { x: { min: 0, max: 12, stap: 2, label: "tijd (uur)" }, y: { log: true, min: 100, max: 1e9, label: "aantal virusdeeltjes" }, series: [{ punten: reeks(0, 12, 1, (t) => 1000 * Math.pow(2, (t * 60) / (td * 3))), punten_tonen: true }] },
          vraag: "Welk verband is er tussen de tijd en het aantal virusdeeltjes?", soort: "mc", opties: ["lineair", "exponentieel", "sigmoïde", "omgekeerd evenredig"], goed: 1,
          uitleg: ["Let eerst op de assen: de verticale as is logaritmisch (elke streep ×10).", "De punten liggen op een rechte lijn.", "Een rechte lijn op een logaritmische as betekent: in gelijke tijd steeds hetzelfde aantal keer zo veel. Dat is een exponentieel verband."] };
      },
    },
    {
      id: "g-sigmoide", niveaus: ["havo", "vwo"], titel: "Sigmoïde groei: welke periode?", denkwijze: "C22 · E39",
      maak(r) {
        const f = logistisch(800, 5, 0.5);
        const vraagSoort = r.kies(["absoluut", "absoluut", "remming"]);
        const banden = [{ x1: 0, x2: 6, tekst: "A" }, { x1: 8, x2: 14, tekst: "B" }, { x1: 18, x2: 24, tekst: "C" }];
        const g = { x: { min: 0, max: 24, stap: 4, label: "tijd (uur)" }, y: { min: 0, max: 1000, stap: 200, label: "aantal (× 1 000)" }, series: [{ punten: reeks(0, 24, 0.5, f) }], banden };
        if (vraagSoort === "remming")
          return { context: "Bacteriën groeien 24 uur lang in een klein afgesloten buisje met weinig voedingsstoffen.", grafiek: g,
            vraag: "In welke periode remmen gebrek aan voedingsstoffen en ophoping van afvalstoffen de groei het sterkst?", soort: "mc", opties: ["periode A", "periode B", "periode C"], goed: 2,
            uitleg: ["In periode C is de grafiek bijna vlak: er komen nauwelijks bacteriën bij.", "Er zijn dan veel bacteriën, maar weinig voedingsstoffen en veel afvalstoffen.", "De groei wordt daar het sterkst geremd."] };
        return { context: "Bacteriën groeien 24 uur lang in een klein afgesloten buisje met weinig voedingsstoffen.", grafiek: g,
          vraag: "In welke periode komen er per uur de meeste bacteriën bij?", soort: "mc", opties: ["periode A", "periode B", "periode C"], goed: 1,
          uitleg: ["Waar de grafiek het steilst loopt, komen er per uur de meeste bacteriën bij: in periode B.", "In A verdubbelt het aantal wel snel, maar het gaat om kleine aantallen: weinig bacteriën per uur erbij.", "In C remmen gebrek aan voedsel en afvalstoffen de groei. Let dus op het verschil tussen ‘snel verdubbelen’ en ‘veel erbij per uur’ (C22)."] };
      },
    },
  ];
  function fmt(x) { const m = { 1: "10", 2: "100", 3: "1 000", 4: "10⁴", 5: "10⁵", 6: "10⁶" }; const e = Math.round(Math.log10(x)); return m[e] || "10^" + e; }
})();
