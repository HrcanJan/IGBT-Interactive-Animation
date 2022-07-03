// Initialization
const en = document.getElementById("us");      // Button for English language
const sk = document.getElementById("sk");      // Button for Slovak language
let bg = document.querySelector("#bg");         // Video close button
let video = document.querySelector("#video");   // Video intro

let display = false;                                    // Indicator if the nav menu is active

let indexp1;
let indexp2;
let indexp3;
let indexp4;
let indexp5;
let indexp6;
let indexb1;
let indexb2;
let indexb3;
let indexb4;
let indexb5;
let indexb6;
let intro;
let appsp1;
let appsp2;
let appsp3;
let appsp4;
let appsp5;
let appst1;
let appst2;
let appst3;
let appst4;
let appst5;
let appsh;
let appsdiv;
let indexh1;
let indexh2;
let indexh3;
let indexh4;
let indexh5;
let faqq;
let faqa;
let faqql1;
let faqql2;
let faqql3;
let faqql4;
let faqal1;
let faqal2;
let faqal3;
let faqal3a;
let faqal3b;
let faqal4;
let faqQuestion;
let faqButton
let hish;
let hiwp1;
let hiwp2;
let hiwp3;
let hiwp4;
let hiwl1;
let hiwl2;
let hiwh;
let hiws;
let dopingsk;
let dopingen;
let biassk;
let biasen;
let pcp;
let pcc;
let pcpl1;
let pcpl2;
let pcpl3;
let pcpl4;
let pcpl5;
let pcpl6;
let pcpl7;
let pcpl8;
let pcpl9;
let pccla;
let pccl1;
let pccl2;
let pccl3;
let pccl4;
let pccl5;
let pccl6;
let pccl7;
let pccl8;

// All elements in index.html
if(document.getElementById("indexp1")){

  // Paragraphs
  indexp1 = document.getElementById("indexp1");
  indexp2 = document.getElementById("indexp2");
  indexp3 = document.getElementById("indexp3");
  indexp4 = document.getElementById("indexp4");
  indexp5 = document.getElementById("indexp5");
  indexp6 = document.getElementById("indexp6");

  // Buttons
  indexb1 = document.getElementById("indexb1");
  indexb2 = document.getElementById("indexb2");
  indexb3 = document.getElementById("indexb3");
  indexb4 = document.getElementById("indexb4");
  indexb5 = document.getElementById("indexb5");
  indexb6 = document.getElementById("indexb6");
  intro = document.getElementById("indexbuttonintro");

  // Heads
  indexh1 = document.getElementById("indexh1");
  indexh2 = document.getElementById("indexh2");
  indexh3 = document.getElementById("indexh3");
  indexh4 = document.getElementById("indexh4");
  indexh5 = document.getElementById("indexh5");
}

// All elements in apps.html
if(document.getElementById("appsh")){

  // Paragraphs
  appsp1 = document.getElementById("appsp1");
  appsp2 = document.getElementById("appsp2");
  appsp3 = document.getElementById("appsp3");
  appsp4 = document.getElementById("appsp4");
  appsp5 = document.getElementById("appsp5");

  // Texts
  appst1 = document.getElementById("appst1");
  appst2 = document.getElementById("appst2");
  appst3 = document.getElementById("appst3");
  appst4 = document.getElementById("appst4");
  appst5 = document.getElementById("appst5");

  // Other
  appsh = document.getElementById("appsh");
  appsdiv = document.getElementById("appsdiv");
}

// All elements in faq.html
if(document.getElementById("faqq")){

  // Headings
  faqq = document.getElementById("faqq");
  faqa = document.getElementById("faqa");
  faqQuestion = document.getElementById("questionLabel");
  faqButton = document.getElementById("questionButton");

  // Questions
  faqql1 = document.getElementById("faqql1");
  faqql2 = document.getElementById("faqql2");
  faqql3 = document.getElementById("faqql3");
  faqql4 = document.getElementById("faqql4");

  // Answers
  faqal1 = document.getElementById("faqal1");
  faqal2 = document.getElementById("faqal2");
  faqal3 = document.getElementById("faqal3");
  faqal3a = document.getElementById("faqal3a");
  faqal3b = document.getElementById("faqal3b");
  faqal4 = document.getElementById("faqal4");
}

// All elements in history.html
if(document.getElementById("hish")){
   hish = document.getElementById("hish");
}

// All elements in main_part.html
if(document.getElementById("hiwh")){

  // Paragraphs
  hiwp1 = document.getElementById("hiwp1");
  hiwp2 = document.getElementById("hiwp2");
  hiwp3 = document.getElementById("hiwp3");
  hiwp4 = document.getElementById("hiwp4");

  // Lists
  hiwl1 = document.getElementById("hiwl1");
  hiwl2 = document.getElementById("hiwl2");

  // Other
  hiwh = document.getElementById("hiwh");
  hiws = document.getElementById("hiws");
  dopingsk = document.getElementById("dopingsk");
  dopingen = document.getElementById("dopingen");
  biassk = document.getElementById("biassk");
  biasen = document.getElementById("biasen");
}

