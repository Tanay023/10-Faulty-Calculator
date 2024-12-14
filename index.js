function faultyCalculator() {
    
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
  
    
    const operation = prompt("Enter the operation (+, -, *, /):");
  

    const randomNum = 0<Math.random()<100;
  
    let result;
  
    // If the random number is less than 10, perform the incorrect operation
    if (randomNum < 0.1) {
      switch (operation) {
        case '+':
          result = num1 - num2;
          break;
        case '-':
          result = num1 + num2;
          break;
        case '*':
          result = num1 / num2;
          break;
        case '/':
          result = num1 * num2;
          break;
        default:
          alert("Invalid operation");
          return;
      }
    } else {
      // Otherwise, perform the correct operation
      switch (operation) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          alert("Invalid operation");
          return;
      }
    }
  
    alert("Result: " + result);
  }
  
  faultyCalculator();