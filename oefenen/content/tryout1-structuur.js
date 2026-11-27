/* Structuur, eigenschap en functie (C25) en verklaringen (E41) · Welke denkwijze? (C20–C27) — try-out 1.
   Elke generator kiest bij elke aanroep een vraag uit zijn bank; de opties worden door de omgeving geschud.
   waarom[i] = uitleg bij een fout antwoord (optioneel). */
window.OEFENSETS = window.OEFENSETS || [];
(function () {
  const set = window.OEFENSETS.find((s) => s.id === "tryout1");
  const uitBank = (bank) => { const f = (r) => Object.assign({ soort: "mc" }, r.kies(bank)); f.bank = bank.map((q) => Object.assign({ soort: "mc" }, q)); return f; };

  const BOUW_CEL = [
    { context: "Een plasmacel heeft heel veel ruw ER: ER bezet met ribosomen.", vraag: "Waarom past deze bouw bij de functie van een plasmacel?",
      opties: ["Antistoffen zijn eiwitten die de cel verlaten; die worden aan ribosomen op het ER gemaakt.", "Het ER levert de energie voor het maken van antistoffen.", "In het ER worden opgenomen ziekteverwekkers afgebroken.", "Het ER bewaart antistoffen voor een volgende infectie."], goed: 0,
      waarom: [null, "Energie komt vooral uit mitochondriën.", "Afbraak gebeurt in lysosomen.", "Het geheugen zit in geheugencellen, niet in opgeslagen antistoffen."],
      uitleg: ["Functie van een plasmacel: veel antistoffen maken en afgeven.", "Antistoffen zijn eiwitten voor ‘export’; die worden gemaakt door ribosomen op het ER.", "Veel ruw ER = veel productie: de structuur past bij de functie."] },
    { context: "Een macrofaag bevat veel lysosomen: blaasjes met verteringsenzymen.", vraag: "Waarom past deze bouw bij de functie van een macrofaag?",
      opties: ["Met de enzymen breekt de macrofaag opgenomen ziekteverwekkers af.", "Met de enzymen maakt de macrofaag antistoffen.", "De lysosomen leveren energie voor het bewegen.", "De lysosomen bewaren antigenen voor geheugencellen."], goed: 0,
      waarom: [null, "Antistoffen worden door plasmacellen gemaakt.", "Energie komt uit mitochondriën.", "Geheugen zit in geheugencellen."],
      uitleg: ["Een macrofaag neemt ziekteverwekkers op (fagocytose).", "Lysosomen versmelten met het blaasje waarin de ziekteverwekker zit.", "De enzymen breken de ziekteverwekker af; daarna worden antigenen gepresenteerd."] },
    { context: "Veel uitlopers van zenuwcellen zijn omgeven door een myelineschede met insnoeringen ertussen.", vraag: "Waarom past deze bouw bij de functie?",
      opties: ["De impuls springt van insnoering naar insnoering en gaat daardoor sneller.", "Myeline maakt de neurotransmitter aan.", "Myeline beschermt de uitloper tegen ziekteverwekkers.", "Myeline zorgt dat de impuls in twee richtingen kan gaan."], goed: 0,
      waarom: [null, "Neurotransmitters worden in de uiteinden van het neuron gemaakt.", "Myeline isoleert; bescherming tegen ziekteverwekkers is niet haar functie.", "De richting van de impuls hangt hier niet van af."],
      uitleg: ["Myeline isoleert de uitloper.", "Alleen bij de insnoeringen ontstaat een actiepotentiaal: de impuls ‘springt’.", "Sprongsgewijze geleiding is veel sneller dan geleiding over het hele membraan."] },
    { context: "Een zweetklier heeft een afvoerbuis die uitkomt op het huidoppervlak (exocriene klier).", vraag: "Waarom past deze bouw bij de functie van een zweetklier?",
      opties: ["Zweet moet op de huid komen om daar te verdampen en warmte af te voeren.", "Zo komt zweet snel in het bloed terecht.", "Zo kan de klier warmte uit de omgeving opnemen.", "Zo kunnen ziekteverwekkers via de buis worden afgevoerd."], goed: 0,
      waarom: [null, "Producten die in het bloed komen, horen bij endocriene klieren.", "Zweten voert juist warmte af.", "Dat is niet de functie van zweetklieren."],
      uitleg: ["Functie: afkoelen.", "Daarvoor moet zweet verdampen; dat kan alleen aan het huidoppervlak.", "De afvoerbuis naar de huid (exocrien) past dus bij de functie."] },
    { context: "Op een warme dag verwijden de bloedvaten in de huid; er stroomt veel bloed vlak onder het huidoppervlak.", vraag: "Waarom helpt dit bij het regelen van de lichaamstemperatuur?",
      opties: ["Warm bloed geeft via de huid warmte af aan de omgeving.", "Het bloed neemt warmte op uit de omgeving.", "Er gaan meer afweercellen naar de huid.", "De huid maakt dan meer zweet aan uit het bloed, maar dat voert geen warmte af."], goed: 0,
      waarom: [null, "Bij warm weer moet het lichaam warmte kwijt, niet opnemen.", "Dat speelt bij ontsteking, niet bij temperatuurregeling.", "Zweet voert juist wél warmte af als het verdampt."],
      uitleg: ["Warm bloed uit de kern komt dicht bij het oppervlak.", "Daar geeft het warmte af aan de (koelere) omgeving.", "Meer bloed in de huid = meer warmteafgifte: negatieve terugkoppeling."] },
    { context: "Een pasgeborene en een volwassene liggen allebei even lang in een koele kamer.", vraag: "Waarom koelt de pasgeborene sneller af?",
      opties: ["Een baby heeft per kilogram lichaam meer huidoppervlak en geeft daardoor relatief meer warmte af.", "Een baby heeft een lagere normwaarde.", "Een baby heeft geen hypothalamus.", "Een baby produceert helemaal geen warmte."], goed: 0,
      waarom: [null, "De normwaarde is ook bij baby's rond 37 °C.", "Ook een baby heeft een hypothalamus.", "Een baby produceert wel warmte, onder andere in bruin vet."],
      uitleg: ["Warmte wordt afgegeven via het oppervlak.", "Een klein lichaam heeft verhoudingsgewijs veel oppervlak per kilogram (per volume).", "Daardoor verliest het relatief meer warmte (oppervlakte-inhoudverhouding)."] },
  ];
  const BOUW_MOL = [
    { context: "Een antistof heeft een Y-vorm met twee identieke bindingsplaatsen.", vraag: "Waarom past deze bouw bij de functie van een antistof?",
      opties: ["Een antistof kan twee antigenen tegelijk binden, waardoor ziekteverwekkers aan elkaar klonteren en makkelijker worden opgeruimd.", "Met twee bindingsplaatsen kan een antistof twee verschillende ziekteverwekkers herkennen.", "De Y-vorm laat de antistof door celmembranen dringen.", "Met de twee armen doodt de antistof de ziekteverwekker."], goed: 0,
      waarom: [null, "De twee bindingsplaatsen zijn identiek: ze binden hetzelfde antigeen.", "Antistoffen werken buiten cellen.", "Antistoffen doden niet; ze binden, daarna ruimen macrofagen op."],
      uitleg: ["Beide bindingsplaatsen passen op hetzelfde antigeen.", "Eén antistof kan zo twee ziekteverwekkers verbinden: klontering.", "Klonten worden makkelijker door macrofagen opgenomen."] },
    { context: "Elke T-helpercel heeft receptoren die passen bij één bepaald antigeen op MHC-II.", vraag: "Wat is het gevolg van deze bouw?",
      opties: ["Alleen de T-helpercellen die bij dít antigeen passen, worden geactiveerd: de reactie is specifiek.", "Alle T-helpercellen worden bij elke infectie geactiveerd.", "T-helpercellen kunnen daardoor zelf antigenen afbreken.", "T-helpercellen binden aan MHC-I van elke lichaamscel."], goed: 0,
      waarom: [null, "Dan zou de reactie niet specifiek zijn.", "Afbreken doen macrofagen en dendritische cellen.", "Aan MHC-I binden cytotoxische T-cellen."],
      uitleg: ["Receptor en antigeen-MHC-II passen als sleutel en slot.", "Alleen passende T-helpercellen worden geactiveerd en delen.", "Zo richt de verworven afweer zich op precies dit antigeen."] },
    { context: "Een virus heeft eiwitten op zijn buitenkant die alleen passen op een bepaalde receptor in het celmembraan.", vraag: "Wat volgt daaruit?",
      opties: ["Het virus kan alleen cellen infecteren die deze receptor hebben.", "Het virus kan elke lichaamscel infecteren.", "Het virus kan zich buiten cellen vermenigvuldigen.", "Antistoffen kunnen het virus niet binden."], goed: 0,
      waarom: [null, "Zonder passende receptor kan het virus niet binden.", "Een virus vermenigvuldigt zich alleen in een gastheercel.", "Antistoffen kunnen juist aan deze oppervlakte-eiwitten binden."],
      uitleg: ["Binding vereist dat viruseiwit en receptor passen.", "Alleen cellen met die receptor zijn gevoelig.", "Daarom treft een verkoudheidsvirus vooral het slijmvlies van neus en keel."] },
    { context: "De ribosomen van bacteriën zijn anders gebouwd dan die van menselijke cellen.", vraag: "Waarom is dit verschil belangrijk bij antibiotica?",
      opties: ["Een antibioticum kan aan bacteriële ribosomen binden zonder de eiwitsynthese van menselijke cellen te remmen.", "Menselijke cellen hebben geen ribosomen.", "Bacteriën kunnen daardoor niet resistent worden.", "Het antibioticum maakt daardoor de menselijke ribosomen sterker."], goed: 0,
      waarom: [null, "Menselijke cellen hebben wel ribosomen.", "Resistentie kan wel ontstaan, door mutaties.", "Dat is niet hoe antibiotica werken."],
      uitleg: ["Structuurverschil op molecuulniveau.", "Het antibioticum past wel op het bacteriële ribosoom, niet op het menselijke.", "Zo werkt het selectief: de bacterie stopt, de patiënt niet."] },
    { context: "Bruin vet bevat veel mitochondriën met het eiwit UCP1. Door UCP1 komt de energie uit voedingsstoffen in de mitochondriën direct vrij als warmte.", vraag: "Waarom past dit bij de functie van bruin vet bij een pasgeborene?",
      opties: ["Bruin vet produceert warmte zonder spierbeweging; een baby kan nog nauwelijks rillen.", "Bruin vet slaat warmte op voor later.", "UCP1 laat bruin vet extra veel energie opslaan voor de groei.", "Bruin vet voorkomt dat de baby warmte afgeeft."], goed: 0,
      waarom: [null, "Warmte wordt niet opgeslagen maar meteen geproduceerd.", "UCP1 zorgt juist dat de energie meteen als warmte vrijkomt.", "Bruin vet produceert warmte; het isoleert niet."],
      uitleg: ["Molecuul: UCP1 laat energie vrijkomen als warmte.", "Cel en weefsel: veel mitochondriën = veel warmte.", "Organisme: de baby blijft warm zonder te rillen."] },
  ];
  const CONCLUSIE = (r) => {
    const n = r.kies([20, 25, 30]), a = n - r.int(0, 2), b = r.int(2, 8);
    return { soort: "mc", context: `Onderzoekers vaccineren ${n} muizen en geven ${n} andere muizen een nepinjectie. Vier weken later worden alle muizen besmet met de ziekteverwekker. Van de gevaccineerde muizen blijven er ${a} gezond, van de andere muizen ${b}.`,
      vraag: "Welke conclusie past het best bij deze resultaten?",
      opties: ["Bij deze muizen beschermde het vaccin tegen de ziekte.", "Het vaccin beschermt mensen volledig tegen deze ziekte.", "Het vaccin werkt doordat het antistoffen bevat.", "Muizen die niet gevaccineerd zijn, worden altijd ziek."], goed: 0,
      waarom: [null, "Er zijn alleen muizen onderzocht; over mensen zegt dit experiment niets.", "Hoe het vaccin werkt, is in dit experiment niet onderzocht.", `${b} niet-gevaccineerde muizen bleven gezond; ‘altijd’ is te sterk.`],
      uitleg: ["Een passende conclusie blijft binnen wat er onderzocht is: deze muizen, dit vaccin.", `Veel meer gevaccineerde muizen bleven gezond (${a} van ${n}) dan niet-gevaccineerde (${b} van ${n}).`, "Uitspraken over mensen of over het mechanisme gaan verder dan de resultaten."] };
  };
  const AANNEMELIJK = [
    { context: "Bij iemand die voor de tweede keer met hetzelfde antigeen in contact komt, ontstaan veel sneller veel meer antistoffen dan de eerste keer.", vraag: "Welke verklaring is het meest aannemelijk?",
      opties: ["Bij het eerste contact zijn geheugencellen gevormd die nu snel reageren.", "De antistoffen van het eerste contact zijn er nog en tellen op.", "Het antigeen was de tweede keer groter.", "Bij de tweede meting is een meetfout gemaakt."], goed: 0,
      waarom: [null, "Na het eerste contact daalt de hoeveelheid antistoffen juist weer.", "Dat verklaart de snellere reactie niet.", "Het patroon is bij iedereen te zien; een meetfout is dan onaannemelijk."],
      uitleg: ["Zoek de verklaring die past bij álle waarnemingen: sneller én meer.", "Geheugencellen herkennen het antigeen meteen en delen snel.", "Dat verklaart de snelle, sterke secundaire reactie."] },
    { context: "Een patiënt met hoge koorts krijgt een middel dat de werking van cytokinen in de hypothalamus remt. Binnen een uur gaat hij zweten en daalt de temperatuur.", vraag: "Welke verklaring is het meest aannemelijk?",
      opties: ["De normwaarde daalt; de huidige temperatuur is dan ‘te hoog’ en het lichaam gaat warmte afgeven.", "Het middel doodt het virus, waardoor de warmte verdwijnt.", "Het middel koelt het bloed direct af.", "Het middel maakt de zweetklieren kapot."], goed: 0,
      waarom: [null, "Het middel werkt op de cytokinewerking, niet op het virus.", "Dat past niet bij het zweten: het lichaam reageert zelf.", "Kapotte zweetklieren zouden juist minder zweet geven."],
      uitleg: ["Cytokinen verhogen de normwaarde (koorts).", "Remt het middel dat, dan daalt de normwaarde.", "37 °C wordt weer de norm: zweten en vaatverwijding voeren warmte af."] },
    { context: "Na een antibioticakuur bestaat de bacteriepopulatie in een patiënt grotendeels uit resistente bacteriën.", vraag: "Welke verklaring is het meest aannemelijk?",
      opties: ["Er waren al enkele resistente bacteriën; die overleefden en vermenigvuldigden zich.", "Het antibioticum heeft de bacteriën laten muteren.", "De bacteriën hebben geleerd het antibioticum te ontwijken.", "Het afweersysteem heeft alleen de resistente bacteriën laten leven."], goed: 0,
      waarom: [null, "Mutaties ontstaan door kopieerfouten, niet door het antibioticum.", "Bacteriën leren niet; het gaat om variatie en selectie.", "Het afweersysteem herkent bacteriën niet aan hun resistentie."],
      uitleg: ["Variatie: resistentie was er al door mutaties.", "Selectiedruk: het antibioticum doodt de gevoelige bacteriën.", "De resistente bacteriën planten zich voort: de populatie verandert (C27)."] },
  ];
  const SOORT = [
    ["Je rilt doordat de hypothalamus via motorische zenuwen de skeletspieren laat samentrekken.", 0],
    ["Rillen levert warmte op, zodat de lichaamstemperatuur op peil blijft.", 1],
    ["Zoogdieren die bij kou konden rillen, overleefden koude perioden vaker en kregen meer nakomelingen.", 2],
    ["Koorts ontstaat doordat cytokinen de normwaarde in de hypothalamus verhogen.", 0],
    ["Plasmacellen hebben veel ER, zodat ze veel antistoffen kunnen maken.", 1],
    ["Bacteriën met een resistentiemutatie overleefden antibiotica en planten zich voort, waardoor resistentie vaker voorkomt.", 2],
    ["Een zweetklier geeft zweet af doordat orthosympathische neuronen een neurotransmitter afgeven.", 0],
    ["Koorts kan de vermenigvuldiging van sommige ziekteverwekkers remmen.", 1],
  ];
  const UITLEG_SOORT = ["Causaal: beschrijft het mechanisme, hoe iets tot stand komt (‘doordat’).", "Functioneel: beschrijft waartoe iets dient, wat het oplevert (‘zodat’, ‘om te’).", "Evolutionair: beschrijft hoe iets door variatie en selectie over generaties is ontstaan."];

  set.structuur = [
    { id: "s-bouw-cel", niveaus: ["havo", "vwo"], titel: "Bouw en functie: cel en orgaan", denkwijze: "C25", maak: uitBank(BOUW_CEL) },
    { id: "s-bouw-mol", niveaus: ["vwo"], titel: "Bouw en functie: molecuul", denkwijze: "C25", maak: uitBank(BOUW_MOL) },
    { id: "s-conclusie", niveaus: ["havo", "vwo"], titel: "Een passende conclusie", denkwijze: "E41", maak: CONCLUSIE },
    { id: "s-aannemelijk", niveaus: ["havo", "vwo"], titel: "De meest aannemelijke verklaring", denkwijze: "E41", maak: uitBank(AANNEMELIJK) },
    { id: "s-soort", niveaus: ["vwo"], titel: "Causaal, functioneel of evolutionair?", denkwijze: "E41", maak: uitBank(SOORT.map(([t, g]) => ({ vasteVolgorde: true, context: `„${t}”`, vraag: "Wat voor verklaring is dit?", opties: ["causaal", "functioneel", "evolutionair"], goed: g, uitleg: [UITLEG_SOORT[g], "Tip: zoek het signaalwoord. ‘Doordat’ wijst vaak op causaal, ‘zodat’ of ‘om’ op functioneel, ‘over generaties’ of ‘nakomelingen’ op evolutionair."] }))) },
  ];

  // ---------- Welke denkwijze? ----------
  const DW = {
    C20: ["C20 patronen", "Patronen: je beschrijft of beoordeelt een regelmaat in waarnemingen (toenemend, periodiek, past het binnen het patroon?)."],
    C21: ["C21 oorzaak-gevolg", "Oorzaak-gevolg: je zet stappen achter elkaar, elk gevolg wordt de volgende oorzaak (‘leidt tot’, ‘waardoor’)."],
    C22: ["C22 schaal, verhouding en hoeveelheid", "Schaal en verhouding: je rekent of vergelijkt grootte en hoeveelheid (‘hoeveel keer’, ‘per’, ‘bereken’)."],
    C23: ["C23 systemen", "Systemen: je denkt in grens, onderdelen, input en output, en wat het geheel kan (emergentie)."],
    C24: ["C24 behoud, kringlopen en transport", "Behoud en transport: je volgt waar stof of energie heen gaat en in welke vorm (‘waar blijft’, ‘omzetting’)."],
    C25: ["C25 structuur, eigenschap en functie", "Structuur en functie: je legt uit waarom een bouw past bij wat iets doet (‘waarom past de bouw…’)."],
    C26: ["C26 stabiliteit en verandering", "Stabiliteit: je redeneert met evenwicht, regelkring en terugkoppeling (‘constant’, ‘normwaarde’)."],
    C27: ["C27 evolutionair redeneren", "Evolutie: je redeneert met variatie, selectiedruk en veranderende populaties (‘in de loop van generaties’)."],
  };
  const STAMMEN = {
    C20: ["De grafiek toont de lichaamstemperatuur over drie dagen. Beschrijf het verloop dat je ziet.", "Eén meting wijkt sterk af van de andere metingen. Beoordeel of deze meting binnen het verloop past."],
    C21: ["Beschrijf in een oorzaak-gevolgketen hoe een vaccinatie leidt tot bescherming.", "Leg stap voor stap uit hoe een tekort aan T-helpercellen leidt tot meer infecties."],
    C22: ["Bereken hoeveel keer zo groot een macrofaag is als een bacterie.", "Een bacterie deelt elke 20 minuten. Bereken hoeveel bacteriën er na 3 uur zijn."],
    C23: ["Geef aan welke onderdelen binnen de grens van het systeem ‘lymfeknoop’ liggen en wat de input is.", "Leg uit waarom de afweer als geheel iets kan wat geen van de afzonderlijke cellen kan."],
    C24: ["Beschrijf welke energieomzetting plaatsvindt als spieren rillen.", "Leg uit waar de energie vandaan komt die nodig is om zweet op de huid te laten verdampen."],
    C25: ["Leg uit waarom de bouw van een plasmacel past bij zijn functie.", "Leg uit waarom een virus alleen cellen met een bepaalde receptor kan infecteren."],
    C26: ["Leg uit hoe de lichaamstemperatuur constant blijft als het buiten koud is.", "Leg uit waarom de lichaamstemperatuur bij koorts op een hoger niveau stabiel blijft."],
    C27: ["Verklaar waarom het aandeel resistente bacteriën in ziekenhuizen in de loop van de jaren toeneemt.", "Leg uit waarom er elk jaar een nieuw griepvaccin nodig is, hoewel het virus steeds ‘griep’ blijft."],
  };
  set.denkwijzen = Object.keys(STAMMEN).map((code) => {
    const g = {
    id: "d-" + code, niveaus: ["havo", "vwo"], titel: DW[code][0], denkwijze: "herkennen",
    maak(r) {
      const stam = r.kies(STAMMEN[code]);
      const anderen = Object.keys(DW).filter((c) => c !== code).sort(() => Math.random() - 0.5).slice(0, 3);
      const codes = [code, ...anderen];
      return { soort: "mc", titel: "Welke denkwijze?", context: `Toetsvraag: „${stam}”`, vraag: "Welke denkwijze heb je vooral nodig om deze vraag te beantwoorden?",
        opties: codes.map((c) => DW[c][0]), goed: 0, waarom: codes.map((c, i) => (i === 0 ? null : `deze vraag gaat niet in de eerste plaats over ${DW[c][0].slice(4)}.`)),
        uitleg: [DW[code][1], "Vaak heb je meer dan één denkwijze nodig; het gaat om de denkwijze waar de vraag om draait."] };
    },
    };
    g.maak.bank = STAMMEN[code].map((stam) => ({ soort: "mc", context: `Toetsvraag: „${stam}”`, vraag: "Welke denkwijze?", opties: [DW[code][0], "(drie willekeurige andere denkwijzen)"], goed: 0, uitleg: [DW[code][1]] }));
    return g;
  });
})();
