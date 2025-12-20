import React from 'react'

const Footer = () => {
  return (
    <div className='p-5'>
    <hr className='text-gray-800 ml-10 mr-10 '/>
    <div className="main text-[10px] flex justify-around pt-2">
        <div className="logo font-bold">
            &lt; Shahid /&gt;
        </div>
        <div className='contact-info'>
            <ul style={{listStyle:"disc"}}>
                <li>shahidansari945256@gmail.com</li>
                <li>+91 8858369783</li>
                <li>Ghaziabad , India</li>
            </ul>
        </div>    
    </div>
    <div className='copy text-[9px] place-self-center'>
        &copy; All rights reserved Shahid
    </div>    
    </div>
  )
}

export default Footer