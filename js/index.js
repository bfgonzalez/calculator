$(document).ready(function () {
  var testLength = function (number) {
    if (number.length > 14) {
      number = "";
      history.text("Max length reached");
    }
  };
  
  var number = "";
  var newNumber = "";

  var history = $("#history"); 
  var final = $("#output");
  history.text(""); 
  final.text("");
  
  $(".buttons").not("#clear, #backspace, #equals, #add, #subtract, #multiply, #divide, #pos-neg").on("click", function() {
    number += $(this).text();
    history.text(number);
    testLength(number);
  });
  
  $("#add, #subtract, #multiply, #divide").on("click", function() {
    operator = $(this).text();
    newNumber = number;
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
    if ($(this).attr("id") === "clear") {
      newNumber = "";
    }
    
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
  
  $("#equals").on("click", function () {
    if (operator) {
      number = number.replace(/x/g, "*").replace(/÷/g, "/");
      answer = eval(number);
    }
    if (answer.length > 14) {
      answer = "Max length reached";
    }
    
    final.text(answer.toFixed(2));
    testLength(number);
    
    number = "";
  });
});