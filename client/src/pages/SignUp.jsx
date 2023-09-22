import React from 'react'

const SignUp = () => {
  return (
    <div className='h-[80vh] flex flex-col items-center justify-center'>
        <h1 className='font-mono text-2xl mb-5'>SignUP</h1>
        <div className='w-[500px] h-[300px] border-solid border-[2px] border-black rounded-lg'>
            <form action="" className='flex flex-col items-center justify-center mt-[40px] gap-3'>
                <label htmlFor="" className='font-mono text-xl'>Username</label>
                <input type="text" className='w-[200px] h-8 border-none bg-blue-300'/>
                <label htmlFor="" className='font-mono text-xl'>Password</label>
                <input type="text" className='w-[200px] h-8 bg-blue-300 border-none'/>
                <button className='font-mono text-xl w-[100px] px-4 py-2  border-[1px] border-black rounded-lg mt-5'>submit</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp