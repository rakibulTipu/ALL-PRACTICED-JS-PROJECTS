const initApp = () => {
  const filterInput = document.getElementById("filterInput");
  filterInput.addEventListener("keyup", filterNames);
};
document.addEventListener("DOMContentLoaded", initApp);

const filterNames = () => {
  // get the value from input box
  const inputValue = document.getElementById("filterInput").value.toLowerCase();
  // get the ul
  const ul = document.getElementById("names");
  // get the li from ul
  const li = ul.querySelectorAll(".collection-item a");

  li.forEach((value) => {
    if (value.innerHTML.toLowerCase().indexOf(inputValue) > -1) {
      value.style.display = "block";
    } else {
      value.style.display = "none";
    }
  });

  console.log(inputValue);
};
