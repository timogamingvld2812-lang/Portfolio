/* ---------------------------------------------------------------
   DATA — artikelen uit het Wetboek Springbank
   tiers: eerste / tweede / meerdere  -> {cel (maanden), taak (uur), boete (euro)}
   modifiers: generic list applied as +/- percent, or perUnit percent x count
----------------------------------------------------------------*/

const TITELS = [
  "Titel I - Vermogensdelicten",
  "Titel II - Geweldsdelicten",
  "Titel III - Verkeersdelicten",
  "Titel IV - Opiumwet",
  "Titel V - Wet Wapens en Munitie",
  "Titel VII - Overige"
];

const POGING = {key:"poging", label:"Poging tot dit feit", pct:-33};
const AMBT = {key:"ambtenaar", label:"Slachtoffer is ambtenaar in functie", pct:33};
const MEDEPL = {key:"medepl", label:"Verdachte is medepleger (niet hoofddader)", pct:-15};
const SLACHT = {key:"slachtoffers", label:"Extra slachtoffers (geweldsdelict)", perUnit:25, unitLabel:"extra slachtoffer(s)"};
const STAPEL = {key:"stapel", label:"Extra identieke feiten (andere omstandigheden)", perUnit:50, unitLabel:"extra feit(en)"};

const ARTIKELEN = [
{id:"I-1", titel:TITELS[0], naam:"I-1 Diefstal (310 SR)",
  tiers:{eerste:{taak:20,boete:10000}, tweede:{cel:18,boete:12500}, meerdere:{cel:36,boete:15000}},
  mods:[POGING, STAPEL]},
{id:"I-2", titel:TITELS[0], naam:"I-2 Gekwalificeerde diefstal (311 SR)",
  tiers:{eerste:{taak:40,boete:15000}, tweede:{cel:10,boete:17500}, meerdere:{cel:20,boete:25000}},
  mods:[POGING, STAPEL]},
{id:"I-3", titel:TITELS[0], naam:"I-3 Diefstal met geweld / overval (312 SR)",
  tiers:{eerste:{cel:36,boete:20000}, tweede:{cel:72,boete:25000}, meerdere:{cel:108,boete:30000}},
  mods:[POGING, SLACHT]},
{id:"I-4", titel:TITELS[0], naam:"I-4 Afpersing (317 SR)",
  tiers:{eerste:{cel:45,boete:7500}, tweede:{cel:72,boete:10000}, meerdere:{cel:108,boete:15000}},
  mods:[SLACHT]},
{id:"I-5", titel:TITELS[0], naam:"I-5 Afdreiging / chantage (318 SR)",
  tiers:{eerste:{cel:27,boete:7500}, tweede:{cel:40,boete:10000}, meerdere:{cel:90,boete:15000}},
  mods:[SLACHT]},
{id:"I-6", titel:TITELS[0], naam:"I-6 Verduistering (321 SR)",
  tiers:{eerste:{taak:20,boete:5000}, tweede:{taak:30,boete:7500}, meerdere:{taak:60,boete:10000}},
  mods:[STAPEL]},
{id:"I-7", titel:TITELS[0], naam:"I-7 Heling (416 SR)",
  tiers:{eerste:{taak:20,boete:2000}, tweede:{taak:30,boete:4000}, meerdere:{taak:60,boete:5000}},
  mods:[STAPEL]},
{id:"I-8", titel:TITELS[0], naam:"I-8 Witwassen (420bis SR)",
  tiers:{eerste:{cel:27,boete:15000}, tweede:{cel:54,boete:20000}, meerdere:{cel:108,boete:25000}},
  mods:[]},
{id:"I-10", titel:TITELS[0], naam:"I-10 (Schuld)heling (417bis)",
  single:{cel:15,boete:2500}, mods:[]},

{id:"II-1", titel:TITELS[1], naam:"II-1 Wederspannigheid/verzet (180 SR)",
  tiers:{eerste:{taak:10,boete:1000}, tweede:{taak:15,boete:1500}, meerdere:{taak:20,boete:2000}}, mods:[]},
{id:"II-2", titel:TITELS[1], naam:"II-2 Gijzeling (282 SR)",
  tiers:{eerste:{cel:54,boete:10000}, tweede:{cel:63,boete:15000}, meerdere:{cel:72,boete:20000}},
  mods:[AMBT, POGING, SLACHT]},
{id:"II-3", titel:TITELS[1], naam:"II-3 Bedreiging (285 SR)",
  tiers:{eerste:{taak:15,boete:3000}, tweede:{taak:20,boete:4000}, meerdere:{taak:25,boete:5000}},
  mods:[AMBT]},
{id:"II-4", titel:TITELS[1], naam:"II-4 Doodslag (287 SR)",
  tiers:{eerste:{cel:72,boete:15000}, tweede:{cel:81,boete:20000}, meerdere:{cel:90,boete:25000}},
  mods:[AMBT, POGING, SLACHT]},
{id:"II-5", titel:TITELS[1], naam:"II-5 Moord (289 SR)",
  tiers:{eerste:{cel:90,boete:20000}, tweede:{cel:99,boete:25000}, meerdere:{cel:108,boete:30000}},
  mods:[AMBT, POGING, SLACHT]},
{id:"II-6", titel:TITELS[1], naam:"II-6 Eenvoudige mishandeling (300 SR)",
  tiers:{eerste:{taak:50,boete:5000}, tweede:{taak:60,boete:7500}, meerdere:{taak:70,boete:10000}},
  mods:[AMBT, SLACHT]},
{id:"II-7", titel:TITELS[1], naam:"II-7 Zware mishandeling (302 SR)",
  tiers:{eerste:{cel:9,boete:10000}, tweede:{cel:13,boete:12500}, meerdere:{cel:18,boete:15000}},
  mods:[AMBT, POGING, SLACHT]},
{id:"II-8", titel:TITELS[1], naam:"II-8 Vernieling (350 SR)",
  tiers:{eerste:{taak:15,boete:3000}, tweede:{taak:25,boete:4500}, meerdere:{cel:9,boete:6000}},
  mods:[POGING, {key:"overheid",label:"Goed/dier is eigendom van de overheid",pct:33}]},
{id:"II-9", titel:TITELS[1], naam:"II-9 Terroristisch misdrijf (134a/142a SR)",
  tiers:{eerste:{cel:130,boete:30000}, tweede:{cel:150,boete:37500}, meerdere:{cel:180,boete:45000}},
  mods:[{key:"lid3",label:"Veroordeling op basis van lid 3 (nepdreiging)",pct:-33}]},
{id:"II-10", titel:TITELS[1], naam:"II-10 Dood door schuld (307 SR)",
  tiers:{eerste:{cel:30,boete:10000}, tweede:{cel:50,boete:15000}, meerdere:{cel:70,boete:20000}},
  mods:[{key:"roekeloos",label:"Schuld te wijten aan roekeloosheid",pct:33}, SLACHT]},
{id:"II-11", titel:TITELS[1], naam:"II-11 Succesvolle uitbraak",
  tiers:{eerste:{cel:45,boete:30000}, tweede:{cel:75,boete:50000}, meerdere:{cel:150,boete:75000}},
  mods:[{key:"hulp",label:"Hulp/facilitering (niet zelf ontsnapt)",pct:-33}]},
{id:"II-12", titel:TITELS[1], naam:"II-12 Onsuccesvolle uitbraak / poging",
  tiers:{eerste:{cel:25,boete:15000}, tweede:{cel:45,boete:30000}, meerdere:{cel:90,boete:50000}}, mods:[]},

{id:"III-2", titel:TITELS[2], naam:"III-2 Roekeloos rijgedrag (5 WVW)",
  tiers:{eerste:{boete:3000}, tweede:{taak:5,boete:4000}, meerdere:{taak:10,boete:5000}}, mods:[]},
{id:"III-3", titel:TITELS[2], naam:"III-3 Opzettelijk ernstig gevaar/hinder (5a WvW)",
  tiers:{eerste:{taak:45,boete:3000}, tweede:{cel:12,boete:7500}, meerdere:{cel:18,boete:10500}}, mods:[]},
{id:"III-4", titel:TITELS[2], naam:"III-4 Ongeval, licht letsel (6 WVW)",
  tiers:{eerste:{taak:10,boete:4000}, tweede:{taak:15,boete:5000}, meerdere:{taak:20,boete:6000}}, mods:[]},
{id:"III-5", titel:TITELS[2], naam:"III-5 Ongeval, zwaar letsel (6 WVW)",
  tiers:{eerste:{taak:15,boete:10000}, tweede:{taak:20,boete:11000}, meerdere:{taak:25,boete:12000}}, mods:[]},
{id:"III-6", titel:TITELS[2], naam:"III-6 Ongeval, dood tot gevolg (6 WVW)",
  tiers:{eerste:{cel:9,boete:16000}, tweede:{cel:13,boete:17000}, meerdere:{cel:18,boete:18000}}, mods:[]},
{id:"III-7", titel:TITELS[2], naam:"III-7 Verlaten plaats ongeval (7 WVW)",
  tiers:{eerste:{cel:9,boete:15000}, tweede:{cel:13,boete:16000}, meerdere:{cel:22,boete:18000}},
  mods:[{key:"hulpeloos",label:"Derde in hulpeloze toestand achtergelaten",pct:33}]},
{id:"III-8", titel:TITELS[2], naam:"III-8 Rijden onder invloed (8 WVW)",
  tiers:{eerste:{taak:30,boete:4000}, tweede:{taak:40,boete:5000}, meerdere:{taak:50,boete:6000}}, mods:[]},
{id:"III-9", titel:TITELS[2], naam:"III-9 Rijden zonder bevoegdheid (9 WVW)",
  tiers:{eerste:{taak:10,boete:4000}, tweede:{taak:20,boete:4000}, meerdere:{taak:30,boete:6000}}, mods:[]},
{id:"III-10", titel:TITELS[2], naam:"III-10 Fout parkeren (25 RVV 1990)",
  single:{boete:1750}, mods:[]},
{id:"III-15", titel:TITELS[2], naam:"III-15 Vliegen zonder vliegbrevet",
  tiers:{eerste:{boete:100000}, tweede:{taak:20,boete:150000}, meerdere:{taak:30,boete:200000}}, mods:[]},

{id:"V-1", titel:TITELS[4], naam:"V-1 Tasers (26 WWM)",
  tiers:{eerste:{cel:13,boete:5000}, tweede:{cel:27,boete:7500}, meerdere:{cel:54,boete:10000}}, mods:[]},
{id:"V-2-1", titel:TITELS[4], naam:"V-2 Vuurwapens — Categorie 1 (pistool/revolver)",
  tiers:{eerste:{cel:45,boete:10000}, tweede:{cel:63,boete:12500}, meerdere:{cel:81,boete:15000}}, mods:[]},
{id:"V-2-2", titel:TITELS[4], naam:"V-2 Vuurwapens — Categorie 2 (jachtgeweer/SMG/explosieven)",
  tiers:{eerste:{cel:66,boete:15000}, tweede:{cel:81,boete:20000}, meerdere:{cel:120,boete:25000}}, mods:[]},
{id:"V-2-3", titel:TITELS[4], naam:"V-2 Vuurwapens — Categorie 3 (assault rifle/DMR/SR-06)",
  tiers:{eerste:{cel:81,boete:20000}, tweede:{cel:108,boete:25000}, meerdere:{cel:144,boete:27500}}, mods:[]},
{id:"V-3", titel:TITELS[4], naam:"V-3 Steek- en slagwapens (27 WWM)",
  tiers:{eerste:{boete:5000}, tweede:{taak:40,boete:7500}, meerdere:{cel:13,boete:10000}}, mods:[]},
{id:"V-4", titel:TITELS[4], naam:"V-4 Nepwapens, holsters, replica's (26 WWM)",
  tiers:{eerste:{cel:8,boete:5000}, tweede:{cel:16,boete:7500}, meerdere:{cel:24,boete:10000}}, mods:[]},
{id:"V-5", titel:TITELS[4], naam:"V-5 Wapenhandel (14-20 WWM)",
  tiers:{eerste:{cel:18,boete:25000}, tweede:{cel:36,boete:30000}, meerdere:{cel:54,boete:45000}},
  mods:[{key:"pogingwh",label:"Poging tot wapenhandel",pct:-50}]},
{id:"V-6-1", titel:TITELS[4], naam:"V-6 Munitiebezit — Categorie 1",
  tiers:{eerste:{cel:15,boete:3400}, tweede:{cel:21,boete:4750}, meerdere:{cel:28,boete:5100}},
  mods:[{key:"clips",label:"Extra clips (25% per stuk)",perUnit:25,unitLabel:"extra clip(s)"}]},
{id:"V-6-2", titel:TITELS[4], naam:"V-6 Munitiebezit — Categorie 2",
  tiers:{eerste:{cel:21,boete:6800}, tweede:{cel:37,boete:8500}, meerdere:{cel:49,boete:9350}},
  mods:[{key:"clips",label:"Extra clips (25% per stuk)",perUnit:25,unitLabel:"extra clip(s)"}]},
{id:"V-7-licht", titel:TITELS[4], naam:"V-7 Vuurwerk — licht (Final Strike Cake / Sky Cake)",
  tiers:{eerste:{boete:600}, tweede:{boete:1000}, meerdere:{taak:10,boete:1500}},
  mods:[{key:"schade",label:"Afgestoken in druk gebied / schade veroorzaakt",pct:33}]},
{id:"V-7-zwaar", titel:TITELS[4], naam:"V-7 Vuurwerk — zwaar (Viper Six / Popshock)",
  tiers:{eerste:{taak:10,boete:1500}, tweede:{taak:20,boete:2500}, meerdere:{taak:40,boete:4000}},
  mods:[{key:"schade",label:"Afgestoken in druk gebied / schade veroorzaakt",pct:33}]},

{id:"VII-1", titel:TITELS[5], naam:"VII-1 Niet voldoen aan bevel/vordering (184 SR)",
  tiers:{eerste:{taak:20,boete:320}, tweede:{taak:30,boete:320}, meerdere:{taak:40,boete:320}}, mods:[]},
{id:"VII-2", titel:TITELS[5], naam:"VII-2 Belediging (266 SR)",
  single:{boete:1200}, mods:[{key:"ambtbel",label:"Richting ambtenaar in functie (boete x2)",pct:100}]},
{id:"VII-3", titel:TITELS[5], naam:"VII-3 Opgeven valse gegevens (435 SR)",
  single:{boete:250}, mods:[STAPEL]},
{id:"VII-4", titel:TITELS[5], naam:"VII-4 Niet tonen identiteitsbewijs (447e SR)",
  single:{boete:320}, mods:[]},
{id:"VII-5", titel:TITELS[5], naam:"VII-5 Openbare dronkenschap (453 SR)",
  tiers:{eerste:{boete:120}, tweede:{boete:120}, meerdere:{taak:5,boete:120}}, mods:[]},
{id:"VII-6", titel:TITELS[5], naam:"VII-6 Gezichtsbedekkende kledij",
  single:{boete:200}, mods:[]},
{id:"VII-7", titel:TITELS[5], naam:"VII-7 Identiteitsfraude",
  tiers:{eerste:{boete:2000}, tweede:{boete:4000}, meerdere:{taak:20,boete:6000}}, mods:[]},
{id:"VII-8", titel:TITELS[5], naam:"VII-8 Deelname aan criminele organisatie",
  tiers:{eerste:{boete:3000}, tweede:{taak:20,boete:6000}, meerdere:{cel:20,boete:9000}},
  mods:[{key:"leider",label:"Oprichter, leider of bestuurder (celstraf +33%)",pct:33}]},
{id:"VII-9", titel:TITELS[5], naam:"VII-9 Lokaalvredebreuk (139 SR)",
  tiers:{eerste:{taak:35,boete:1500}, tweede:{taak:40,boete:2000}, meerdere:{taak:50,boete:3000}}, mods:[]},
{id:"VII-10", titel:TITELS[5], naam:"VII-10 Huisvredebreuk (138 SR)",
  tiers:{eerste:{taak:20,boete:2000}, tweede:{taak:40,boete:4000}, meerdere:{taak:50,boete:6000}}, mods:[]},
{id:"VII-11", titel:TITELS[5], naam:"VII-11 Betreden van verboden domein",
  tiers:{eerste:{cel:18,boete:7500}, tweede:{cel:36,boete:10000}, meerdere:{cel:54,boete:15000}}, mods:[]},
{id:"VII-13", titel:TITELS[5], naam:"VII-13 Misdrijven tegen de openbare orde (131 SR)",
  tiers:{eerste:{taak:20,boete:2500}, tweede:{cel:20,boete:5000}, meerdere:{cel:40,boete:10000}}, mods:[]},
{id:"VII-14", titel:TITELS[5], naam:"VII-14 Misdrijven tegen het openbaar gezag (189 SR)",
  tiers:{eerste:{cel:12,boete:10000}, tweede:{cel:36,boete:15000}, meerdere:{cel:48,boete:20000}}, mods:[]},
{id:"VII-15", titel:TITELS[5], naam:"VII-15 Jacht zonder vergunning",
  tiers:{eerste:{cel:12,boete:4500}, tweede:{cel:20,boete:6800}, meerdere:{cel:30,boete:9000}}, mods:[]},
{id:"VII-16", titel:TITELS[5], naam:"VII-16 Niet tonen jachtlicentie",
  tiers:{eerste:{boete:2500}, tweede:{boete:2750}, meerdere:{boete:3000}}, mods:[]},
{id:"VII-17", titel:TITELS[5], naam:"VII-17 Dierenbescherming en trofeeroof",
  tiers:{eerste:{cel:9,boete:3200}, tweede:{cel:15,boete:4800}, meerdere:{cel:22,boete:6200}},
  mods:[{key:"beschermd",label:"Jacht op beschermde diersoort",pct:50}]},
{id:"VII-18", titel:TITELS[5], naam:"VII-18 Veiligheidsbepalingen bij de jacht",
  tiers:{eerste:{cel:6,boete:2500}, tweede:{cel:12,boete:3800}, meerdere:{cel:18,boete:4500}}, mods:[]},
{id:"VII-20", titel:TITELS[5], naam:"VII-20 Valse melding",
  tiers:{eerste:{taak:10,boete:2000}, tweede:{taak:15,boete:2500}, meerdere:{taak:20,boete:3000}}, mods:[]},
];

