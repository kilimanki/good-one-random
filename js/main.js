const nubm = document.querySelector(".text");
const blockId = document.querySelector("#devs");
const btnRef = document.querySelector("#btn");
const secondCircle = document.querySelector(".another-one");
const inputRef = document.querySelector("#input-unique");
const myTimeToSay = setTimeout(lazyHi, 1000);
const myTimeToRotate = setTimeout(timingGreeting, 3000);
const timeToLeft = setTimeout(timingLeft, 6000);
const timeToBtn = setTimeout(timingBtn, 10000);

btnRef.disabled = "true";
btnRef.addEventListener("click", myNumb);
inputRef.addEventListener("input", (e) => {
  if (
    e.target.value.trim() !== "" &&
    e.target.value.trim().length >= 5 &&
    e.target.value.includes("?")
  )
    btnRef.removeAttribute("disabled");
  else {
    btnRef.disabled = "true";
  }
});

const imagesQ = [
  {
    img: "./img/1558767882_28.jpg",
  },
  {
    img: "./img/82c7170fb16a6e2602344be38adc48f3137327b136eb5b4bb235238c9c5d2e5d._V_SX1080_.jpg",
  },
  {
    img: "./img/308676_lBgur9s5CP_cherry.jpg",
  },
  {
    img: "./img/artworks-o7hNuMppjt0wR7GV-RItkOA-t500x500.jpg",
  },
  {
    img: "img/hunter-x-hunter-season-7-3.webp",
  },
];

function myNumb() {
  const words = [
    "Yes",
    "No",
    "Mby",
    "Ur lucky, roll 1 more !",
    "Make another wish",
    "GZ! Click Roll",
  ];
  const testT = randomWord(words);
  console.log(testT);
  const newWords = [];
  const trueCaptain = true;
  blockId.style.backgroundImage = `linear-gradient(to bottom, black 0%, transparent 100%),url("${
    imagesQ[randomRoll(0, 5)].img
  }")`;
  if (testT) {
    newWords.push(words[testT]);
  } else if (testT === 0) {
    newWords.push(words[0]);
  }
  if (testT === 4) {
    alert(
      "Пропоную написати інше бажання, відповідь по поточному не сподобається"
    );
  }
  if (testT === 5) {
    let x = `${randomRoll(5, 10)}`;
    let b = `${randomRoll(5, 10)}`;
    let result = Number(x) + Number(b);
    console.log(result);
    const trueCaptain = true;
    let total = 0;
    while (trueCaptain) {
      total = +prompt(
        `Нам показалось, що ти капітан залупа, давай провірим: ${x} + ${b} = ???`
      );
      if (total === +result) {
        alert("Порвав мачту, мужик !");
        break;
      }
    }
  }
  nubm.textContent = newWords;
  nubm.classList.add("hiden");
  nubm.setAttribute("style", "font-size:50px");
  const endlessCircles = document.createElement("span");
  droppedDown(endlessCircles);

  blockId.insertAdjacentElement("afterbegin", endlessCircles);
  endlessCircles.id = "unique";
  timingDownMove();
}

function droppedDown(item) {
  item.classList.add("another-one");
  item.setAttribute(
    "style",
    `transition: transform 2s ease ; left:${randomRoll(
      0,
      100
    )}%; top:${randomRoll(0, 100)}%`
  );
}
function randomRoll(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function randomWord(a) {
  return Math.floor(Math.random() * a.length);
}
function lazyHi() {
  document.getElementById(
    "title"
  ).innerHTML = `<img src="./img/hange_icon_181732.png" alt="">  Привіт Семпай, я чекала !`;
}

function myFunction() {
  document.getElementById("myDIV").style.opacity = "1";
  btnRef.style.opacity = "1";
  blockId.style.opacity = "1";
  blockId.style.display = "flex";
}
function timingGreeting() {
  const b = document.getElementById("title");
  b.style.opacity = "1";
  b.style.transform = "rotate(360deg)";
}
function timingLeft() {
  const b = document.getElementById("title");
  b.style.left = "0";
}
function timingLeft() {
  const b = document.getElementById("title");
  b.style.left = "0";
}
function timingBtn() {
  const btn = document.getElementById("hiden-btn");
  btn.style.opacity = "1";
}
function timingDownMove() {
  const x = document.getElementById("unique");
  x = setTimeout(function () {
    x.style.transform = "translateY(150%)";
  }, 50);
}
// const colorS = `rgba(
//   ${randomRoll(0, 255)} , ${randomRoll(0, 255)}, ${randomRoll(
//   0,
//   255
// )},${randomRoll(0, 255)}
// )`;
