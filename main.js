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

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const title = document.querySelector("#subtitle");

let firstNameIdx = 0;
let lastNameIdx = 0;
let titleIdx = 0;

const FIRST_NAMES = [
  {
    language: "English",
    symbol: "en",
    text: "Muhammad",
  },
  {
    language: "Urdu",
    symbol: "ur",
    text: "محمد",
  },
  {
    language: "Dutch",
    symbol: "nl",
    text: "Mohammed",
  },
  {
    language: "French",
    symbol: "fr",
    text: "Mahomet",
  },
  {
    language: "German",
    symbol: "de",
    text: "Mohammed",
  },
  {
    language: "Italian",
    symbol: "it",
    text: "Maometto",
  },
  {
    language: "Japanese",
    symbol: "ja",
    text: "ムハンマド",
  },
  {
    language: "Russian",
    symbol: "ru",
    text: "Мухаммед",
  },
  {
    language: "Spanish",
    symbol: "es",
    text: "Mahoma",
  },
];
const LAST_NAMES = [
  {
    language: "English",
    symbol: "en",
    text: "Musa",
  },
  {
    language: "Urdu",
    symbol: "ur",
    text: "موسیٰ",
  },
  {
    language: "Dutch",
    symbol: "nl",
    text: "Musa",
  },
  {
    language: "French",
    symbol: "fr",
    text: "Moussa",
  },
  {
    language: "German",
    symbol: "de",
    text: "Musa",
  },
  {
    language: "Italian",
    symbol: "it",
    text: "Musa",
  },
  {
    language: "Japanese",
    symbol: "ja",
    text: "ムーサ",
  },
  {
    language: "Russian",
    symbol: "ru",
    text: "Муса",
  },
  {
    language: "Spanish",
    symbol: "es",
    text: "musa",
  },
];
const TITLES = [
  {
    language: "English",
    symbol: "en",
    text: "Software Engineer",
  },
  {
    language: "Urdu",
    symbol: "ur",
    text: "سافٹ ویئر انجینئر",
  },
  {
    language: "Dutch",
    symbol: "nl",
    text: "Software ontwikkelaar",
  },
  {
    language: "French",
    symbol: "fr",
    text: "Ingénieur logiciel",
  },
  {
    language: "German",
    symbol: "de",
    text: "Softwareentwickler",
  },
  {
    language: "Italian",
    symbol: "it",
    text: "Ingegnere del software",
  },
  {
    language: "Japanese",
    symbol: "ja",
    text: "ソフトウェアエンジニア",
  },
  {
    language: "Russian",
    symbol: "ru",
    text: "Программист",
  },
  {
    language: "Spanish",
    symbol: "es",
    text: "Ingeniero de software",
  },
];

const firstNameInterval = setInterval(() => {
  const translation = FIRST_NAMES[firstNameIdx];
  if (translation.symbol === "ur") {
    firstName.setAttribute(
      "style",
      "font-family: 'IBM Plex Sans Arabic', sans-serif;"
    );
  }
  firstName.innerHTML = translation.text;
  firstNameIdx = (firstNameIdx + 1) % FIRST_NAMES.length;
}, 500);

setInterval(() => {
  const translation = LAST_NAMES[lastNameIdx];
  if (translation.symbol === "ur") {
    lastName.setAttribute(
      "style",
      "font-family: 'IBM Plex Sans Arabic', sans-serif;"
    );
  }
  lastName.innerHTML = translation.text;
  lastNameIdx = (lastNameIdx + 1) % LAST_NAMES.length;
}, 500);

setInterval(() => {
  const translation = TITLES[titleIdx];
  if (translation.symbol === "ur") {
    title.setAttribute(
      "style",
      "font-family: 'IBM Plex Sans Arabic', sans-serif;"
    );
  }
  title.innerHTML = translation.text;
  titleIdx = (titleIdx + 1) % TITLES.length;
}, 500);