// Global "medepleger" modifier (A8 lid 2) applies to almost anything -> add to every article that has tiers/single and isn't already listing a variant
ARTIKELEN.forEach(a=>{
  if(a.mods && !a.mods.some(m=>m.key==="medepl")){
    a.mods.push(MEDEPL);
  }
});

// Special bracket-based articles handled outside the generic system
const SPECIAL = {
  "III-1": {titel:TITELS[2], naam:"III-1 Verkeersovertreding algemeen (5 WVW)"},
  "III-11": {titel:TITELS[2], naam:"III-11 Snelheidsovertreding"},
  "III-12": {titel:TITELS[2], naam:"III-12 Voertuigeisen / WOK-status"},
  "III-13": {titel:TITELS[2], naam:"III-13 Overige verkeersboetes (vaste bedragen)"},
  "IV-1": {titel:TITELS[3], naam:"IV-1 Harddrugs (2 OW)"},
  "IV-2": {titel:TITELS[3], naam:"IV-2 Softdrugs (3 OW)"},
  "X-1": {titel:TITELS[2], naam:"X-1 Negeren controle grensinspectiepost"}
};

const SNELHEID_BRACKETS = [
  {max:50, boete:1000, taak:0, label:"0-50 km/h te hard"},
  {max:100, boete:2000, taak:0, label:"51-100 km/h te hard"},
  {max:150, boete:3000, taak:0, label:"101-150 km/h te hard"},
  {max:200, boete:4000, taak:0, label:"151-200 km/h te hard"},
  {max:Infinity, boete:5000, taak:20, label:"vanaf 200 km/h te hard"},
];

