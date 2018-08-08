$(document).ready(function () {
  var number = "";
  var history = $("#history");
  var final = $("#output");
  history.text("");
  final.text("");

  var testLength = function (number) {
    if (number.length > 14) {
      number = "";
      history.text("Max length reached");
    }
  };

  $(".number-btn").on("click", function() {
    number += this.textContent;
    history.text(number);
    testLength(number);
  });

  $(".operator-btn").on("click", function() {
    operator = this.textContent;
    number += operator;
    history.text(number);
  });

  // testing +/- functionality
  $("#pos-neg").on("click", function () {
    var currentSign = $("#history").text();
    var newSign = currentSign === "" ? "-" : "";
    history.text(number += newSign);
  });

  $("#clear").on("click", function() {
    number = "";
    history.text("");
    final.text("");
  });

  $("#backspace").on("click", function() {
    if (number.length < 2) {
      number = "";
      history.text("");
      final.text("");
    }
    number = number.slice(0, number.length-1);
    history.text(number);
    final.text("");
  });

  document.getElementById("equals").addEventListener("click", function() {
    if (operator) {
      number = number.replace(/x/g, "*").replace(/÷/g, "/");
      answer = eval(number);
    }

    if (answer.length > 14) {
      answer = "Max length reached";
    }

    if (answer % 1 == 0) {
      final.text(answer);
    } else {
      final.text(answer.toFixed(2));
    }

    testLength(number);
    number = "";
  });


});