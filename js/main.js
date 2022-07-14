// const translation = document.querySelector("#translation");

// let translationPos;

// const showTranslation = (text, position) => {
//   translation.innerHTML = text;
//   translation.classList.remove("hidden");
//   translationPos = position;

//   if (translationPos === "top") {
//     translation.classList.remove("bottom");
//     translation.classList.add("top");
//   } else if (translationPos === "bottom") {
//     translation.classList.remove("top");
//     translation.classList.add("bottom");
//   }
// };
// const hideTranslation = () => {
//   translation.classList.add("hidden");
// };
// const changeTranslationPos = (x, y) => {
//   let newPos = "";
//   if (translationPos === "top")
//     newPos = `left: ${x}px; bottom: calc(100vh - ${y}px + 50px)`;
//   else if (translationPos === "bottom")
//     newPos = `left: ${x}px; top: calc(${y}px + 50px)`;

//   translation.setAttribute("style", newPos);
// };

// const fullname = document.querySelector("#name");
// const designation = document.querySelector("#designation");

// let titleInterval;
// let subtitleInterval;

// fullname.addEventListener("mouseenter", (e) => {
//   let counter = 0;
//   titleInterval = setInterval(() => {
//     const newText = TITLES[counter].text;
//     counter = (counter + 1) % TITLES.length;
//     showTranslation(newText, "top");
//   }, 500);
//   changeTranslationPos(e.pageX, e.pageY);
// });
// fullname.addEventListener("mouseleave", (e) => {
//   clearInterval(titleInterval);
//   hideTranslation();
// });

// designation.addEventListener("mouseenter", (e) => {
//   let counter = 0;
//   subtitleInterval = setInterval(() => {
//     const newText = SUBTITLES[counter].text;
//     counter = (counter + 1) % SUBTITLES.length;
//     showTranslation(newText, "bottom");
//   }, 500);
//   changeTranslationPos(e.pageX, e.pageY);
// });
// designation.addEventListener("mouseleave", (e) => {
//   clearInterval(subtitleInterval);
//   hideTranslation();
// });

const cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", (e) => {
  if (window.innerWidth < 768) return;

  cursor.setAttribute(
    "style",
    `top: ${e.pageY + 2}px; left: ${e.pageX + 2}px; animation: none`
  );
});
