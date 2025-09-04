import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex py-5 px-10 items-center justify-between'>
        <h2 className='text-2xl'>Menu</h2>
        <div className='flex items-center gap-8'>
          <h4 className='text-xl'>Home</h4>
          <h4 className='text-xl'>Contact</h4>
          <h4 className='text-xl'>About</h4>
          <h4 className='text-xl'>Services</h4>
        </div>
      </nav>
    )
}

export default Navbar
