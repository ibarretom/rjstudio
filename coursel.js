let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let elemento = document.getElementsByClassName("mySlides");

  for (i = 0; i < elemento.length; i++) {
    elemento[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > elemento.length) {slideIndex = 1}
  elemento[slideIndex-1].style.display = "flex";

  setTimeout(carousel, 4000); // Change image every 2 seconds 
}
