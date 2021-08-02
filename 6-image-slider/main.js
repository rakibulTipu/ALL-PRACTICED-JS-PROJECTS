const initApp = () => {
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const auto = false;
  const intervalTime = 5000;
  let slideInterval;
  nextBtn.addEventListener("click", () => {
    nextSlide();
    if (!auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  });
  prevBtn.addEventListener("click", () => {
    prevSlide();
    if (!auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  });

  if (!auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
};
document.addEventListener("DOMContentLoaded", initApp);

// next slide
const nextSlide = () => {
  const slides = document.querySelectorAll(".slide");
  const current = document.querySelector(".current");
  current.classList.remove("current");
  current.nextElementSibling
    ? current.nextElementSibling.classList.add("current")
    : slides[0].classList.add("current");
};

// previous slide
const prevSlide = () => {
  const slides = document.querySelectorAll(".slide");
  const current = document.querySelector(".current");
  current.classList.remove("current");
  current.previousElementSibling
    ? current.previousElementSibling.classList.add("current")
    : slides[slides.length - 1].classList.add("current");
};