const VERKEERSBOETES = [
  {label:"Blokkeren van de weg", boete:720},
  {label:"Maken van een U-turn waar niet toegestaan", boete:420},
  {label:"Rijden in voertuig niet toegestaan op openbare weg", boete:2500},
  {label:"Onnodig claxoneren", boete:150},
  {label:"Over een doorgetrokken streep rijden", boete:480},
  {label:"Spookrijden", boete:1860},
  {label:"Illegaal off-road rijden", boete:420},
  {label:"Stilstaan waar niet toegestaan", boete:420},
  {label:"Onnodig links rijden", boete:420},
  {label:"Doorrijden bij een stopbord", boete:420},
  {label:"Rijden zonder kentekenplaten", boete:750},
  {label:"Ramen te donker getint", boete:2500},
  {label:"Verlichting (neon) onder voertuig", boete:1500},
  {label:"Koplampen andere kleur dan wit/geel", boete:2500},
];

function drugBracket(soort, type, aantal, tier){
  // returns {cel, taak, boete} or null
  const hard = soort === "hard";
  if(type==="ingredient"){
    const tables = hard ? [
      {max:25, e:{taak:20,boete:2000}, t:{taak:40,boete:3000}, m:{cel:12,boete:4000}},
      {max:200, e:{cel:18,boete:5000}, t:{cel:27,boete:6000}, m:{cel:54,boete:7000}},
      {max:250, e:{cel:63,boete:8000}, t:{cel:72,boete:9000}, m:{cel:81,boete:10000}},
      {max:500, e:{cel:95,boete:10000}, t:{cel:95,boete:10000}, m:{cel:95,boete:10000}},
      {max:750, e:{cel:100,boete:11000}, t:{cel:100,boete:11000}, m:{cel:100,boete:11000}},
      {max:1000, e:{cel:110,boete:12000}, t:{cel:110,boete:12000}, m:{cel:110,boete:12000}},
      {max:1500, e:{cel:125,boete:15000}, t:{cel:125,boete:15000}, m:{cel:125,boete:15000}},
      {max:2500, e:{cel:140,boete:20000}, t:{cel:140,boete:20000}, m:{cel:140,boete:20000}},
      {max:5000, e:{cel:165,boete:27500}, t:{cel:165,boete:27500}, m:{cel:165,boete:27500}},
      {max:Infinity, e:{cel:200,boete:35000}, t:{cel:200,boete:35000}, m:{cel:200,boete:35000}},
    ] : [
      {max:25, e:{taak:10,boete:500}, t:{taak:20,boete:1000}, m:{taak:30,boete:1500}},
      {max:200, e:{taak:35,boete:2000}, t:{taak:50,boete:3000}, m:{cel:12,boete:4000}},
      {max:250, e:{cel:27,boete:5000}, t:{cel:40,boete:6000}, m:{cel:54,boete:7000}},
      {max:500, e:{cel:45,boete:6750}, t:{cel:45,boete:6750}, m:{cel:45,boete:6750}},
      {max:750, e:{cel:60,boete:7500}, t:{cel:60,boete:7500}, m:{cel:60,boete:7500}},
      {max:1000, e:{cel:75,boete:9000}, t:{cel:75,boete:9000}, m:{cel:75,boete:9000}},
      {max:1500, e:{cel:95,boete:11500}, t:{cel:95,boete:11500}, m:{cel:95,boete:11500}},
      {max:2500, e:{cel:120,boete:13500}, t:{cel:120,boete:13500}, m:{cel:120,boete:13500}},
      {max:5000, e:{cel:150,boete:17500}, t:{cel:150,boete:17500}, m:{cel:150,boete:17500}},
      {max:Infinity, e:{cel:175,boete:20000}, t:{cel:175,boete:20000}, m:{cel:175,boete:20000}},
    ];
    const b = tables.find(row=>aantal<=row.max);
    return b ? b[tier] : null;
  } else {
    const tables = hard ? [
      {max:5, e:{cel:12,boete:5000}, t:{cel:18,boete:6000}, m:{cel:22,boete:7000}},
      {max:40, e:{cel:27,boete:8000}, t:{cel:36,boete:9000}, m:{cel:54,boete:10000}},
      {max:50, e:{cel:62,boete:11000}, t:{cel:80,boete:12000}, m:{cel:98,boete:13000}},
      {max:100, e:{cel:125,boete:13000}, t:{cel:125,boete:13000}, m:{cel:125,boete:13000}},
      {max:150, e:{cel:135,boete:14000}, t:{cel:135,boete:14000}, m:{cel:135,boete:14000}},
      {max:250, e:{cel:145,boete:15500}, t:{cel:145,boete:15500}, m:{cel:145,boete:15500}},
      {max:500, e:{cel:160,boete:17000}, t:{cel:160,boete:17000}, m:{cel:160,boete:17000}},
      {max:1000, e:{cel:190,boete:20000}, t:{cel:190,boete:20000}, m:{cel:190,boete:20000}},
      {max:2500, e:{cel:220,boete:30000}, t:{cel:220,boete:30000}, m:{cel:220,boete:30000}},
      {max:Infinity, e:{cel:275,boete:45000}, t:{cel:275,boete:45000}, m:{cel:275,boete:45000}},
    ] : [
      {max:5, e:{taak:10,boete:2000}, t:{taak:20,boete:3000}, m:{taak:30,boete:4000}},
      {max:40, e:{taak:40,boete:5000}, t:{cel:18,boete:6000}, m:{cel:45,boete:7000}},
      {max:50, e:{cel:50,boete:8000}, t:{cel:54,boete:9000}, m:{cel:63,boete:10000}},
      {max:100, e:{cel:60,boete:9500}, t:{cel:60,boete:9500}, m:{cel:60,boete:9500}},
      {max:150, e:{cel:70,boete:10500}, t:{cel:70,boete:10500}, m:{cel:70,boete:10500}},
      {max:250, e:{cel:80,boete:11500}, t:{cel:80,boete:11500}, m:{cel:80,boete:11500}},
      {max:500, e:{cel:100,boete:15000}, t:{cel:100,boete:15000}, m:{cel:100,boete:15000}},
      {max:1000, e:{cel:125,boete:19500}, t:{cel:125,boete:19500}, m:{cel:125,boete:19500}},
      {max:2500, e:{cel:160,boete:25000}, t:{cel:160,boete:25000}, m:{cel:160,boete:25000}},
      {max:Infinity, e:{cel:190,boete:30000}, t:{cel:190,boete:30000}, m:{cel:190,boete:30000}},
    ];
    const b = tables.find(row=>aantal<=row.max);
    return b ? b[tier] : null;
  }
}

