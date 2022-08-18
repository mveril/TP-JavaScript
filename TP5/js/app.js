import { CocktailUI } from "./components/cocktail-ui.js";
import { GetApiUrl } from "./GetSearchURL.js";

const searchBox = document.querySelector("#search_box");
const cocktailCards = document.querySelector("#cocktails")
searchBox.addEventListener("input",async (event)=>{
  cocktailCards.innerHTML="";
    const cocktails=await getData(event.target.value);
    for (const cocktail of cocktails.data.drinks) {
      cocktailCards.append(CocktailUI(cocktail))
    }
  }
);

function getData(searchText){
  return axios.get(GetApiUrl(searchText));
}
