import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-[60px] bg-slate-100 relative flex justify-between'>
        <div className='px-6 py-4 ml-8 '>
            <h1 className='font-mono text-3xl'>STUD.IO</h1>
        </div>
        <div className='mr-20'>
            <ul className='flex justify-evenly gap-10 py-4 text-xl font-mono'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar