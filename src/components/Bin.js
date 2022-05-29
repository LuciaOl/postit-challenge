
import {useState } from "react";

const Bin = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>I have eaten {count} post it</p>
      <div onDrop={() => setCount(count + 1)}></div>
    </div>
  )
}

export default Bin;