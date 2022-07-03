let pause = false;
let label = true;
let legend = false;

const enw = document.getElementById("us");                 // Button for English language
const skw = document.getElementById("sk");                 // Button for Slovak language

// All elements in work.html
// Labels
const workl1 = document.getElementById("workl1");
const workl2 = document.getElementById("workl2");
const workpause = document.getElementById("pause");
const worklabel = document.getElementById("label");
const worklegend = document.getElementById("leg");

// Paragraphs
const workp1 = document.getElementById("workp1");
const workp2 = document.getElementById("workp2");
const workp3 = document.getElementById("workp3");
const workp4 = document.getElementById("workp4");

// Other
const workh = document.getElementById("workh");
const worka = document.getElementById("worka");

// On all pages
// Navigation links
const link1w = document.getElementById("link1");
const link2w = document.getElementById("link2");
const link3w = document.getElementById("link3");
const link4w = document.getElementById("link4");
const link5w = document.getElementById("link5");

// Other
const addressw = document.getElementById("address");
const contactw = document.getElementById("contact");

// JSON file which contains all Slovak and English text
const languageWork = {

  // English texts
  len:{
    indexh1: "How it works - Animation",
    indexh2: "History",
    indexh3: "Application",
    indexh4: "Pros/Cons",
    indexh5: "IGBT Theory",
    workh: "<u>How it works - Animation</u>",
    workl1: "Input voltage <i>V</i><sub>GE</sub>:",
    workl2: "Input voltage <i>V</i><sub>CE</sub>:",
    worka: "<u>The theory of an IGBT</u>",
    workp1: "Majority electron",
    workp2: "Majority hole",
    workp3: "Negative ions",
    workp4: "Positive ions",
    home: "Home",
    address: "Page created by: <abbr title=\"xhrcan@stuba.sk\">Jan Hrćan</abbr>.<br>",
    contact: "Contact",
    pausetrue: "Resume animation",
    pausefalse: "Pause animation",
    legendtrue: "Hide legend",
    legendfalse: "Show legend",
    labeltrue: "Hide labelling",
    labelfalse: "Show labelling"
  },

  // Slovak text
  lsk:{
    indexh1: "Princíp činnosti",
    indexh2: "História",
    indexh3: "Aplikácie",
    indexh4: "Výhody/Nevýhody",
    indexh5: "Teória IGBT",
    workh: "<u>Princíp činnosti</u>",
    workl1: "Zadaj napätie na <i>U</i><sub>GE</sub>:",
    workl2: "Zadaj napätie na <i>U</i><sub>CE</sub>:",
    worka: "<u>Teória IGBT</u>",
    workp1: "Majoritné elektróny",
    workp2: "Majoritné diery",
    workp3: "Negativné jóny",
    workp4: "Pozitívne jóny",
    home: "Domov",
    address: "Stranku vytvoril: <abbr title=\"xhrcan@stuba.sk\">Jan Hrćan</abbr>.<br>",
    contact: "Kontakt",
    pausetrue: "Pustiť animáciu",
    pausefalse: "Pozastaviť animáciu",
    legendtrue: "Skryť legendu",
    legendfalse: "Zobraziť legendu",
    labeltrue: "Skryť označenia",
    labelfalse: "Zobraziť označenia"
  }
}

// Display selected language (english by default)
checkLanguageWork();

function checkLanguageWork(){

  // Remembering your previously selected language across all pages
  if(localStorage.getItem("language")){
    if(localStorage.getItem("language") === "sk")
      slovakWork();
    else
      englishWork();
  }

  // English by default
  else englishWork();
}

// Change all elements text to English
function englishWork(){
  enw.style.border = "0.75px solid white";
  skw.style.border = "0px";

  // Remember the selected language
  localStorage.setItem("language", "en");

  // In work.html
  workl1.innerHTML = languageWork.len.workl1;
  workl2.innerHTML = languageWork.len.workl2;

  workp1.textContent = languageWork.len.workp1;
  workp2.textContent = languageWork.len.workp2;
  workp3.textContent = languageWork.len.workp3;
  workp4.textContent = languageWork.len.workp4;

  workh.innerHTML = languageWork.len.workh;
  worka.innerHTML = languageWork.len.worka;

  // Tricky labels
  if(pause)
    workpause.textContent = languageWork.len.pausetrue;
  else
    workpause.textContent = languageWork.len.pausefalse;

  if(label)
    worklabel.textContent = languageWork.len.labeltrue;
  else
    worklabel.textContent = languageWork.len.labelfalse;

  if(legend)
    worklegend.textContent = languageWork.len.legendtrue;
  else
    worklegend.textContent = languageWork.len.legendfalse;

  // On every page
  link1w.textContent = languageWork.len.indexh1;
  link2w.textContent = languageWork.len.indexh2;
  link3w.textContent = languageWork.len.indexh3;
  link4w.textContent = languageWork.len.indexh4;
  link5w.textContent = languageWork.len.indexh5;

  addressw.innerHTML = languageWork.len.address;
  contactw.textContent = languageWork.len.contact;
}

// Change all element text to Slovak
function slovakWork(){
  skw.style.border = "0.75px solid white";
  enw.style.border = "0px";

  // Remember the selected language
  localStorage.setItem("language", "sk");

  // In work.html
  workl1.innerHTML = languageWork.lsk.workl1;
  workl2.innerHTML = languageWork.lsk.workl2;

  workp1.textContent = languageWork.lsk.workp1;
  workp2.textContent = languageWork.lsk.workp2;
  workp3.textContent = languageWork.lsk.workp3;
  workp4.textContent = languageWork.lsk.workp4;

  workh.innerHTML = languageWork.lsk.workh;
  worka.innerHTML = languageWork.lsk.worka;

  // Tricky labels
  if(pause)
    workpause.textContent = languageWork.lsk.pausetrue;
  else
    workpause.textContent = languageWork.lsk.pausefalse;

  if(label)
    worklabel.textContent = languageWork.lsk.labeltrue;
  else
    worklabel.textContent = languageWork.lsk.labelfalse;

  if(legend)
    worklegend.textContent = languageWork.lsk.legendtrue;
  else
    worklegend.textContent = languageWork.lsk.legendfalse;

  // On every page
  link1w.textContent = languageWork.lsk.indexh1;
  link2w.textContent = languageWork.lsk.indexh2;
  link3w.textContent = languageWork.lsk.indexh3;
  link4w.textContent = languageWork.lsk.indexh4;
  link5w.textContent = languageWork.lsk.indexh5;

  addressw.innerHTML = languageWork.lsk.address;
  contactw.textContent = languageWork.lsk.contact;
}