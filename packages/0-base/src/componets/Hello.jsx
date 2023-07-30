import { useState } from "react";

export default function Helloe() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}
