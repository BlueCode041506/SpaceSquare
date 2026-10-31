const mainpageItems =[
    {id:11, Name:"Hector", Text:"He spoke only in his native tongue and caused our correspondants mind to explode... we can get another its fine...", catagory:"Squalian", desc:"Green cat like alien square.", image:"images/Hector.png", date:"8/25/26", score:"10"},
    {id:12, Name:"Susan", Text:"she cried and ran away...", catagory:"Squalian", desc:"Blue crying alien square.", image:"images/Susan.png", date:"8/27/26", score:"5 pitty points"},
    {id:13, Name:"Anthony Frumsmodge", Text:"'I'm concerned about the economy' said Anthony", catagory:"Squalian", desc:"Purple fringed alien square",  image:"images/Anthony-Frumsmodge.png", date:"8/30/26", score:"10 for based"},
    {id:14, Name:"Huddy Bolly", Text:"'whats with these homies dissing my girl?' Quote Huddy", catagory:"Squalian", desc:"Blue multi-color featured alien square.", image:"images/HuddyBolly.png", date:"9/29/26", score:"Blue"},
    {id:15, Name:"Squmpkin", Text:"'Did you know theres a light over in the frankenstiens place?' No, we didnt, but Squmpkin assures us its burning in the fireplace.", catagory:"Squalian", desc:"A pumpkin like alien", image: "images/Squmpkin.png", date:"10/17/26", score:"[|87"},
    {id:16, Name:"Siggy", Text:"but he lied to us. We can see right through him...", catagory:"Squalian", desc:"Little square ghost", image:"images/Siggy_Sqhost.png", date:"10/23/26", score:"|300"},
    {id:25, Name:"Stupider", Text:"You can go to Stupier to get more Jupiter! this makes it a fantastic vacation destination. We would recommend you stay away from the brain storm for it has slaughtered thousands who merely wished to get jupid", catagory:"Planet", desc:"A Purple square planet.", image:"images/Stupider.png", date:"8/25/26", score:"7, points docked for saftey risk"},
    {id:26, Name:"RED", Text:"This is planet RED! as you can guess, it is red. its a great place for anyone who likes red. To dogs its planet gray! to british dogs its planet grey.", catagory:"Planet", desc:"A red square planet with multiple rings.",image: "images/RED.png", date:"8/27/26", score:"|2 3 [)"},
    {id:27, Name:"Bummer", Text:"It's not super pleasent to be around. kinda brings down the whole vibe. Go to planet bummer if you're in too good of a mood we guess...", catagory:"Planet", desc:"Gray depressing planet that is also a square.", image:"images/Bummer-Planet.png", date:"8/31/26", score:"-10, who brought this planet to the function?"},
    {id:28, Name:"Pixel", Text:"it displays images via panels of light on the planets surface. We have yet to decode what it means and when we asked the planets inhabitants they just laughed.", catagory:"Planet", desc:"A multi-colored patterned square planet.", image:"images/PixelPlanet.png", date:"9/29/26", score:"1055"},
    {id:29, Name:"Spooks", Text:"It is hollow inside! us too Spooks, us too...", catagory:"Planet", desc:"A skelatal looking square planet.", image:"images/PlanetSpooks.png", date:"10/17/26",score:"206/10"},
    {id:30, Name:"Creature", Text:"THIS PLANETS NAME IS HEAILY DEBATED. Some name it after the squalian who created it from debris from dead planets, Others call it Creature, claiming 'It's alive', The planet thinks it ought to be Adam", catagory:"Planet", desc:"A stitched together planet", image:"images/TheCreature.png", date:"10/23/26", score:"272/10"}
];

//Create a function that receives an item ID and returns the matching object.
function idRetrieve(id){
    return mainpageItems.find(item=>item.id===id);
}

function getByCatagory(catagory){
    return mainpageItems.filter(item=>item.catagory===catagory);
}

function jasonBounce(){
let jasonOut = JSON.stringify(mainpageItems, null, 2);

console.log(jasonOut);

let jasonIn = JSON.parse(jasonOut);

console.log(jasonIn);
}