// All elements in pros_cons.html
if(document.getElementById("pcp")){

  // Headings
  pcp = document.getElementById("pcp");
  pcc = document.getElementById("pcc");

  // Pros list
  pcpl1 = document.getElementById("pcpl1");
  pcpl2 = document.getElementById("pcpl2");
  pcpl3 = document.getElementById("pcpl3");
  pcpl4 = document.getElementById("pcpl4");
  pcpl5 = document.getElementById("pcpl5");
  pcpl6 = document.getElementById("pcpl6");
  pcpl7 = document.getElementById("pcpl7");
  pcpl8 = document.getElementById("pcpl8");
  pcpl9 = document.getElementById("pcpl9");

  // Cons list
  pccla = document.getElementById("pccla");

  // Cons subLists
  pccl1 = document.getElementById("pccl1");
  pccl2 = document.getElementById("pccl2");
  pccl3 = document.getElementById("pccl3");
  pccl4 = document.getElementById("pccl4");
  pccl5 = document.getElementById("pccl5");
  pccl6 = document.getElementById("pccl6");
  pccl7 = document.getElementById("pccl7");
  pccl8 = document.getElementById("pccl8");
}

// On all pages
// Navigation links
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");
const link6 = document.getElementById("link6");

// Other
const address = document.getElementById("address");
const contact = document.getElementById("contact");

