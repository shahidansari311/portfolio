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
    <section className="section-padding py-24" id="cert">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-sync text-center mb-4 leading-tight uppercase">
          CERTIFI<span className="text-gradient">CATIONS</span>
        </h2>
        <div className="w-24 h-1 bg-indigo-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="cursor-target glass-card p-8 rounded-[32px] flex flex-col items-start group relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all"></div>
            
            <div className="mb-8 p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors leading-tight">{cert.title}</h3>
            <p className="text-slate-400 mb-8 text-sm font-medium flex-1 tracking-wide">{cert.issuer}</p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target w-full text-center py-4 rounded-2xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/5 hover:border-indigo-500/30 transition-all"
            >
              Verify Credential
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certification;