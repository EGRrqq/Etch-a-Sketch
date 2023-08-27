const container = document.querySelector(".container");
container.style.cssText =
  "margin: 1rem; display: flex; gap: 20px; justify-content: center; align-items: center;";

(function sketchbook() {
  drawGrid(16);
  fillGridItem();
})()

function drawGrid(num) {
  let i = 0;
  let j = 0;

  while (i < num) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    gridRow.style.cssText = "display: flex; flex-direction: column; gap: 20px;";

    while (j < num) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("gridItem");
      gridItem.style.cssText =
        "width: 75px; height: 75px; border: 1px solid black;";

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
      event.currentTarget.style.backgroundColor = "black";
    })
  );
}
