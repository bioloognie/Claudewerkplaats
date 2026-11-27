/* Rekenoefeningen (C22 schaal, verhouding en hoeveelheid · E40 wiskunde · C24 behoud en energie) try-out 1.
   Elke aanroep van maak(r) geeft een nieuwe variant. Benodigde gegevens staan altijd in de vraag zelf. */
window.OEFENSETS = window.OEFENSETS || [];
(function () {
  const set = window.OEFENSETS.find((s) => s.id === "tryout1");
  const nl = (x, d = 2) => x.toLocaleString("nl-NL", { maximumFractionDigits: d });
  const macht = (e) => "10" + String(e).split("").map((c) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[c]).join("");

  set.rekenen = [
    {
      id: "r-hoelang", niveaus: ["havo", "vwo"], titel: "Hoe lang duurt het?", denkwijze: "C22 · E40",
      maak(r) {
        const N0 = r.kies([100, 500, 1000]), td = r.kies([20, 30, 40]), n = r.int(4, 10);
        const doel = N0 * Math.pow(2, n);
        return { context: `Een bacteriesoort deelt onder ideale omstandigheden elke ${td} minuten. Je begint met ${nl(N0)} bacteriën.`,
          vraag: `Na hoeveel minuten zijn er ${nl(doel)} bacteriën?`, soort: "getal", antwoord: n * td, marge: 0, eenheid: "min",
          uitleg: [`Hoeveel keer zoveel? ${nl(doel)} ÷ ${nl(N0)} = ${nl(doel / N0)}.`, `${nl(doel / N0)} = 2^${n}: het aantal is ${n} keer verdubbeld.`, `${n} verdubbelingen × ${td} min = ${n * td} minuten.`] };
      },
    },
    {
      id: "r-virus", niveaus: ["havo", "vwo"], titel: "Virusdeeltjes per ronde", denkwijze: "C22",
      maak(r) {
        const c = r.kies([10, 50, 100]), x = r.kies([50, 100, 200, 500]), y = r.kies([5, 10, 20]);
        const nieuw = (c * x * y) / 100;
        return { context: `In het neusslijmvlies zijn ${c} cellen geïnfecteerd met een verkoudheidsvirus. Elke geïnfecteerde cel laat ${x} nieuwe virusdeeltjes vrij. Van alle vrijgekomen deeltjes infecteert ${y}% een nieuwe cel; de rest wordt opgeruimd of bereikt geen geschikte cel.`,
          vraag: "Hoeveel cellen worden in deze ronde nieuw geïnfecteerd?", soort: "getal", antwoord: nieuw, marge: 0, eenheid: "cellen",
          uitleg: [`Totaal vrijgekomen deeltjes: ${c} × ${x} = ${nl(c * x)}.`, `${y}% daarvan: ${nl(c * x)} × ${y} ÷ 100 = ${nl(nieuw)}.`, `Per geïnfecteerde cel komen er dus ${nl((x * y) / 100)} nieuwe geïnfecteerde cellen bij. Is dat meer dan 1, dan breidt de infectie zich uit.`] };
      },
    },
    {
      id: "r-schaal", niveaus: ["havo", "vwo"], titel: "Hoeveel keer zo groot?", denkwijze: "C22 · E40",
      maak(r) {
        const paren = [
          ["een bacterie", 2, "µm", "een griepvirus", 100, "nm"],
          ["een macrofaag", 20, "µm", "een bacterie", 2, "µm"],
          ["een rode bloedcel", 7.5, "µm", "een griepvirus", 100, "nm"],
          ["een lymfocyt", 7, "µm", "een griepvirus", 100, "nm"],
          ["een bacterie", 3, "µm", "een verkoudheidsvirus", 30, "nm"],
          ["een macrofaag", 21, "µm", "een verkoudheidsvirus", 30, "nm"],
        ];
        const [a, la, ea, b, lb, eb] = r.kies(paren);
        const nm = (l, e) => (e === "µm" ? l * 1000 : l);
        const f = nm(la, ea) / nm(lb, eb);
        return { context: `${a[0].toUpperCase() + a.slice(1)} is ongeveer ${nl(la)} ${ea} groot, ${b} ongeveer ${nl(lb)} ${eb}. (1 µm = 1000 nm)`,
          vraag: `Hoeveel keer zo groot is ${a} als ${b}?`, soort: "getal", antwoord: f, marge: 0.01 * f, eenheid: "keer",
          uitleg: [`Maak de eenheden gelijk: ${nl(la)} ${ea} = ${nl(nm(la, ea))} nm en ${nl(lb)} ${eb} = ${nl(nm(lb, eb))} nm.`, `Deel: ${nl(nm(la, ea))} ÷ ${nl(nm(lb, eb))} = ${nl(f)}.`, `${a[0].toUpperCase() + a.slice(1)} is dus ongeveer ${nl(f)} keer zo groot.`] };
      },
    },
    {
      id: "r-resistent", niveaus: ["havo", "vwo"], titel: "Hoeveel zijn er resistent?", denkwijze: "C22 · E40",
      maak(r) {
        const k = r.kies([6, 7, 8]), m = r.kies([2, 3, 5]), p = r.kies([9, 10]);
        const n = m * Math.pow(10, p - k);
        return { context: `Bij een longontsteking zitten ongeveer ${m} · ${macht(p)} bacteriën in de longen. Door mutaties is gemiddeld 1 op de ${macht(k)} bacteriën resistent tegen een antibioticum.`,
          vraag: "Hoeveel resistente bacteriën zijn er naar verwachting al vóór de behandeling?", soort: "getal", antwoord: n, marge: 0, eenheid: "bacteriën",
          uitleg: [`Aantal resistent = totaal ÷ ${macht(k)}.`, `${m} · ${macht(p)} ÷ ${macht(k)} = ${m} · ${macht(p - k)} = ${nl(n)}.`, "Ook al is het een klein aandeel: er zijn er al resistent vóórdat het antibioticum wordt gegeven. Het antibioticum selecteert ze (C27)."] };
      },
    },
    {
      id: "r-zweet", niveaus: ["havo", "vwo"], titel: "Afkoelen door zweten", denkwijze: "C24 · E40",
      maak(r) {
        const variant = r.kies(["kJ", "gram"]);
        const per = 2.4;
        if (variant === "kJ") {
          const g = r.kies([200, 300, 500, 750]);
          return { context: `Tijdens een wedstrijd verdampt er ${g} g zweet van de huid van een hardloper. Voor het verdampen van 1 g zweet is ongeveer ${nl(per)} kJ warmte nodig; die warmte komt uit het lichaam.`,
            vraag: "Hoeveel kJ warmte voert het verdampende zweet af?", soort: "getal", antwoord: g * per, marge: 0.5, eenheid: "kJ",
            uitleg: [`Per gram ${nl(per)} kJ, dus: ${g} × ${nl(per)} = ${nl(g * per)} kJ.`, "Energie verdwijnt niet: de warmte gaat van het lichaam naar het verdampende water (behoud van energie, C24).", "Zweet dat van je huid druipt zonder te verdampen, voert die warmte niet af."] };
        }
        const Q = r.kies([480, 720, 1200, 1800]);
        return { context: `Een fietser moet tijdens een tocht ${nl(Q)} kJ extra warmte kwijt door te zweten. Voor het verdampen van 1 g zweet is ongeveer ${nl(per)} kJ warmte nodig.`,
          vraag: "Hoeveel gram zweet moet daarvoor verdampen?", soort: "getal", antwoord: Q / per, marge: 0.5, eenheid: "g",
          uitleg: [`Per gram wordt ${nl(per)} kJ afgevoerd.`, `${nl(Q)} ÷ ${nl(per)} = ${nl(Q / per)} g.`, "De warmte gaat van het lichaam naar het verdampende zweet: behoud van energie (C24)."] };
      },
    },
    {
      id: "r-oppervlak", niveaus: ["havo", "vwo"], titel: "Huidoppervlak per kilogram", denkwijze: "C22",
      maak(r) {
        const mensen = [["een pasgeborene", 3.5, 0.23], ["een kind van 6 jaar", 20, 0.8], ["een volwassene", 70, 1.8]];
        const [i, j] = r.kies([[0, 2], [1, 2], [0, 1]]);
        const [a, ma, oa] = mensen[i], [b, mb, ob] = mensen[j];
        const f = oa / ma / (ob / mb);
        return { context: `${a[0].toUpperCase() + a.slice(1)} weegt ${nl(ma)} kg en heeft een huidoppervlak van ${nl(oa)} m². ${b[0].toUpperCase() + b.slice(1)} weegt ${nl(mb)} kg en heeft een huidoppervlak van ${nl(ob)} m².`,
          vraag: `Hoeveel keer zoveel huidoppervlak per kg heeft ${a} als ${b}?`, soort: "getal", antwoord: Math.round(f * 10) / 10, marge: 0.15, eenheid: "keer",
          uitleg: [`${a[0].toUpperCase() + a.slice(1)}: ${nl(oa)} ÷ ${nl(ma)} = ${nl(oa / ma, 3)} m² per kg.`, `${b[0].toUpperCase() + b.slice(1)}: ${nl(ob)} ÷ ${nl(mb)} = ${nl(ob / mb, 3)} m² per kg.`, `${nl(oa / ma, 3)} ÷ ${nl(ob / mb, 3)} ≈ ${nl(f, 1)} keer. Meer oppervlak per kg = relatief meer warmteverlies.`] };
      },
    },
    {
      id: "r-halfwaarde", niveaus: ["havo", "vwo"], titel: "Afbraak van ingespoten antistoffen", denkwijze: "C22 · E40",
      maak(r) {
        const C0 = r.kies([80, 120, 160, 240]), t = r.kies([6, 9, 12]);
        const n = t / 3, C = C0 / Math.pow(2, n);
        return { context: `Na een injectie met antistoffen (passieve immunisatie) is de concentratie ${C0} eenheden. De ingespoten antistoffen worden afgebroken: elke 3 weken halveert de concentratie.`,
          vraag: `Wat is de concentratie na ${t} weken?`, soort: "getal", antwoord: C, marge: 0.05, eenheid: "eenheden",
          uitleg: [`${t} weken = ${n} keer 3 weken: de concentratie halveert ${n} keer.`, `${C0} ÷ 2^${n} = ${C0} ÷ ${Math.pow(2, n)} = ${nl(C)}.`, "Er komen geen nieuwe antistoffen bij, want bij passieve immunisatie ontstaan geen plasmacellen of geheugencellen."] };
      },
    },
    {
      id: "r-rillen", niveaus: ["havo", "vwo"], titel: "Energie voor het rillen", denkwijze: "C24 · E40",
      maak(r) {
        const q = r.kies([160, 240, 320, 480]);
        return { context: "Bij volledige verbranding (dissimilatie) levert 1 g glucose ongeveer 16 kJ. Bij rillen trekken spieren samen zonder iets te bewegen: vrijwel alle energie komt vrij als warmte.",
          vraag: `Hoeveel gram glucose is nodig om door rillen ${q} kJ warmte te produceren?`, soort: "getal", antwoord: q / 16, marge: 0.05, eenheid: "g",
          uitleg: [`Per gram glucose 16 kJ.`, `${q} ÷ 16 = ${nl(q / 16)} g glucose.`, "Energieomzetting: chemische energie (glucose) → via ATP → spiersamentrekking → warmte. De energie gaat niet verloren, ze wordt omgezet (C24)."] };
      },
    },
    {
      id: "r-td-twee", niveaus: ["vwo"], titel: "Verdubbelingstijd uit twee metingen", denkwijze: "C22 · E40",
      maak(r) {
        const td = r.kies([20, 25, 30, 40]), n = r.int(3, 8), N1 = r.kies([200, 500, 1000]), t1 = r.kies([10, 30, 60]);
        const t2 = t1 + n * td, N2 = N1 * Math.pow(2, n);
        return { context: `In een kweek worden op t = ${t1} min ${nl(N1)} bacteriën geteld en op t = ${t2} min ${nl(N2)} bacteriën. De groei is exponentieel.`,
          vraag: "Bereken de verdubbelingstijd.", soort: "getal", antwoord: td, marge: 0, eenheid: "min",
          uitleg: [`Factor: ${nl(N2)} ÷ ${nl(N1)} = ${nl(N2 / N1)} = 2^${n}, dus ${n} verdubbelingen.`, `Tijdsverschil: ${t2} − ${t1} = ${t2 - t1} min.`, `Verdubbelingstijd: ${t2 - t1} ÷ ${n} = ${td} min.`] };
      },
    },
  ];
})();