/* ---------------------------------------------------------------
   STATE
----------------------------------------------------------------*/
let charges = [];
let chargeSeq = 1;

const titelSelect = document.getElementById('titelSelect');
const artikelSelect = document.getElementById('artikelSelect');
const dynamicArea = document.getElementById('dynamicArea');
const modArea = document.getElementById('modArea');
const previewBox = document.getElementById('previewBox');
const addBtn = document.getElementById('addBtn');
const chargeList = document.getElementById('chargeList');
const emptyMsg = document.getElementById('emptyMsg');

function allTitelOptions(){
  const set = [];
  ARTIKELEN.forEach(a=>{ if(!set.includes(a.titel)) set.push(a.titel); });
  Object.values(SPECIAL).forEach(s=>{ if(!set.includes(s.titel)) set.push(s.titel); });
  return set;
}

function initTitels(){
  const titels = allTitelOptions();
  titelSelect.innerHTML = titels.map(t=>`<option value="${t}">${t}</option>`).join('');
  titelSelect.addEventListener('change', initArtikelen);
  initArtikelen();
}

function artikelenForTitel(titel){
  const normal = ARTIKELEN.filter(a=>a.titel===titel).map(a=>({id:a.id, naam:a.naam, special:false}));
  const special = Object.entries(SPECIAL).filter(([k,v])=>v.titel===titel).map(([k,v])=>({id:k, naam:v.naam, special:true}));
  return normal.concat(special).sort((a,b)=>a.naam.localeCompare(b.naam,'nl'));
}

