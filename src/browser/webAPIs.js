// import { NoEmitOnErrorsPlugin } from "webpack";
import "../styles.scss";
const clear = document.querySelector(".fa-times");
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
  // const nodes = playGround.hasChildNodes;
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
    createDiv("span", playGround, "targetImage", "image");
  }
}

function handleMouseOver(e) {
  const axisX = document.querySelector(".axisX");
  const axisY = document.querySelector(".axisY");
  const target = document.querySelector(".target");
  const targetImage = document.querySelector(".targetImage");

  const x = e.clientX;
  const y = e.clientY;

  if (axisX && axisY) {
    axisY.style.left = `${x}px`;
    axisX.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    target.innerHTML = `<br/>x:${x} y:${y}`;
    targetImage.style.left = `${x}px`;
    targetImage.style.top = `${y}px`;
    targetImage.innerHTML = `<i class="fa fa-bullseye"></i>`;
  }
}

// events
coordinates.addEventListener("click", handleClickCoordinates);

playGround.addEventListener("mouseover", handleMouseOver);

clear.addEventListener("click", clearPlayground);

// window.addEventListener("resize", () => {
//   console.log(window.screen.height);
//   console.log(window.screen.width);
// });
