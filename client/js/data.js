const mainpageItems =[
    {id:11, Name:"Hector", catagory:"Squalian", desc:"Green cat like alien square.", score:"10"},
    {id:12, Name:"Susan", catagory:"Squalian", desc:"Brue crying alien square.", score:"5 pitty points"},
    {id:13, Name:"Anthony Frumsmodge", catagory:"Squalian", desc:"Purple fringed alien square", score:"10 for based"},
    {id:14, Name:"Huddy Bolly", catagory:"Squalian", desc:"Blue multi-color featured alien square.", score:"Blue"},
    {id:15, Name:"Squmpkin", catagory:"Squalian", desc:"A pumpkin like alien", score:"[|87"},
    {id:25, Name:"Stupider", catagory:"Planet", desc:"A Purple square planet.", score:"7, points docked for saftey risk"},
    {id:26, Name:"RED", catagory:"Planet", desc:"A red square planet with multiple rings.", score:"|2 3 [)"},
    {id:27, Name:"Bummer", catagory:"Planet", desc:"Gray depressing planet that is also a square.", score:"-10, who brought this planet to the function?"},
    {id:28, Name:"Pixel", catagory:"Planet", desc:"A multi-colored patterned square planet.", score:"1055"},
    {id:29, Name:"Spooks", catagory:"Planet", desc:"A skelatal looking square planet.", score:"206/10"}
];

//Create a function that receives an item ID and returns the matching object.

document.getElementById("btnSearch").onclick = function searchById(){
    const search = parseInt(document.getElementById("txtSearch").value);

    const foundItem = mainpageItems.find(item=>item.id===search);

    const notFound = "Item not found...";


        if (foundItem){
            document.getElementById("searchRes").textContent = `${foundItem.Name} (${foundItem.catagory}) - ${foundItem.desc} Score: ${foundItem.score}`;
        }else{
            document.getElementById("searchRes").textContent = `${notFound}`;
            }
        }

function countByCatagory(){
    const targetCatagories = ['Planet', 'Squalian']

    const filteredResults ={
        Planet:[],
        Squalian:[]
    }

    for(const item of mainpageItems){
        if(targetCatagories.includes(item.catagory)){
            filteredResults[item.catagory].push(item);
        }
    }
    console.log(filteredResults);
}

function jasonBounce(){
let jasonOut = JSON.stringify(mainpageItems, null, 2);

console.log(jasonOut);

let jasonIn = JSON.parse(jasonOut);

console.log(jasonIn);
}
