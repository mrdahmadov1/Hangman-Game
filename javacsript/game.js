"use strict";

const sozler = [
  "murad",
  "ramazan",
  "anar",
  "mehemmed",
  "metin",
  "burhan",
  "qafqaz",
  "nahid",
  "orxan",
  "nemet",
  "yusif",
];

const alphabet = "abcdefghijklmnopqrstuvyxwzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let guessedLettersArray = [];
let randomIndex = Math.floor(Math.random() * sozler.length + 1);

const info = document.querySelector(".subTitle");
const word = document.querySelector(".word");
const guessedLetters = document.querySelector(".letters");
const remainingGuessCount = document.querySelector(".remainingGuessCount");
const image = document.querySelector(".imageStep");
const btnAgain = document.querySelector(".btnAgain");

let texmin = Array(sozler[randomIndex].length).fill("_").join("");
let counter = 10;
word.textContent = texmin;
remainingGuessCount.textContent = counter;

window.onkeyup = function (e) {
  if (alphabet.includes(e.key)) {
    if (texmin === sozler[randomIndex]) {
      info.textContent = `Congratulations! Your Score: ${counter}`;
      return;
    } else if (counter === 0) {
      info.textContent = `Game over!`;
      return;
    }
    if (!guessedLettersArray.includes(e.key)) {
      image.src = `assets/images/step-${11 - counter}.png`;
      counter--;
      guessedLettersArray.push(e.key);
    }

    guessedLetters.textContent = guessedLettersArray;
    remainingGuessCount.textContent = counter;

    if (sozler[randomIndex].includes(e.key)) {
      let letter = e.key;

      for (let i = 0; i < sozler[randomIndex].length; i++) {
        if (sozler[randomIndex][i] === letter) {
          texmin = texmin.substring(0, i) + letter + texmin.substring(i + 1);
          word.textContent = texmin;
        }
      }
    }
  } else {
    alert(`Herf daxi edin!`);
  }
};

btnAgain.addEventListener("click", function () {
  randomIndex = Math.floor(Math.random() * sozler.length + 1);

  counter = 10;
  remainingGuessCount.textContent = counter;
  image.src = `assets/images/step-${0}.png`;

  guessedLettersArray = [];
  guessedLetters.textContent = "No Guesswork";

  texmin = Array(sozler[randomIndex].length).fill("_").join("");
  word.textContent = texmin;

  info.textContent = "Press any key to get started!";
  console.log("test");
});
