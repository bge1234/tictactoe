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
    if(turns % 2 === 1) {
      $("#" + squareID).append("<img class='" + setClas(squareID, 'x') + "' src='images/x.png' height='120' width='120'>");
      checkWin();
    }
    else {
      $("#" + squareID).append("<img class='" + setClas(squareID, 'o') + "' src='images/o.png' height='120' width='120'>");
      checkWin();
    }

    if(turns >= 9)
      drawnGame();
    }
});

function setClas(id, c) {
  //Set class based on column, row, or diagonal, used to determine wins later
  var clas = "";

  if(id[6] === '0')
    clas = "xo " + c + "row0 " + c + "col0 " + c + "diag0";
  else if(id[6] === '1')
    clas = "xo " + c + "row0 " + c + "col1";
  else if(id[6] === '2')
    clas = "xo " + c + "row0 " + c + "col2 " + c + "diag1";
  else if(id[6] === '3')
    clas = "xo " + c + "row1 " + c + "col0";
  else if(id[6] === '4')
    clas = "xo " + c + "row1 " + c + "col1 " + c + "diag0 " + c + "diag1";
  else if(id[6] === '5')
    clas = "xo " + c + "row1 " + c + "col2";
  else if(id[6] === '6')
    clas = "xo " + c + "row2 " + c + "col0 " + c + "diag1";
  else if(id[6] === '7')
    clas = "xo " + c + "row2 " + c+ "col1";
  else if(id[6] === '8')
    clas = "xo " + c + "row2 " + c + "col2 " + c + "diag0";

  console.log(clas);

  return clas;
}

function checkWin() {
  if($(".xrow0").length === 3 || $(".xrow1").length === 3 || $(".xrow2").length === 3 || $(".xcol0").length === 3 || $(".xcol1").length === 3 || $(".xcol2").length === 3 || $(".xdiag0").length === 3 || $(".xdiag1").length === 3)
    alert("X wins!");
  else if($(".orow0").length === 3 || $(".orow1").length === 3 || $(".orow2").length === 3 || $(".ocol0").length === 3 || $(".ocol1").length === 3 || $(".ocol2").length === 3 || $(".odiag0").length === 3 || $(".odiag1").length === 3)
    alert("O wins!");
}

function drawnGame() {
  alert("The game was a draw!");
  $(".xo").remove();
  turns = 0;
  usedSquares.splice(0, usedSquares.length);
};
