let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  let activeSlide = document.getElementsByClassName("active-slide")[0];
  activeSlide.classList.remove('active-slide');

  let activeDot = document.getElementsByClassName("active-dot")[0];
  activeDot.classList.remove('active-dot');

  slides[slideIndex-1].className += " active-slide";
  dots[slideIndex-1].className += " active-dot";
}