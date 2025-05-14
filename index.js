// Write your solution in this file!

//Global Scope:
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

//Function-Scoped:
function addBurger() {
    const newBurger = "Flatburger";  
    burgers.push(newBurger);      

    // Block-Scoped:
if (true) {
    const anotherNewBurger = "Maple Bacon Burger"; 
    burgers.push(anotherNewBurger);             
    return anotherNewBurger;   
    }
}

//Global Scope:
function changeFeatureDrink (){
     featuredDrink = "The JavaShake";
 }
 
//Welcome Message- Global Scope
console.log("Welcome to Flatburger");

//Testing
console.log(burgers);
console.log(featuredDrink);






