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
        <div className="flex flex-col items-center justify-center h-screen font-sans bg-gradient-to-br from-indigo-500 to-purple-600">
  <div className="px-8 py-4 mb-6 text-5xl font-bold text-white rounded-lg shadow-lg bg-white/20">
    {count}
  </div>

  <div className="flex gap-4">
    <button className="px-6 py-3 text-white bg-red-500 rounded-lg shadow hover:bg-red-700 active:scale-95" onClick={decrement}>Decrement</button>
    <button className="px-6 py-3 text-gray-800 bg-gray-200 rounded-lg shadow hover:bg-gray-700 hover:text-white active:scale-95" onClick={reset}>Reset</button>
    <button className="px-6 py-3 text-white bg-green-500 rounded-lg shadow hover:bg-green-700 active:scale-95" onClick={increment}>Increment</button>
  </div>
</div>


    )
}
export default Counter