// JSON file which contains all Slovak and English text
const language = {
  // English texts
  len:{
    indexp1: "Here you can find an animation with different variables of voltages that you can interact with. This page also contains a graph, a legend and other things you can interact with.",
    indexp2: "Here you can find a slider that can let you get a better understanding of the evolution of IGBT model throughout its history. It also contains a slider that shows its first forms and how it got to what it looks like today.",
    indexp3: "Here you can find a gallery and a list of some uses of IGBT you can put to use. They are the 2nd most sold transistors after all.",
    indexp4: "Here you can find a detailed overview of all pros and cons of using an IGBT, as opposed to using some other popular transistors, such as MOSFET.",
    indexp5: "Here you can find the IGBT theory, along with a detailed explanation on how it works and other animations.",
    indexp6: "Here are all the frequent questions we get, along with answers to all of them, because we are happy to answer them all.",
    indexh1: "How it works - Animation",
    indexh2: "History",
    indexh3: "Application",
    indexh4: "Pros/Cons",
    indexh5: "IGBT Theory",
    indexh6: "FAQ",
    button: "Read more",
    appsp1: "IGBT’s are used in modern Uninterruptible Power Supplies (UPS) combining high efficiency with fast switching whilst keeping the frequency output without narrow tolerances. IGBT provides extremely low voltage distortion and improves the power efficiency especially when supporting IT equipment and Computer/server loads. IGBT are mostly used in Static UPS systems that have battery back up autonomy for Power Continuity.",
    appsp2: "IGBTs are state-of-the-art power electronics for the traction system of electric and diesel-electric rail vehicles. The main benefit of IGBT is that it reduces the requirement for the current, minimising heat and traction noise while also making the acceleration process efficient.",
    appsp3: "HVDC (High voltage direct current) uses direct current to transmit electrical power. Practical conversion of power between AC and DC became possible with the development of IGBTs. The development of higher rated IGBTs has made smaller HVDC systems economical. With some other types of semiconductor device, such as the IGBTs, both turn-on and turn-off can be controlled.",
    appsp4: "Motor drive is a system that includes a motor. It has an adjustable speed motor drive, which is a system that includes a motor that has multiple operating speeds. IGBT's fast switching comes in handy when our drive needs to process information at a fast pace while working with lower voltages.",
    appsp5: "Welding inverters - an important area of application of IGBT transistors: high current, power more than 5 kW and frequencies up to 50 kHz (IRG4PC50UD - a classic of the genre 27A, 600V, up to 40 kHz).",
    appst1: "UPS",
    appst2: "Electric Trains",
    appst3: "High voltage direct current",
    appst4: "Motor drives",
    appst5: "Welding Inverters",
    appsh: "Applications",
    appsdiv: "As of January 2022, the IGBT transistor has been the 2nd most commonly used transistor after the power MOSFET transistors. It accounts for 27% power transistor market, ahead of RF amplifier (11%). It has a wide range of use, such as: industrial technology, everyday electronics, energy sector, aerospace electronic devices and in new means of transportation.",
    faqq: "Questions:",
    faqa: "Answers:<br><br>",
    faqal1: "1. An insulated gate bipolar transistor (IGBT) is essentially a three-electrode power semiconductor device that is commonly used as an electronic switch in a wide variety of applications. The IGBT combines the advantageous features of a MOSFET with the capability of a high current, low saturation bipolar transistor in a single component. The current and voltage load capacity are determined by the bipolar part of the structure and the controllability is formed by the unipolar part of the structure. A non-power voltage signal is used for control to switch the bipolar transistor. It is a type of transistors for very high switching powers (in the order of several tens of kW) and switching frequency up to 20kHz. As the name implies, IGBT uses simple MOSFET control and low resistance bipolar transistors. They are used in devices such as converters (DC / AC, AC / AC).",
    faqal2: "2. Many modern IGBTs have a positive VCE (SAT) dependence on the transition temperature in the range of their nominal current. As such, these IGBTs can typically be parallel if several basic measures are taken: "+
        "<ul> <li> components should be mounted on a common heat sink / copper substrate </li>" +
        "<li> Gate and Emitter Layout Is Symmetric (Gate-Emitor Loop Length is Similar for Each Parallel IGBT) </li>" +
        "<li> A matching and individual resistor of 2 to 4 Ω is placed in series with the gate of each IGBT to minimize the possibility of potential gate voltage oscillations in conjunction with one IGBT with another parallel IGBT. </li>" +
        "<li> In general, parallel devices from the same substrate batch (same batch code) are recommended to ensure a minimum deviation between the key GATE-EMITOR threshold parameters and the <i>V</i><sub>CE(SAT)</sub>.</li>",
    faqal3: "3. If a positive voltage is applied to the IGBT between the collector and emitter, the component is in blocking mode. In this state, if the voltage applied to the gate electrode is higher than the threshold, an N-channel is formed and the electrons move towards the collector, as can be seen from the figure.",
    faqal3a: "https://www.kis.fri.uniza.sk/~ludo/e-Publikacia/elektronika/kap8/elektronika.html <br> <br> On the collector side of the PN junction, the voltage in the permeable direction and the holes from the p layer are generated collectors are injected low-doped middle layer. These injected holes will make it possible to increase the density of the charge carriers, the increased density will reduce the resistance of the middle layer, thus modulating the conductivity in this low-doped layer. It follows from the internal structure that when considering Rsh> 0, it is possible to model the IGBT in the closed state as a series combination of diode and closed FET resistance. (Rsh = Shunt resistance). The voltage drop across the diode part, as in a conventional diode, consists of a threshold voltage Ut0 and a drop in the differential resistance. As the temperature increases, the threshold voltage decreases and the differential resistance increases. The total voltage drop in the closed state of the IGBT is in the range of about 1.5 to 4 V, depending on the type of element and the current flowing. With increasing current, this decrease increases. Due to the fact that the resistance of the switched transistor increases with temperature, ie it has a positive thermal coefficient of resistance, it is possible to implement the IGBT as an integrated circuit with a large number of elements connected in parallel on one chip.",
    faqal3b: "The considerations so far have been related to cases where the voltage drop across the Rsh resistor can be neglected. However, as the collector current increases, the voltage drop across this resistor may increase, thereby increasing the voltage at the NPN parasitic transistor and a portion of the IGBT collector current flowing through the base and emitter of said transistor. If the collector current increases above a certain critical value, positive feedback is applied in the connection of two bipolar transistors and thanks to this this structure acquires thyristor properties, the voltage drop on the IGBT decreases and the element can no longer be switched off by intervention in the control electrode. <br> <br> https://www.vut.cz/www_base/zav_prace_soubor_verejne.php?file_id=148354 <br> <br>",
    faqal4: "4. The safe working zone of the IGBT in voltage and current coordinates is limited mainly by heat losses. The size of this zone also depends on the switching frequency, because the switching losses of the transistor also increase with increasing voltage. The limitation of the switching frequency is given by the need for sufficient time to dissipate heat loss after the switching process.",
    faqql1: "What is an IGBT?",
    faqql2: "Is it possible to connect multiple IGBTs in parallel?",
    faqql3: "How IGBT works?",
    faqql4: "How can you affect the IGBT Safe Work Zone?",
    faqQuestion: "Email us a new question!",
    faqButton: "Submit",
    hiwh: "IGBT Theory",
    hiwl1: "<b>P-type</b> - is when we inject a foreign material that has fewer electrons than our main material. We call this a <b>hole</b>. Other electrons in the system will move around to fill that hole, and the holes left behind by moving electrons.",
    hiwl2: "<b>N-type</b> - is when we inject a foreign material that has more electrons than our main material. Those free electrons can move in the system. ",
    hiwp1: "Transistors are made out of semiconductor material, such as, in this example, silicon (SiO<sub>2</sub>). Each silicon atom is bonded with 4 neighboring silicon atoms. A silicon atom holds 4 electrons, and it shares each electron with a neighboring silicon atom. Pure silicon has low conductivity, so we use a technique called <b>doping</b> to improve the conductivity of the semiconductors.<br><br>Doping is injection of foreign material to improve the productivity. There are two types of doping:",
    hiwp2: "Some parts of our transistor have P-type doping, and some parts have N-type doping. At the boundaries of the P and N type, the free electrons at the N-type will have a tendency to shift over to P side. This will result in the P side being slightly negatively charged and the N side slightly positively charged.<br><br> This resulting <b>electric field</b> will stop any further migration of any electrons (the green color on the current animation).",
    hiwp3: "To allow electrons to flow in transistors, you need to apply enough voltage to <i>push</i> the electrons over to the P region, leaving hole behind for more incoming electrons to fill. This is called a <b>forward biasing</b>. <br><br>However, P to N crossing is known as the <b>reverse biasing</b>, and it will cause a widening  of the depletion layer, and will prevent any current flow. So, how to overcome this?",
    hiwp4: "By applying voltage on the <i>insulated gate</i>, the silicon, which acts as an insulator, it will have negative charge on gate side. On the other side, it will be positively charged. <br><br>The positive charge will attract electrons in the P region, creating a small channel, which will increase, based on the voltage applied on gate. This electron channel lets electrons bypass the reverse biasing and with enough force, the current will flow through the forward junction.",
    hiws: "Interactive animation",
    pcp: "Pros:",
    pcc: "Cons:",
    pcpl1: "Has high current and low voltage saturation of PNP transistors",
    pcpl2: "Has more controlled electric current",
    pcpl3: "Has high impendency",
    pcpl4: "Has fast gate-drive switching",
    pcpl5: "Can work with high loads (hundreds of kilowatts) and still maintain steady current flow",
    pcpl6: "Is the 2nd most sold transistor, after MOSFETs",
    pcpl7: "Is considered to be the most modernized transistor",
    pcpl8: "Is the 2nd most sold transistor, after MOSFETs",
    pcpl9: "Is considered to be the most modernized transistor",
    pccl1: "Higher costs",
    pccl2: "Blocking problem",
    pccl3: "Longer shutdown time compared to PMOSFET",
    pccl4: "Avalanche",
    pccl5: "Electromigration",
    pccl6: "Hot carrier injection",
    pccl7: "Corrosion",
    pccl8: "Voltage breakthrough",
    pccla: "<b>Wearout issues:</b>",
    address: "Page created by: <abbr title=\"xhrcan@stuba.sk\">Jan Hrćan</abbr>.<br>",
    indexbuttonintro: "Intro",
    contact: "Contact"
  },

  // Slovak text
  lsk:{
    indexp1: "Tu nájdete animáciu, s rôznymi premennými napätia, s ktorými sa dá interagovať. Takisto, tu sa nachádza graf, spolu s legendou aj inými elementmi s ktorými môžete interagovať.",
    indexp2: "Tu nájdete slajder, ktorý vám umožní lepšie znázorniť vývoj IGBT. Takisto, ukážeme vám jeho prvé druhy aj ako sa dostál k druhom IGBT, ktoré dnes používame.",
    indexp3: "Tu nájdete galériu a zoznam niektorých použití IGBT v praktickom živote. Predsa sú 2. najvyužívanejšie tranzistory vo svete.",
    indexp4: "Tu nájdete stručný prehľad všetkých výhod a nevýhod pri použití IGBT, v porovnaní s niektorými inými tranzistormi, ako čo sú MOSFET.",
    indexp5: "Tu sa môžete dozvedeť o teórie IGBT, spolu s podrobným popisom princípu činnosti a iné animácie.",
    indexp6: "Tu sa nachádzajú všetky často vkladané otázky, ktoré dostávame, spolu s odpoveďmi na otázky. Radi odpovedáme na všetky.",
    indexh1: "Princíp činnosti",
    indexh2: "História",
    indexh3: "Aplikácie",
    indexh4: "Výhody/Nevýhody",
    indexh5: "Teória IGBT",
    indexh6: "FAQ",
    button: "Čítajte tu",
    appsp1: "IGBT sa používajú v moderných zdrojoch neprerušovaného napájania (UPS), ktoré kombinujú vysokú účinnosť s rýchlym prepínaním pri zachovaní frekvenčného výstupu bez úzkych tolerancií. IGBT poskytuje nízke skreslenie napätia a zlepšuje energetickú účinnosť, najmä pri podpore IT zariadení a záťaže počítača/servera. IGBT sa väčšinou používajú v systémoch statických UPS, ktoré majú záložnú batériu pre kontinuitu napájania.",
    appsp2: "IGBT patria medzi najmodernejšej výkonnovej elektronike pre systém trati v elektrických a diesel-elektrických lokomotívach. Hlavný prospech IGBT je to, že znížujú požiadavky na elektrický prúd, minimalizujú teplotu a trakčný hluk, pokým je schopný efektívne vykonať proces zrýchlenia vlaka.",
    appsp3: "HVDC (Vysoko napäťový priamy prúd) využíva priamy prúd na prenášanie elektrickej sile. Praktická konverzia prúdu z priameho do striedavého sa stála možnou ako sa začli rozvíjať IGBT. Rozvíjanie vyššie hodnotených IGBT umožnilo použitie menších HVDC, aby to bolo ekonomicky výhodné. Pomocou polovodičov, ako sú IGBT, zapájanie aj vypínanie je ľahko ovládateľné.",
    appsp4: "IGBT sa nachádzajú vo výkonových meničoch pohonov motorov. IGBT v týchto zariadeniach slúžia ako výkonné elektronické spínače, ktoré prepínajú prúdy pri frekvenciách meraných v desiatkach a stovkách kHz. Tranzistory tohto typu sa vyrábajú vo forme samostatných komponentov, ako aj vo forme špecializovaných výkonových modulov (zostáv) na riadenie trojfázových obvodov.",
    appsp5: "Zváracie invertory - samostatná dôležitá oblasť použitia tranzistorov IGBT: vysoký prúd, výkon viac ako 5 kW a frekvencie do 50 kHz (IRG4PC50UD - klasika žánru 27A, 600V, až 40 kHz).",
    appst1: "UPS",
    appst2: "Elektrické vlaky",
    appst3: "Vysoko napäťový priamy prúd",
    appst4: "Motorový pohon",
    appst5: "Zváracie Inventory",
    appsh: "Použitie",
    appsdiv: "V roku 2022, IGBT je druhý najvyužívanejší tranzistor vo svete, po Mosfet tranzistoroch. Zodpovedá 27% výkonných tranzistorov na trhu, na vstupe RF (Radio frequency) zosilňovača (11%). Má široký rozsah použití: v priemyselnej technológie, každodennej elektronike, energetickom sektore, vesmírnych zariadeniach ako aj v nových prostriedkoch dopravy.",
    faqq: "Otázky:",
    faqa: "Odpovede:<br><br>",
    faqal1: "1. Bipolárny tranzistor s izolovaným hradlom (IGBT) je v podstate trojelektródová výkonová polovodičová súčiastka, ktorá sa zvyčajne používa ako elektronický spínač v širokej škále aplikácií. IGBT kombinuje výhodné vlastnosti MOSFET so schopnosťou bipolárneho tranzistora s vysokým prúdom a nízkym saturačným napätím v jedinej súčiastke. Prúdovú a napäťovú zaťažiteľnosť nám určuje bipolárna časť štruktúry a riaditeľnosť je tvorená unipolárnou časťou štruktúry. Na spínanie bipolárneho tranzistora sa na riadenie využíva nevýkonový napäťový signál. Jedná sa o druh tranzistorov pre veľmi vysoké spínané výkony (rádovo niekoľko desiatok kW) a frekvenciu spínania do 20kHz. Už z názvu vyplýva, že IGBT využíva jednoduché riadenie MOSFET a nízky odpor bipolárnych tranzistorov. Používajú sa v zariadeniach ako sú napr. meniče (DC/AC, AC/AC).",
    faqal2: "2. Mnoho moderných IGBT, má pozitívnu závislosť VCE(SAT) od teploty prechodu v rozsahu ich nominálneho prúdu. Ako také môžu byť tieto IGBT typicky paralelné, ak sa prijme niekoľko základných opatrení:" +
        "<ul><li>Súčiastky by mali byť namontované na spoločný chladič/medený substrát</li>" +
        "<li>Rozloženie hradla Gate a Emitora je symetrické (dĺžka slučky Gate -Emitor je podobná pre každý paralelný IGBT)</li>" +
        "<li>Zodpovedajúci a individuálny odpor 2 až 4 Ω je umiestnený v sérii s hradlom každého IGBT, aby sa minimalizovala možnosť potenciálnych oscilácií hradlového napätia v spojení jedného IGBT s iným paralelným IGBT.</li>" +
        "<li>Vo všeobecnosti sa odporúča paralelné zariadenia z rovnakej šarže substrátu (rovnaký kód šarže), aby sa zabezpečila minimálna odchýlka medzi kľúčovými parametrami prahového napätia GATE-EMITOR a <i>V</i><sub>CE(SAT)</sub>.</li>",
    faqal3: "3. Ak je na IGBT privedené kladné napätie medzi kolektor a emitor, súčiastka je v blokovacom móde. Ak v takomto stave je na elektródu gate privedené napätie vyššie ako prahové, vytvorí sa N-kanál a elektróny sa pohybujú smerom ku kolektoru, ako je zrejmé z obrázku.",
    faqal3a: "https://www.kis.fri.uniza.sk/~ludo/e-Publikacia/elektronika/kap8/elektronika.html<br><br> Na kolektorovej strane PN prechodu, sa vygeneruje napätie v priepustnom smere a diery z p vrstvy kolektora sú injektované nízko dotovanej strednej vrstvy. Tieto injektované diery umožnia zvýšiť hustotu nosičov náboja, zvýšená hustota zníži odpor strednej vrstvy, čiže dochádza k modulácií vodivosti v tejto nízko dotovanej vrstve. Z vnútornej štruktúry vyplýva že pri uvažovaní Rsh > 0 je možné IGBT modelovať v zopnutom stave ako sériovú kombináciu diódy a odporu zopnutého FET. (Rsh =Shunt resistance). Úbytok napätia na diódovej časti sa rovnako ako v bežnej dióde skladá z prahového napätia Ut0 a úbytku na diferenciálnom odpore. So zvyšujúcou sa teplotou prahové napätie klesá a diferenciálny odpor vzrastá. Celkový úbytok napätia v zopnutom stave sa u IGBT pohybuje v rozmedzí asi 1,5 až 4 V v závislosti od typu prvku a od pretekajúceho prúdu. So zväčšujúcim sa prúdom tento úbytok narastá. Vzhľadom k tomu, že odpor zopnutého tranzistora rastie spolu s teplotou, čiže vykazuje kladný tepelný súčiniteľ odporu, je možné IGBT realizovať ako integrovaný obvod s veľkým počtom paralelne zapojených prvkov na jednom čipe.",
    faqal3b: "Doterajšie úvahy sa vzťahovali k prípadom, kedy je možné úbytok napätia na odpore Rsh zanedbať. Pri zväčšení prúdu kolektora však môže dôjsť k zvýšeniu úbytku napätia na tomto odpore, čím sa zvýši napätie na báze parazitného tranzistora NPN a časť prúdu kolektora IGBT pretečie bázou a emitorom uvedeného tranzistora. Ak dôjde k zväčšeniu prúdu kolektoru nad určitú kritickú hodnotu, uplatní sa kladná spätná väzba v zapojení dvoch bipolárnych tranzistorov a vďaka nej dostane táto štruktúra vlastnosti tyristora, klesne úbytok napätia na IGBT a prvok už nie je možné vypnúť zásahom do riadiacej elektródy. <br><br>https://www.vut.cz/www_base/zav_prace_soubor_verejne.php?file_id=148354 <br><br>",
    faqal4: "4. Bezpečná pracovná zóna IGBT v súradniciach napätie a prúd je obmedzená hlavne tepelnými stratami. Veľkosť tejto zóny je závislá i od spínacej frekvencie, pretože s rastúcim napätím rastú aj spínacie straty tranzistora. Obmedzenie spínacej frekvencie je dané potrebou dostatočnej doby pre odvedenie stratového tepla po uskutočnení spínacieho procesu.",
    faqql1: "Čo je IGBT?",
    faqql2: "Je možné paralelne zapojiť viacero IGBT?",
    faqql3: "Aký je princíp činnosti IGBT?",
    faqql4: "Čím môžete ovplyvniť bezpečnú pracovnú zónu IGBT?",
    faqQuestion: "Pošlite nám na mail novú otázku!",
    faqButton: "Odoslať",
    hiwh: "Teória IGBT",
    hiwl1: "<b>P-typ</b> - je dopácia prímesí cudzieho materiálu (akým je Bór), ktorý má iba tri elektróny vo valenčnej vrstve, do kremíka. Vďaka tomu, že tam chýba jeden elektrón, vznikajú nové miesta bez elektrónov, ktoré nazývame <b>diery</b>.",
    hiwl2: "<b>N-typ</b> - je dopácia prímesí cudzieho materiálu, ktorý má 5 elektrónov vo svojej valenčnej vrstve a správajú sa ako donory. Tie zvyšné elektróny sa môžu voľne pohybovať v našom systéme.",
    hiwp1: "Tranzistor tvoria polovodičové materiály, ako je, v tomto prípade, atóm kremíka, ktorý patrí do 4. skupiny . Atóm kremíka má štyri valenčné elektróny, ktoré vstupujú do kovalentných väzieb so susediacimi atómami. Každý atóm kremíka je spojený so 4 susednými atómami. Čistý kremík je prakticky nevodivý, preto ak chceme zvýšiť jeho vodivosť musíme <b>dopovať</b> kremík prímesami:",
    hiwp2: "Niektoré časti tranzistora tvorí P-typ, a niektoré N-typ. Na prechode z P do N časti (označujeme ako PN priechod), navyše majoritné elektróny v N-type budú mať prírodzený sklon predifundovať do P časti. Dôsledkom toho bude, že P časť na rozhraní bude mierne záporne nabitá a N čast bude mierne kladne nabitá. Dôsledkom  toho, vzniká na rozhraní vnútorné <b>elektrické pole</b>, ktoré zastaví ďalší pohyb elektrónov (hovoríme že vzniká ochudobnená oblasť o majoritné nosiče náboja, resp. oblasť priestorového náboja. Táto oblasť je označené zelenou farbou na PN priechodoch v animácii).",
    hiwp3: "Aby sa elektróny v PN priechode dali do pohybu cez kanál tranzistora, musíme aplikovať vhodne polarizované napätie, ktoré spôsobí presun elektrónov do P časti. Vďaka tomu vznikne veľký rekombinačný prúd, lebo veľa elektrónov zaplní diery v P časti. Toto sa volá <b>priepustne polarizovaný PN priechod</b>. PN priechod voláme <b>záverne polarizovaný priechod</b>, ktorý spôsobí rozšírenie ochudobnenej oblasti, ktorá zastaví tok elektrónov.",
    hiwp4: "Pripojením kladného napätia na izolované hradlo UGS, oxid kremičitý SiO<sub>2</sub>, ktorý predstavuje izolačnú vrstvu, bude záporné nabitý na strane hradla. Z druhej strany, bude nabitý kladne. Kladné náboje pritiahnu elektróny z P časti. Vytvorí sa inverzná vrstvu, ktorú nazývame kanál. Táto vrstva sa zväčšuje, v závislosti od veľkosti napätia pripojeného na hradlo. Tento kanál vytvorí elektrónom cestu a elektróny sa budú môcť pohybovať cez priepustne polarizovaný priechod.",
    hiws: "Interaktívna animácia",
    pcp: "Výhody:",
    pcc: "Nevýhody:",
    pcpl1: "Tranzistor riadený napätím (napäťovými impulzmi)",
    pcpl2: "Nízke straty v zopnutom stave",
    pcpl3: "Veľký rozsah pracovných napätí a prúdov (až 1000A, až 1200V)",
    pcpl4: "Môže pracovať s veľkým výkonovým zaťažením (stovky kW)",
    pcpl5: "Nízky budiaci výkon",
    pcpl6: "Vysoké spínacie frekvencie (desiatky kHz)",
    pcpl7: "Vysoká vstupná impedancia",
    pcpl8: "Umožňuje vytvárať integrované výkonové moduly",
    pcpl9: "Zvýšená vodivosť v dôsledku bipolárnej povahy",
    pccl1: "Vyššie náklady",
    pccl2: "Problém s blokovaním",
    pccl3: "Dlhá doba vypnutia v porovnaní s PMOSFET",
    pccl4: "Lavínový prieraz",
    pccl5: "Elektromigrácia",
    pccl6: "Injekcia horúcich nosičov",
    pccl7: "Korózia",
    pccl8: "Napäťový prieraz",
    pccla: "<b>Vďaka namáhaniu vysokými napätiami:</b>",
    address: "Stranku vytvoril: <abbr title=\"xhrcan@stuba.sk\">Jan Hrćan</abbr>.<br>",
    indexbuttonintro: "Úvod",
    contact: "Kontakt"
  }
}

