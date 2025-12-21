import React from 'react'
import Card from '../components/Card'

const MySkills = () => {
  return (
    <section className="w-full mt-20" id='skills'>
      
      <h2 className="text-3xl font-bold text-center underline underline-offset-8 decoration-blue-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
        My Skills
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-3 md:mx-auto">
        
        <Card name="Programming Languages" skills={["C/C++","Python","Java","SQL"]}/>
        <Card name="Frontend" skills={["React.js","HTML5","CSS3","Tailwind CSS","JavaScript"]}/>
        <Card name="Backend" skills={["Node.js" ,"Express.js","REST API","JWT Authentication","MongoDbB","Redis"]}/>
        <Card name="Tools & Cloud" skills={["AWS","Docker","Git & Github","Postman","Linux"]}/>
      </div>
    </section>
  )
}

export default MySkills
