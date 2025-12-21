import React from 'react'

const Certification = () => {
  return (
    <section className='w-full mt-20'>
      <h2 className='title text-3xl font-bold place-self-center mt-10 underline underline-offset-8 decoration-blue-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]'>
        Certifications
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-10 ml-4'>
        <div className="cert1 border-2 h-auto w-80 rounded-4xl px-10 py-6">
          <h1 className='text-2xl font-bold '>AWS - Cloud Foundations </h1>
          <h2 className='mb-2'>Amazon Web Services Training and Certification</h2>
          <a href="https://www.credly.com/badges/63b0fdaa-fc44-456f-8c98-96872b06f353/print" className='border-2 rounded-4xl bg-blue-800 font-bold px-2 py-1'>Link</a>
        </div>
        <div className="cert1 border-2 h-auto w-80 rounded-4xl px-10 py-6">
          <h1 className='text-2xl font-bold '>AWS Cloud
Practitioner Certification </h1>
          <h2 className='mb-2'>GeeksforGeeks</h2>
          <a href="https://media.geeksforgeeks.org/courses/certificates/35df6fe6dfc8d1dc54012dedbfbf973b.pdf" className='border-2 rounded-4xl bg-blue-800 font-bold px-2 py-1'>Link</a>
        </div>
        <div className="cert1 border-2 h-auto w-80 rounded-4xl px-10 py-6">
          <h1 className='text-2xl font-bold '>React JS Development</h1>
          <h2 className='mb-2'>GeeksforGeeks</h2>
          <a href="https://www.geeksforgeeks.org/certificate/9e2f28adb3b23623c472f349c34a265e" className='border-2 rounded-4xl bg-blue-800 font-bold px-2 py-1'>Link</a>
        </div>
      </div>
    </section>
  )
}

export default Certification