// Display selected language (english by default)
checkLanguage();

function checkLanguage(){

  // Remembering your previously selected language across all pages
  if(localStorage.getItem("language")){
    if(localStorage.getItem("language") === "sk")
      slovak();
    else
      english();
  }

  // English by default
  else english();
}

// Change all elements text to English
function english(){
  en.style.border = "0.75px solid white";
  sk.style.border = "0px";

  // Remember the selected language
  localStorage.setItem("language", "en");

  // In index.html
  if(indexp1){

    indexp1.textContent = language.len.indexp1;
    indexp2.textContent = language.len.indexp2;
    indexp3.textContent = language.len.indexp3;
    indexp4.textContent = language.len.indexp4;
    indexp5.textContent = language.len.indexp5;
    indexp6.textContent = language.len.indexp6;

    indexb1.textContent = language.len.button;
    indexb2.textContent = language.len.button;
    indexb3.textContent = language.len.button;
    indexb4.textContent = language.len.button;
    indexb5.textContent = language.len.button;
    indexb6.textContent = language.len.button;
    intro.textContent = language.len.indexbuttonintro;

    indexh1.textContent = language.len.indexh1;
    indexh2.textContent = language.len.indexh2;
    indexh3.textContent = language.len.indexh3;
    indexh4.textContent = language.len.indexh4;
    indexh5.textContent = language.len.indexh5;
  }

  // In apps.html
  if(appsh){
    appsp1.innerHTML = language.len.appsp1;
    appsp2.innerHTML = language.len.appsp2;
    appsp3.innerHTML = language.len.appsp3;
    appsp4.innerHTML = language.len.appsp4;
    appsp5.innerHTML = language.len.appsp5;

    appst1.innerHTML = language.len.appst1;
    appst2.innerHTML = language.len.appst2;
    appst3.innerHTML = language.len.appst3;
    appst4.innerHTML = language.len.appst4;
    appst5.innerHTML = language.len.appst5;

    appsdiv.textContent = language.len.appsdiv;
    appsh.textContent = language.len.appsh;
  }

  // In faq.html
  if(faqa){

    faqa.innerHTML = language.len.faqa;
    faqq.textContent = language.len.faqq;
    faqQuestion.textContent = language.len.faqQuestion;
    faqButton.textContent = language.len.faqButton;

    faqal1.innerHTML = language.len.faqal1;
    faqal2.innerHTML = language.len.faqal2;
    faqal3.innerHTML = language.len.faqal3;
    faqal3a.innerHTML = language.len.faqal3a;
    faqal3b.innerHTML = language.len.faqal3b;
    faqal4.innerHTML= language.len.faqal4;

    faqql1.textContent = language.len.faqql1;
    faqql2.textContent = language.len.faqql2;
    faqql3.textContent = language.len.faqql3;
    faqql4.textContent = language.len.faqql4;
  }

  // In history.html
  if(hish){
    hish.textContent = language.len.indexh2;
  }

  // In main_part.html
  if(hiwh){

    hiwl1.innerHTML = language.len.hiwl1;
    hiwl2.innerHTML = language.len.hiwl2;

    hiwp1.innerHTML = language.len.hiwp1;
    hiwp2.innerHTML = language.len.hiwp2;
    hiwp3.innerHTML = language.len.hiwp3;
    hiwp4.innerHTML = language.len.hiwp4;

    hiwh.textContent = language.len.hiwh;
    hiws.textContent = language.len.hiws;

    biasen.style.display = "block";
    biassk.style.display = "none";
  }

  // In pros_cons.html
  if(pcp){

    pcp.textContent = language.len.pcp;
    pcc.textContent = language.len.pcc;

    pcpl1.textContent = language.len.pcpl1;
    pcpl2.textContent = language.len.pcpl2;
    pcpl3.textContent = language.len.pcpl3;
    pcpl4.textContent = language.len.pcpl4;
    pcpl5.textContent = language.len.pcpl5;
    pcpl6.textContent = language.len.pcpl6;
    pcpl7.textContent = language.len.pcpl7;
    pcpl8.textContent = language.len.pcpl8;
    pcpl9.textContent = language.len.pcpl9;
    
    pccl1.textContent = language.len.pccl1;
    pccl2.textContent = language.len.pccl2;
    pccl3.textContent = language.len.pccl3;
    pccl4.textContent = language.len.pccl4;
    pccl5.textContent = language.len.pccl5;
    pccl6.textContent = language.len.pccl6;
    pccl7.textContent = language.len.pccl7;
    pccl8.textContent = language.len.pccl8;

    pccla.innerHTML = language.len.pccla;
  }

  // On every page
  link1.textContent = language.len.indexh1;
  link2.textContent = language.len.indexh2;
  link3.textContent = language.len.indexh3;
  link4.textContent = language.len.indexh4;
  link5.textContent = language.len.indexh5;
  link6.textContent = language.len.indexh6;

  address.innerHTML = language.len.address;
  contact.textContent = language.len.contact;
}

