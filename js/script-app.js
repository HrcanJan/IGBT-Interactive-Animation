// Application Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Going up a slide
function plusSlides(n){
  showSlides(slideIndex += n);
}

// Going down a slide
function currentSlide(n){
  showSlides(slideIndex = n);
}

// Display n-th slide
function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let text = document.getElementsByClassName("myText");
  let dots = document.getElementsByClassName("dot");

  // If over the limit, go back to the first slide
  if(n > slides.length)
    slideIndex = 1;

  // If below the limit, got back to the slide maximum
  if(n < 1)
    slideIndex = slides.length;

  // Hide all slides and texts
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";  
    text[i].style.display = "none";
  }

  // Replace the active dot with an active one
  for(i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(" active", "");

  // Display n-th slide, text and dot
  slides[slideIndex - 1].style.display = "block";  
  text[slideIndex - 1].style.display = "block"; 
  dots[slideIndex - 1].className += " active";
}