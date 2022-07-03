showSlidesText();

// This code is combination of both script-history.js and script-app.js
function showSlidesText(){
  let text = document.getElementsByClassName("myText");
  let currentSlide = document.getElementById("range").value;
  let firstSlide = document.getElementById("first");

  currentSlide = Math.round(currentSlide);

  switch(currentSlide){
    case 0:
      firstSlide.style.marginLeft = "0%";
      break;
    case 1:
      firstSlide.style.marginLeft = "-10%";
      break;
    case 2:
      firstSlide.style.marginLeft = "-20%";
      break;
    case 3:
      firstSlide.style.marginLeft = "-30%";
      break;
  }

  for(let i = 0; i < text.length; i++)
    text[i].style.display = "none";

  text[currentSlide].style.display = "block";
}