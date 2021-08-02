// listen for submit
document.querySelector("#zipForm").addEventListener("submit", getLocationInfo);
// listen for delete
document.querySelector("body").addEventListener("click", deleteLocation);

function getLocationInfo(e) {
  e.preventDefault();
  const zip = document.querySelector(".zip").value;
  // make request
  fetch(`https://api.zippopotam.us/bd/${zip}`)
    .then((res) => {
      if (res.status !== 200) {
        showIcon("remove");
        document.querySelector(
          "#output"
        ).innerHTML = `<article class="message is-danger"> <div class="message-body" style="border: 1px solid red;"> Invalid zipcode, please enter a valid one</div></article>`;
        throw Error(res.statusText);
      } else {
        showIcon("check");
        return res.json();
      }
    })
    .then((data) => {
      // show location info
      let output = "";
      data.places.forEach((place) => {
        output += `
            <article class="message is-primary">
    <div class="message-header">
        <p>location info</p>
        <button class="delete"></button>
        
    </div>
    <div class="message-body">
        <ul>
            <li><strong>City: </strong>${place["place name"]}</li>
            <li><strong>State: </strong>${place["state"]}</li>
            <li><strong>Longitude: </strong>${place["longitude"]}</li>
            <li><strong>Latitude: </strong>${place["latitude"]}</li>
        </ul>
    </div>
</article>
            `;
      });
      document.querySelector("#output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}
//  show check for remove icon
function showIcon(icon) {
  // clear items
  document.querySelector(".icon-remove").style.display = "none";
  document.querySelector(".icon-check").style.display = "none";
  //show correct icon
  document.querySelector(`.icon-${icon}`).style.display = "inline-flex";
}
// delete location box
function deleteLocation(e) {
  if (e.target.className === "delete") {
    document.querySelector(".message").remove();
    document.querySelector(".zip").value = "";
    document.querySelector(".icon-check").remove();
  }
}
