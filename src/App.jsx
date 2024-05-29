import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    const valueToAdd = parseInt(inputValue, 10);
    if (!isNaN(valueToAdd)) {
      setCount(count + valueToAdd);
    }
    setInputValue('');
  };

  const handleSubtract = () => {
    const valueToSubtract = parseInt(inputValue, 10);
    if (!isNaN(valueToSubtract)) {
      setCount(count - valueToSubtract);
    }
    setInputValue('');
  };

  const handleReset = () => {
    setCount(0);
    setInputValue('');
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> 만큼을 <button onClick={handleAdd}>더할게요</button>
        <button onClick={handleSubtract}>뺄게요</button>
        <button onClick={handleReset}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{count}</p>
      </div>
    </div>
  );
}
