import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count+1);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <h2>Counter</h2>
      <p>Your clicked {count} times.</p>
      <button onClick={onClick}>
        Click me
      </button>
    </div>
  )
}