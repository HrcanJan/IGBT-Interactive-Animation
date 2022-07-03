let voltage = 6;                    // Default collector voltage
let gate = 6;                       // Default gate voltage

let electronCount = 4;          // Electrons per wave
let gateElectronCount = 6;      // Electrons on the game

let startUpDelay = 3000;        // Delay the animation for 3 seconds

let animanip = [];              // Used for manipulating animation, like using play and pause
let protonGateArray;            // Proton array at the gate
let electronAreaArray;          // N-channel created by attracted electrons
let nionArray;                  // Negative ions array
let pionArray;                  // Positive ions array

startUpAnimation();

// Start the insulated Gate animation
function startUpAnimation(){
  protonGateArray = [];

  for(let i = 0; i < gateElectronCount; i++){
    let proton = drawProtonField();
    proton.opacity(0);
    proton.move(block * 5 + 12 + i * ((block * 5) / 6), 395);                             // Move to the position
    protonGateArray.push(proton);                                                         // Push to the array
  }

  electronAreaArray = [];

  for(let i = 0; i < gateElectronCount; i++){
    let electronArea = draw.group()                                                       // N- Formed
    electronArea.rect(block * 5 - 1, 20).move(block * 5, 301).fill("#58d3fc"); 
    electronArea.rect(block - 1, 20).move(block, 301).fill("#58d3fc"); 
    electronArea.rect(block - 1, 20).move(block * 13, 301).fill("#58d3fc"); 
    electronArea.opacity(0);
    electronAreaArray.push(electronArea);
  }

  nionArray = [];

  for(let i = 0; i < gateElectronCount; i++){
    let electron = drawElectronField();
    if(i % 2 === 0)
      electron.move(block * 5 + 12 + i * ((block * 5) / 6), 340);                         // Mix positive and negative ions
    else 
      electron.move(block * 5 + 12 + i * ((block * 5) / 6), 310);                         // Mix positive and negative ions
    nionArray.push(electron);
  }

  pionArray = [];

  for(let i = 0; i < gateElectronCount; i++){
    let proton = drawProtonField();
    if(i % 2 === 0)
      proton.move(block * 5 + 12 + i * ((block * 5) / 6), 310);                            // Mix positive and negative ions
    else 
      proton.move(block * 5 + 12 + i * ((block * 5) / 6), 340);                            // Mix positive and negative ions
    pionArray.push(proton);
  }

  // Gate animation
  forwardAnimationGate();

  // Apply given voltage to power supply
  drawPowerSupply(6, 6);

  // Animate protons and electrons
  electronAnimation();
}

// Start the inside transistor electron animation
function electronAnimation(){
  // Electron Animation
  for(let k = 0; k < 6; k++){

    let electronArray = [];        // Electron array

    for(let i = 0; i < electronCount; i++){
      let electron = drawElectron(draw);
      electron.move(-100, 60);
      electronArray.push(electron);
    }

    animanip[k] = [];

    // Animation
    for(let j = 0; j < electronCount; j++){
      animanip[k][j] = electronArray[j].animate({
        duration: (k < 4) ? 2400 : 2750,                        // First 4 electrons move slightly faster  
        delay: (j * 600) + ((k % 2) * 300) + startUpDelay,      // Starts slightly later
        when: 'now',
      }).during(function(pos){
        let eased_pos = SVG.easing['-'](pos);                   // Smooth animation
        let m = path[k].matrixify();                            // Follow a path
        let p = new SVG.Point(path[k].pointAt(eased_pos * pathLength[k])).transform(m);
        electronArray[j].move(p.x - 10, p.y - 10);              // Center 
      }).loop();
    }
  }

  // Proton Animation
  for(let k = 0; k < 6; k++){
    let protonArray = [];          // Proton array

    for(let i = 0; i < electronCount; i++){
      let proton = drawProton(draw);
      proton.move(-100, 60);
      protonArray.push(proton);
    }

    animanip[k + 6] = [];

    for(let j = 0; j < electronCount; j++){
      animanip[k + 6][j] = protonArray[j].animate({
        duration: (k < 4) ? 2600 : 2200,
        delay: (j * 600) + (((k + 1) % 2) * 300) + startUpDelay,
        when: 'now',
      }).during(function(pos){
        let eased_pos = SVG.easing['-'](pos);
        let m = path[k + 6].matrixify();
        let p = new SVG.Point(path[k + 6].pointAt(eased_pos * pathLength[k + 6])).transform(m);
        protonArray[j].move(p.x - 10, p.y - 10);
      }).loop();
    }
  }
}

