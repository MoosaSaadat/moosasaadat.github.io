const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const usedColors = new Set();
const point = {
  x: 0,
  y: 0,
};

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
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = "round";

  ctx.strokeStyle = `#${point.color}`;

  ctx.moveTo(point.x, point.y); // from
  setDrawPosition(e);
  ctx.lineTo(point.x, point.y); // to

  ctx.stroke(); // draw it!
}

window.addEventListener("resize", resizeCanvas);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", setDrawPosition);
canvas.addEventListener("mouseup", generateRandomColor);

const logStyles = ["color: 2a313a", "font-size: 18px"];
const logs = [
  "Didn't curiosity kill the cat?",
  "Hint: try sketching something and share on on twitter!",
  "https://twitter.com/MoosaSaadat",
];
logs.forEach((log) => console.log(`%c${log}`, logStyles.join(";")));
