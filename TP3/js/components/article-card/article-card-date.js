import { TimeElementDate } from "../time-element-date.js";

export function ArticleCardDate(date) {
  const $dateH=document.createElement("h6");
  $dateH.classList.add("card-subtitle");
  const $time = TimeElementDate(date);
  $dateH.appendChild(TimeElementDate(date));
  return $dateH;
}


