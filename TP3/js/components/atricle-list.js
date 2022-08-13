import { ArticleItem } from "./article-item.js";

export function ArticleList(articles){
  return articles.map(article=>ArticleItem(article));
}