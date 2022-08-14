import { Counter } from "./Counter.js";

const counter = new Counter(document.querySelector(".counter"));
const btnDecrease = document.querySelector("#btn-decrease");
btnDecrease.addEventListener("click",()=>counter.decrease());
const btnReset = document.querySelector("#btn-reset");
btnReset.addEventListener("click",()=>counter.reset());
const btnIncrease = document.querySelector("#btn-increase");
btnIncrease.addEventListener("click",()=>counter.increase());
