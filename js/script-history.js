// Since main_part also uses history.js, we have to be careful about the ids we call on that page
const pathHistory = window.location.pathname;
const page = pathHistory.split("/").pop();

showSlides();

showTab();

// Based on current value of slider, display the slide
function changeTab(i){
  document.getElementById("range").value = i;

  showTab();
  showSlides();
}

// Color the selected tab
function showTab(){

  if(page === "history"){
    let tabs = document.getElementsByClassName("tabs");
    let currentSlide = document.getElementById("range").value;

    for(let i = 0; i < tabs.length; i++){
      tabs[i].style.color = ""
    }

    tabs[currentSlide].style.color = "brown";
  }
}

// Display the current slide
function showSlides(){
  let currentSlide = document.getElementById("range").value;
  let firstSlide = document.getElementById("first");

  currentSlide = Math.round(currentSlide);

  // Push the div so our preferred slide is displayed
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
    case 4:
      firstSlide.style.marginLeft = "-40%";
      break;
    case 5:
      firstSlide.style.marginLeft = "-50%";
      break;
    case 6:
      firstSlide.style.marginLeft = "-60%";
      break;
    case 7:
      firstSlide.style.marginLeft = "-70%";
      break;
    case 8:
      firstSlide.style.marginLeft = "-80%";
      break;
    case 9:
      firstSlide.style.marginLeft = "-90%";
      break;
    case 10:
      firstSlide.style.marginLeft = "-100%";
      break;
  }
}