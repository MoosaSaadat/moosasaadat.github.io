// const cursor = document.querySelector("#cursor");

// setTimeout(() => {
//   document.addEventListener("mousemove", (e) => {
//     if (window.innerWidth < 768) return;

//     cursor.src = "./imgs/pointing-hand-tilted.png";

//     cursor.setAttribute(
//       "style",
//       `top: ${e.pageY}px; left: ${e.pageX}px; animation: none`
//     );
//   });
// }, 3000);
const translation = document.querySelector("#translation");

const showTranslation = (text, position) => {
  translation.innerHTML = text;
  translation.classList.remove("hidden");
  translation.classList.add("bottom");
};
const hideTranslation = () => {
  translation.classList.add("hidden");
};

const title = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle");

let titleInterval;
let subtitleInterval;

title.addEventListener("mouseenter", (e) => {
  let counter = 0;
  titleInterval = setInterval(() => {
    const newText = TITLES[counter].text;
    counter = (counter + 1) % TITLES.length;
    showTranslation(newText);
  }, 500);
});
title.addEventListener("mouseleave", (e) => {
  clearInterval(titleInterval);
  hideTranslation();
});

subtitle.addEventListener("mouseenter", (e) => {
  let counter = 0;
  subtitleInterval = setInterval(() => {
    const newText = SUBTITLES[counter].text;
    counter = (counter + 1) % SUBTITLES.length;
    showTranslation(newText);
  }, 500);
});
subtitle.addEventListener("mouseleave", (e) => {
  clearInterval(subtitleInterval);
  hideTranslation();
});

document.addEventListener("mousemove", (e) => {
  if (window.innerWidth < 768) return;

  cursor.src = "./imgs/pointing-hand-tilted.png";

  cursor.setAttribute(
    "style",
    `top: ${e.pageY}px; left: ${e.pageX}px; animation: none`
  );
});
