import { ArticleCard } from "./article-card/article-card.js";

export function ArticleItem(article) {
  const item = document.createElement("div");
  item.appendChild(ArticleCard(article));
  return item;
}