const container = document.querySelector(".container");
container.style.cssText =
  "margin: 1rem; display: flex; gap: 20px; justify-content: center; align-items: center;";

function drawGrid(num) {
  let i = 0;
  let j = 0;

  while (i < num) {
    const row = document.createElement("div");
    row.style.cssText = 'display: flex; flex-direction: column; gap: 20px;'

    while (j < num) {
      const gridItem = document.createElement("div");
      gridItem.style.cssText =
        "width: 75px; height: 75px; border: 1px solid black;";

      row.appendChild(gridItem);
      container.appendChild(row);

      j++;
    }

    j = 0;
    i++;
  }
}

drawGrid(8)