// Change all element text to Slovak
function slovak(){
  sk.style.border = "0.75px solid white";
  en.style.border = "0px";

  // Remember the selected language
  localStorage.setItem("language", "sk");

  // In index.html
  if(indexp1){

    indexp1.textContent = language.lsk.indexp1;
    indexp2.textContent = language.lsk.indexp2;
    indexp3.textContent = language.lsk.indexp3;
    indexp4.textContent = language.lsk.indexp4;
    indexp5.textContent = language.lsk.indexp5;
    indexp6.textContent = language.lsk.indexp6;

    indexb1.textContent = language.lsk.button;
    indexb2.textContent = language.lsk.button;
    indexb3.textContent = language.lsk.button;
    indexb4.textContent = language.lsk.button;
    indexb5.textContent = language.lsk.button;
    indexb6.textContent = language.lsk.button;
    intro.textContent = language.lsk.indexbuttonintro;

    indexh1.textContent = language.lsk.indexh1;
    indexh2.textContent = language.lsk.indexh2;
    indexh3.textContent = language.lsk.indexh3;
    indexh4.textContent = language.lsk.indexh4;
    indexh5.textContent = language.lsk.indexh5;
  }

  // In apps.html
  if(appsh){
    appsp1.innerHTML = language.lsk.appsp1;
    appsp2.innerHTML = language.lsk.appsp2;
    appsp3.innerHTML = language.lsk.appsp3;
    appsp4.innerHTML = language.lsk.appsp4;
    appsp5.innerHTML = language.lsk.appsp5;

    appst1.innerHTML = language.lsk.appst1;
    appst2.innerHTML = language.lsk.appst2;
    appst3.innerHTML = language.lsk.appst3;
    appst4.innerHTML = language.lsk.appst4;
    appst5.innerHTML = language.lsk.appst5;

    appsdiv.textContent = language.lsk.appsdiv;
    appsh.textContent = language.lsk.appsh;
  }

  // In faq.html
  if(faqa){

    faqa.innerHTML = language.lsk.faqa;
    faqq.textContent = language.lsk.faqq;
    faqQuestion.textContent = language.lsk.faqQuestion;
    faqButton.textContent = language.lsk.faqButton;

    faqal1.innerHTML= language.lsk.faqal1;
    faqal2.innerHTML = language.lsk.faqal2;
    faqal3.innerHTML = language.lsk.faqal3;
    faqal3a.innerHTML = language.lsk.faqal3a;
    faqal3b.innerHTML = language.lsk.faqal3b;
    faqal4.innerHTML= language.lsk.faqal4;

    faqql1.textContent = language.lsk.faqql1;
    faqql2.textContent = language.lsk.faqql2;
    faqql3.textContent = language.lsk.faqql3;
    faqql4.textContent = language.lsk.faqql4;
  }

  // In history.html
  if(hish){
    hish.textContent = language.lsk.indexh2;
  }

  // In main_part.html
  if(hiwh){

    hiwl1.innerHTML = language.lsk.hiwl1;
    hiwl2.innerHTML = language.lsk.hiwl2;

    hiwp1.innerHTML = language.lsk.hiwp1;
    hiwp2.innerHTML = language.lsk.hiwp2;
    hiwp3.innerHTML = language.lsk.hiwp3;
    hiwp4.innerHTML = language.lsk.hiwp4;

    hiwh.textContent = language.lsk.hiwh;
    hiws.textContent = language.lsk.hiws;
    dopingsk.style.display = "block";
    dopingen.style.display = "none";
    biassk.style.display = "block";
    biasen.style.display = "none";
  }

  // In pros_cons.html
  if(pcp){

    pcp.textContent = language.lsk.pcp;
    pcc.textContent = language.lsk.pcc;

    pcpl1.textContent = language.lsk.pcpl1;
    pcpl2.textContent = language.lsk.pcpl2;
    pcpl3.textContent = language.lsk.pcpl3;
    pcpl4.textContent = language.lsk.pcpl4;
    pcpl5.textContent = language.lsk.pcpl5;
    pcpl6.textContent = language.lsk.pcpl6;
    pcpl7.textContent = language.lsk.pcpl7;
    pcpl8.textContent = language.lsk.pcpl8;
    pcpl9.textContent = language.lsk.pcpl9;
    
    pccl1.textContent = language.lsk.pccl1;
    pccl2.textContent = language.lsk.pccl2;
    pccl3.textContent = language.lsk.pccl3;
    pccl4.textContent = language.lsk.pccl4;
    pccl5.textContent = language.lsk.pccl5;
    pccl6.textContent = language.lsk.pccl6;
    pccl7.textContent = language.lsk.pccl7;
    pccl8.textContent = language.lsk.pccl8;

    pccla.innerHTML = language.lsk.pccla;
 }

  link1.textContent = language.lsk.indexh1;
  link2.textContent = language.lsk.indexh2;
  link3.textContent = language.lsk.indexh3;
  link4.textContent = language.lsk.indexh4;
  link5.textContent = language.lsk.indexh5;
  link6.textContent = language.lsk.indexh6;

  address.innerHTML = language.lsk.address;
  contact.textContent = language.lsk.contact;
}

// Load PWA if we are not in local brower
switch(window.location.protocol) {
    case 'http:':
    case 'https:':

        // Load service worker for pwa
        if("serviceWorker" in navigator){
            navigator.serviceWorker.register("sw.js").then(() => {
            }).catch(() => {
                console.log("Registration failed");
            })
        }
        break;
    case 'file:':
        console.log("PWA not supported for local browser");
        break;
    default:
}

// Load intro video
function playVideo(){
  document.getElementById("above").classList.toggle("active");
  document.getElementById("above").style.display = "block";

  // Close video
  bg.addEventListener("click", function() {
    document.getElementById("above").classList.toggle("active");
    document.getElementById("above").style.display = "none";

    video.pause();
    video.currentTime = 0;
  });
}