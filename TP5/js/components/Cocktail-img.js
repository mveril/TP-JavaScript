export function CocktailImg({strDrinkThumb,strDrink}) {
  const $img=document.createElement("img");
  $img.src=strDrinkThumb;
  $img.classList.add("img-thumbnail");
  $img.alt=strDrink;
  return $img;
}