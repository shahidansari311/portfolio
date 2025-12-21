import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='main p-5 flex justify-around'>
        <div className="font-bold text-2xl tracking-wide text-white drop-shadow-[0_0_8px_rgba(56,189,248,1.3)] cursor-pointer">
            Shahid &lt;/&gt;
        </div>
        <div className="nav drop-shadow-[0_0_2px_rgba(56,189,248,1.5)]">
            <ul className='flex gap-5'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </div>
    <hr className='text-gray-800 ml-10 mr-10'/>
    </>
  )
}

export default Navbar