var divA = document.querySelector("#from_div");
var divB = document.querySelector("#to_div");
var arrowLeft = document.querySelector("#arrowLeft");
var arrowRight = document.querySelector("#arrowRight");

var drawConnector = function () {
  var posnARight = {
    x: divA.offsetLeft + divA.offsetWidth + 8,
    y: divA.offsetTop + divA.offsetHeight / 2,
  };
  var posnBRight = {
    x: divB.offsetLeft + divB.offsetWidth + 8,
    y: divB.offsetTop + divB.offsetHeight / 2,
  };

  var dStrRight =
    "M" +
    posnBRight.x +
    "," +
    posnBRight.y +
    " " +
    "C" +
    (posnBRight.x + 100) +
    "," +
    posnBRight.y +
    " " +
    (posnARight.x + 100) +
    "," +
    posnARight.y +
    " " +
    posnARight.x +
    "," +
    posnARight.y;
  arrowRight.setAttribute("d", dStrRight);
};

$("#from_div, #to_div").draggable({
  drag: function (event, ui) {
    drawConnector();
  },
});

setTimeout(drawConnector, 250);
