const cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (e) => {
  if (window.innerWidth < 768) return;

  cursor.setAttribute("style", `top: ${e.pageY + 2}px; left: ${e.pageX + 2}px`);
});
