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
    appsp1: "IGBT???s are used in modern Uninterruptible Power Supplies (UPS) combining high efficiency with fast switching whilst keeping the frequency output without narrow tolerances. IGBT provides extremely low voltage distortion and improves the power efficiency especially when supporting IT equipment and Computer/server loads. IGBT are mostly used in Static UPS systems that have battery back up autonomy for Power Continuity.",
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
        "<li> A matching and individual resistor of 2 to 4 ?? is placed in series with the gate of each IGBT to minimize the possibility of potential gate voltage oscillations in conjunction with one IGBT with another parallel IGBT. </li>" +
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
    address: "Page created by: <abbr title=\"xhrcan@stuba.sk\">Jan Hr??an</abbr>.<br>",
    indexbuttonintro: "Intro",
    contact: "Contact"
  },

  // Slovak text
  lsk:{
    indexp1: "Tu n??jdete anim??ciu, s r??znymi premenn??mi nap??tia, s ktor??mi sa d?? interagova??. Takisto, tu sa nach??dza graf, spolu s legendou aj in??mi elementmi s ktor??mi m????ete interagova??.",
    indexp2: "Tu n??jdete slajder, ktor?? v??m umo??n?? lep??ie zn??zorni?? v??voj IGBT. Takisto, uk????eme v??m jeho prv?? druhy aj ako sa dost??l k druhom IGBT, ktor?? dnes pou????vame.",
    indexp3: "Tu n??jdete gal??riu a zoznam niektor??ch pou??it?? IGBT v praktickom ??ivote. Predsa s?? 2. najvyu????vanej??ie tranzistory vo svete.",
    indexp4: "Tu n??jdete stru??n?? preh??ad v??etk??ch v??hod a nev??hod pri pou??it?? IGBT, v porovnan?? s niektor??mi in??mi tranzistormi, ako ??o s?? MOSFET.",
    indexp5: "Tu sa m????ete dozvede?? o te??rie IGBT, spolu s podrobn??m popisom princ??pu ??innosti a in?? anim??cie.",
    indexp6: "Tu sa nach??dzaj?? v??etky ??asto vkladan?? ot??zky, ktor?? dost??vame, spolu s odpove??mi na ot??zky. Radi odpoved??me na v??etky.",
    indexh1: "Princ??p ??innosti",
    indexh2: "Hist??ria",
    indexh3: "Aplik??cie",
    indexh4: "V??hody/Nev??hody",
    indexh5: "Te??ria IGBT",
    indexh6: "FAQ",
    button: "????tajte tu",
    appsp1: "IGBT sa pou????vaj?? v modern??ch zdrojoch nepreru??ovan??ho nap??jania (UPS), ktor?? kombinuj?? vysok?? ????innos?? s r??chlym prep??nan??m pri zachovan?? frekven??n??ho v??stupu bez ??zkych toleranci??. IGBT poskytuje n??zke skreslenie nap??tia a zlep??uje energetick?? ????innos??, najm?? pri podpore IT zariaden?? a z????a??e po????ta??a/servera. IGBT sa v??????inou pou????vaj?? v syst??moch statick??ch UPS, ktor?? maj?? z??lo??n?? bat??riu pre kontinuitu nap??jania.",
    appsp2: "IGBT patria medzi najmodernej??ej v??konnovej elektronike pre syst??m trati v elektrick??ch a diesel-elektrick??ch lokomot??vach. Hlavn?? prospech IGBT je to, ??e zn????uj?? po??iadavky na elektrick?? pr??d, minimalizuj?? teplotu a trak??n?? hluk, pok??m je schopn?? efekt??vne vykona?? proces zr??chlenia vlaka.",
    appsp3: "HVDC (Vysoko nap????ov?? priamy pr??d) vyu????va priamy pr??d na pren????anie elektrickej sile. Praktick?? konverzia pr??du z priameho do striedav??ho sa st??la mo??nou ako sa za??li rozv??ja?? IGBT. Rozv??janie vy????ie hodnoten??ch IGBT umo??nilo pou??itie men????ch HVDC, aby to bolo ekonomicky v??hodn??. Pomocou polovodi??ov, ako s?? IGBT, zap??janie aj vyp??nanie je ??ahko ovl??date??n??.",
    appsp4: "IGBT sa nach??dzaj?? vo v??konov??ch meni??och pohonov motorov. IGBT v t??chto zariadeniach sl????ia ako v??konn?? elektronick?? sp??na??e, ktor?? prep??naj?? pr??dy pri frekvenci??ch meran??ch v desiatkach a stovk??ch kHz. Tranzistory tohto typu sa vyr??baj?? vo forme samostatn??ch komponentov, ako aj vo forme ??pecializovan??ch v??konov??ch modulov (zost??v) na riadenie trojf??zov??ch obvodov.",
    appsp5: "Zv??racie invertory - samostatn?? d??le??it?? oblas?? pou??itia tranzistorov IGBT: vysok?? pr??d, v??kon viac ako 5 kW a frekvencie do 50 kHz (IRG4PC50UD - klasika ????nru 27A, 600V, a?? 40 kHz).",
    appst1: "UPS",
    appst2: "Elektrick?? vlaky",
    appst3: "Vysoko nap????ov?? priamy pr??d",
    appst4: "Motorov?? pohon",
    appst5: "Zv??racie Inventory",
    appsh: "Pou??itie",
    appsdiv: "V roku 2022, IGBT je druh?? najvyu????vanej???? tranzistor vo svete, po Mosfet tranzistoroch. Zodpoved?? 27% v??konn??ch tranzistorov na trhu, na vstupe RF (Radio frequency) zosil??ova??a (11%). M?? ??irok?? rozsah pou??it??: v priemyselnej technol??gie, ka??dodennej elektronike, energetickom sektore, vesm??rnych zariadeniach ako aj v nov??ch prostriedkoch dopravy.",
    faqq: "Ot??zky:",
    faqa: "Odpovede:<br><br>",
    faqal1: "1. Bipol??rny tranzistor s izolovan??m hradlom (IGBT) je v podstate trojelektr??dov?? v??konov?? polovodi??ov?? s????iastka, ktor?? sa zvy??ajne pou????va ako elektronick?? sp??na?? v ??irokej ??k??le aplik??ci??. IGBT kombinuje v??hodn?? vlastnosti MOSFET so schopnos??ou bipol??rneho tranzistora s vysok??m pr??dom a n??zkym satura??n??m nap??t??m v???jedinej s????iastke. Pr??dov?? a nap????ov?? za??a??ite??nos?? n??m ur??uje bipol??rna ??as?? ??trukt??ry a riadite??nos?? je tvoren?? unipol??rnou ??as??ou ??trukt??ry. Na sp??nanie bipol??rneho tranzistora sa na riadenie vyu????va nev??konov?? nap????ov?? sign??l. Jedn?? sa o druh tranzistorov pre ve??mi vysok?? sp??nan?? v??kony (r??dovo nieko??ko desiatok kW) a frekvenciu sp??nania do 20kHz. U?? z n??zvu vypl??va, ??e IGBT vyu????va jednoduch?? riadenie MOSFET a n??zky odpor bipol??rnych tranzistorov. Pou????vaj?? sa v zariadeniach ako s?? napr. meni??e (DC/AC, AC/AC).",
    faqal2: "2. Mnoho modern??ch IGBT, m?? pozit??vnu z??vislos?? VCE(SAT) od teploty prechodu v rozsahu ich nomin??lneho pr??du. Ako tak?? m????u by?? tieto IGBT typicky paraleln??, ak sa prijme nieko??ko z??kladn??ch opatren??:" +
        "<ul><li>S????iastky by mali by?? namontovan?? na spolo??n?? chladi??/meden?? substr??t</li>" +
        "<li>Rozlo??enie hradla Gate a Emitora je symetrick?? (d????ka slu??ky Gate -Emitor je podobn?? pre ka??d?? paraleln?? IGBT)</li>" +
        "<li>Zodpovedaj??ci a individu??lny odpor 2 a?? 4 ?? je umiestnen?? v s??rii s hradlom ka??d??ho IGBT, aby sa minimalizovala mo??nos?? potenci??lnych oscil??ci?? hradlov??ho nap??tia v spojen?? jedn??ho IGBT s in??m paraleln??m IGBT.</li>" +
        "<li>Vo v??eobecnosti sa odpor????a paraleln?? zariadenia z rovnakej ??ar??e substr??tu (rovnak?? k??d ??ar??e), aby sa zabezpe??ila minim??lna odch??lka medzi k??????ov??mi parametrami prahov??ho nap??tia GATE-EMITOR a <i>V</i><sub>CE(SAT)</sub>.</li>",
    faqal3: "3. Ak je na IGBT priveden?? kladn?? nap??tie medzi kolektor a emitor, s????iastka je v blokovacom m??de. Ak v takomto stave je na elektr??du gate priveden?? nap??tie vy????ie ako prahov??, vytvor?? sa N-kan??l a elektr??ny sa pohybuj?? smerom ku kolektoru, ako je zrejm?? z obr??zku.",
    faqal3a: "https://www.kis.fri.uniza.sk/~ludo/e-Publikacia/elektronika/kap8/elektronika.html<br><br> Na kolektorovej strane PN prechodu, sa vygeneruje nap??tie v priepustnom smere a diery z p vrstvy kolektora s?? injektovan?? n??zko dotovanej strednej vrstvy. Tieto injektovan?? diery umo??nia zv????i?? hustotu nosi??ov n??boja, zv????en?? hustota zn????i odpor strednej vrstvy, ??i??e doch??dza k modul??ci?? vodivosti v tejto n??zko dotovanej vrstve. Z vn??tornej ??trukt??ry vypl??va ??e pri uva??ovan?? Rsh > 0 je mo??n?? IGBT modelova?? v zopnutom stave ako s??riov?? kombin??ciu di??dy a odporu zopnut??ho FET. (Rsh =Shunt resistance). ??bytok nap??tia na di??dovej ??asti sa rovnako ako v be??nej di??de sklad?? z prahov??ho nap??tia Ut0 a ??bytku na diferenci??lnom odpore. So zvy??uj??cou sa teplotou prahov?? nap??tie kles?? a diferenci??lny odpor vzrast??. Celkov?? ??bytok nap??tia v zopnutom stave sa u IGBT pohybuje v rozmedz?? asi 1,5 a?? 4 V v z??vislosti od typu prvku a od pretekaj??ceho pr??du. So zv??????uj??cim sa pr??dom tento ??bytok narast??. Vzh??adom k tomu, ??e odpor zopnut??ho tranzistora rastie spolu s teplotou, ??i??e vykazuje kladn?? tepeln?? s????inite?? odporu, je mo??n?? IGBT realizova?? ako integrovan?? obvod s ve??k??m po??tom paralelne zapojen??ch prvkov na jednom ??ipe.",
    faqal3b: "Doteraj??ie ??vahy sa vz??ahovali k pr??padom, kedy je mo??n?? ??bytok nap??tia na odpore Rsh zanedba??. Pri zv??????en?? pr??du kolektora v??ak m????e d??js?? k zv????eniu ??bytku nap??tia na tomto odpore, ????m sa zv????i nap??tie na b??ze parazitn??ho tranzistora NPN a ??as?? pr??du kolektora IGBT prete??ie b??zou a emitorom uveden??ho tranzistora. Ak d??jde k zv??????eniu pr??du kolektoru nad ur??it?? kritick?? hodnotu, uplatn?? sa kladn?? sp??tn?? v??zba v zapojen?? dvoch bipol??rnych tranzistorov a v??aka nej dostane t??to ??trukt??ra vlastnosti tyristora, klesne ??bytok nap??tia na IGBT a prvok u?? nie je mo??n?? vypn???? z??sahom do riadiacej elektr??dy. <br><br>https://www.vut.cz/www_base/zav_prace_soubor_verejne.php?file_id=148354 <br><br>",
    faqal4: "4. Bezpe??n?? pracovn?? z??na IGBT v s??radniciach nap??tie a pr??d je obmedzen?? hlavne tepeln??mi stratami. Ve??kos?? tejto z??ny je z??visl?? i od sp??nacej frekvencie, preto??e s rast??cim nap??t??m rast?? aj sp??nacie straty tranzistora. Obmedzenie sp??nacej frekvencie je dan?? potrebou dostato??nej doby pre odvedenie stratov??ho tepla po uskuto??nen?? sp??nacieho procesu.",
    faqql1: "??o je IGBT?",
    faqql2: "Je mo??n?? paralelne zapoji?? viacero IGBT?",
    faqql3: "Ak?? je princ??p ??innosti IGBT?",
    faqql4: "????m m????ete ovplyvni?? bezpe??n?? pracovn?? z??nu IGBT?",
    faqQuestion: "Po??lite n??m na mail nov?? ot??zku!",
    faqButton: "Odosla??",
    hiwh: "Te??ria IGBT",
    hiwl1: "<b>P-typ</b> - je dop??cia pr??mes?? cudzieho materi??lu (ak??m je B??r), ktor?? m?? iba tri elektr??ny vo valen??nej vrstve, do krem??ka. V??aka tomu, ??e tam ch??ba jeden elektr??n, vznikaj?? nov?? miesta bez elektr??nov, ktor?? naz??vame <b>diery</b>.",
    hiwl2: "<b>N-typ</b> - je dop??cia pr??mes?? cudzieho materi??lu, ktor?? m?? 5 elektr??nov vo svojej valen??nej vrstve a spr??vaj?? sa ako donory. Tie zvy??n?? elektr??ny sa m????u vo??ne pohybova?? v na??om syst??me.",
    hiwp1: "Tranzistor tvoria polovodi??ov?? materi??ly, ako je, v tomto pr??pade, at??m krem??ka, ktor?? patr?? do 4. skupiny . At??m krem??ka m?? ??tyri valen??n?? elektr??ny, ktor?? vstupuj?? do kovalentn??ch v??zieb so susediacimi at??mami. Ka??d?? at??m krem??ka je spojen?? so 4 susedn??mi at??mami. ??ist?? krem??k je prakticky nevodiv??, preto ak chceme zv????i?? jeho vodivos?? mus??me <b>dopova??</b> krem??k pr??mesami:",
    hiwp2: "Niektor?? ??asti tranzistora tvor?? P-typ, a niektor?? N-typ. Na prechode z P do N ??asti (ozna??ujeme ako PN priechod), navy??e majoritn?? elektr??ny v N-type bud?? ma?? pr??rodzen?? sklon predifundova?? do P ??asti. D??sledkom toho bude, ??e P ??as?? na rozhran?? bude mierne z??porne nabit?? a N ??ast bude mierne kladne nabit??. D??sledkom  toho, vznik?? na rozhran?? vn??torn?? <b>elektrick?? pole</b>, ktor?? zastav?? ??al???? pohyb elektr??nov (hovor??me ??e vznik?? ochudobnen?? oblas?? o majoritn?? nosi??e n??boja, resp. oblas?? priestorov??ho n??boja. T??to oblas?? je ozna??en?? zelenou farbou na PN priechodoch v anim??cii).",
    hiwp3: "Aby sa elektr??ny v PN priechode dali do pohybu cez kan??l tranzistora, mus??me aplikova?? vhodne polarizovan?? nap??tie, ktor?? sp??sob?? presun elektr??nov do P ??asti. V??aka tomu vznikne ve??k?? rekombina??n?? pr??d, lebo ve??a elektr??nov zapln?? diery v P ??asti. Toto sa vol?? <b>priepustne polarizovan?? PN priechod</b>. PN priechod vol??me <b>z??verne polarizovan?? priechod</b>, ktor?? sp??sob?? roz????renie ochudobnenej oblasti, ktor?? zastav?? tok elektr??nov.",
    hiwp4: "Pripojen??m kladn??ho nap??tia na izolovan?? hradlo UGS, oxid kremi??it?? SiO<sub>2</sub>, ktor?? predstavuje izola??n?? vrstvu, bude z??porn?? nabit?? na strane hradla. Z druhej strany, bude nabit?? kladne. Kladn?? n??boje pritiahnu elektr??ny z P ??asti. Vytvor?? sa inverzn?? vrstvu, ktor?? naz??vame kan??l. T??to vrstva sa zv??????uje, v z??vislosti od ve??kosti nap??tia pripojen??ho na hradlo. Tento kan??l vytvor?? elektr??nom cestu a elektr??ny sa bud?? m??c?? pohybova?? cez priepustne polarizovan?? priechod.",
    hiws: "Interakt??vna anim??cia",
    pcp: "V??hody:",
    pcc: "Nev??hody:",
    pcpl1: "Tranzistor riaden?? nap??t??m (nap????ov??mi impulzmi)",
    pcpl2: "N??zke straty v zopnutom stave",
    pcpl3: "Ve??k?? rozsah pracovn??ch nap??t?? a pr??dov (a?? 1000A, a?? 1200V)",
    pcpl4: "M????e pracova?? s ve??k??m v??konov??m za??a??en??m (stovky kW)",
    pcpl5: "N??zky budiaci v??kon",
    pcpl6: "Vysok?? sp??nacie frekvencie (desiatky kHz)",
    pcpl7: "Vysok?? vstupn?? impedancia",
    pcpl8: "Umo????uje vytv??ra?? integrovan?? v??konov?? moduly",
    pcpl9: "Zv????en?? vodivos?? v d??sledku bipol??rnej povahy",
    pccl1: "Vy????ie n??klady",
    pccl2: "Probl??m s blokovan??m",
    pccl3: "Dlh?? doba vypnutia v porovnan?? s PMOSFET",
    pccl4: "Lav??nov?? prieraz",
    pccl5: "Elektromigr??cia",
    pccl6: "Injekcia hor??cich nosi??ov",
    pccl7: "Kor??zia",
    pccl8: "Nap????ov?? prieraz",
    pccla: "<b>V??aka nam??haniu vysok??mi nap??tiami:</b>",
    address: "Stranku vytvoril: <abbr title=\"xhrcan@stuba.sk\">Jan Hr??an</abbr>.<br>",
    indexbuttonintro: "??vod",
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