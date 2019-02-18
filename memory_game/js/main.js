// console.log("Up and running!");

var cards =["queen","queen","king","king"];
var cardsInPlay= cards[0];


// var cardOne =cards[0];
// cards.push("cardOne");


// console.log("User flipped queen");



// var cardTwo =cards[2];
// cards.push("cardTwo");

// console.log("User flipped king");

var checkForMatch = function(){

if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}

var cardOne = cards[0];
cards.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cards.push(cardTwo);
console.log("User flipped " + cardTwo);



