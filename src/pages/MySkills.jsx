import React from 'react'
import Card from '../components/Card'

const MySkills = () => {
  return (
    <section className="w-full mt-20">
      
      <h2 className="text-3xl font-bold text-center underline underline-offset-8 decoration-blue-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
        My Skills
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-3 md:mx-auto">
        
        <Card name="Programming Languages">
          <ul className="space-y-2 text-gray-300">
            <li>C / C++</li>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </Card>

        <Card name="Frontend">
          <ul className="space-y-2 text-gray-300">
            <li>React.js</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
          </ul>
        </Card>
        
        <Card name="Backend">
          <ul className="space-y-2 text-gray-300">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
            <li>JWT Authentication</li>
            <li>MongoDB</li>
            <li>Redis</li>
          </ul>
        </Card>

        <Card name="Tools & Cloud">
          <ul className="space-y-2 text-gray-300">
            <li>AWS</li>
            <li>Docker</li>
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>Linux</li>
          </ul>
        </Card>

      </div>
    </section>
  )
}

export default MySkills
