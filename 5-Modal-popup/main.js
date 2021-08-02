const modalBtn = document.getElementById("modalBtn");
const modal = document.getElementById("simpleModal");
const closeBtn = document.querySelector(".closeBtn");

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
window.addEventListener("click", clickOutside);
function clickOutside(e) {
  if (e.target === modal) modal.style.display = "none";
}
