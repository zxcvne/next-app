"use client"; // next.js에서는 react의 hook을 바로 사용할 수 없기 때문에
// 모든 컴포넌트를 받아오는 page.tsx에서 가장 상단에 "use client" 작성
// route할때는 각자 페이지 상단에 작성해주어야 함
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Hello from "./components/Hello";
import InputSample from "./components/InputSample";
import InputSample2 from "./components/InputSample2";
import Start from "./components/Start";
import UserList from "./components/user/UserList";
import UserList2 from "./components/user/UserList2";

export default function Home() {
  return (
    <div className="min-h-screen text-center p-10 bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl my-5">next.js page</h1>
      {/* 컴포넌트 삽입 */}
      <Hello />
      <Start />
      <hr />
      <Counter />
      <br />
      <hr />
      <Counter2 num={100} />
      <hr />
      {/* <InputSample />
      <hr />
      <InputSample2 />
      <hr />
      <UserList />
      <hr /> */}
      <UserList2 />
    </div>
  );
}
