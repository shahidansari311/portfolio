import React from 'react'

const ProjectCard = ({ title, image, tech=[], desc }) => {
    return (
        <div className="project1 h-auto border-2 p-4 rounded-2xl">
            <div className="preview ">
                <img src={image} alt="" className='h-[130px] w-full rounded-lg object-fill' />
            </div>
            <div className="content p-3">
                <h1 className='text-2xl'>{title}</h1>
                <h3>
                    <ul className='flex gap-2'>
                        {tech.map((item, index) => (
                            <li
                                key={index}
                                className="px-3 py-1 text-sm rounded-xl bg-blue-600"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ProjectCard  