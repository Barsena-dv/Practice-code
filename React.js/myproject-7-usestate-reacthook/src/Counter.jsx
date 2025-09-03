import React, {useState} from "react";

function Counter(){
    const [count , setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-purple-600 font-sans">
  <div className="text-5xl font-bold text-white mb-6 px-8 py-4 rounded-lg bg-white/20 shadow-lg">
    {count}
  </div>

  <div className="flex gap-4">
    <button className="px-6 py-3 rounded-lg bg-red-500 text-white shadow hover:bg-red-700 active:scale-95" onClick={decrement}>Decrement</button>
    <button className="px-6 py-3 rounded-lg bg-gray-200 text-gray-800 shadow hover:bg-gray-700 hover:text-white active:scale-95" onClick={reset}>Reset</button>
    <button className="px-6 py-3 rounded-lg bg-green-500 text-white shadow hover:bg-green-700 active:scale-95" onClick={increment}>Increment</button>
  </div>
</div>


    )
}
export default Counter