// Show/hide labels
function labelChange(){
  
  canvasLabeling.clear();
  if(!label)
    labelDraw();

  label =! label;
  checkLanguageWork();
}

// Pause or play animation
function alterAnimation(){

  if(pause)
    playAnimation();

  else
    pauseAnimation();

  pause = !pause;
  checkLanguageWork();
}

// Display or hide legend
function legendChange(){

  if(legend)
    document.getElementById("legend").style.display = 'none';
    
  else
    document.getElementById("legend").style.display = 'block';

  legend = !legend;
  checkLanguageWork();
}

// Stop the animation
function stopAnimation(){
  for(let k = 0; k < 6; k++)
    for(let i = 0; i < electronCount; i++){
      animanip[k][i].timeline().stop();
      animanip[k + 6][i].timeline().stop();
    }
}

// Pause the animation
function pauseAnimation(){
  for(let k = 0; k < 6; k++)
    for(let i = 0; i < electronCount; i++){
      animanip[k][i].timeline().pause();
      animanip[k + 6][i].timeline().pause();
    }
}

// Resume the animation
function playAnimation(){
  for(let k = 0; k < 6; k++)
    for(let i = 0; i < electronCount; i++){
      animanip[k][i].timeline().play();
      animanip[k + 6][i].timeline().play();
    }
}

// Alter the gate voltage
function changeGateVoltage(){
  for(let k = 0; k < 6; k++)
    for(let i = 0; i < electronCount; i++){
      if(gate === 3){
        if(i % 2 === 1){
          animanip[k][i].animate({
            duration: 1000,
            delay: 0,
            when: 'now',
          }).attr({ opacity: '0'});

          animanip[k + 6][i].animate({
            duration: 1000,
            delay: 0,
            when: 'now',
          }).attr({ opacity: '0'});
        }
      }
      
      if(gate === 6){
        if(i % 2 === 1){
          animanip[k][i].animate({
            duration: 1000,
            delay: 0,
            when: 'now',
          }).attr({ opacity: '1'});

          animanip[k + 6][i].animate({
            duration: 1000,
            delay: 0,
            when: 'now',
          }).attr({ opacity: '1'});
        }
      }
    }
}

// Gate voltage = 6V
function forwardAnimationGate(){
  for(let j = 0; j < 6; j++){

    protonGateArray[j].animate({
      duration: 1500,
      delay: 0,
      when: 'now',
    }).attr({ opacity: '1' })

    if(j % 2 === 1){

      nionArray[j].animate({
        duration: 1500,
        delay: 500,
        when: 'now',
      }).move(block * 5 + 12 + j * ((block * 5) / 6), 340);
  
      pionArray[j].animate({
        duration: 1500,
        delay: 500,
        when: 'now',
      }).move(block * 5 + 12 + j * ((block * 5) / 6), 310);
    }
  }

  // Electron area is at full height
  for(let j = 0; j < 2; j++)
    electronAreaArray[j].animate({
      duration: 1500,
      delay: 1500,
      when: 'now',
    }).attr({ opacity: '1' }).height(20);
}

