//If can win, win.
//If can't win and opponent can win, block opponent.
//If can't win, opponent can't win, and center square is available, play center square.
//If can't win, opponent can't win, and center square is not available, play any open square (randomly).

function compPlayer() {
  if($(".orow0").length === 2)
    compPlayRow(0);
  else if($(".orow1").length === 2)
    compPlayRow(1);
  else if($(".orow2").length === 2)
    compPlayRow(2);
  else if($(".ocol0").length === 2)
    compPlayCol(0);
  else if($(".ocol1").length === 2)
    compPlayCol(1);
  else if($(".ocol2").length === 2)
    compPlayCol(2);
  else if($(".odiag0").length === 2)
    compPlayDiag(0);
  else if($(".odiag1").length === 2)
    compPlayDiag(1);
  if($(".xrow0").length === 2)
    compPlayRow(0);
  else if($(".xrow1").length === 2)
    compPlayRow(1);
  else if($(".xrow2").length === 2)
    compBlockRow(2);
  else if($(".xcol0").length === 2)
    compPlayCol(0);
  else if($(".xcol1").length === 2)
    compBPlayCol(1);
  else if($(".xcol2").length === 2)
    compBPlayCol(2);
  else if($(".xdiag0").length === 2)
    compBPlayDiag(0);
  else if($(".xdiag1").length === 2)
    compPlayDiag(1);
  else if(!squareTaken(4));
    compPlayCenter();
  else {
    compPlayOpen();
  }
};

function compPlayRow(row) {
  var squareID = 0;
  var checkSquare = 0;

  if(row === 0) {
    for(var squareID = 0; squareID < 3; squareID++) {
      if(!squareTaken(checkSquare))
        squareID =  checkSquare;
      }
    $("#" + squareID).append("<img class='" + setClas(squareID, 'o') + "' src='images/o.png' height='120' width='120'>");
    checkWin();
    return;
  }
  else if(row === 1) {
    for(var squareID = 3; squareID < 6; squareID++) {
      if(!squareTaken(checkSquare))
        squareID =  checkSquare;
      }
      $("#" + squareID).append("<img class='" + setClas(squareID, 'o') + "' src='images/o.png' height='120' width='120'>");
      checkWin();
      return;
  }
  else if(row === 2) {
    for(var squareID = 6; squareID < 9; squareID++) {
      if(!squareTaken(checkSquare))
        squareID =  checkSquare;
      }
    $("#" + squareID).append("<img class='" + setClas(squareID, 'o') + "' src='images/o.png' height='120' width='120'>");
    checkWin();
    return;
  }
};

function compPlayCol(col) {
  if(col === 0) {
    for(var squareID = 0; squareID < 7; squareID += 3) {
      if(!squareTaken(checkSquare))
        squareID =  checkSquare;
      }
    $("#" + squareID).append("<img class='" + setClas(squareID, 'o') + "' src='images/o.png' height='120' width='120'>");
    checkWin();
    return;
  }
  else if(col === 1) {
    for(var squareID = 1; squareID < 8; squareID += 3) {
      if(!squareTaken(checkSquare))
        squareID =  checkSquare;
      }
    $("#" + squareID).append("<img class='" + setClas(squareID, 'o') + "' src='images/o.png' height='120' width='120'>");
    checkWin();
    return;
  }
  else if(col === 2) {
    for(var squareID = 2; squareID < 9; squareID+ += 3) {
      if(!squareTaken(checkSquare))
        squareID =  checkSquare;
      }
    $("#" + squareID).append("<img class='" + setClas(squareID, 'o') + "' src='images/o.png' height='120' width='120'>");
    checkWin();
    return;
  }
};

function compPlayDiag(diag) {
  if(diag === 0) {
    for(var squareID = 0; squareID < 10; squareID += 4) {
      if(!squareTaken(checkSquare))
        squareID =  checkSquare;
      }
    $("#" + squareID).append("<img class='" + setClas(squareID, 'o') + "' src='images/o.png' height='120' width='120'>");
    checkWin();
    return;
  }
  else if(diag === 1) {
    for(var squareID = 2; squareID < 7; squareID += 2) {
      if(!squareTaken(checkSquare))
        squareID =  checkSquare;
      }
    $("#" + squareID).append("<img class='" + setClas(squareID, 'o') + "' src='images/o.png' height='120' width='120'>");
    checkWin();
    return;
  }
};

function compPlayCenter() {
  var squareID = 4;

  $("#" + squareID).append("<img class='" + setClas(squareID, 'o') + "' src='images/o.png' height='120' width='120'>");
  checkWin();
};

function compPlayOpen() {
  var squareID = 0;

  for(var squareID = 0; squareID < 9; squareID++) {
    if(!squareTaken(squareID))
      $("#" + squareID).append("<img class='" + setClas(squareID, 'o') + "' src='images/o.png' height='120' width='120'>");
  }
  checkWin();
};

function squareTaken(squareID) {
  var squareTaken = false;

  for(var i = 0; i< usedSquares.length; i++) {
    if(usedSquares[i] === squareID) {
      squareTaken = true;
    }
  }

  return squareTaken;
};
