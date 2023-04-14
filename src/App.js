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
        <Box name={"Addition"} />
        <Box name={"Subtraction"} />
        <Box name={"Multiplication"} />
        <Box name={"Division"} />
        <Box name={"Modulo"} />
        <Box name={"Factorial"} />
      </div>
      <footer>
        <p className="text-center">Created by Alexis Woelffer</p>
        <div className="grid">
          <div className="place-self-center">
            <a
              className="mx-1"
              href="https://www.linkedin.com/in/alexis-w-dev/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bi bi-linkedin"></i>
            </a>
            <a
              className="mx-1"
              href="https://github.com/awoelf"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bi bi-github"></i>
            </a>
            <a className="mx-1" href="mailto:awoelf@outlook.com">
              <i class="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