function initArtikelen(){
  const titel = titelSelect.value;
  const list = artikelenForTitel(titel);
  artikelSelect.innerHTML = list.map(a=>`<option value="${a.id}" data-special="${a.special}">${a.naam}</option>`).join('');
  artikelSelect.addEventListener('change', renderArtikelForm);
  renderArtikelForm();
}

let currentTier = 'eerste';

function renderArtikelForm(){
  const id = artikelSelect.value;
  const isSpecial = artikelSelect.options[artikelSelect.selectedIndex]?.dataset.special === "true";
  dynamicArea.innerHTML = '';
  modArea.innerHTML = '';
  currentTier = 'eerste';

  if(isSpecial){
    renderSpecialForm(id);
    return;
  }

  const art = ARTIKELEN.find(a=>a.id===id);
  if(!art) return;

  if(art.tiers){
    dynamicArea.innerHTML = `
      <div class="field">
        <label>Veroordeling</label>
        <div class="tierbtns" id="tierBtns">
          <div class="tierbtn active" data-tier="eerste">Eerste</div>
          <div class="tierbtn" data-tier="tweede">Tweede</div>
          <div class="tierbtn" data-tier="meerdere">Meerdere</div>
        </div>
      </div>`;
    document.querySelectorAll('#tierBtns .tierbtn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        document.querySelectorAll('#tierBtns .tierbtn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        currentTier = btn.dataset.tier;
        updatePreview();
      });
    });
  }

  renderMods(art.mods || []);
  updatePreview();
}

