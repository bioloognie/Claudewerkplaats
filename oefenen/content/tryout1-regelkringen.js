/* Regelkringen (C26 stabiliteit en verandering, ET18.3) try-out 1. Worden toegevoegd aan de schema's (set.diagrammen) met vorm "regelkring".
   vakken: verstoring, sensor, centrum (regelcentrum), effector, effect, terugkoppeling. */
window.OEFENSETS = window.OEFENSETS || [];
(function () {
  const set = window.OEFENSETS.find((s) => s.id === "tryout1");
  const NEG = "negatief: het effect werkt de verstoring tegen", POS = "positief: het effect versterkt de verstoring";
  set.diagrammen = (set.diagrammen || []).concat([
    {
      id: "rk-kou", vorm: "regelkring", niveaus: ["havo", "vwo"], titel: "Regelkring: wachten in de kou",
      context: "Je wacht in de winter zonder jas op de bus. Je lichaamstemperatuur blijft toch ongeveer 37 °C.",
      vakken: { verstoring: ["de huid koelt af door koude lucht"], sensor: ["temperatuurzintuigen in de huid"], centrum: ["hypothalamus"], effector: ["bloedvaten in de huid", "skeletspieren"], effect: ["minder warmteafgifte en meer warmteproductie"], terugkoppeling: [NEG] },
      afleiders: { verstoring: ["de normwaarde stijgt"], sensor: ["zweetklieren", "macrofagen"], centrum: ["schildklier", "huid"], effector: ["zweetklieren", "lymfeknopen"], effect: ["meer warmteafgifte", "de normwaarde daalt"], terugkoppeling: [POS] },
      vragen: [
        { niveau: "havo", vraag: "Welk deel van het zenuwstelsel laat de bloedvaten in de huid vernauwen?", opties: [
          { t: "het orthosympathisch zenuwstelsel", goed: true, waarom: "Vaatvernauwing in de huid wordt aangestuurd door het orthosympathisch zenuwstelsel." },
          { t: "het parasympathisch zenuwstelsel", waarom: "Het parasympathisch zenuwstelsel speelt bij de huidvaten nauwelijks een rol." },
          { t: "de sensorische zenuwen", waarom: "Sensorische zenuwen geleiden impulsen van zintuigen naar het centrale zenuwstelsel, niet naar effectoren." },
          { t: "de lymfevaten", waarom: "Lymfevaten vervoeren lymfe; het zijn geen zenuwen." },
        ] },
        { niveau: "vwo", vraag: "Een medicijn blokkeert de orthosympathische signalen naar de huidvaten. Voorspel wat er bij kou gebeurt.", opties: [
          { t: "De huidvaten vernauwen minder, dus er gaat meer warmte verloren; de lichaamstemperatuur kan dalen.", goed: true, waarom: "Eén effector valt (deels) weg; de warmteafgifte blijft hoog." },
          { t: "Er gebeurt niets: de hypothalamus vernauwt de vaten dan zelf.", waarom: "De hypothalamus werkt via zenuwen; zonder signaal geen vaatvernauwing." },
          { t: "De huidvaten vernauwen juist sterker.", waarom: "Zonder orthosympathisch signaal vernauwen ze juist minder." },
          { t: "De normwaarde daalt, zodat het lichaam het koud niet erg vindt.", waarom: "Het medicijn werkt op de signalen naar de vaten, niet op de normwaarde." },
        ] },
      ],
    },
    {
      id: "rk-sport", vorm: "regelkring", niveaus: ["havo", "vwo"], titel: "Regelkring: warm van het sporten",
      context: "Tijdens een voetbalwedstrijd produceren je spieren veel warmte. Toch stijgt je lichaamstemperatuur maar weinig.",
      vakken: { verstoring: ["de spieren produceren veel warmte"], sensor: ["temperatuurgevoelige zenuwcellen die het bloed meten"], centrum: ["hypothalamus"], effector: ["zweetklieren", "bloedvaten in de huid"], effect: ["meer warmteafgifte"], terugkoppeling: [NEG] },
      afleiders: { verstoring: ["het wordt buiten kouder"], sensor: ["zweetklieren", "skeletspieren"], centrum: ["hart", "longen"], effector: ["skeletspieren (rillen)", "lymfeknopen"], effect: ["meer warmteproductie", "de normwaarde stijgt"], terugkoppeling: [POS] },
      vragen: [
        { niveau: "beide", vraag: "Waarom is dit een negatieve terugkoppeling?", opties: [
          { t: "Het effect (meer warmteafgifte) werkt de verstoring (opwarmen) tegen.", goed: true, waarom: "Negatief betekent: tegenwerken, zodat de waarde terug gaat naar de normwaarde." },
          { t: "Omdat het lichaam last heeft van de warmte.", waarom: "‘Negatief’ zegt niets over of iets prettig is." },
          { t: "Omdat er minder zweet wordt gemaakt.", waarom: "Er wordt juist méér zweet gemaakt." },
          { t: "Omdat de temperatuur daalt tot ver onder de normwaarde.", waarom: "De temperatuur gaat terug náár de normwaarde, niet ver eronder." },
        ] },
      ],
    },
    {
      id: "rk-koorts", vorm: "regelkring", niveaus: ["havo", "vwo"], titel: "Regelkring: het begin van koorts",
      context: "Bij een griepinfectie krijgt iemand het koud en gaat rillen, terwijl zijn temperatuur stijgt naar 39 °C.",
      vakken: { verstoring: ["signaalstoffen van macrofagen verhogen de normwaarde"], sensor: ["temperatuurzintuigen"], centrum: ["hypothalamus"], effector: ["bloedvaten in de huid", "skeletspieren"], effect: ["de temperatuur stijgt naar de nieuwe normwaarde"], terugkoppeling: [NEG] },
      afleiders: { verstoring: ["het virus produceert warmte"], sensor: ["macrofagen"], centrum: ["lymfeknoop"], effector: ["zweetklieren", "plasmacellen"], effect: ["de temperatuur daalt naar 37 °C"], terugkoppeling: [POS] },
      vragen: [
        { niveau: "beide", vraag: "Is koorts een kapotte regelkring?", opties: [
          { t: "Nee: de regelkring werkt gewoon, maar regelt nu rond een hogere normwaarde.", goed: true, waarom: "Een verstoring leidt hier tot een nieuw evenwicht (C26)." },
          { t: "Ja: de hypothalamus valt uit, daardoor stijgt de temperatuur.", waarom: "De hypothalamus werkt wel: hij stuurt rillen en vaatvernauwing aan." },
          { t: "Ja: er is positieve terugkoppeling, de temperatuur stijgt eindeloos.", waarom: "De temperatuur stijgt tot de nieuwe normwaarde en blijft daar." },
          { t: "Nee: bij koorts is er geen regelkring meer nodig.", waarom: "Ook bij koorts wordt de temperatuur geregeld." },
        ] },
      ],
    },
  ]);
})();
