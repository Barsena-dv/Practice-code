import Student from './Student.jsx';

function App() {

  return (
    <>
      <Student name="Barsena Dhruv" age={20} isStudent={true} />
      <Student name="Nili" age={70} isStudent={false} />
      <Student name="Mansuri Jiyan" age={20} isStudent={true} />
      <Student name="Drumil Chauhan" age={30} isStudent={true} />
      <Student />
    </>
  )
}

export default App