function renderMods(mods){
  if(!mods.length){ modArea.innerHTML = ''; return; }
  modArea.innerHTML = `<div class="field"><label>Toepasselijke omstandigheden (art. A4)</label></div>` +
    mods.map(m=>{
      if(m.perUnit){
        return `<div class="modrow">
          <input type="checkbox" class="modchk" data-key="${m.key}">
          <div class="modlabel">${m.label} <span class="pct">+${m.perUnit}% / stuk</span><br>
            <input type="number" min="0" value="0" class="modnum" data-numkey="${m.key}" placeholder="0"> ${m.unitLabel}
          </div>
        </div>`;
      }
      return `<div class="modrow">
        <input type="checkbox" class="modchk" data-key="${m.key}">
        <div class="modlabel">${m.label} <span class="pct">${m.pct>0?'+':''}${m.pct}%</span></div>
      </div>`;
    }).join('');
  modArea.querySelectorAll('.modchk, .modnum').forEach(el=>{
    el.addEventListener('input', updatePreview);
    el.addEventListener('change', updatePreview);
  });
}

function currentModPct(mods){
  let pct = 0;
  const detail = [];
  mods.forEach(m=>{
    const chk = modArea.querySelector(`.modchk[data-key="${m.key}"]`);
    if(!chk || !chk.checked) return;
    if(m.perUnit){
      const numEl = modArea.querySelector(`.modnum[data-numkey="${m.key}"]`);
      const n = Math.max(0, parseInt(numEl?.value || "0", 10) || 0);
      if(n>0){ pct += n * m.perUnit; detail.push(`${m.label} x${n} (+${n*m.perUnit}%)`); }
    } else {
      pct += m.pct;
      detail.push(`${m.label} (${m.pct>0?'+':''}${m.pct}%)`);
    }
  });
  return {pct, detail};
}

function applyPct(base, pct){
  const factor = 1 + (pct/100);
  return Math.max(0, base * factor);
}

function updatePreview(){
  const id = artikelSelect.value;
  const isSpecial = artikelSelect.options[artikelSelect.selectedIndex]?.dataset.special === "true";
  if(isSpecial){ updateSpecialPreview(id); document.getElementById('lookupTable').innerHTML=''; return; }

  const art = ARTIKELEN.find(a=>a.id===id);
  if(!art) return;
  renderLookupTable(art, false);
  const base = art.single || (art.tiers ? art.tiers[currentTier] : null);
  if(!base){ previewBox.innerHTML = '<em>Geen strafmaat gevonden.</em>'; return; }

  const {pct, detail} = currentModPct(art.mods || []);
  const cel = base.cel ? Math.round(applyPct(base.cel, pct)) : 0;
  const taak = base.taak ? Math.round(applyPct(base.taak, pct)) : 0;
  const boete = base.boete ? Math.round(applyPct(base.boete, pct)) : 0;

  window.__pendingCharge = {
    label: art.naam,
    tierLabel: art.tiers ? ({eerste:"Eerste veroordeling",tweede:"Tweede veroordeling",meerdere:"Meerdere veroordelingen"}[currentTier]) : null,
    cel, taak, boete, detail
  };

  previewBox.innerHTML = `
    <div class="plabel">TE VERWACHTEN STRAF</div>
    <div class="pgrid">
      <div><div class="pval">${cel} mnd</div><div class="plabel">celstraf</div></div>
      <div><div class="pval">${taak} uur</div><div class="plabel">taakstraf</div></div>
      <div><div class="pval">€${boete.toLocaleString('nl-NL')}</div><div class="plabel">boete</div></div>
    </div>
    ${detail.length? `<div style="margin-top:8px;font-size:12px;color:var(--ink-2)">${detail.join(' · ')}</div>` : ''}
  `;
}

/* ---------- special articles ---------- */

