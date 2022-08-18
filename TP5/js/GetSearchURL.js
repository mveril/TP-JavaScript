export function GetApiUrl(searchParam) {
  const apiUrl="https://www.thecocktaildb.com/api/json/v1/1/search.php"
  const url = new URL(apiUrl)
  url.searchParams.set("s",searchParam);
  return url.toString();
}