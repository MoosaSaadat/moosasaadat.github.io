const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const usedColors = new Set();
const point = {
  x: 0,
  y: 0,
};
let isDraw = false;

generateRandomColor();
resizeCanvas();

function generateRandomColor() {
  // Ensures that generated number hasn't been used before (is unique)
  do {
    point.color = Math.floor(Math.random() * 16777215).toString(16);
  } while (usedColors.has(point.color));
  usedColors.add(point.color);
}

function resizeCanvas() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function setDrawPosition(e) {
  point.x = e.clientX;
  point.y = e.clientY;
}

function draw(e) {
  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = "round";

  ctx.strokeStyle = `#${point.color}`;

  ctx.moveTo(point.x, point.y); // from
  setDrawPosition(e);
  ctx.lineTo(point.x, point.y); // to

  ctx.stroke(); // draw it!
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function handleMouseDown(e) {
  // must be left button click
  if (e.buttons !== 1) return;

  generateRandomColor();
  setDrawPosition(e);
  isDraw = true;
}

function handleMouseMove(e) {
  if (isDraw) draw(e);
}

function handleMouseUp(e) {
  isDraw = false;
}

window.addEventListener("resize", resizeCanvas);
canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mouseup", handleMouseUp);
canvas.addEventListener("dblclick", clearCanvas);

const logStyles = ["color: 2a313a", "font-size: 18px"];
const logs = [
  "Didn't curiosity kill the cat?",
  "Hint: try sketching something and share on twitter!",
  "https://twitter.com/MoosaSaadat",
];
logs.forEach((log) => console.log(`%c${log}`, logStyles.join(";")));