function renderSpecialForm(id){
  if(id==="III-1"){
    dynamicArea.innerHTML = `
      <div class="field"><label for="algAantal">Aantal gevallen</label>
      <input type="number" id="algAantal" min="1" value="1"></div>`;
    document.getElementById('algAantal').addEventListener('input', updatePreview);
  }
  if(id==="III-11"){
    dynamicArea.innerHTML = `
      <div class="field"><label for="snelWaarde">Aantal km/h te hard (na 5 km/u meetcorrectie)</label>
      <input type="number" id="snelWaarde" min="0" value="10"></div>
      <div class="special-note">Bij ≥ 200 km/h kan tevens het rijbewijs worden ingevorderd (art. III-11 lid 5) — niet in dit bedrag verrekend.</div>`;
    document.getElementById('snelWaarde').addEventListener('input', updatePreview);
  }
  if(id==="III-12"){
    dynamicArea.innerHTML = `
      <div class="field">
        <label>Situatie</label>
        <div class="tierbtns" id="tierBtns">
          <div class="tierbtn active" data-tier="eerste">1e / 2e staandehouding</div>
          <div class="tierbtn" data-tier="meerdere">3e of vaker</div>
        </div>
      </div>
      <div class="special-note">Sanctie bij WOK-status: inbeslagname/afslepen voertuig (altijd). Bij 3e keer of vaker: + 30 uur taakstraf.</div>
      <div class="field" style="margin-top:12px"><label>Overige vaste boetes voertuigeisen (meerdere selecteerbaar)</label></div>
      <div class="modrow"><input type="checkbox" class="wokextra" value="750"><div class="modlabel">Rijden zonder kentekenplaten <span class="pct">€750</span></div></div>
      <div class="modrow"><input type="checkbox" class="wokextra" value="2500"><div class="modlabel">Ramen te donker getint <span class="pct">€2500</span></div></div>
      <div class="modrow"><input type="checkbox" class="wokextra" value="1500"><div class="modlabel">Verlichting (neon) onder voertuig <span class="pct">€1500</span></div></div>
      <div class="modrow"><input type="checkbox" class="wokextra" value="2500b"><div class="modlabel">Koplampen andere kleur dan wit/geel <span class="pct">€2500</span></div></div>
    `;
    document.querySelectorAll('#tierBtns .tierbtn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        document.querySelectorAll('#tierBtns .tierbtn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        currentTier = btn.dataset.tier;
        updatePreview();
      });
    });
    document.querySelectorAll('.wokextra').forEach(el=>el.addEventListener('change', updatePreview));
  }
  if(id==="III-13"){
    dynamicArea.innerHTML = VERKEERSBOETES.map((v,i)=>`
      <div class="modrow"><input type="checkbox" class="vboete" data-i="${i}"><div class="modlabel">${v.label} <span class="pct">€${v.boete}</span></div></div>
    `).join('');
    document.querySelectorAll('.vboete').forEach(el=>el.addEventListener('change', updatePreview));
  }
  if(id==="IV-1" || id==="IV-2"){
    dynamicArea.innerHTML = `
      <div class="field"><label>Type</label>
        <select id="drugType">
          <option value="ingredient">Ingrediënten</option>
          <option value="eindproduct">Eindproducten</option>
        </select>
      </div>
      <div class="field"><label for="drugAantal">Aantal</label>
        <input type="number" id="drugAantal" min="1" value="10"></div>
      <div class="field">
        <label>Veroordeling</label>
        <div class="tierbtns" id="tierBtns">
          <div class="tierbtn active" data-tier="eerste">Eerste</div>
          <div class="tierbtn" data-tier="tweede">Tweede</div>
          <div class="tierbtn" data-tier="meerdere">Meerdere</div>
        </div>
      </div>
      <div class="special-note">Bij een mix van ingrediënten en eindproducten: reken eindproducten × 5 op bij het totaal (art. IV-1/IV-2 lid 7) en tel dat op bij de ingrediënten.</div>
    `;
    document.getElementById('drugType').addEventListener('change', updatePreview);
    document.getElementById('drugAantal').addEventListener('input', updatePreview);
    document.querySelectorAll('#tierBtns .tierbtn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        document.querySelectorAll('#tierBtns .tierbtn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        currentTier = btn.dataset.tier;
        updatePreview();
      });
    });
  }
  if(id==="X-1"){
    dynamicArea.innerHTML = `
      <div class="field">
        <label>Situatie</label>
        <div class="tierbtns" id="tierBtns">
          <div class="tierbtn active" data-tier="eerste">Eerste maal</div>
          <div class="tierbtn" data-tier="meerdere">Opvolgende maal</div>
        </div>
      </div>`;
    document.querySelectorAll('#tierBtns .tierbtn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        document.querySelectorAll('#tierBtns .tierbtn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        currentTier = btn.dataset.tier;
        updatePreview();
      });
    });
  }
  updatePreview();
}

function updateSpecialPreview(id){
  let cel=0, taak=0, boete=0, label='', detail=[];
  if(id==="III-1"){
    const n = Math.max(1, parseInt(document.getElementById('algAantal')?.value||"1",10)||1);
    boete = 500*n;
    label = `III-1 Verkeersovertreding algemeen ×${n}`;
  }
  if(id==="III-11"){
    const kmh = Math.max(0, parseInt(document.getElementById('snelWaarde')?.value||"0",10)||0);
    const b = SNELHEID_BRACKETS.find(row=>kmh<=row.max);
    boete = b.boete; taak = b.taak;
    label = `III-11 Snelheidsovertreding (${b.label})`;
  }
  if(id==="III-12"){
    const extras = Array.from(document.querySelectorAll('.wokextra:checked')).map(el=>el.value);
    boete = extras.reduce((s,v)=>s+(v==="2500b"?2500:parseInt(v,10)),0);
    if(currentTier==="meerdere") taak = 30;
    label = `III-12 Voertuigeisen${currentTier==="meerdere"?" (3e keer of vaker — + inbeslagname)":" (inbeslagname/afslepen)"}`;
    detail = extras.map(v=>{
      const map = {"750":"Geen kentekenplaten","2500":"Ramen te donker","1500":"Neon onder voertuig","2500b":"Koplampen verkeerde kleur"};
      return map[v];
    });
  }
  if(id==="III-13"){
    const idxs = Array.from(document.querySelectorAll('.vboete:checked')).map(el=>parseInt(el.dataset.i,10));
    boete = idxs.reduce((s,i)=>s+VERKEERSBOETES[i].boete,0);
    label = `III-13 Overige verkeersboetes (${idxs.length} geselecteerd)`;
    detail = idxs.map(i=>VERKEERSBOETES[i].label);
  }
  if(id==="IV-1" || id==="IV-2"){
    const soort = id==="IV-1" ? "hard" : "soft";
    const type = document.getElementById('drugType')?.value || "ingredient";
    const aantal = Math.max(1, parseInt(document.getElementById('drugAantal')?.value||"1",10)||1);
    const res = drugBracket(soort, type==="ingredient"?"ingredient":"eindproduct", aantal, currentTier);
    if(res){ cel = res.cel||0; taak = res.taak||0; boete = res.boete||0; }
    label = `${id} ${soort==="hard"?"Harddrugs":"Softdrugs"} — ${aantal} ${type==="ingredient"?"ingrediënten":"eindproducten"} (${({eerste:"1e",tweede:"2e",meerdere:"meerdere"})[currentTier]})`;
  }
  if(id==="X-1"){
    boete = currentTier==="eerste" ? 10000 : 15000;
    label = `X-1 Negeren grensinspectiepost (${currentTier==="eerste"?"1e maal":"opvolgend"})`;
  }

  window.__pendingCharge = {label, tierLabel:null, cel, taak, boete, detail};
  previewBox.innerHTML = `
    <div class="plabel">TE VERWACHTEN STRAF</div>
    <div class="pgrid">
      <div><div class="pval">${cel} mnd</div><div class="plabel">celstraf</div></div>
      <div><div class="pval">${taak} uur</div><div class="plabel">taakstraf</div></div>
      <div><div class="pval">€${boete.toLocaleString('nl-NL')}</div><div class="plabel">boete</div></div>
    </div>
    ${detail.length? `<div style="margin-top:8px;font-size:12px;color:var(--ink-2)">${detail.join(' · ')}</div>` : ''}
  `;
}

