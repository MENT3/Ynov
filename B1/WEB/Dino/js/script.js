function toggleHiddenClass(){
  document.querySelector("nav ul").classList.toggle("visible");
}

document.querySelector("#imgBurger").addEventListener("click", toggleHiddenClass );
