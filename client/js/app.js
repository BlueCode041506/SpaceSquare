const siteName = "Space Square";

const squarePlanet = 3;

const Squarian = 3;

const Square = true;

let totalItems = squarePlanet + Squarian;

const indexSentence = `We, "${siteName}", 
currently have "${totalItems}" total items with "${squarePlanet}" coming from Square Planets and 
"${Squarian}" coming from Squarians`;

    if(Square == true){
        console.log("all is well.");
    }
    else{
        console.log("panic.");
    }

console.log(indexSentence);
console.log(totalItems);