/* ---------- charge list + totals ---------- */

addBtn.addEventListener('click', ()=>{
  if(!window.__pendingCharge) return;
  const c = window.__pendingCharge;
  charges.push({...c, seq: chargeSeq++});
  renderCharges();
});

function renderCharges(){
  emptyMsg.style.display = charges.length ? 'none' : 'block';
  chargeList.innerHTML = charges.map(c=>`
    <li class="charge" data-seq="${c.seq}">
      <button class="rm" data-seq="${c.seq}">verwijder</button>
      <div class="ctitle">${c.label}</div>
      <div class="cmeta">${c.tierLabel || ''}${c.detail && c.detail.length ? (c.tierLabel?' · ':'') + c.detail.join(' · ') : ''}</div>
      <div class="cnums">
        <span>${c.cel} mnd cel</span>
        <span>${c.taak} uur taakstraf</span>
        <span>€${c.boete.toLocaleString('nl-NL')} boete</span>
      </div>
    </li>
  `).join('');
  chargeList.querySelectorAll('.rm').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const seq = parseInt(btn.dataset.seq,10);
      charges = charges.filter(c=>c.seq!==seq);
      renderCharges();
    });
  });
  updateTotals();
}

function updateTotals(){
  let cel=0, taak=0, boete=0;
  charges.forEach(c=>{ cel+=c.cel; taak+=c.taak; boete+=c.boete; });

  let taakNote = '';
  if(cel > 0 && taak > 0){
    const omgezet = taak / 2;
    cel = Math.round((cel + omgezet) * 10) / 10;
    taakNote = `${taak} uur taakstraf omgezet (÷2) en opgeteld bij celstraf, omdat er zowel celstraf als taakstraf is opgelegd`;
    taak = 0;
  }

  let celNote = '';
  if(cel > 120){
    const extra = cel - 120;
    const extraBoete = extra * 250;
    boete += extraBoete;
    celNote = `gemaximeerd op 120 mnd (art. A4.6) — ${extra} mnd omgezet naar +€${extraBoete.toLocaleString('nl-NL')} boete`;
    cel = 120;
  }

  document.getElementById('totCel').textContent = `${cel} mnd`;
  document.getElementById('totCelNote').textContent = celNote;
  document.getElementById('totTaak').textContent = `${taak} uur`;
  document.getElementById('totTaakNote').textContent = taakNote;
  document.getElementById('totBoete').textContent = `€${Math.round(boete).toLocaleString('nl-NL')}`;
  document.getElementById('totBoeteNote').textContent = celNote ? 'incl. omzetting bovenmatige celstraf' : '';
}

document.getElementById('clearBtn').addEventListener('click', ()=>{
  charges = [];
  renderCharges();
});

/* ---------- zoeken / opzoeken ---------- */

const zoekInput = document.getElementById('zoekInput');
const zoekResults = document.getElementById('zoekResults');

function buildSearchIndex(){
  const idx = [];
  ARTIKELEN.forEach(a=>{ idx.push({id:a.id, titel:a.titel, naam:a.naam}); });
  Object.entries(SPECIAL).forEach(([k,v])=>{ idx.push({id:k, titel:v.titel, naam:v.naam}); });
  return idx;
}
const SEARCH_INDEX = buildSearchIndex();

function doSearch(q){
  q = q.trim().toLowerCase();
  if(!q){ zoekResults.classList.remove('show'); zoekResults.innerHTML=''; return; }
  const hits = SEARCH_INDEX.filter(item=>item.naam.toLowerCase().includes(q));
  if(!hits.length){
    zoekResults.innerHTML = `<div class="zres-empty">Geen delict gevonden voor "${q}".</div>`;
  } else {
    zoekResults.innerHTML = hits.slice(0,30).map(h=>`
      <div class="zres-item" data-id="${h.id}" data-titel="${encodeURIComponent(h.titel)}">
        <span class="ztitel">${h.titel.replace('Titel ','')}</span>${h.naam}
      </div>`).join('');
  }
  zoekResults.classList.add('show');
}

zoekInput.addEventListener('input', ()=>doSearch(zoekInput.value));
zoekInput.addEventListener('focus', ()=>{ if(zoekInput.value.trim()) doSearch(zoekInput.value); });
document.addEventListener('click', (e)=>{
  if(!e.target.closest('#zoekResults') && e.target !== zoekInput){
    zoekResults.classList.remove('show');
  }
});
zoekResults.addEventListener('click', (e)=>{
  const item = e.target.closest('.zres-item');
  if(!item || !item.dataset.id) return;
  const titel = decodeURIComponent(item.dataset.titel);
  titelSelect.value = titel;
  initArtikelen();
  artikelSelect.value = item.dataset.id;
  renderArtikelForm();
  zoekResults.classList.remove('show');
  zoekInput.value = item.textContent.trim();
});

/* ---------- volledige straftabel (opzoekweergave) ---------- */

function renderLookupTable(art, isSpecial, specialId){
  const box = document.getElementById('lookupTable');
  if(isSpecial){ box.innerHTML=''; return; }
  if(!art || !art.tiers){ box.innerHTML=''; return; }
  const rows = [
    {key:'eerste', label:'Eerste veroordeling'},
    {key:'tweede', label:'Tweede veroordeling'},
    {key:'meerdere', label:'Meerdere veroordelingen'}
  ];
  box.innerHTML = `
    <table>
      <thead><tr><th>Veroordeling</th><th>Celstraf</th><th>Taakstraf</th><th>Boete</th></tr></thead>
      <tbody>
        ${rows.map(r=>{
          const t = art.tiers[r.key];
          if(!t) return '';
          const active = r.key===currentTier ? ' class="active-tier"' : '';
          return `<tr>
            <td${active}>${r.label}</td>
            <td${active}>${t.cel?t.cel+' mnd':'—'}</td>
            <td${active}>${t.taak?t.taak+' uur':'—'}</td>
            <td${active}>${t.boete?'€'+t.boete.toLocaleString('nl-NL'):'—'}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  `;
}

initTitels();
renderCharges();