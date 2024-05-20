import { useState } from "react";

export default function App() {
  const [plus, setPlus] = useState("");
  const [minus, setMinus] = useState("");
  const [reult, setResult] = useState("");

  const cal = (e) => {
    e.preventDefault();

    setMinus("");
    setPlus("");

  }

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input /> 만큼을 <button onChange={(e) => setPlus(e.target.value)}>더할게요</button>
        <button onChange={(e) => setMinus(e.target.value)}>뺄게요</button>
        <button>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p> </p>
      </div>
    </div>
  );
}
