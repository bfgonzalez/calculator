$(document).ready(function() {
  var result = "";
  var previous = 0;
  var operation = ""; 
  var current = "";
   update(result);
  
  $(".buttons").on("click", function() {
    var buttonPressed = $(this).text();
    console.log(buttonPressed);
    
      if (buttonPressed === "C") {
          result = 0;
          current = "";
     }  else if (buttonPressed === "CE") {
           current = "";
     }  else if (buttonPressed === "Back") {
           current = current.substring(0, current.length-1);
     }  else if (buttonPressed === "+/-") {
           current *= -1; 
     }  else if (buttonPressed === ".") {
           current += ".";
     } else if (number(buttonPressed)) {
        if (current === "0") current = buttonPressed;
        else current = current + buttonPressed;
     } else if (operator(buttonPressed)) {
        previous = parseFloat(current);
        operation = buttonPressed;
        current = "";
     } else if (buttonPressed === "=") {
       current = operate(previous, current, operation);
       operation = null;
     }
      
        update(current);
  });

});

update = function(displayOutput) {
  var displayOutput = displayOutput.toString();
  $("#output").text(displayOutput.substring(0, 10));
  $("#history").text(displayOutput.substring(0, 10));
};


number = function(value) {
  return !isNaN(value);
};

operator = function(value) {
  return value === "/" || value === "x" || value === "+" || value === "-";
};

operate = function(a, b, operation) {
  a = parseFloat(a); 
  b = parseFloat(b); 
  console.log(a, b, operation);
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (operation === "x") return a * b;
  if (operation === "/") return a / b;
};