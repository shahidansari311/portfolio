import React from 'react'

const Certification = () => {
  return (
    <section className='w-full mt-20'>
      <h2 className='title text-3xl font-bold place-self-center mt-10 underline underline-offset-8 decoration-blue-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]'>
        Certifications
      </h2>
      <div className='flex justify-around mt-10'>
        <div className="cert1 border-2 h-auto w-80 rounded-4xl px-10 py-6">
          <h1 className='text-2xl font-bold '>Name</h1>
          <h2 className='mb-2'>Issuing authority</h2>
          <a href="" className='border-2 rounded-4xl bg-blue-800 font-bold px-2 py-1'>Link</a>
        </div>
        <div className="cert1 border-2 h-auto w-80 rounded-4xl px-10 py-6">
          <h1 className='text-2xl font-bold '>Name</h1>
          <h2 className='mb-2'>Issuing authority</h2>
          <a href="" className='border-2 rounded-4xl bg-blue-800 font-bold px-2 py-1'>Link</a>
        </div>
      </div>
    </section>
  )
}

export default Certification