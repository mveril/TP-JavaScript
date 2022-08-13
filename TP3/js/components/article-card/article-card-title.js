export function ArticleCarTitle(title) {
  const $title=document.createElement("h5");
  $title.classList.add("card-title","text-primary");
  $title.innerText = title;
  return $title;
}