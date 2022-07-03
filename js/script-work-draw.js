const width = 720;                  // Width of the canvas
const height = 600;                 // Height of the canvas
const block = width / 15;           // A defined block to help with drawing our IGBT

// Draw IGBT
const draw = SVG()
  .addTo("#IGBT")
  .size(width + 60, height)
  .viewbox(0, 0, width + 60, height)

let canvasIGBT;          // IGBT drawing
let canvasLabeling;      // Labels
let powerSupply;         // Power supply

let path = [];
let pathLength = [];
let pathArrayLength;

canvasing(draw);

function canvasing(draw){
  canvasIGBT = draw.group().flip('y', height / 2);
  canvasLabeling = draw.group().flip('y', height / 2);
  powerSupply = draw.group();
}

drawIGBT();

function drawIGBT(){
  canvasIGBT.rect(width, 30)
    .move(0, 30)
    .fill("#304D63");                   // Collector Entry
  canvasIGBT.rect(width, 30)
    .move(0, 60)
    .fill("#ff6858");                   // P+
  canvasIGBT.rect(width, 30)
    .move(0, 90)
    .fill("#2acaff");                   // N+
  canvasIGBT.rect(width, 180)
    .move(0, 120)
    .fill("#a0e5ff");                   // N-
  canvasIGBT.rect(block * 5, 60)
    .move(block, 180)
    .fill("#ff6858")
    .radius(40);                        // P+
  canvasIGBT.rect(block * 5, 60)
    .move(block * 9, 180)
    .fill("#ff6858")
    .radius(40);                        // P+
  canvasIGBT.rect(block * 5, 90)
    .move(block, 210)
    .fill("#ffb2ab");                   // P
  canvasIGBT.rect(block * 5, 90)
    .move(block * 9, 210)
    .fill("#ffb2ab");                   // P
  canvasIGBT.rect(width, 60)
    .move(0, 300)
    .fill("#304D63");                   // Gate - Emitter Entry
  canvasIGBT.rect(block, 60)
    .move(block * 2, 240)
    .fill("#2acaff");                   // N+
  canvasIGBT.rect(block, 60)
    .move(block * 4, 240)
    .fill("#2acaff");                   // N+
  canvasIGBT.rect(block, 60)
    .move(block * 10, 240)
    .fill("#2acaff");                   // N+
  canvasIGBT.rect(block, 60)
    .move(block * 12, 240)
    .fill("#2acaff");                   // N+
  canvasIGBT.rect(width - 10, 20)
    .move(5, 35)
    .fill("#99989an");                  // Collector
  canvasIGBT.rect(block * 2, 60)
    .move(block * 3 - 24, 300)
    .fill("#99989a");                   // Emitter 1
  canvasIGBT.rect(block * 2, 60)
    .move((block * 11) - 24, 300)
    .fill("#99989a");                   // Emitter 2
  canvasIGBT.rect(block * 5, 30)
    .move(block * 5, 360)
    .fill("#99989a");                   // Gate

  // Labels
  labelDraw();


  // Wires
  canvasIGBT.polyline('360, 390 360, 580 168, 580 168, 360').fill('none').stroke({color: 'black', width: 3});
  canvasIGBT.polyline('360, 390 360, 580 552, 580 552, 360').fill('none').stroke({color: 'black', width: 3});
  canvasIGBT.polyline('552, 580 750, 580 750, 10 360, 10 360, 30').fill('none').stroke({color: 'black', width: 3});
  canvasIGBT.circle(20).move(350, 570).fill("black"); 
  canvasIGBT.circle(20).move(542, 570).fill("black");  

  drawPowerSupply(6, 6);

  // Path - Electrons
  path = [];
  pathLength = [];
  path[0] = canvasIGBT.path("M 128, 300 L 128, 288 L 20, 288 L 20, 60");
  path[0].fill('none');
  pathLength[0] = path[0].length();
  
  path[1] = canvasIGBT.path("M 204, 300 L 204, 288 L 306, 288 L 306, 60");
  path[1].fill('none');
  pathLength[1] = path[1].length();

  path[2] = canvasIGBT.path("M 512, 300 L 512, 288 L 402, 288 L 402, 60");
  path[2].fill('none');
  pathLength[2] = path[2].length();
  
  path[3] = canvasIGBT.path("M 586, 300 L 586, 288 L 692, 288 L 692, 60");
  path[3].fill('none');
  pathLength[3] = path[3].length();

  path[4] = canvasIGBT.path("M 204, 300 L 204, 288 L 339, 288 L 339, 60");
  path[4].fill('none');
  pathLength[4] = path[4].length();

  path[5] = canvasIGBT.path("M 512, 300 L 512, 288 L 369, 288 L 369, 60");
  path[5].fill('none');
  pathLength[5] = path[5].length();

  // Path - Protons
  path[6] = canvasIGBT.path("M 68, 60 L 68, 225 L 166, 225 L 166, 300");
  path[6].fill('none');
  pathLength[6] = path[6].length();

  path[7] = canvasIGBT.path("M 258, 60 L 258, 225 L 166, 225 L 166, 300");
  path[7].fill('none');
  pathLength[7] = path[7].length();

  path[8] = canvasIGBT.path("M 450, 60 L 450, 225 L 550, 225 L 550, 300");
  path[8].fill('none');
  pathLength[8] = path[8].length();

  path[9] = canvasIGBT.path("M 644, 60 L 644, 225 L 550, 225 L 550, 300");
  path[9].fill('none');
  pathLength[9] = path[9].length();

  path[10] = canvasIGBT.path("M 163, 60 L 163, 300");
  path[10].fill('none');
  pathLength[10] = path[10].length();

  path[11] = canvasIGBT.path("M 548, 60 L 548, 300");
  path[11].fill('none');
  pathLength[11] = path[11].length();

  pathArrayLength = path.length;
}

