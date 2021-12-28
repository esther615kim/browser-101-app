// import { NoEmitOnErrorsPlugin } from "webpack";
import "../styles.scss";
const clear = document.querySelector("#clear");
const scrollBtn = document.getElementById("scroll");
const coordinates = document.getElementById("coordinates");
const playGround = document.querySelector(".play-ground");

// create-div factory func
function createDiv(element, parent, className, text) {
  const newEl = document.createElement(element);
  newEl.classList.add(className);
  if (text) newEl.innerText = text;
  parent.appendChild(newEl);
}

function clearPlayground() {
  playGround.classList.remove("bgBlack");
  // fix it to make it work all-together!
  if (playGround.hasChildNodes()) {
    playGround.childNodes.forEach((child) => playGround.removeChild(child));
    console.log("childnodes", playGround.childNodes);
  }
}
// exercise 1-1 scrol-to/by
function handleCLickscroll() {
  if (playGround.hasChildNodes()) clearPlayground();
  // add items
  if (!playGround.hasChildNodes()) {
    createDiv("div", playGround, "scrollContainer");
    const scrollContainer = document.querySelector(".scrollContainer");

    if (scrollContainer) {
      // buttons
      createDiv("div", scrollContainer, "btns");
      const btns = document.querySelector(".btns");
      if (btns) {
        createDiv("button", btns, "scrollToSecond", "Scroll to No.2");
        createDiv("button", btns, "scrollToSpecialBtn", "scroll to Special");
      }
      const scrollToSecond = document.querySelector(".scrollToSecond");
      const scrollToSpecialBtn = document.querySelector(".scrollToSpecialBtn");

      scrollToSecond.addEventListener("click", () => {
        const secondBox = document.querySelector(".scrollBox:nth-child(2)");
        secondBox.scrollIntoView();
        // window.scrollTo({ top: 100, left: 0, behavior: "smooth" }); // not working
      });

      scrollToSpecialBtn.addEventListener("click", () => {
        const specialBox = document.querySelector(".scrollBox:last-child");
        specialBox.scrollIntoView();
      });
      // boxes
      const boxes = Array.from(Array(5), (_, index) => index + 1);
      boxes.forEach((box) =>
        createDiv("div", scrollContainer, "scrollBox", box)
      );
      console.log(playGround);
      createDiv("div", scrollContainer, "scrollBox", "I'm special");
    }
  }
}

// exercise1-2 coordinates
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

  if (target && axisX && axisY) {
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
scrollBtn.addEventListener("click", handleCLickscroll);

playGround.addEventListener("mouseover", handleMouseOver);

clear.addEventListener("click", clearPlayground);
// window.scrollBy(0, 150);
