let btnRight = document.querySelector(".btnRight");
let btnLeft = document.querySelector(".btnLeft");
let slides = document.querySelectorAll("img");
let i = 0;
btnRight.addEventListener("click", () => {
  ++i;
  if (i >= slides.length) {
    slides[i - 1].classList.remove("block");
    i = 0;
    slides[i].classList.add("block");
  } else {
    slides[i - 1].classList.remove("block");
    slides[i].classList.add("block");
  }
});
btnLeft.addEventListener("click", () => {
  --i;
  if (i < 0) {
    slides[i + 1].classList.remove("block");
    i = slides.length - 1;
    slides[i].classList.add("block");
  } else {
    slides[i + 1].classList.remove("block");
    slides[i].classList.add("block");
  }
});
