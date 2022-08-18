export function CocktailBadge({strDrink}) {
  const badge = document.createElement("span");
  badge.classList.add("badge", "bg-secondary","position-absolute", "top-80", "start-100", "translate-middle");
  badge.innerText = strDrink;
  badge.ariaHidden = true;
  return badge;
}