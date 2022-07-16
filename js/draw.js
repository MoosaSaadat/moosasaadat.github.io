const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const point = {
  x: 0,
  y: 0,
};

resizeCanvas();

function generateRandomColor() {
  point.color = Math.floor(Math.random() * 16777215).toString(16);
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
