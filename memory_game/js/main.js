// console.log("Up and running!");

var cards =[
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"

},

{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},

{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},

{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}

];
var cardsInPlay= cards[0].rank;


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
console.log("User flipped " + cards[0].rank);
console.log(cards[0].cardImage);
console.log(cards[0].suit);

var cardTwo = cards[2];
cards.push(cardTwo);
console.log("User flipped " + cards[2].rank);
console.log(cards[2].cardImage);
console.log(cards[2].suit);