// Resize
draw.transform({
  scale: 0.7,
  origin: "center top"
});

// Draw Electrons
function drawElectron(draw){
  let electron = draw.group().flip('y', height / 2);
  electron.clear();
  electron.circle(20).fill("#333399");
  electron.circle(14).fill("white").move(3, 3);
  electron.line(5, 10, 15, 10).stroke({ color: "black", width: 4});
  return electron;
}

// Draw Protons
function drawProton(draw){
  let proton = draw.group().flip('y', height / 2);
  proton.clear();
  proton.circle(20).fill("#FF0000");
  proton.circle(14).fill("white").move(3, 3);
  proton.line(5, 10, 15, 10).stroke({ color: "black", width: 4});
  proton.line(10, 5, 10, 15).stroke({ color: "black", width: 4});
  return proton;
}

// Draw Electric field
function drawElectronField(){
  let electron = draw.group().flip('y', height / 2);
  electron.clear();
  electron.line(5, 10, 15, 10).stroke({ color: "black", width: 4});
  return electron;
}

// Draw Proton field
function drawProtonField(){
  let proton = draw.group().flip('y', height / 2);
  proton.clear();
  proton.line(5, 10, 15, 10).stroke({ color: "black", width: 4});
  proton.line(10, 5, 10, 15).stroke({ color: "black", width: 4});
  return proton;
}

// Draw Power Supply
function drawPowerSupply(gate, voltage){
  powerSupply.clear();

  powerSupply.rect(block * 2, 90)
    .move(360 - block, 70)
    .fill("#C0C0C0")
    .stroke({width: 3, color: '#000'})
    .attr('cursor', 'pointer');
  powerSupply.rect(block * 2, 90)
    .move(750 - block * 1.7, 70)
    .fill("#C0C0C0")
    .stroke({width: 3, color: '#000'})
    .attr('cursor', 'pointer');
  powerSupply.rect(block * 1.5, 40)
    .move(360 - block + 0.25 * block, 90)
    .fill("#424242")
    .stroke({width: 2, color: '#000'})
    .attr('cursor', 'pointer');
  powerSupply.rect(block * 1.5, 40)
    .move(750 - block * 1.7 + 0.25 * block, 90)
    .fill("#424242")
    .stroke({width: 2, color: '#000'})
    .attr('cursor', 'pointer');
  powerSupply.text(gate + "V")
    .move(360 - block + 0.25 * block + 4, 94)
    .font({size: 20, fill: '#FFFFFF'});
  powerSupply.text(voltage + "V")
    .move(750 - block * 1.7 + 0.25 * block + 4, 94)
    .font({size: 20, fill: '#FFFFFF'});
}

// Draw labeling
function labelDraw(){
  canvasLabeling.text("P+").move(2, 62).font({size: 25}).flip('y');                                     // P+ Text
  canvasLabeling.text("N-").move(2, 122).font({size: 25}).flip('y');                                    // N- Text
  canvasLabeling.text("N+").move(2, 92).font({size: 25}).flip('y');                                     // N+ Text
  canvasLabeling.text("P").move(block + 2, 212).font({size: 25}).flip('y');                             // P Text
  canvasLabeling.text("P").move(block * 9 + 2, 212).font({size: 25}).flip('y');                         // P Text
  canvasLabeling.text("P+").move(block * 2, 182).font({size: 25}).flip('y');                            // P+ Text
  canvasLabeling.text("P+").move(block * 10, 182).font({size: 25}).flip('y');                           // P+ Text
  canvasLabeling.text("SiO2").move(2, 302).fill("#FFFFFF").font({size: 25}).flip('y');                  // Gate - Emitter Entry Text
  canvasLabeling.text("N+").move(block * 2 + 2, 242).font({size: 25}).flip('y');                        // N+ Text
  canvasLabeling.text("N+").move(block * 4 + 2, 242).font({size: 25}).flip('y');                        // N+ Text
  canvasLabeling.text("N+").move(block * 10 + 2, 242).font({size: 25}).flip('y');                       // N+ Text
  canvasLabeling.text("N+").move(block * 12 + 2, 242).font({size: 25}).flip('y');                       // N+ Text
  canvasLabeling.text("Emitter").move(block * 3 - 22, 302).font({size: 25}).flip('y');                  // Emitter 1 Text
  canvasLabeling.text("Emitter").move(block * 11 - 22, 302).font({size: 25}).flip('y');                 // Emitter 2 Text
  canvasLabeling.text("Gate").move(block * 5 + 2, 362).font({size: 25}).flip('y');                      // Gate Text
  canvasLabeling.text("Collector").move(2, 35).fill("#FFFFFF").font({size: 25}).flip('y');              // Collector Text
}