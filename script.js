const container = document.querySelector(".container");
container.style.cssText =
  "margin: 1rem; display: flex; gap: 3px; justify-content: center; align-items: center;";

const button = document.createElement("button");
button.style.cssText =
  "margin: 1rem; padding: 1rem; cursor: pointer; border-radius: 1rem;";
button.textContent = "create grid";

const main = document.querySelector("main");
main.prepend(button);

(function sketchbook() {
  drawGrid();
  fillGridItem();
  newGrid();
})();

function newGrid() {
  button.addEventListener("click", () => {
    const num = getNum();

    // if num === false, it means that the user click on cancel button
    // so it is necessary to keep the previous grid
    if (num) {
      cleanGrid();
      drawGrid(num);
      fillGridItem();
    }
  });
}

function cleanGrid() {
  const gridRows = document.querySelectorAll(".gridRow");
  gridRows.forEach((row) => container.removeChild(row));
}

function getNum() {
  const num = prompt("Create grid num x num \n num between 0 and 100", 64);

  if (num >= 0 && num <= 100) {
    return num;
  } else {
    getNum();
  }
}

function drawGrid(num = 32) {
  let i = 0;
  let j = 0;

  console.log("currentNum:", num);

  while (i < num) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    gridRow.style.cssText = "display: flex; flex-direction: column; gap: 3px;";

    while (j < num) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("gridItem");
      gridItem.style.cssText =
        "width: 15px; height: 15px; border: 1px solid black;";

      gridRow.appendChild(gridItem);
      container.appendChild(gridRow);

      j++;
    }

    j = 0;
    i++;
  }
}

function fillGridItem() {
  const gridItems = document.querySelectorAll(".gridItem");

  gridItems.forEach((item) =>
    item.addEventListener("mouseover", (event) => {
      const randomRgb = `rgb(
            ${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)}
            )`;

      event.currentTarget.style.backgroundColor = randomRgb;
    })
  );
}
