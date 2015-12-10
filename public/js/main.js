var turns = 0;
var usedSquares = [];

$("td").click(function() {
  var squareID = this.id;
  var squareTaken = false;

  for(var i = 0; i< usedSquares.length; i++) {
    if(usedSquares[i] === squareID) {
      squareTaken = true;
    }
  }

  if(!squareTaken) {
    turns++;
    usedSquares.push(squareID);
    if(turns % 2 === 1)
      $("#" + squareID).append("<img class='xo' src='images/x.png' height='120' width='120'>");
    else
      $("#" + squareID).append("<img class='xo' src='images/o.png' height='120' width='120'>");

    if(turns >= 9)
      gameOver();
    }
});

function gameOver() {
  alert("Game over!");
};
