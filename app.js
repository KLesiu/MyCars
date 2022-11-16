const gokart = document.querySelector(".gokart__menu");
const fiesta = document.querySelector(".fiesta__menu");
const mondeo = document.querySelector(".mondeo__menu");
const empty = document.querySelector(".emptyPlace1");
const emptyTwo = document.querySelector(".emptyPlace2");
const mustang = document.querySelector(".mustang__menu");
const arrowRight = document.querySelector(".arrow__right");
let test;

let switchSlide = [gokart, fiesta, mondeo, mustang];
let fiestaArraryBasic;
[
  (story1 = `Fast,formidable and reliable... It isnt Fiesta"s features but key features for my dream car. This Ford has only one from them, it is very reliable. I have driven ten thousands kilometres with this car since I bought it. Fiesta has never let me down. We drove together at the mountains, at the forests and at the biggest polish cities. I always got to the target.`),
  (story2 = `In this section I want to tell you about my fiesta driving experience during the day and at night. I have driven at different times of the day since I started driving further than in the Sieradz area`),
  (story3 = `What about driving a fiesta at night? Hmm... I think it's a small flaw, at night the visibility is the worst. The front lights are not as bad as the rear lights. When I drive at night, I sometimes have to back up, but the taillights give very little light, so I often have to open the door or window and look from outside the car. It's really annoying`),
  (story4 = `What about driving fiesta during the day? In my opinion is"s perfect for the young driver. I have very good visibility so I can drive very comfortable and safe.`),
  (story5 = `In this chapter I want to tell about funny and maybe sometimes dangerous stories from my adventures with Fiesta`),
  (story6 = `When I was driving to my flat i heard weird sound from the floor of car. I ignored it and i was my fault. Three minutes later I could not put in 2rd gear. Then I stayed next to the petrol station because I wanted to think what i can do. When I was staying, I called to my friend and described him this situation. He said me that it will be gear box line. He advised me to drive to home and make an appointment with a mechanic. Next day after visit to mechanic I had car ready to drive. Yes, fortunately it was just the gearbox line that fell out of place. I breathed a sigh of relief, because I was afraid of high repair costs if, for example, the gearbox had to be replaced`),
  (story7 = `One day, Fiesta met Pigeon. I was driving to school when I heard loud bang.On the photo you can see the result hah.`),
  (story8 = `On this photo you can see how polish people are dishonest. I remember that I was very pissed off when I saw this. I have not found the culprit of this happening.`),
  (story9 = `And this was a problem I lived with for many weeks. At first, suspicion fell on a leak from the oil pan. In the end, it turned out that the fact is a leak but from one of the hoses from the power steering. After replacing the hose with a new one, the problem disappeared.
  `),
  (story10 = `At the very beginning of using this car, unfortunately, I came across the most difficult repair so far. After moving the car too fast with a noticeable sound from the clutch, it turned out that it was completely to be replaced. The cost of such a repair was about half the amount I paid for the purchase of the Fiesta.
  `),
  (story11 = `Considering all the repairs and incidents that I had with this car, I still rate it great. On the right you can see a photo from first day of Fiesta with me.
  `),
  (story12 = `At the end you can see a first fiesta photo which I did.`),
];
let fiestaArrary = [
  "",
  story1,
  story2,
  story3,
  story4,
  story5,
  "",
  story6,
  story7,
  story8,
  story9,
  story10,
  story11,
  story12,
];

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
const textSwitcherFiesta = () => {
  let fiestaImageNumber = document.querySelector("#fiestaPhotoId");
  let fiestaParagraph = document.querySelector(".fiestaParagraph");
  for (i = 0; i < 13; i++) {
    if (fiestaImageNumber.classList.contains("fiesta__image" + i)) {
      fiestaParagraph.innerText = fiestaArrary[i];
    }
  }
};
const switchText = () => {
  arrowRight.addEventListener("click", textSwitcherFiesta);
};
show();
changeText();
buttonOfSliderFiesta();
switchText();
