// Draw IGBT
const draw2 = SVG()
  .addTo("#IGBT2")
  .size(width + 60, height)
  .viewbox(0, 0, width + 60, height)

// -- Animating 4th Slide --
let protonGateArray;            // Proton array at the gate
let electronAreaArray;          // N-channel created by attracted electrons
let nionArray;                  // Negative ions array
let pionArray;                  // Positive ions array

startUpAnimation();

// Start the insulated Gate animation
function startUpAnimation(){
  protonGateArray = [];

  for(let i = 0; i < 6; i++){
    let proton = drawProtonField();
    proton.opacity(0);
    proton.move(block * 5 + 12 + i * ((block * 5) / 6), 395);                             // Move to the position
    protonGateArray.push(proton);                                                         // Push to the array
  }

  electronAreaArray = [];

  for(let i = 0; i < 6; i++){
    let electronArea = draw.group()                                                       // N- Formed
    electronArea.rect(block * 5 - 1, 20).move(block * 5, 301).fill("#58d3fc"); 
    electronArea.rect(block - 1, 20).move(block, 301).fill("#58d3fc"); 
    electronArea.rect(block - 1, 20).move(block * 13, 301).fill("#58d3fc"); 
    electronArea.opacity(0);
    electronAreaArray.push(electronArea);
  }

  nionArray = [];

  for(let i = 0; i < 6; i++){
    let electron = drawElectronField();
    if(i % 2 === 0)
      electron.move(block * 5 + 12 + i * ((block * 5) / 6), 340);                         // Mix positive and negative ions
    else 
      electron.move(block * 5 + 12 + i * ((block * 5) / 6), 310);                         // Mix positive and negative ions
    nionArray.push(electron);
  }

  pionArray = [];

  for(let i = 0; i < 6; i++){
    let proton = drawProtonField();
    if(i % 2 === 0)
      proton.move(block * 5 + 12 + i * ((block * 5) / 6), 310);                            // Mix positive and negative ions
    else 
      proton.move(block * 5 + 12 + i * ((block * 5) / 6), 340);                            // Mix positive and negative ions
    pionArray.push(proton);
  }

  // Gate animation
  forwardAnimationGate();
}

// Gate voltage = 6V
function forwardAnimationGate(){
  for(let j = 0; j < 6; j++){

    protonGateArray[j].animate({
      duration: 1500,
      delay: 0,
      when: 'now',
    }).attr({ opacity: '1' })
    .loop(0, 1500, 1500);

    if(j % 2 === 1){

      nionArray[j].animate({
        duration: 1500,
        delay: 1500,
        when: 'now',
      }).move(block * 5 + 12 + j * ((block * 5) / 6), 340)
      .loop(0, 1500, 1500);
  
      pionArray[j].animate({
        duration: 1500,
        delay: 1500,
        when: 'now',
      }).move(block * 5 + 12 + j * ((block * 5) / 6), 310)
      .loop(0, 1500, 1500);
    }
  }

  // Electron area is at full height
  for(let j = 0; j < 2; j++)
  electronAreaArray[j].animate({
    duration: 1500,
    delay: 1500,
    when: 'now',
  }).attr({ opacity: '1' }).height(20)
  .loop(0, 1500, 1500);
}

// -- Animating 2nd Slide --
canvasing(draw2);

drawIGBT();

electronAnimation();

drawPowerSupply(0, 0);

function electronAnimation(){
  // Electron Animation
 
  let electronArray = [];        // Electron array

  for(let i = 0; i < 8; i++){
    let electron = drawElectron(draw2);
    switch(i){
      case 0: case 1:
        electron.move(15, 270 - 30 * i)
        break;
      case 2: case 3:
        electron.move(block * 6 + 15, 270 - 30 * (i % 2));
        break;
      case 4: case 5:
        electron.move(block * 8 + 15, 270 - 30 * (i % 2))
        break;
      case 6: case 7:
        electron.move(block * 14 + 15, 270 - 30 * (i % 2));
        break;
    }
    electronArray.push(electron);
  }

  // Animation
  for(let j = 0; j < 8; j++){

    switch(j){
      case 0: case 1:
        electronArray[j].animate({
          duration: 3000,
          when: 'now',
        }).move(block + 15, 270 - 30 * j)
        .loop();
        break;

      case 2: case 3:
        electronArray[j].animate({
          duration: 3000,
          when: 'now',
        }).move(block * 5 + 15, 270 - 30 * (j % 2))
        .loop();
        break;

      case 4: case 5:
        electronArray[j].animate({
          duration: 3000,
          when: 'now',
        }).move(block * 9 + 15, 270 - 30 * (j % 2))
        .loop();
        break;
        
      case 6: case 7:
        electronArray[j].animate({
          duration: 3000,
          when: 'now',
        }).move(block * 13 + 15, 270 - 30 * (j % 2))
        .loop();
        break;
    }
  }

  // Proton Animation
    let protonArray = [];          // Proton array

    for(let i = 0; i < 8; i++){
      let proton = drawProton(draw2);
      switch(i){
        case 0: case 1:
          proton.move(block + 15, 270 - 30 * i)
          break;
        case 2: case 3:
          proton.move(block * 5 + 15, 270 - 30 * (i % 2));
          break;
        case 4: case 5:
          proton.move(block * 9 + 15, 270 - 30 * (i % 2))
          break;
        case 6: case 7:
          proton.move(block * 13 + 15, 270 - 30 * (i % 2));
          break;
      }
      protonArray.push(proton);
    }


    for(let j = 0; j < 8; j++){
      switch(j){
       
        case 0: case 1:
          protonArray[j].animate({
            duration: 3000,
            when: 'now',
          }).move(15, 270 - 30 * j)
          .loop();
          break;

        case 2: case 3:
          protonArray[j].animate({
            duration: 3000,
            when: 'now',
          }).move(block * 6 + 15, 270 - 30 * (j % 2))
          .loop();
          break;

        case 4: case 5:
          protonArray[j].animate({
            duration: 3000,
            when: 'now',
          }).move(block * 8 + 15, 270 - 30 * (j % 2))
          .loop();
          break;

        case 6: case 7:
          protonArray[j].animate({
            duration: 3000,
            when: 'now',
          }).move(block * 14 + 15, 270 - 30 * (j % 2))
          .loop();
          break;
      }
    }

    let depletionArea = [];        // DepletionArea

    for(let i = 0; i < 4; i++){
      let rec = draw2.group().flip('y', height / 2);
      rec.clear();
      rec.rect(4, 90).fill("Red")
      rec.opacity(0);
      (i < 2) ? rec.move(block + block * 5 * (i % 2) - 2, 210) : rec.move(block * 9 + block * 5 * (i % 2) - 2, 210);
      depletionArea.push(rec);
    }

    for(let j = 0; j < 4; j++){
      depletionArea[j].animate({
        duration: 3000,
      }).attr({ opacity: '1' }).loop();
    }
}

// Resize
draw2.transform({
  scale: 0.7,
  origin: "center top"
});

canvasing(draw);

let power = true;                          // Alternate between power supply voltages

setInterval (function(){
  if(!power)
    drawPowerSupply(6, 0);
  else
    drawPowerSupply(0, 0);

  power = !power;
}, 3000);