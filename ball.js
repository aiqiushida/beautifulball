let box = document.querySelector(".practice");
let rangebox = document.querySelector('input[type="range"]');
let textbox = document.querySelector("output");
rangebox.addEventListener("input", updateValue);
function updateValue() {
  textbox.textContent = rangebox.value;
  let numberx = rangebox.value;
  for (let i = 0; i < numberx; i++) {
    var item = document.createElement("div");
    item.setAttribute("class", "item");

    item.style.backgroundColor = rgba();

    box.appendChild(item);
  }
}
function rgba() {
  let color1 = Math.floor(Math.random() * 255) + 1;
  let color2 = Math.floor(Math.random() * 255) + 1;
  let color3 = Math.floor(Math.random() * 255) + 1;
  let color4 = Math.random();
  return "rgba(" + color1 + "," + color2 + "," + color3 + "," + color4 + ")";
}
