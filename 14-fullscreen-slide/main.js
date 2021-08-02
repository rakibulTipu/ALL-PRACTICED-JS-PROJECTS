const sliderImages = document.querySelectorAll(".slide"),
  leftArrow = document.querySelector("#arrow-left"),
  rightArrow = document.querySelector("#arrow-right");
let current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}
function showRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}
leftArrow.addEventListener("click", () => {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});
rightArrow.addEventListener("click", () => {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  showRight();
});
startSlide();
