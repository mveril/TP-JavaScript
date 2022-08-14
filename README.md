# TP Javascript
## TP 1 : Compteur
Le but de ce TP est de créer un compteur qui possède 3 boutons:
- Increase : Pour incrémenter la valeur
- Decrease : Pour décrementer la valeur
- Reset : Pour réinitialiser la valeur à zéro
Il faut noter que la valeur de départ est zéro.
Quand la valeur est 0, la couleur du compteur es noire, quand la valeur est supérieure à 0, la couleur est verte, et quand la valeur est inférieure à 0, la couleur est rouge.
Exemple d’exécution
![Alt Text](https://res.cloudinary.com/jochri3/image/upload/v1658913419/gif%20exercices/tp2-counter.gif)
(4 Mo)
https://res.cloudinary.com/jochri3/image/upload/v1658913419/gif%20exercices/tp2-counter.gif

## TP 2 : Afficher menu
Le but de ce TP est d’afficher le menu avec la possibilité de filter selon la categorie:
Les 4 catégories sont :
- `all` : Qui affiche tout le menu
- `breakfast` : N’affiche que les données de la catégorie _breakfast_
- `lunch` : Affiche uniquement les données de la categorie _Lunch_
- `shakes` : Affiche uniquementles données de la categorie _Shakes_
- `dinner` : Affiche uniquement les données de la categorie _dinner_
Voici les données du menu:
``` javascript
[
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I’m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
```
Exemple d’exécution
![Alt Text](https://res.cloudinary.com/jochri3/image/upload/v1658915519/gif%20exercices/tp4-menu.gif)
### Ajout
Ajouter la possibilité de voir les détails d’un article dans une page détails.
1. Stocker tout le tableau dans le `localStorage`
2. Ajouter les urls cliquables sur chaque `carte` avec un paramère `?id=[votre_id]`.
3. En cliquant sur un elément, vous devez ouvrir page page.Où pour récupérer l’id depuis l’url vous devez vous utiliser [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
4. Aller dans le `localStorage` pour récupérer un element par son `id` puis afficher l’information selon le format de votre choix.
(Non développé automatiquement, car 10 Mo est trop grand. Vous pouvez quand même le développer ou l'ouvrir dans une nouvelle fenêtre.)

## TP 3 : Dark mode & Light mode
Le but de ce TP est de créer une page qui support les modes `dark mode` et `light mode`.
Le changement d’apparence est effectué lorsque l’utilisateur clique sur le bouton `toggle`.
Pour formater correctement la date, allez devoir utiliser `moment.js` qui est une librairie spécialisée dans le formatage des dates.Pour l’utiliser:
1. Importer le script distant avec ce code : 
```html
<script
   src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"
   integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="
   crossorigin="anonymous"
   referrerpolicy="no-referrer"
   > </script>
```
2. Pour formater votre date, recupérez l’attribut date de votre objet article de la manière suivante : 
```javascript
const formatedDate = moment(date).format("MMMM Do, YYYY");
```

Voici la liste des articles
```javascript
[
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
```
Exemple d’exécution
![Alt Text](https://res.cloudinary.com/jochri3/image/upload/v1658920936/gif%20exercices/tp6-dark-mode.gif)

## TP 4 : Wikipedia API
Le but de ce TP est des faire des recherches en se basant sur l’API de Wikipedia.
Voici les fonctionnalités attendues:
1. Saisir dans le formulaire de rechercher le sujet à rechercher.
2. Puis lancer la recherche en vous basant sur l’API de wikipedia.
Pour l’API de wikipedia, vous allez utiliser l’url suivant : `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=[votre_recherche]`
Par exemple, si dans la barre de recherche vous écrivez `messi`, votre url devra ressemble à ceci ![Alt Text](https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=messi)
3. Une fois les données récuperées, voici les informations dont vous aurez besoin pour l’affichage : `title`,`pageid` et `snippet`.
Dans le résultat de la requête, le serveur vous donne un objet JSON avec 3 attributs : `batchcomplete`,`continue` et `query`.
Dans l’objet `query`, vous avez 2 informations : `searchinfo` et `search`.Les données dont vous aurez besoin pour l’affichage se trouvent dans `search`.
En ce qui concerne l’affichage, vous devez faire en sorte que les résultats affichés puissent être des liens cliquables qui mènent vers wikipedia.
L’url qui permet d’ouvrir le lien vers Wikipedia est : `http://en.wikipedia.org/?curid=[pageid]`
Exemple : ![Alt Text](https://en.wikipedia.org/?curid=2150841)
Voici un exemple d’execution.
Exemple : ![Alt Text](https://res.cloudinary.com/jochri3/image/upload/v1658923266/gif%20exercices/tp8-wikipedia-api.gif)


## TP 5 : Filtre menu
Le but de ce TP est d’afficher les cocktails avec la possibilité de filtrer le résulat:
Pour les données, vous devez faire un appel HTTP vers [cet endpoint](https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a).
Les attributs à considérer sont : `strDrink` et `strDrinkThumb` pour l’affichage.
Voici l’exemple d’exécution
![Alt Text](https://res.cloudinary.com/jochri3/image/upload/v1658922166/gif%20exercices/tp7-filter.gif)

## TP 6 : Reviews
Le but de ce TP est d’afficher des reviews pour un service donné:
- `>` : Aller à gauche
- `<` : Aller à droite
Pour les icones vous pouvez utiliser [Font awesome](https://fontawesome.com/icons).
Pour une intégration simple, vous pouvez insérer cette balise 
``` html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```
dans `head` de votre fichier **HTML** pour charger les icones.
L’information qui va être affichée par défaut quand la page est chargé est le premier element du tableau ci-dessous:
```javascript
[
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I’m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
```
En ce qui concerne le fonctionnement, quand on navigue avec la flèche `>`, et qu’on arrive à la fin du tableau on doit retourner au tout premier element.Et quand on navigue avec la flèche `<` et qu’on arrive au tout début, ça doit nous remettre à la fin du tableau.
Exemple d’exécution
![Alt Text](https://res.cloudinary.com/jochri3/image/upload/v1658913798/gif%20exercices/tp3-reviews.gif)