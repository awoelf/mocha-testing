import { useState } from "react";
import mathSelector from "../utils/helper";

const Box = ({ name }) => {
  const { symbol, math } = mathSelector(name);
  const [args, setArgs] = useState({
    num1: null,
    num2: null,
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArgs({ ...args, [name]: Number(value) });
  };

  return (
    <div className="bg-[#92DAC9] rounded-lg col-span-2 grid py-4 px-7">
      <p className="text-2xl h1 text-center">{name}</p>

      {name === "Factorial" ? (
        <div className="grid grid-cols-6 px-4 place-items-stretch">
          <div className="col-span-2 p-4">
            <input
              type="text"
              placeholder="0"
              name="num1"
              onChange={handleInputChange}
              className="block w-full rounded-lg border-0 pl-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <p className="text-2xl place-self-center">{symbol}</p>

          <p className="text-2xl place-self-center">=</p>
          <div className="col-span-2 p-4">
            <p className="bg-white block w-full rounded-lg border-0 pl-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              {result || result === 0 ? result : "Result"}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-8 px-4 place-items-stretch">
          <div className="col-span-2 p-4">
            <input
              type="text"
              placeholder="0"
              name="num1"
              onChange={handleInputChange}
              className="block w-full rounded-lg border-0 pl-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <p className="text-2xl place-self-center">{symbol}</p>
          <div className="col-span-2 p-4">
            <input
              type="text"
              placeholder="0"
              name="num2"
              onChange={handleInputChange}
              className="block w-full rounded-lg border-0 pl-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <p className="text-2xl place-self-center">=</p>
          <div className="col-span-2 p-4">
            <p className="overflow-x-auto bg-white block w-full rounded-lg border-0 pl-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              style={{scrollbarWidth:'thin'}}
            >
              {result || result === 0 ? result : "Result"}
            </p>
          </div>
        </div>
      )}

      {name === "Factorial" ? (
        <button
          onClick={() => {
            setResult(math(args.num1));
          }}
          className="enabled:bg-orange-500 disabled:bg-zinc-500 rounded-lg px-4 py-2 place-self-center"
          disabled={!(args.num1 || args.num1 >= 0)}
        >
          <p>Calculate</p>
        </button>
      ) : (
        <button
          onClick={() => {
            setResult(math(args.num1, args.num2));
          }}
          className="enabled:bg-orange-500 disabled:bg-zinc-500 rounded-lg px-4 py-2 place-self-center"
          disabled={
            !((args.num1 || args.num1 === 0) && (args.num2 || args.num2 === 0))
          }
        >
          <p>Calculate</p>
        </button>
      )}
    </div>
  );
};

export default Box;
