import React from 'react'
import Profilecard from '../components/Profilecard'

const Otherprofiles = () => {

  const profiles = [
  {
    handle: "shahid310",
    platform: "LeetCode",
    link: "https://leetcode.com/u/shahid310/",
  },
  {
    handle: "shahidansari310",
    platform: "HackerRank",
    link: "https://www.hackerrank.com/profile/shahidansari310",
  },
  {
    handle: "shahidansari",
    platform: "Google Developer",
    link: "https://developers.google.com/profile/u/shahidansari",
  },
  {
    handle: "shahid_310",
    platform: "CodeChef",
    link: "https://www.codechef.com/users/shahid_310",
  },
  {
    handle: "_shahid_129_",
    platform: "Instagram",
    link: "https://www.instagram.com/_shahid_129_/",
  },
];


  return (
    <section className="w-full mt-30" id='profiles'>
      <h2 className='title text-3xl font-bold place-self-center mt-10 underline underline-offset-8 decoration-blue-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]'>
        My Profiles
      </h2>
      <div className="relative mt-12">
        <div className="flex gap-6 animate-scroll whitespace-nowrap">
          {[...profiles, ...profiles].map((item, index) => (
            <Profilecard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Otherprofiles