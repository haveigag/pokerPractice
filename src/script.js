
function createTopSuitTag( suit, rank ){
  let topSuit = document.createElement("div");
  topSuit.innerText = name;
  topSuit.classList.add("suit-top");
  if( name.includes("♥") ||  name.includes("♦") ){
    topSuit.classList.add("red");
  }
  var card = document.getElementById(name);
  card.appendChild(topSuit);
}

function createBottomSuitTag(name){
  let bottomSuit = document.createElement("div");
  bottomSuit.innerText = name;
  bottomSuit.classList.add("suit-bottom");
  if( name.includes("♥") ||  name.includes("♦") ){
    bottomSuit.classList.add("red");
  }
  var card = document.getElementById(name);
  card.appendChild(bottomSuit);
}

function createCard( suit, rank ) {
  name =  suit + rank;
  let card = document.createElement( "div" );
  card.classList.add("card");
  card.id = name;
  document.body.appendChild(card);
  createTopSuitTag( suit, rank );
  createBottomSuitTag(name);
}

function createDeck(){
  let suits = [ "♠", "♥", "♣", "♦"];
  let ranks = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let deck = [];
  for( let s = 0; s < suits.length; s++ ){
	  for( let i = 0; i < ranks.length; i++ ){
      deck.push(suits[s] + ranks[i] );
      createCard( suits[s], ranks[i] );
	  }
  }
}
