import "./App.css";
import Box from "./components/box.js";

function App() {
  return (
    <div className="App">
      <div className="grid place-content-center">
        <img
          src="math-testing-logo.png"
          width={120}
          alt="A logo of a capybara sitting in a cup."
          className="mx-auto"
        />
        <p className="text-4xl h1 text-center">Mathematics Testing</p>
      </div>
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 gap-4 m-7">
        <Box name={"Addition"}/>
        <Box name={"Subtraction"}/>
        <Box name={"Multiplication"}/>
        <Box name={"Division"}/>
        <Box name={"Modulo"}/>
        <Box name={"Factorial"}/>
      </div>
      <footer>
        <p className='text-center'>Created by Alexis Woelffer</p>
      </footer>
    </div>
  );
}

export default App;
