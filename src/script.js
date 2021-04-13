function createCard( name ) {
      let card = document.createElement( "div" );
  		card.classList.add("card");

  		let topSuit = document.createElement("div");
			let bottomSuit = document.createElement("div");
			topSuit.innerText = name;
      bottomSuit.innerText = name;
			topSuit.classList.add("suit-top");
			bottomSuit.classList.add("suit-bottom");
      if( name.includes("♥") ||  name.includes("♦") ){
			  topSuit.classList.add("red");
			  bottomSuit.classList.add("red");
      }
			card.appendChild(topSuit);
			card.appendChild(bottomSuit);
			document.body.appendChild(card);
}

function createDeck(){
  let suits = [ "♠", "♥", "♣", "♦"];
  let ranks = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let deck = [];
  for( let s = 0; s < suits.length; s++ ){
	  for( let i = 0; i < ranks.length; i++ ){
      deck.push(suits[s] + ranks[i] );
      createCard( suits[s] + ranks[i] );
	  }
  }
}
