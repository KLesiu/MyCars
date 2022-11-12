const gokart = document.querySelector(".gokart__menu");
let switchSide;

const slide = () => {
  const slide = document.querySelector(".gokart");
  const prevSlide = document.querySelector(".start");
  prevSlide.classList.add("hidden");
  slide.classList.remove("hidden");
};

const change = () => {
  gokart.addEventListener("click", slide);
};
change();
