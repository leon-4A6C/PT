document.getElementsByName("calc")[0].addEventListener("click", e => {
  var result = document.getElementsByClassName("result")[0];
  var operation = document.getElementsByName("operation")[0].value;
  var numbers = document.getElementsByName("numbers")[0].value;
  numbers = commaToArray(numbers);
  text = numbers[0] + " ";
  var calc = parseFloat(numbers[0]);
  for (var i = 1; i < numbers.length; i++) {
    switch (operation) {
      case "*":
        calc *= parseFloat(numbers[i]);
        break;
      case "/":
        calc /= parseFloat(numbers[i]);
        break;
      case "-":
        calc -= parseFloat(numbers[i]);
        break;
      case "+":
        calc += parseFloat(numbers[i]);
        break;
      default:

    }
    text += operation;
    text += " " + numbers[i] + " ";
    if (i === numbers.length-1) {
      text += " = " + calc;
    }
  }

  result.innerHTML = text;
});
