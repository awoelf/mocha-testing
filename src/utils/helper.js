import Math from "./math";

const mathSelector = (name) => {
  const math = new Math();
  switch (name) {
    case "Addition":
      return {
        symbol: "+",
        math: math.add,
      };
    case "Subtraction":
      return {
        symbol: "-",
        math: math.subtract,
      };
    case "Multiplication":
      return {
        symbol: "*",
        math: math.multiply,
      };
    case "Division":
      return {
        symbol: "/",
        math: math.divide,
      };
    case "Modulo":
      return {
        symbol: "%",
        math: math.modulo,
      };
    case "Factorial":
      return {
        symbol: "!",
        math: math.factorial,
      };
    default:
      return {
        symbol: null,
        math: null,
      };
  }
};

export default mathSelector;
