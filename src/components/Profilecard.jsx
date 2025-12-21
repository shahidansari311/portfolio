import React from 'react'

const Profilecard = ({handle,abc,link}) => {
  return (
    <div className='border-2 max-h-auto w-60 p-5 rounded-2xl mt-4'>
        <h1 className='text-xl font-bold'>{handle}</h1>
        <h2 className='pb-4 font-bold'>{abc}</h2>
        <a href={link} className='px-2 py-2 border-2 rounded-3xl cursor-pointer bg-red-700'>View Profile</a>
    </div>
  )
}

export default Profilecard