/* Systeemdiagrammen (C23) try-out 1. Hoort bij set "tryout1".
   vakken: goede antwoorden per soort vak (deel = deelsystemen, input, output, extern = externe factor).
   Volgorde binnen een soort maakt niet uit. afleiders: foute opties per soort.
   vragen: meerkeuze; niveau "beide", "havo" of "vwo". Precies één optie goed. */
window.OEFENSETS = window.OEFENSETS || [];
(function () {
  const set = window.OEFENSETS.find((s) => s.id === "tryout1");
  set.diagrammen = [
    {
      id: "d-bacterie", niveaus: ["havo", "vwo"], titel: "Een bacterie en een antibioticum",
      context: "Een bacterie leeft in de longen van een patiënt. De patiënt krijgt een antibioticum dat aan de ribosomen van bacteriën bindt.",
      systeem: "één bacterie", niv: ["cel"],
      vakken: { deel: ["DNA", "ribosomen", "enzymen"], input: ["voedingsstoffen"], output: ["afvalstoffen (o.a. CO₂)", "dochtercellen"], extern: ["antibioticum"] },
      afleiders: { deel: ["celkern", "mitochondriën", "Golgi-systeem"], input: ["antistoffen", "zonlicht"], output: ["glucose", "geheugencellen"], extern: ["temperatuurzintuig", "plasmacel"] },
      vragen: [
        { niveau: "havo", vraag: "Het antibioticum bindt aan de ribosomen. Wat is het gevolg op het niveau van de cel?", opties: [
          { t: "De bacterie maakt geen eiwitten meer en kan daardoor niet groeien en delen.", goed: true, waarom: "Ribosomen maken eiwitten, ook de enzymen die nodig zijn voor groei en deling." },
          { t: "De bacterie maakt geen DNA meer, maar deelt nog wel.", waarom: "Zonder eiwitten (enzymen) kan de cel ook niet delen. Het effect op de ribosomen werkt door." },
          { t: "Het antibioticum maakt de afweercellen van de patiënt sterker.", waarom: "Het antibioticum werkt op de bacterie zelf, niet op het afweersysteem van de patiënt." },
          { t: "De ribosomen gaan antistoffen maken tegen het antibioticum.", waarom: "Bacteriën maken geen antistoffen. Dat doen plasmacellen van de patiënt." },
        ] },
        { niveau: "vwo", vraag: "Volg het effect naar een hoger niveau. Wat verwacht de arts bij de bacteriepopulatie in de longen?", opties: [
          { t: "De populatie groeit niet meer, omdat gevoelige bacteriën niet meer delen; de afweer ruimt ze op.", goed: true, waarom: "Molecuul (binding) → cel (geen deling) → populatie (geen groei) → organisme (herstel)." },
          { t: "De populatie verandert niet, omdat het antibioticum alleen op molecuulniveau werkt.", waarom: "Een effect op molecuulniveau werkt door naar cel, populatie en organisme. Dat is precies systeemdenken (C23.4)." },
          { t: "Alle bacteriën worden door het antibioticum resistent.", waarom: "Het antibioticum veroorzaakt geen resistentie. Het selecteert bacteriën die al resistent waren." },
          { t: "De populatie groeit sneller, omdat dode bacteriën voedingsstoffen leveren.", waarom: "Levende bacteriën delen niet meer. Extra voedingsstoffen veranderen dat niet." },
        ] },
      ],
    },
    {
      id: "d-plasmacel", niveaus: ["havo", "vwo"], titel: "Een plasmacel aan het werk",
      context: "Een plasmacel maakt grote hoeveelheden antistoffen. Een onderzoeker voegt een stof toe die de mitochondriën remt.",
      systeem: "plasmacel", niv: ["cel"],
      vakken: { deel: ["kern (DNA)", "ER met ribosomen", "Golgi-systeem", "mitochondriën"], input: ["aminozuren", "glucose en zuurstof"], output: ["antistoffen", "CO₂"], extern: ["stof die mitochondriën remt"] },
      afleiders: { deel: ["chloroplasten", "celwand"], input: ["antistoffen", "antigenen op MHC-I"], output: ["aminozuren", "glucose"], extern: ["zweetklier", "hoge buitentemperatuur"] },
      vragen: [
        { niveau: "beide", vraag: "Wat is het effect van de remmer op het niveau van het organisme?", opties: [
          { t: "De infectie wordt trager bestreden, omdat er minder antistoffen worden gemaakt.", goed: true, waarom: "Minder energie uit de mitochondriën → minder eiwitsynthese en minder afgifte → minder antistoffen → zwakkere afweer." },
          { t: "Er worden juist meer antistoffen gemaakt om het tekort aan energie te compenseren.", waarom: "Voor het maken en afgeven van antistoffen is energie nodig. Minder energie betekent minder antistoffen." },
          { t: "Geen effect, want antistoffen worden in het bloed gemaakt.", waarom: "Antistoffen worden in de plasmacel gemaakt en daarna aan het bloed afgegeven." },
          { t: "De persoon krijgt koorts, omdat de mitochondriën warmte vasthouden.", waarom: "Koorts ontstaat door een hogere normwaarde in de hypothalamus, niet door geremde mitochondriën." },
        ] },
        { niveau: "vwo", vraag: "Waarom heeft een plasmacel zoveel ER met ribosomen?", opties: [
          { t: "Antistoffen zijn eiwitten voor export; die worden aan ribosomen op het ER gemaakt.", goed: true, waarom: "Structuur past bij functie (C25): veel ER = veel productie van eiwitten die de cel verlaten." },
          { t: "Het ER levert de energie voor de productie van antistoffen.", waarom: "Energie komt vooral uit de mitochondriën." },
          { t: "Ribosomen op het ER breken antigenen af.", waarom: "Ribosomen maken eiwitten. Afbraak gebeurt in lysosomen." },
          { t: "Het ER slaat antistoffen op tot het volgende contact met het antigeen.", waarom: "Het geheugen zit in geheugencellen, niet in opgeslagen antistoffen." },
        ] },
      ],
    },
    {
      id: "d-huid", niveaus: ["havo", "vwo"], titel: "De huid op een warme dag",
      context: "Op een warme dag fiets je naar school. Je huid helpt je lichaamstemperatuur te regelen.",
      systeem: "huid", niv: ["orgaan"],
      vakken: { deel: ["zweetklieren", "bloedvaten", "temperatuurzintuigen"], input: ["warm bloed", "orthosympathische impulsen"], output: ["zweet", "warmte"], extern: ["hoge buitentemperatuur"] },
      afleiders: { deel: ["skeletspieren", "hypothalamus", "lymfeknoop"], input: ["zweet", "antistoffen"], output: ["glucose", "antistoffen"], extern: ["griepvirus", "antibioticum"] },
      vragen: [
        { niveau: "beide", vraag: "Is de huid hier een open of een gesloten systeem?", opties: [
          { t: "Open: er gaan stoffen en warmte de systeemgrens over.", goed: true, waarom: "Bloed, zweet en warmte kruisen de grens: open systeem (C23.3)." },
          { t: "Gesloten: de huid is een afsluitende laag rond het lichaam.", waarom: "Afsluitend tegen ziekteverwekkers, maar zweet, warmte en bloed gaan wel de grens over." },
          { t: "Gesloten: alleen warmte gaat erdoor, geen stoffen.", waarom: "Zweet is een stof die de huid verlaat." },
          { t: "Open, maar alleen voor warmte.", waarom: "Ook stoffen gaan de grens over, zoals zweet en bloed." },
        ] },
        { niveau: "vwo", vraag: "Bij uitdroging maken de zweetklieren minder zweet. Voorspel het effect op het organisme.", opties: [
          { t: "De lichaamstemperatuur stijgt verder, omdat er minder warmte wordt afgegeven.", goed: true, waarom: "Minder output van warmte bij gelijke productie: het evenwicht verschuift (C23.4, C26)." },
          { t: "De lichaamstemperatuur daalt, omdat er minder zweet is.", waarom: "Zweet voert warmte af. Minder zweet betekent minder afkoeling." },
          { t: "Geen effect: de bloedvaten nemen de afkoeling volledig over.", waarom: "Verwijde huidvaten helpen, maar kunnen het wegvallen van zweten niet volledig opvangen." },
          { t: "De hypothalamus verlaagt de normwaarde om het tekort te compenseren.", waarom: "De normwaarde blijft gelijk. De werkelijke temperatuur wijkt af." },
        ] },
      ],
    },
    {
      id: "d-zwemmer", niveaus: ["havo"], titel: "Een zwemmer in koud water",
      context: "Een zwemmer ligt een half uur in water van 15 °C.",
      systeem: "het lichaam van de zwemmer", niv: ["organisme"],
      vakken: { deel: ["hypothalamus", "bloedvaten in de huid", "skeletspieren"], input: ["voedingsstoffen en zuurstof"], output: ["warmte", "CO₂"], extern: ["koud water"] },
      afleiders: { deel: ["lymfeknoop", "Golgi-systeem", "ribosomen"], input: ["warmte uit het water", "zweet"], output: ["zuurstof", "glucose"], extern: ["antibioticum", "vaccin"] },
      vragen: [
        { niveau: "havo", vraag: "Welke reactie werkt de afkoeling tegen?", opties: [
          { t: "De skeletspieren gaan rillen: meer warmteproductie.", goed: true, waarom: "Rillen is een effector in de regelkring: negatieve terugkoppeling." },
          { t: "De bloedvaten in de huid verwijden.", waarom: "Verwijden geeft meer warmteafgifte. Bij kou vernauwen de vaten." },
          { t: "De zweetklieren maken zweet.", waarom: "Zweten koelt af. Dat is bij kou ongewenst." },
          { t: "De hypothalamus verlaagt de normwaarde.", waarom: "De normwaarde blijft rond 37 °C." },
        ] },
        { niveau: "havo", vraag: "Na een uur daalt de lichaamstemperatuur toch. Wat is er met input en output aan de hand?", opties: [
          { t: "De warmteafgifte (output) is groter geworden dan de warmteproductie.", goed: true, waarom: "Bij evenwicht zijn productie en afgifte gelijk. Nu niet meer." },
          { t: "Er komt kou het lichaam binnen (input).", waarom: "Kou is geen stof of energie die binnenkomt. Er gaat warmte uit het lichaam naar het water." },
          { t: "De hypothalamus is uitgevallen.", waarom: "De regelkring werkt wel, maar kan het grote warmteverlies niet bijhouden." },
          { t: "De spieren produceren meer warmte dan nodig.", waarom: "Dan zou de temperatuur stijgen, niet dalen." },
        ] },
      ],
    },
    {
      id: "d-lymfeknoop", niveaus: ["vwo"], titel: "Een lymfeknoop na een vaccinatie",
      context: "Na een vaccinatie met een virus-eiwit (geen heel virus) zwelt een lymfeknoop in de oksel een paar dagen op.",
      systeem: "lymfeknoop", niv: ["orgaan"],
      vakken: { deel: ["dendritische cellen", "T-helpercellen", "B-cellen"], input: ["lymfe met antigenen"], output: ["geactiveerde afweercellen", "antistoffen"], extern: ["vaccin met viruseiwit"] },
      afleiders: { deel: ["rode bloedcellen", "zweetklieren", "oligodendrocyten"], input: ["zweet", "zuurstof uit de longen"], output: ["zweet", "rode bloedcellen"], extern: ["antibioticum", "hoge buitentemperatuur"] },
      vragen: [
        { niveau: "vwo", vraag: "Waarom zwelt de lymfeknoop op?", opties: [
          { t: "Passende T-helpercellen en B-cellen worden geactiveerd en delen, waardoor er tijdelijk veel meer cellen zijn.", goed: true, waarom: "Activatie leidt tot deling van precies die cellen met een passende receptor." },
          { t: "Het viruseiwit vermenigvuldigt zich in de lymfeknoop.", waarom: "Een los eiwit kan zich niet vermenigvuldigen." },
          { t: "Er hopen zich antistoffen op die de lymfeknoop niet kunnen verlaten.", waarom: "Antistoffen verlaten de lymfeknoop via lymfe en bloed." },
          { t: "De lymfeknoop houdt vocht vast om warmte af te voeren.", waarom: "De zwelling komt door celdeling, niet door warmteregulatie." },
        ] },
        { niveau: "vwo", vraag: "Zonder T-helpercellen komt er in de lymfeknoop geen sterke reactie. Welk begrip past daar het best bij?", opties: [
          { t: "Emergentie: de afweerreactie ontstaat pas door samenwerking van de deelsystemen.", goed: true, waarom: "Geen enkele celsoort kan dit alleen. De eigenschap ontstaat op het niveau van het geheel (C23.4)." },
          { t: "Negatieve terugkoppeling.", waarom: "Dat gaat over het tegenwerken van een afwijking in een regelkring." },
          { t: "Selectiedruk.", waarom: "Dat is een begrip uit evolutionair redeneren (C27)." },
          { t: "Dynamisch evenwicht.", waarom: "Dat gaat over gelijke input en output (C26), niet over samenwerking die iets nieuws oplevert." },
        ] },
      ],
    },
    {
      id: "d-populatie", niveaus: ["havo", "vwo"], titel: "Een bacteriepopulatie in een patiënt",
      context: "In een patiënt leeft een populatie bacteriën. Enkele bacteriën zijn door een mutatie resistent tegen een antibioticum. De patiënt krijgt dat antibioticum.",
      systeem: "bacteriepopulatie in de patiënt", niv: ["populatie"],
      vakken: { deel: ["gevoelige bacteriën", "resistente bacteriën"], input: ["voedingsstoffen"], output: ["afvalstoffen"], extern: ["antibioticum"] },
      afleiders: { deel: ["plasmacellen", "mitochondriën"], input: ["zweet", "geheugencellen"], output: ["voedingsstoffen", "antibioticum"], extern: ["vaccin", "koud water"] },
      vragen: [
        { niveau: "beide", vraag: "Voorspel hoe de populatie er na een week behandeling uitziet.", opties: [
          { t: "Het aandeel resistente bacteriën in de populatie is groter geworden.", goed: true, waarom: "Gevoelige bacteriën sterven; resistente overleven en delen. Selectie (C27) zichtbaar op populatieniveau." },
          { t: "Alle bacteriën zijn dood.", waarom: "De resistente bacteriën overleven het antibioticum." },
          { t: "De gevoelige bacteriën zijn resistent geworden.", waarom: "Een bacterie wordt niet resistent door het antibioticum. De resistente waren er al." },
          { t: "De populatie is precies hetzelfde gebleven.", waarom: "Het antibioticum verandert de samenstelling: de gevoelige bacteriën verdwijnen." },
        ] },
      ],
    },
  ];
})();
