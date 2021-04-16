function createTopSuitTag( suit, rank ){
  let name = suit + rank;
  const suitType = ['suit-top', 'suit-bottom'];
  for( let i = 0; i < suitType.length; i++){
    let container = document.createElement("div");
    container.classList.add(suitType[i]);

    let suitDiv = document.createElement("div");
    let rankDiv = document.createElement("div");
    suitDiv.innerText = suit;
    rankDiv.innerText = rank;

    if( suit === "♥" ||  suit === "♦" ){
      container.classList.add("red");
    }
    container.appendChild(suitDiv);
    container.appendChild(rankDiv);

    var card = document.getElementById(name);
    card.appendChild(container);
  }
}

function createCard( suit, rank ) {
  let name =  suit + rank;
  let card = document.createElement( "div" );
  card.classList.add("card");
  card.id = name;
  document.body.appendChild(card);
  deck.push( card );
  createTopSuitTag( suit, rank );
}

function createDeck(){
  let suits = [ "♠", "♥", "♣", "♦"];
  let ranks = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  deck = [];
  for( let s = 0; s < suits.length; s++ ){
	  for( let i = 0; i < ranks.length; i++ ){
      //deck.push(suits[s] + ranks[i] );
      createCard( suits[s], ranks[i] );
	  }
  }
}
