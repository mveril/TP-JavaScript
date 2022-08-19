import { capitalize } from "./capitalize.js";
import { table } from "./data.js";

const nameTitle = document.querySelector('.name-title');
const jobTitle = document.querySelector('.job-title');
const desc = document.querySelector('.desc');
const imgProfil = document.querySelector('.profile-picture');

export function updateSlide(position) {
  console.log(position);
  const item = table[position];
  nameTitle.innerText = capitalize(item.name);
  jobTitle.innerText = item.job.toUpperCase();
  desc.innerText = item.text;
  imgProfil.setAttribute('src',item.img);
}