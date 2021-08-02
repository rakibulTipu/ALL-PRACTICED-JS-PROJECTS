const questions = [
  { question: "First Name" },
  { question: "Last Name" },
  { question: "Email address", pattern: /\S+@\S+\.\S+/ },
  { question: "Password", type: "password" },
];
const shakeTime = 100; // shake transition time
const switchTime = 200; // transition between questions
let position = 0;
const formBox = document.querySelector("#form-box");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const inputGroup = document.querySelector("#input-group");
const inputField = document.querySelector("#input-field");
const inputLabel = document.querySelector("#input-label");
const inputProgress = document.querySelector("#input-progress");
const progress = document.querySelector("#progress-bar");
// EVENTS
document.addEventListener("DOMContentLoaded", getQustion);
nextBtn.addEventListener("click", validate);
prevBtn.addEventListener("click", () => {
  position = position - 1;
  getQustion();
});
inputField.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    validate();
  }
});
// Functions
function getQustion() {
  inputLabel.innerHTML = questions[position].question;
  inputField.type = questions[position].type || "text";
  inputField.value = questions[position].answer || "";
  inputField.focus();
  progress.style.width = position ? "fas fa-arrow-left" : "fas fa-user";
  showQuestion();
}
function showQuestion() {
  inputGroup.style.opacity = 1;
  inputProgress.style.transition = "";
  inputProgress.style.width = "100%";
}
function hideQuestion() {
  inputGroup.style.opacity = 0;
  inputLabel.style.marginLeft = 0;
  inputProgress.style.width = 0;
  inputProgress.style.transition = 0;
  inputGroup.style.border = null;
}
function transform(x, y) {
  formBox.style.transform = `translate(${x}px, ${y}px)`;
}
function validate() {
  if (!inputField.value.match(questions[position].pattern || /.+/)) {
    inputFail();
  } else {
    inputPass();
  }
}
function inputFail() {
  formBox.className = "error";
  for (let i = 0; i < 6; i++) {
    setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);
    setTimeout(transform, shakeTime * 6, 0, 0);
    inputField.focus();
  }
}
function inputPass() {
  formBox.className = "";
  setTimeout(transform, shakeTime * 0, 0, 10);
  setTimeout(transform, shakeTime * 1, 0, 0);
  questions[position].answer = inputField.value;
  position++;
  if (questions[position]) {
    hideQuestion();
    getQustion();
  } else {
    hideQuestion();
    formBox.className = "close";
    progress.style.width = "100%";
    formComplete();
  }
}
function formComplete() {
  const h1 = document.createElement("h1");
  h1.classList.add("end");
  h1.appendChild(
    document.createTextNode(
      `Thanks ${questions[0].answer} You are registered and will get an email shortly`
    )
  );
  setTimeout(() => {
    formBox.parentElement.appendChild(h1);
    setTimeout(() => {
      h1.style.opacity = 1;
    }, 50);
  }, 1000);
}
