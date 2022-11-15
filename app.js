const gokart = document.querySelector(".gokart__menu");
const fiesta = document.querySelector(".fiesta__menu");
const mondeo = document.querySelector(".mondeo__menu");
const empty = document.querySelector(".emptyPlace1");
const emptyTwo = document.querySelector(".emptyPlace2");
const mustang = document.querySelector(".mustang__menu");
const arrowRight = document.querySelector(".arrow__right");
let test;

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
  if (slide.classList.contains("hidden")) {
    startSlide.classList.remove("hidden");
  }
};
const showVideoFiesta = () => {
  const imageFiesta = document.querySelector("#fiestaPhotoId");
  imageFiesta.classList.toggle("hidden");
  let buttonText = document.querySelector(".fiesta__button");
  if (imageFiesta.classList.contains("hidden")) {
    buttonText.innerText = "Look at the photo";
    arrowRight.classList.add("hidden");
  } else {
    buttonText.innerText = "Look at the video";
    arrowRight.classList.remove("hidden");
  }

  const videoFiesta = document.querySelector(".fiesta__video");
  videoFiesta.classList.toggle("hidden");
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
  const button = document.querySelector(".fiesta__button");
  button.addEventListener("click", showVideoFiesta);
  if (slide.classList.contains("hidden")) {
    startSlide.classList.remove("hidden");
  }
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
  if (slide.classList.contains("hidden")) {
    startSlide.classList.remove("hidden");
  }
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
  if (slide.classList.contains("hidden")) {
    startSlide.classList.remove("hidden");
  }
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
const sliderFiesta = () => {
  let imageFiesta = document.querySelector("#fiestaPhotoId");
  if (imageFiesta.classList.contains("fiesta__image1")) {
    imageFiesta.setAttribute("src", "img/fiesta2.jpg");
    imageFiesta.setAttribute("class", "fiesta__image2");
  } else if (imageFiesta.classList.contains("fiesta__image2")) {
    imageFiesta.setAttribute("src", "img/fiesta3.jpg");
    imageFiesta.setAttribute("class", "fiesta__image3");
  } else if (imageFiesta.classList.contains("fiesta__image3")) {
    imageFiesta.setAttribute("src", "img/fiesta4.jpg");
    imageFiesta.setAttribute("class", "fiesta__image4");
  } else if (imageFiesta.classList.contains("fiesta__image4")) {
    imageFiesta.setAttribute("src", "img/fiesta5.jpg");
    imageFiesta.setAttribute("class", "fiesta__image5");
  } else if (imageFiesta.classList.contains("fiesta__image5")) {
    imageFiesta.setAttribute("src", "img/fiesta7.jpg");
    imageFiesta.setAttribute("class", "fiesta__image7");
  } else if (imageFiesta.classList.contains("fiesta__image7")) {
    imageFiesta.setAttribute("src", "img/fiesta8.jpg");
    imageFiesta.setAttribute("class", "fiesta__image8");
  } else if (imageFiesta.classList.contains("fiesta__image8")) {
    imageFiesta.setAttribute("src", "img/fiesta9.jpg");
    imageFiesta.setAttribute("class", "fiesta__image9");
  } else if (imageFiesta.classList.contains("fiesta__image9")) {
    imageFiesta.setAttribute("src", "img/fiesta10.jpg");
    imageFiesta.setAttribute("class", "fiesta__image10");
  } else if (imageFiesta.classList.contains("fiesta__image10")) {
    imageFiesta.setAttribute("src", "img/fiesta11.jpg");
    imageFiesta.setAttribute("class", "fiesta__image11");
  } else if (imageFiesta.classList.contains("fiesta__image11")) {
    imageFiesta.setAttribute("src", "img/fiesta12.jpg");
    imageFiesta.setAttribute("class", "fiesta__image12");
  } else if (imageFiesta.classList.contains("fiesta__image12")) {
    imageFiesta.setAttribute("src", "img/fiesta13.jpg");
    imageFiesta.setAttribute("class", "fiesta__image13");
  } else {
    imageFiesta.setAttribute("src", "img/fiesta1.jpg");
    imageFiesta.setAttribute("class", "fiesta__image1");
  }
};
const buttonOfSliderFiesta = () => {
  arrowRight.addEventListener("click", sliderFiesta);
};

show();
changeText();
buttonOfSliderFiesta();
