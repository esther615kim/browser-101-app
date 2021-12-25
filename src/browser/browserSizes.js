import { NoEmitOnErrorsPlugin } from "webpack";
import "../styles.scss";
const wrapper = document.querySelector(".wrapper");
const faTimes = document.querySelector(".fa-times");
const coordinates = document.getElementById("coordinates");
const playGround = document.querySelector(".play-ground");

// create div
function createDiv(element, parent, className, text) {
  const newEl = document.createElement(element);
  newEl.classList.add(className);
  if (text) newEl.innerText = text;
  parent.appendChild(newEl);
  // const content = document.createTextNode(text);
  // newEl.appendChild(text);
  // newEl.className.add("inactive");
  console.log(playGround);
}

function clearPlayground() {
  if (playGround.hasChildNodes()) {
    playGround.childNodes.forEach((child) => playGround.removeChild(child));
    console.log("childnodes", playGround.childNodes);
  }
}

// exercise: coordinates
function handleClickCoordinates() {
  // clear
  if (playGround.hasChildNodes()) clearPlayground();
  // add items
  if (!playGround.hasChildNodes()) {
    playGround.classList.toggle("bgBlack");
    createDiv("span", playGround, "target", "target");
    createDiv("div", playGround, "axisX");
    createDiv("div", playGround, "axisY");
  }
}

// events
coordinates.addEventListener("click", handleClickCoordinates);
faTimes.addEventListener("click", clearPlayground);
// window.addEventListener("resize", () => {
//   console.log(window.screen.height);
//   console.log(window.screen.width);
// });

