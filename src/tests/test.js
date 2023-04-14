import Math from "../utils/math.js";
import assert from "assert";

describe("Math", function () {
  const math = new Math();
  // Addition Function
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
  describe("Subtraction", function () {
    it("Should subtract the second argument from the first argument and return a number.", function () {
      let num1 = 40;
      let num2 = 35;
      let result = math.subtract(num1, num2);
      assert.equal(result, 5);
    });
  });

  describe("Multiplication", function () {});

  describe("Division", function () {});

  describe("Modulo", function () {});

  describe("Factorial", function () {});
});
