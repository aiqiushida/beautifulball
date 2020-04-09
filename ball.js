let box = document.querySelector(".practice"); //获取容器
let rangebox = document.querySelector('input[type="range"]'); //获取number
let textbox = document.querySelector("output");
rangebox.addEventListener("input", updateValue);
let ballNumber = 0;//小球数量
function updateValue() {
  textbox.textContent = rangebox.value;
  let numberx = rangebox.value;
  ballNumber=numberx;
  clearball();
  addBall();
}
function rgba() {
  let color1 = Math.floor(Math.random() * 255) + 1;
  let color2 = Math.floor(Math.random() * 255) + 1;
  let color3 = Math.floor(Math.random() * 255) + 1;
  let color4 = Math.random();
  return "rgba(" + color1 + "," + color2 + "," + color3 + "," + color4 + ")";
}
function addBall() {
  for (let i = 0; i < ballNumber; i++) {
    var item = document.createElement("div");
    item.setAttribute("class", "item");
    item.style.backgroundColor = rgba();
    box.appendChild(item);
  }
}
function clearball(){
  let allBall=document.querySelectorAll(".item");
  let allBallNumber=allBall.length;
  for(let i=0;i<allBallNumber;i++){
    box.removeChild(allBall[i]);
  }
}
