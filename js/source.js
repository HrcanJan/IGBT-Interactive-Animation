const backdrop = document.querySelector("#backdrop");
const source = document.querySelector(".source");
const modal = document.querySelector("#modal");

let displaySource = false;                // Checks if the backdrop is displayed
let modalClick = false;             // Checks if modal is clicked

// If we are clicking on modal, it prevents us from closing it
modal.addEventListener("click", () => {
  modalClick = true;
})

// If we click on grey background, we want to close the backdrop
backdrop.addEventListener("click", () => {
  // If we are clicking on modal, it prevents us from closing it
  if(!modalClick){
    backdrop.style.display = "none";
    displaySource = false;
  }

  // We can close the backdrop now if we click on it
  modalClick = false;
});

// Toggle backdrop by clicking on the source icon
source.addEventListener("click", () => {
  if(displaySource)
    backdrop.style.display = "none";
  else 
    backdrop.style.display = "block";
  displaySource = !displaySource;
});