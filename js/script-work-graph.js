drawGraph(6, 6);

// Plotly graph
function drawGraph(gv, cv){
    const xValues = [0, 0.7, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];             // X hodnoty
  
    const trace1 = {
      x: xValues,
      y: [0, 0.3, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],   // Y hodnoty
      mode: 'lines',
      type: 'scatter',
      name: "<i>U</i><sub>GE1</sub>",
      line: {shape: 'spline'},
      showlegend: true
    };
  
    const trace2 = {
      x: xValues,
      y: [0, 0.5, 9.5, 10.5, 10.5, 10.5, 10.5, 10.5, 10.5, 10.5, 10.5, 10.5],
      mode: 'lines',
      type: 'scatter',
      name: "<i>U</i><sub>GE2</sub>",
      line: {shape: 'spline'},
      showlegend: true
    };
  
    const trace3 = {
      x: xValues,
      y: [0, 0.5, 20, 24, 25.6, 26, 26, 26, 26, 26, 26, 26],
      mode: 'lines',
      type: 'scatter',
      name: "<i>U</i><sub>GE3</sub>",
      line: {shape: 'spline'},
      showlegend: true
    };
  
    const tracev00 = {
      x: [0],
      y: [0],           // Body na základe X a Y hodnôt
      mode: 'markers',
      opacity: 0,
      showlegend: false
    };
  
    const tracev02 = {
      x: [2],
      y: [0.5],
      mode: 'markers',
      opacity: 0,
      showlegend: false
    };
  
    const tracev06 = {
      x: [6],
      y: [0.5],
      mode: 'markers',
      opacity: 0,
      showlegend: false
    };
  
    const tracev010 = {
      x: [10],
      y: [0.5],
      mode: 'markers',
      opacity: 0,
      showlegend: false
    };
  
    const tracev32 = {
      x: [2],
      y: [9.5],
      mode: 'markers',
      opacity: 0,
      showlegend: false
    };
  
    const tracev36 = {
      x: [6],
      y: [10.5],
      mode: 'markers',
      opacity: 0,
      showlegend: false
    };
  
    const tracev310 = {
      x: [10],
      y: [10.5],
      mode: 'markers',
      opacity: 0,
      showlegend: false
    };
  
    const tracev62 = {
      x: [2],
      y: [20],
      mode: 'markers',
      opacity: 0,
      showlegend: false
    };
  
    const tracev66 = {
      x: [6],
      y: [26],
      mode: 'markers',
      opacity: 0,
      showlegend: false
    };
  
    const tracev610 = {
      x: [10],
      y: [26],
      mode: 'markers',
      opacity: 0,
      showlegend: false
    };
  
    if(gv === 0){
      trace2.opacity = 0.5;
      trace3.opacity = 0.5;
  
      if(cv === 0)
        tracev00.opacity = 1;
      else if(cv === 2)
        tracev02.opacity = 1;
      else if(cv === 6)
        tracev06.opacity = 1;
      else
        tracev010.opacity = 1;
    }
    else if(gv === 3){
      trace1.opacity = 0.5;
      trace3.opacity = 0.5;
  
      if(cv === 0)
        tracev00.opacity = 1;
      else if(cv === 2)
        tracev32.opacity = 1;
      else if(cv === 6)
        tracev36.opacity = 1;
      else
        tracev310.opacity = 1;
    }
    else {
      trace2.opacity = 0.5;
      trace1.opacity = 0.5;
  
      if(cv === 0)
        tracev00.opacity = 1;
      else if(cv === 2)
        tracev62.opacity = 1;
      else if(cv === 6)
        tracev66.opacity = 1;
      else
        tracev610.opacity = 1;
    }

    let layout = {
        xaxis: {
            title: {
                text: '<i>U</i><sub>ce</sub>',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                }
            },
        },
        yaxis: {
            title: {
                text: '<i>I</i><sub>c</sub>',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                }
            }
        }
    };
  
    let data = [trace1, trace2, trace3,
                tracev00, tracev02, tracev06, tracev010,
                tracev32, tracev36, tracev310,
                tracev62, tracev66, tracev610];

    Plotly.newPlot('graphDiv', data, layout, {staticPlot: true});
  }