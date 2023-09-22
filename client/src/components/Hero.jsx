import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row md:mx-20 items-center justify-center h-[90vh]'>
       <div className='flex-1 px-4 '>
            <h1 className='text-6xl mt-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Empower Your Education
            with Us</h1>
            <p className='mt-10 text-3xl font-mono'>Unking the door to educational excellence.</p>
        </div>
         <div className='flex-1 md:mt-16'>
        <img src="/student.png" alt="image" />
       </div>
    </div>
  )
}

export default Hero