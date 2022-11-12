const gokart = document.querySelector(".gokart__menu");
const fiesta = document.querySelector(".fiesta__menu");
const mondeo = document.querySelector(".mondeo__menu");
const empty = document.querySelectorAll(".emptyPlace");
const mustang = document.querySelector(".mustang__menu");

let switchSlide = [gokart, fiesta, mondeo, mustang];

const change = () => {
  const slide = document.querySelector(".gokart");
  slide.classList.toggle("hidden");
  const startSlide = document.querySelector(".start");
  startSlide.classList.add("hidden");
  const slideFiesta = document.querySelector(".fiesta");
  slideFiesta.classList.add("hidden");
};
const show = () => {
  switchSlide[0].addEventListener("click", change);
};
const changeOne = () => {
  const slide = document.querySelector(".fiesta");
  slide.classList.toggle("hidden");
  const startSlide = document.querySelector(".start");
  startSlide.classList.add("hidden");
  const slideGokart = document.querySelector(".gokart");
  slideGokart.classList.add("hidden");
};
const showOne = () => {
  switchSlide[1].addEventListener("click", changeOne);
};
show();
showOne();
