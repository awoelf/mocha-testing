import Math from "../utils/math.js";
import assert from "assert";

describe("Math", function () {
  const math = new Math();
  // Addition Function a + b
  describe("Addition", function () {
    it("Should add the first argument to the second argument and return a number.", function () {
      let num1 = 100;
      let num2 = 50;
      let result = math.add(num1, num2);
      assert.equal(result, 150);
    });

    it("Should return an error when a string is used as an argument.", function () {
      let num1 = "400";
      let num2 = 60;
      let result = math.add(num1, num2);
      assert.rejects(result);
    });
  });

  // Subtraction Function a - b
  describe("Subtraction", function () {
    it("Should subtract the second argument from the first argument and return a number.", function () {
      let num1 = 40;
      let num2 = 35;
      let result = math.subtract(num1, num2);
      assert.equal(result, 5);
    });

    it("Should return an error when undefined is used as an argument.", function () {
      let num1 = undefined;
      let num2 = 600;
      let result = math.add(num1, num2);
      assert.rejects(result);
    });
  });

  // Multiplication Function a * b
  describe("Multiplication", function () {
    it("Should multiply the first and second argument and return a number.", function () {
      let num1 = 5;
      let num2 = 7;
      let result = math.multiply(num1, num2);
      assert.equal(result, 35);
    });

    it("Should return an error when null is used as an argument.", function () {
      let num1 = null;
      let num2 = -70;
      let result = math.multiply(num1, num2);
      assert.rejects(result);
    });
  });

  // Division Function a / b
  describe("Division", function () {
    it("Should divide the first by the second argument and return a number.", function () {
      let num1 = 100;
      let num2 = 20;
      let result = math.divide(num1, num2);
      assert.equal(result, 5);
    });

    it("Should return an error when 0 is the divisor.", function () {
      let num1 = 100;
      let num2 = 0;
      let result = math.divide(num1, num2);
      assert.rejects(result);
    });
  });

  // Modulo Function a % b
  describe("Modulo", function () {
    it("Should return the remainder as a number when the first argument is divided by the second argument.", function () {
      let num1 = 20;
      let num2 = 3;
      let result = math.modulo(num1, num2);
      assert.equal(result, 2);
    });

    it("Should return an error when 0 is the divisor.", function () {
      let num1 = 10090;
      let num2 = 0;
      let result = math.modulo(num1, num2);
      assert.rejects(result);
    });
  });

  // Factorial function a!
  describe("Factorial", function () {
    it("Should return the factorial result of the argument.", function () {
      let num1 = 5;
      let result = math.factorial(num1);
      assert.equal(result, 120);
    });

    it("Should return 1 as the factorial result when 0 is the argument.", function () {
      let num1 = 0;
      let result = math.factorial(num1);
      assert.equal(result, 1);
    });

    it("Should return an error when a negative number is the argument.", function () {
      let num1 = -1;
      let result = math.factorial(num1);
      assert.rejects(result);
    });
  });
});
