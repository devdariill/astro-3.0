import { useState } from 'preact/hooks'

export function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div class="[&>*]:border text-center flex justify-evenly [&>*]:py-1 [&>*]:px-2 my-2 [&>*]:rounded">
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
