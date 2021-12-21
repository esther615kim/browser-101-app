import "../styles.scss";
const wrapper = document.querySelector(".wrapper");
const button1 = document.getElementById("button1");

// create div
// function createDiv(element) {
//   let newEl = document.createElement(element);
//   console.log(element);
// }

// exercise 1
function handleClickBtn1() {
  console.log("click exercise1");
  const newDiv = document.createElement("div");
  newDiv.className = "exercise1";
  wrapper.appendChild(newDiv);
  newDiv.style.display = "block";
}

// events
button1.addEventListener("click", handleClickBtn1);

// window.addEventListener("resize", () => {
//   console.log(window.screen.height);
//   console.log(window.screen.width);
// });
