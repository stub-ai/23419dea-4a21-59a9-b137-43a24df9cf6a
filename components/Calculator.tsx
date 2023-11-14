import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleInput = (value: string) => {
    setInput(prev => prev + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      alert('Invalid operation');
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div className="p-5 bg-gray-100 rounded shadow-lg">
      <div className="mb-5">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-2 text-right border rounded"
        />
        <div className="text-right">{result}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((value, index) => (
          <button
            key={index}
            onClick={() => value === '=' ? calculate() : handleInput(value)}
            className="p-2 bg-blue-500 text-white rounded"
          >
            {value}
          </button>
        ))}
        <button
          onClick={clearInput}
          className="col-span-2 p-2 bg-red-500 text-white rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;