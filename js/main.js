const modal = document.querySelector(".modal");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const usedColors = new Set();
const point = {
  x: 0,
  y: 0,
};
let isDraw = false;
let isFirstDraw = true;
let hasDrawn = false;

generateRandomColor();
resizeCanvas();

function generateRandomColor() {
  // Genarates a new random color for every stroke. Ensures that it
  // is not the same as any of the previous colors
  do {
    point.color = Math.floor(Math.random() * 16777215).toString(16);
  } while (usedColors.has(point.color));
  usedColors.add(point.color);
}

function resizeCanvas() {
  // Resizes canvas to cover the whole screen
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function setDrawPosition(x, y) {
  // Sets the draw position to the given coordinates
  point.x = x;
  point.y = y;
}

function draw(e) {
  // Draws a line from previous mouse position to current
  // mouse position
  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = "round";

  ctx.strokeStyle = `#${point.color}`;

  // Trigger clear warning
  if (point.x !== e.clientX || point.y !== e.clientY) hasDrawn = true;

  ctx.moveTo(point.x, point.y); // from
  setDrawPosition(e.clientX, e.clientY);
  ctx.lineTo(point.x, point.y); // to

  ctx.stroke(); // draw it!
}

function clearCanvas() {
  // Clears everything from the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function handleMouseDown(e) {
  // Sets initial mouse position, generates a color and
  // then allows drawing on canvas

  // must be left button click
  if (e.buttons !== 1) return;

  generateRandomColor();
  setDrawPosition(e.clientX, e.clientY);
  isDraw = true;
}

function handleMouseMove(e) {
  if (isDraw) draw(e);
}

function handleMouseUp(e) {
  isDraw = false;
  if (isFirstDraw && hasDrawn) {
    modal.style.display = "flex";
    isFirstDraw = false;
  }
}

window.addEventListener("resize", resizeCanvas);
canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mouseup", handleMouseUp);
canvas.addEventListener("dblclick", clearCanvas);

/******************************
 * Animate title translations
 ******************************/
const titlesWrapper = document.querySelector("#titles-wrapper");
const titles = document.querySelectorAll(".title");
let animInterval = 0;
let idx = 0;

titlesWrapper.addEventListener("mouseenter", () => {
  animInterval = setInterval(() => {
    const translation = (++idx % titles.length) * -100;
    titles.forEach(
      (title) => (title.style.transform = `translateY(${translation}%)`)
    );
    console.log("interval called", translation);
  }, 1000);
});
titlesWrapper.addEventListener("mouseleave", () => {
  titles.forEach((title) => (title.style.transform = "translateY(0%)"));
  clearInterval(animInterval);
  idx = 0;
});

/******************************
 * Prints styled messages on the console
 ******************************/
const logStyles = ["color: 2a313a", "font-size: 18px"];
const logs = [
  "Didn't curiosity kill the cat?",
  "Hint: try sketching something and share on twitter!",
  "https://twitter.com/MoosaSaadat",
];
logs.forEach((log) => console.log(`%c${log}`, logStyles.join(";")));

modal.addEventListener("click", () => {
  modal.style.display = "none";
});
