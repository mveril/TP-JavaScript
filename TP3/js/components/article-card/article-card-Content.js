export function ArticleCardContent(snippet) {
  const $snippet = document.createElement("p");
  $snippet.classList.add("card-text");
  $snippet.innerText=snippet;
  return $snippet;
}