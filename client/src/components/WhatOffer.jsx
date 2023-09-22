import React from 'react'

const WhatOffer = () => {

    const offers = [
        {
            id:1,
            title:"Bio-Maths",
        },
        {
            id:2,
            title:"Computer",
        },
        {
            id:3,
            title:"Commerce",
        },
       
    ]

  return (
    <div  className='md:mx-20 h-[100vh]'>
    
        <h1 className='text-center font-mono text-3xl '>What We Offer ?</h1>
      <div className='flex mt-[40px]'>
        <div className='flex-1 pl-4 pt-4'>
            <img src="/offer.png" alt="image" />
        </div>
        <div className='flex-1 mt-16'>
            <h1 className='text-center font-mono text-4xl'>Courses Offered</h1>
            <div className='flex flex-col items-center justify-center mt-[40px]'>
              {offers.map((offer)=>(
                <div key={offer.id} className='w-[200px] h-[60px] rounded-lg bg-slate-400 font-bold text-center py-4 mb-5'>
                      {offer.title}
                </div>
              ))}
              </div>
        </div>
      </div>
    </div>
  )
}

export default WhatOffer