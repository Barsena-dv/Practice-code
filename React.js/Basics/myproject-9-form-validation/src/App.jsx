import React,{useState} from 'react'

const App = () => {
  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(username);
    setusername('');
  }
  const [username, setusername] = useState('')
  return (
    <div>
      <form className='flex ' onSubmit={(e)=> {
        submitHandler(e)}
        }>
        <input
        value={username}
        onChange={(e)=>{
          setusername(e.target.value)
        }}
        className = 'px-4 py-3 m-4 rounded border-2 border-black'
        type="text"
        placeholder = "Enter you Name..."
        />
        <button className='px-4 py-3 m-4 rounded text-xl font-semibold text-white bg-[rgba(83,20,4,0.77)]'>Submit</button>
      </form>
    </div>
  )
}

export default App
