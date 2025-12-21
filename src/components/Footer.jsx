import React from 'react'
import SocialLinks from './Sociallinks'

const Footer = () => {
  return (
    <div className='p-5'>
    <hr className='text-gray-800 ml-10 mr-10 '/>
    <div className="main lg:text-[15px] flex justify-around pt-2 text-[8px]">
        <div className="logo font-bold">
            &lt; Shahid Ansari /&gt;<div className='mt-2'>
            <SocialLinks size={18}/></div>
        </div>
        <div className='contact-info'>
            <ul style={{listStyle:"disc"}}>
                <li>shahidansari945256@gmail.com</li>
                <li>+91 8858369783</li>
                <li>Ghaziabad , India</li>
            </ul>
        </div>    
    </div>
    <div className='copy text-[12px] place-self-center mt-4'>
        &copy; All rights reserved
    </div>    
    </div>
  )
}

export default Footer