const siteName = "Space Square";

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let filterVal = localStorage.getItem("lastFilter") || "";

const filterSelect = document.getElementById("filter");
const itemList = document.getElementById("item-list");

function renderItems(itemsToRender){    
    itemList.innerHTML = "";

    if(itemsToRender.length === 0){
        const mess = document.createElement("p");
        mess.className = "header";
        mess.textContent ="No Squares found :["
        itemList.appendChild(mess);
        return;
    }

    itemsToRender.forEach(item =>{        

        const card = document.createElement("div");
        card.className = "Card";
        itemList.appendChild(card);
        const pic = document.createElement("img");
        pic.className = "image";
        pic.src = item.image;
        pic.alt= item.desc;
        card.appendChild(pic);
        const cardText = document.createElement("div");
        cardText.className = "Card-Text";
        cardText.textContent ="This is "+ item.Name + "!";
        card.appendChild(cardText);
        if (item.catagory === "Squalian"){
        const staticLine = document.createElement("p");
        const emphasis = document.createElement("em");
        emphasis.textContent = "We asked "+ item.Name + " some questions!";
        staticLine.appendChild(emphasis);
        cardText.appendChild(staticLine);
        }
        const bodyText = document.createElement("p");
        bodyText.textContent = item.Text;
        cardText.appendChild(bodyText);
        const favBtn = document.createElement("button");
        favBtn.className ="submit";
        favBtn.textContent = favorites.includes(item.id)? "♥" : "♡";
        favBtn.setAttribute("aria-label", "Favorite " + item.Name);
        favBtn.addEventListener("click", function(){

            if (favorites.includes(item.id)){
                favorites= favorites.filter(id => id !== item.id)
                favBtn.textContent ="♡";
            }
            else{
                favorites.push(item.id);
                favBtn.textContent = "♥";
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
        });
        cardText.appendChild(favBtn);
    });

}

function applyFilter(choice){
    if (choice === ""){
        renderItems(mainpageItems);
    }
    else{
        renderItems(getByCatagory(choice));
    }
}

filterSelect.value = filterVal;
applyFilter(filterVal);


filterSelect.addEventListener("change", function(){
    const choice = filterSelect.value;
    applyFilter(choice);
    localStorage.setItem("lastFilter", choice);
});

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