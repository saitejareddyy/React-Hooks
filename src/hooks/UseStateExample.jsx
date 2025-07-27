import { pre } from "motion/react-client";
import { useState } from "react";

export function UseStateExample() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    console.log(count);
  }
  return (
    <div className="flex flex-col items-center">
      <p className="mb-5">Count: {count}</p>
      <div className="flex items-center justify-center gap-10">
        <button className="bg-[gray] px-4 py-3 rounded text-xl" onClick={handleClick}>Increment</button>
      </div>
    </div>
  )
}

