export default class Math {
  add = (num1, num2) => {
    return num1 + num2;
  }

  subtract = (num1, num2) => {
    return num1 - num2;
  }

  multiply = (num1, num2) => {
    return num1 * num2;
  }

  divide = (num1, num2) => {
    if (num2 === 0) {
      return 'Error.'
    }
    return num1 / num2;
  }

  modulo = (num1, num2) => {
    if (num2 === 0) {
      return 'Error.'
    }
    return num1 % num2;
  }

  factorial = (num) => {
    if (num < 0) {
      return 'Error.';
    } else if (num === 0) {
      return 1;
    } else {
      return (num * this.factorial(num - 1));
    }
  }
}