// Gate voltage = 3V
function midAnimationGate(){

  // Electron area is only halfway
  for(let i = 0; i < 2; i++)
    electronAreaArray[i].animate({
      duration: 1500,
      delay: 1500,
      when: 'now',
    }).attr({ opacity: '1'}).height(10);
    
  for(let i = 0; i < 6; i++){
    if(i % 2 === 1)
      protonGateArray[i].animate({
        duration: 2000,
        delay: 0,
        when: 'now',
      }).attr({ opacity: '0' })
    else
      protonGateArray[i].animate({
        duration: 2000,
        delay: 0,
        when: 'now',
      }).attr({ opacity: '1' })

    if(i % 2 === 1){

      if(i === 3){
        nionArray[i].animate({
          duration: 1500,
          delay: 500,
          when: 'now',
        }).move(block * 5 + 12 + i * ((block * 5) / 6), 310);

        pionArray[i].animate({
          duration: 1500,
          delay: 500,
          when: 'now',
        }).move(block * 5 + 12 + i * ((block * 5) / 6), 340);
        continue;
      }
      
      nionArray[i].animate({
        duration: 1500,
        delay: 500,
        when: 'now',
      }).move(block * 5 + 12 + i * ((block * 5) / 6), 340);

      pionArray[i].animate({
        duration: 1500,
        delay: 500,
        when: 'now',
      }).move(block * 5 + 12 + i * ((block * 5) / 6), 310);
    }  
  }
}

// Gate voltage = 0 
function reverseAnimationGate(){

  // Electron area disappears
  for(let i = 0; i < 2; i++)
    electronAreaArray[i].animate({
      duration: 1500,
      delay: 1500,
      when: 'now',
    }).attr({ opacity: '0' })
    
  for(let i = 0; i < 6; i++){
    protonGateArray[i].animate({
      duration: 2000,
      delay: 0,
      when: 'now',
    }).attr({ opacity: '0' })

    if(i % 2 === 1){
      nionArray[i].animate({
        duration: 1500,
        delay: 500,
        when: 'now',
      }).move(block * 5 + 12 + i * ((block * 5) / 6), 310);

      pionArray[i].animate({
        duration: 1500,
        delay: 500,
        when: 'now',
      }).move(block * 5 + 12 + i * ((block * 5) / 6), 340);
    }  
  }
}

// Collector voltage = 6V
function fastVoltage(){
  for(let k = 0; k < 6; k++)
    for(let i = 0; i < electronCount; i++){
      (i < 4) ? animanip[k][i].timeline().speed(1) : animanip[k][i].timeline().speed(1);
      (i < 4) ? animanip[k + 6][i].timeline().speed(1) : animanip[k + 6][i].timeline().speed(1);
    }
}

// Collector voltage = 3V
function slowVoltage(){
  for(let k = 0; k < 6; k++)
    for(let i = 0; i < electronCount; i++){
      (i < 4) ? animanip[k][i].timeline().speed(2/3) : animanip[k][i].timeline().speed(2/3);
      (i < 4) ? animanip[k + 6][i].timeline().speed(2/3) : animanip[k + 6][i].timeline().speed(2/3);
    }
}

// If gate or collector voltage has been changed, the function is called
function changeVoltage(){
  let newgate = parseInt(document.getElementById("Uge").value);         // New gate voltage value
  let newvoltage = parseInt(document.getElementById("Uce").value);      // New collector voltage value

  // A bunch of logic cases
  if(newgate === 0 && gate !== 0){
    reverseAnimationGate();
    stopAnimation();
  }

  if(newgate === 6 && gate !== 6){
    forwardAnimationGate();
    gate = newgate;
    changeGateVoltage();

    if(newvoltage !== 0)
      playAnimation();
  }

  if(newgate === 3 && gate !== 3){
    midAnimationGate();
    gate = newgate;
    changeGateVoltage();

    if(newvoltage !== 0)
      playAnimation();
  }

  if(newvoltage === 0 && voltage !== 0)
    stopAnimation()

  if(newvoltage !== 0 && voltage !== newvoltage)
    if(newgate !== 0)
      playAnimation();

  if(newvoltage >= 6 && voltage < 6)
    fastVoltage();

  if(newvoltage === 2 && voltage !== 2)
    slowVoltage();

  // Apply the changes and draw the graphs and indicators on power supplies
  gate = newgate;
  voltage = newvoltage;
  drawGraph(gate, voltage)
  drawPowerSupply(gate, voltage);
}