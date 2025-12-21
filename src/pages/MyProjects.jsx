import React from 'react'
import ProjectCard from '../components/ProjectCard'

const MyProjects = () => {
  return (
    <section className="w-full mt-30">
      <h2 className='title text-3xl font-bold place-self-center mt-10 underline underline-offset-8 decoration-blue-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]'>
        My Projects
      </h2>
      <div className="projects grid grid-cols-1 md:grid-cols-3 gap-8 mx-5 mt-5">
        <ProjectCard title='Project1' image='/image.png' desc="lorem hadbasbdjasbdh jsdkasj ksjdkasjdjk sjdsakjdh jksdhajksdh jkdshjkahsdk haskjdhaksdiwq saidhwqidnasjn " tech={["React","API","Hello","Bye"]} />

        <ProjectCard title='Project1' image='/image.png' desc="lorem hadbasbdjasbdh jsdkasj ksjdkasjdjk sjdsakjdh jksdhajksdh jkdshjkahsdk haskjdhaksdiwq saidhwqidnasjn " tech={["React","API","Hello","Bye"]} />

        <ProjectCard title='Project1' image='/image.png' desc="lorem hadbasbdjasbdh jsdkasj ksjdkasjdjk sjdsakjdh jksdhajksdh jkdshjkahsdk haskjdhaksdiwq saidhwqidnasjn " tech={["React","API","Hello","Bye"]} />
      </div>  
    </section>
  )
}

export default MyProjects