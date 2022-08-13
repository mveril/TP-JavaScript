import { ArticleCarTitle } from "./article-card-title.js";
import { ArticleCardDate } from "./article-card-date.js";
import { ArticleCardContent } from "./article-card-content.js";

export function ArticleCard({title,date,snippet}) {
  const $title = ArticleCarTitle(title);
  const $date = ArticleCardDate(date);
  const $content = ArticleCardContent(snippet);
  const $card = document.createElement("div");
  $card.classList.add("card");
  $card.append($title,$date,$content);
  return $card;
}