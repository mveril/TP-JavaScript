import { ArticleList } from "./components/atricle-list.js";

const articles=[
  {
  id: 1,
  title: "the WET Codbase",
  date: new Date(2020, 9, 4),
  length: 11,
  snippet: `A year ago, I gave a conference talk, and I want to share it today with those of you who haven’t watched it. This talk isn’t about React, or even JavaScript..`,
  },
  {
  id: 2,
  title: "goodby, clean code",
  date: new Date(2019, 10, 22),
  length: 5,
  snippet: `My colleague has just checked in the code that they’ve been writing all week. We were working on a graphics editor canvas, and they implemented the ability to resize shapes like rectangles and ovals by dragging small handles at their edges.`,
  },
  {
  id: 3,
  title: "my decade in review",
  date: new Date(2018, 7, 11),
  length: 5,
  snippet: `I started this decade as a first-year college student fresh out of high school. I was 17, didn’t have a job, didn’t have any industry connections, and really didn’t know shit. And now you’re reading my blog! I would have been proud.`,
  },
  {
  id: 4,
  title: "what are the react team principles",
  date: new Date(2015, 5, 4),
  length: 5,
  snippet: `During my time on the React team, I’ve been lucky to see how Jordan, Sebastian, Sophie and other tenured team members approach problems. In this post, I’m distilling what I learned from them into a few high-level technical principles. These principles aren’t meant to be exhaustive. This is my personal attempt to formalize observations about how the React team operates — other team members may have different perspectives.`,
  },
  ];

  
const btnThemes=document.querySelectorAll(".btn-theme");
for (const btn of btnThemes) {
  btn.addEventListener("click",switchtemeClick);
}
function switchtemeClick(event){
  const btn=event.target;
  const theme=btn.getAttribute("data-themeactivator");
  switchtheme(theme);
}

function switchtheme(themeName){
  const activateClass="active";
  for (const btn of btnThemes) {
    if (btn.getAttribute("data-themeactivator") === themeName) {
      btn.classList.add(activateClass);
    } else {
      btn.classList.remove(activateClass);
    }
  }
  const themeClass=[...document.body.classList].filter(myclass=>myclass.startsWith(".theme"));
  for (const myclass of [...document.body.classList]) {
    if(myclass.startsWith("theme-")){
      document.body.classList.remove(myclass);
    }
  }
  if(themeName != "system"){
    localStorage.setItem("theme",themeName)
    document.body.classList.add(`theme-${themeName}`);
  } else{
    localStorage.removeItem("theme")
  }
}

const startingTheme=localStorage.getItem("theme") || "system";
switchtheme(startingTheme);

const $ulArticles=document.querySelector("#ul-articles")
const items = ArticleList(articles);
$ulArticles.append(...items);