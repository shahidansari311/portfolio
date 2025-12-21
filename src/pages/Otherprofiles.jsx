import React from 'react'
import Profilecard from '../components/Profilecard'

const Otherprofiles = () => {
  return (
    <section className="w-full mt-30">
      <h2 className='title text-3xl font-bold place-self-center mt-10 underline underline-offset-8 decoration-blue-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]'>
        My Profiles
      </h2>
      <div className="profiles grid grid-cols-1 md:grid-cols-4 mx-5 mt-10">
        <Profilecard handle="shahidansari310"
        abc="Github" 
        link="https://shahid.com"/>
        <Profilecard handle="shahidansari310"
        abc="Github" 
        link="https://shahid.com"/>
        <Profilecard handle="shahidansari310"
        abc="Github" 
        link="https://shahid.com"/>
        <Profilecard handle="shahidansari310"
        abc="Github" 
        link="https://shahid.com"/>
        <Profilecard handle="shahidansari310"
        abc="Github" 
        link="https://shahid.com"/>
        <Profilecard handle="shahidansari310"
        abc="Github" 
        link="https://shahid.com"/>
      </div>
    </section>
  )
}

export default Otherprofiles