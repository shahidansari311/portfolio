import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='main p-5 flex justify-around'>
        <div className="logo font-bold text-2xl">
            Shahid &lt;/&gt;
        </div>
        <div className="nav">
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