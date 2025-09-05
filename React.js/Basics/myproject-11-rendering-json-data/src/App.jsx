import axios from 'axios'
import React, { use, useState } from 'react'
import Cards from './Components/Cards'

const App = () => {
  const [data, setData] = useState([])
  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    console.log(data);
    
  }
  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-orange-800 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button>
      <div className="p-10 flex flex-wrap justify-center">
      {data.map((elem, idx) => (
        <Cards
          key={idx}
          author={elem.author}
          height={elem.height}
          id={elem.id}
          photu={elem.download_url}
        />
      ))}
    </div>
    </div>
  )
}

export default App
