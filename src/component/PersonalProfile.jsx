export function PersonalProfile() {
  return (
    <div className="bg-[rgb(5,8,22)] text-white flex justify-center items-center sm:p-2 p-8">
      <div className="w-full lg:flex lg:flex-col grid grid-cols-2  gap-8 sm:gap-4" style={{ gridTemplateColumns: '2fr 1fr' }}>
        {/* Left Column: Experience and Education */}
        <div className="space-y-8 w-full">
          {/* Experience */}
          <div className="bg-gradient-to-b from-[#374151] to-[#1F2937] p-1 rounded-xl shadow-lg">
            <div className="bg-[#050816] rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                <h2 className="text-2xl space-mono-regular font-bold">Experience</h2>
              </div>
              <div>
                <strong className="text-white space-mono-regular">Class Projects and Skills Development (2023–Present)</strong>
                <p className="text-gray-300 xs:text-[14px] mt-2">
                Although I don’t have formal work experience yet, I have completed hands-on class projects and personal development efforts as part of my journey to becoming a Cybersecurity Specialist.
                </p>
                <strong className="text-white mt-4 space-mono-regular block">Responsibilities</strong>
                <ul className="list-disc list-inside xs:text-[14px] space-y-2 mt-2 text-gray-300">
                  <li className="whitespace-normal">Studied for Cisco CCNA Certification: Gained knowledge in networking fundamentals, routing, and switching protocols.</li>
                  <li className="whitespace-normal">Designed and developed a responsive website using React and Tailwind CSS, focusing on modern UI/UX principles.</li>
                  <li className="whitespace-normal">Created a personal portfolio site showcasing my technical skills, using React,tsParticles, and other libraries.</li>
                  <li className="whitespace-normal">Completed hands-on activities in sensor/actuator integration and understanding IoT concepts.</li>
                  <li className="whitespace-normal">Conducted basic network configuration and troubleshooting exercises as part of a lab-based environment.</li>
                  
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-gradient-to-b from-[#374151] to-[#1F2937] p-1 rounded-xl shadow-lg">
            <div className="bg-[#050816] rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <h2 className="text-2xl space-mono-regular font-bold">Education</h2>
              </div>
              <div>
              <strong>Gateway Technical College — IT – Cybersecurity Specialist Program </strong>
                <p className="text-gray-300">SC Johnson STEM Scholar (2024-Present)</p>
              </div>
              <strong className="text-white space-mono-regular mt-4 block">Relevant Courses:</strong>
              <ul className="list-disc list-inside xs:text-[14px] space-y-2 mt-2 text-gray-300">
                <li>Pursuing foundational coursework in networking, cybersecurity, and computer science as part of a STEM-focused scholarship program.</li>
                <li>Gaining hands-on experience with IoT concepts, frontend development, and preparation for Cisco CCNA certification.</li>
                <div className="education-entry">
  <strong>Planned Transfer to University — Bachelor's in Computer Science (Expected transfer: 2026) </strong>
  
  
  <ul className="list-disc list-inside xs:text-[14px] space-y-2 mt-2 text-gray-300">
    <li>Intending to continue studies in computer science, specializing in cybersecurity, networking, or software development.</li>
    <li>Committed to building a solid foundation for a career as a network engineer or cybersecurity specialist.</li>
  </ul>

 
</div>

              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Profile, Button, and Social Links */}
        <div className="space-y-4 mt-60 lg:mt-0">
          {/* Profile Card */}
          <div className="bg-gradient-to-b from-[#374151] to-[#1F2937] rounded-xl shadow-lg flex justify-center items-center">
            <div className="bg-[#050816] rounded-lg p-6 m-1"> {/* Add margin to inner container */}
              <div className="flex items-center">
                <div>
                  <h3 className="text-xl font-bold space-mono-regular">Cristian Hernandez</h3>
                  <p className="text-gray-300 xs:text-[14px] mt-2 space-mono-regular">Interested in working together? Got a great idea for a project? Let's chat!</p>
                </div>
              </div>
             <a href="mailto:Cristian333ee@gmail.com" className="inline-block w-full">
  <button className="bg-[#1A202C] text-white hover:bg-[#2D3748] space-mono-regular font-bold py-2 px-4 rounded-lg w-full mt-6">
    CONTACT ME
  </button>
</a>

            </div>
          </div>

          {/* Download Resume Button */}
        <button 
  onClick={() => window.open('/Resume.pdf', '_blank')}
  className="bg-[#1A202C] text-white hover:bg-[#2D3748] font-bold py-2 px-4 space-mono-regular rounded-lg w-full shadow-lg"
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 justify-center items-center inline-block mr-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
  Resume/CV
</button>


          {/* Social Links */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-4">
             
              <a href="https://github.com/cristian119" target="_blank" className="bg-red-500 hover:bg-red-600 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default PersonalProfile;