import { useState } from "react";

type CounterProps = {
  num?: number;
};

// type script는 props의 타입을 직접 바인딩 해줘야 함
// { num = 0 } : undefined일 때만 기본값으로 처리, null은 그대로 적용
// {num?:number} : props의 타입은 number
export default function Counter2({ num = 0 }: CounterProps) {
  // any
  const [count, setCount] = useState<number>(num ?? 0); // any
  return (
    <div className="m-3">
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
        className="px-4 py-2 bg-blue-500 mx-3 text-white rounded hover:bg-blue-700"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => {
          setCount(num);
        }}
      >
        reset
      </button>
    </div>
  );
}
