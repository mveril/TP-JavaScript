import { CocktailBadge } from "./cocktail-badge.js";
import { CocktailImg } from "./Cocktail-img.js";

export function CocktailUI(item) {
  const $container = document.createElement("div");
  $container.classList.add("col",
  "col-xl-2",
  "col-lg-4",
  "col-md-6",
  "col-sm-8",
  "col-12","position-relative");
  const $img = CocktailImg(item);
  const $badge = CocktailBadge(item);
  $container.append($badge,$img);
  return $container;
}