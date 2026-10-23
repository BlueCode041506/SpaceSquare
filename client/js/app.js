const siteName = "Space Square";

const squarePlanet = mainpageItems.filter(item=>item.catagory==="Planet").length;

const Squarian = mainpageItems.filter(item=>item.catagory==="Squalian").length;

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

console.log(getByCatagory("Planet"));
console.log(getByCatagory("Squalian"));

jasonBounce();

document.getElementById("btnSearch").onclick = function searchById(){
    const search = parseInt(document.getElementById("txtSearch").value);

    const foundItem = idRetrieve(search);

    const notFound = "Item not found...";


        if (foundItem){
            document.getElementById("searchRes").textContent = `${foundItem.Name} (${foundItem.catagory}) - ${foundItem.desc} Score: ${foundItem.score}`;
        }else{
            document.getElementById("searchRes").textContent = `${notFound}`;
            }
        }