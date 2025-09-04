import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Card from './Components/Cards'
const App = () => {
  const users = [
  {
    name: "Aarav Sharma",
    age: 24,
    profession: "Web Developer",
    city: "Mumbai",
    profile: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Riya Patel",
    age: 22,
    profession: "UI/UX Designer",
    city: "Ahmedabad",
    profile: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Kunal Mehta",
    age: 28,
    profession: "Software Engineer",
    city: "Pune",
    profile: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Sneha Iyer",
    age: 26,
    profession: "Data Analyst",
    city: "Bangalore",
    profile: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Aditya Verma",
    age: 30,
    profession: "Digital Marketer",
    city: "Delhi",
    profile: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

  return (
    <>
    

    <div className="p-10 flex flex-wrap justify-center">
      {users.map((elem, idx) => (
        <Card
          key={idx}
          username={elem.name}
          age={elem.age}
          prof={elem.profession}
          city={elem.city}
          photu={elem.profile}
        />
      ))}
    </div>
    </>
  )
}

export default App
