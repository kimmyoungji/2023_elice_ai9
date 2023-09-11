import card from "../js/card.js";
// import datas from "../workDatas/output.json" assert { type: "json" };

const main = document.getElementsByTagName("main");
const cardField = document.getElementById("cards");

const run = () => {
  window.addEventListener("DOMContentLoaded", () => {
    // console.log(card("aa", "aa", "aa", "aa", "aa", "aa"));
    // console.log(main.innerHTML);
    // main.innerHTML += card("aa", "aa", "aa", "aa", "aa", "aa");
    cardField.innerHTML = card("aa", "aa", "aa", "aa", "aa", "aa");
    console.log(cardField.innerHTML);
  });
};

run();
