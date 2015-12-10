// $("#square0").click(function() {
//   $("#square0").append("<img class='xo' src='images/x.png' height='120' width='120'>");
// });

$("td").click(function() {
  var squareID = this.id;
  $("#" + squareID).append("<img class='xo' src='images/x.png' height='120' width='120'>");
});
