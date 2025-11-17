import { useState } from "react";

export default function Counter() {
  // useState
  // typeScript

  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1 className="text-2xl m-2">{count}</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-3"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
