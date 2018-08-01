// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

let quotes = [
  {quote: "Where we're going, we don't need roads.", source: "Dr. Emmett Brown", citation: "Back to the Future", date: 1985},
  {quote: "My Mama always said, 'life is like a box of chocolates, you never know what you're going to get.'", source: "Forest Gump", citation: "Forest Gump", date: 1994},
  {quote: "Go ahead, make my day.", source: "Harry Callahan", citation: "Sudden Impact", date: 1983},
  {quote: "It's not the years, honey. It's the mileage.", source: "Indiana Jones", citation: "Raiders of the Lost Ark", date: 1981},
  {quote: "Life moves pretty fast. If you don't stop and look areound once in a whle you could miss it.", source: "Ferris Bueller", citation: "Ferris Bueller's Day Off", date: 1986},
  {quote: "It's not who I am underneath, but what defines what I do that defines me", source: "Batman", citation: "Batman Begins", date: 2005},
  {quote: "Get busy living, or get busy dying.", source: "Andy Dufresne", citation: "The Shawshank Redemption", date: 1994},
  {quote: "They may take our lives, but they'll never take our freedom!", source: "William Wallace", citation: "Braveheart", date: 1995},
  {quote: "Our lives are defined by opportunities, even the ones we miss.", source: "Benjamin Button", citation: "The curious case of Benjamin Button", date: 2008},
];

// Create the getRandomQuuote function and name it getRandomQuote

function getRandomQuote() {
  for ( let prop in quotes) {
    console.log(quotes[prop]);
  }
}

getRandomQuote();

function getRandomNumber () {
var randomNumber = Math.floor( Math.random() * quotes.length ) + 1;
  return randomNumber;
}
alert(getRandomNumber());


// Create the printQuote funtion and name it printQuote

function printQuote (message) {
var outputDiv = document.getElementById('quote-box');
outputDiv.innerHTML = message;
}

message = '<p class="quote">This is where the random quote will go</p>';
message += '<p class="source">This is the source<span class="citation">This is the citation</span><span class="year">This is the year</span></p>';
printQuote(message);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
