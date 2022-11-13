const gokart = document.querySelector(".gokart__menu");
const fiesta = document.querySelector(".fiesta__menu");
const mondeo = document.querySelector(".mondeo__menu");
const empty = document.querySelector(".emptyPlace1");
const emptyTwo = document.querySelector(".emptyPlace2");
const mustang = document.querySelector(".mustang__menu");

let switchSlide = [gokart, fiesta, mondeo, mustang];

const change = () => {
  const slide = document.querySelector(".gokart");
  slide.classList.toggle("hidden");
  const startSlide = document.querySelector(".start");
  startSlide.classList.add("hidden");
  const slideFiesta = document.querySelector(".fiesta");
  slideFiesta.classList.add("hidden");
  const slideMondeo = document.querySelector(".mondeo");
  slideMondeo.classList.add("hidden");
  const slideMustang = document.querySelector(".mustang");
  slideMustang.classList.add("hidden");
};

const changeOne = () => {
  const slide = document.querySelector(".fiesta");
  slide.classList.toggle("hidden");
  const startSlide = document.querySelector(".start");
  startSlide.classList.add("hidden");
  const slideGokart = document.querySelector(".gokart");
  slideGokart.classList.add("hidden");
  const slideMondeo = document.querySelector(".mondeo");
  slideMondeo.classList.add("hidden");
  const slideMustang = document.querySelector(".mustang");
  slideMustang.classList.add("hidden");
};

const changeTwo = () => {
  const slide = document.querySelector(".mondeo");
  slide.classList.toggle("hidden");
  const startSlide = document.querySelector(".start");
  startSlide.classList.add("hidden");
  const slideGokart = document.querySelector(".gokart");
  slideGokart.classList.add("hidden");
  const slideFiesta = document.querySelector(".fiesta");
  slideFiesta.classList.add("hidden");
  const slideMustang = document.querySelector(".mustang");
  slideMustang.classList.add("hidden");
};

const changeThree = () => {
  const slide = document.querySelector(".mustang");
  slide.classList.toggle("hidden");
  const startSlide = document.querySelector(".start");
  startSlide.classList.add("hidden");
  const slideGokart = document.querySelector(".gokart");
  slideGokart.classList.add("hidden");
  const slideFiesta = document.querySelector(".fiesta");
  slideFiesta.classList.add("hidden");
  const slideMondeo = document.querySelector(".mondeo");
  slideMondeo.classList.add("hidden");
};

const showText = () => {
  const emptyPlaceText = document.querySelector(".emptyPlace1");
  emptyPlaceText.innerText = "I have not idea yet";
};
const showTextSecond = () => {
  const emptyPlaceText = document.querySelector(".emptyPlace2");
  emptyPlaceText.innerText = "I think Ford Focus Rs or Audi A7 sound great";
};

const changeText = () => {
  empty.addEventListener("click", showText);
  emptyTwo.addEventListener("click", showTextSecond);
};
const show = () => {
  switchSlide[0].addEventListener("click", change);
  switchSlide[1].addEventListener("click", changeOne);
  switchSlide[2].addEventListener("click", changeTwo);
  switchSlide[3].addEventListener("click", changeThree);
};

show();
changeText();
