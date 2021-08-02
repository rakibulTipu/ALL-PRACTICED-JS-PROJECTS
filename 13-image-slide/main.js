let i = 0;

let time = 3000;
let images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"];

// change image
function changeImage() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImage()", time);
}
window.onload = changeImage;
