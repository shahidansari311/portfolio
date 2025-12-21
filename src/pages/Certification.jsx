import React from 'react'

const Certification = () => {

  const certifications = [
  {
    title: "AWS – Cloud Foundations",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/63b0fdaa-fc44-456f-8c98-96872b06f353/print",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "GeeksforGeeks",
    link: "https://media.geeksforgeeks.org/courses/certificates/35df6fe6dfc8d1dc54012dedbfbf973b.pdf",
  },
  {
    title: "React JS Development",
    issuer: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org/certificate/9e2f28adb3b23623c472f349c34a265e",
  },
];

  return (
    <section className='w-full mt-20'>
      <h2 className='title text-3xl font-bold place-self-center mt-10 underline underline-offset-8 decoration-blue-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]'>
        Certifications
       <span className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></span>
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="
              group
              rounded-2xl
              bg-white/5
              backdrop-blur-md
              border border-white/10
              p-6
              shadow-lg
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-cyan-500/30
            "
          >
            <h3 className="text-xl font-semibold text-white">
              {cert.title}
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              {cert.issuer}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-4
                px-4 py-2
                rounded-xl
                text-sm font-semibold
                bg-gradient-to-r from-cyan-500 to-blue-600
                text-white
                transition
                hover:opacity-90
              "
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certification