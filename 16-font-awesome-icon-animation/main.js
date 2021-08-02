function breakChain() {
  let chain = document.getElementById("chain");
  chain.innerHTML = "&#xf0c1";
  setTimeout(() => {
    chain.innerHTML = "&#xf127";
  }, 1000);
}
breakChain();
setInterval(breakChain, 2000);

function chargeBattery() {
  let battery = document.getElementById("battery");
  battery.innerHTML = "&#xf244";
  setTimeout(() => {
    battery.innerHTML = "&#xf243";
  }, 1000);
  setTimeout(() => {
    battery.innerHTML = "&#xf242";
  }, 2000);
  setTimeout(() => {
    battery.innerHTML = "&#xf241";
  }, 3000);
  setTimeout(() => {
    battery.innerHTML = "&#xf240";
  }, 4000);
}
chargeBattery();
setInterval(chargeBattery, 5000);

function hourGlassTip() {
  let hourglass = document.getElementById("hourGlass");
  hourglass.innerHTML = "&#xf251";
  setTimeout(() => {
    hourglass.innerHTML = "&#xf252";
  }, 1000);
  setTimeout(() => {
    hourglass.innerHTML = "&#xf253";
  }, 2000);
}
hourGlassTip();
setInterval(hourGlassTip, 3000);
