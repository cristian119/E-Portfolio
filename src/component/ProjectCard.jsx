

export function ProjectCard() {
  return (
    
    <div className="bg-[#111] rounded-xl p-6 shadow-md text-white flex flex-col   items-start w-80">
    <div className="relative w-full  grid place-items-center mb-4">
      <img className="w-full h-auto object-cover rounded-lg" src="ecom.png" alt="E-commerce Project" />
      <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2 w-8 h-8 bg-[#1A1A1A]  rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
      </a>
    </div>
    <h2 className="font-bold text-xl mb-2 space-mono-regular">Resume project</h2>
    <p className="text-sm text-gray-300 mb-4 space-mono-regular">Resume Builder is a user-friendly, free online resume builder designed to simplify the resume creation process. It ensures a seamless and stress-free experience in building standout resumes.</p>
    <div className="flex flex-wrap gap-2">
      <span className="text-xs px-2 py-1 rounded-full bg-blue-600 text-white">#React</span>
      <span className="text-xs px-2 py-1 rounded-full bg-green-400 text-white">#Node.js</span>
      <span className="text-xs px-2 py-1 rounded-full bg-pink-400 text-white">#Tailwind</span>
    </div>
  </div>
  
  );
}

export function ProjectCard2() {
  return (
    <div className="bg-[#111]  rounded-xl p-6 shadow-md text-white flex flex-col items-start w-80">
    <div className="relative w-full grid place-items-center mb-4">
      <img className="w-full h-auto object-cover rounded-lg" src="ecom.png" alt="E-commerce Project" />
      <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2 w-8 h-8 bg-[#1A1A1A] rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
      </a>
    </div>
    <h2 className="font-bold text-xl mb-2 space-mono-regular">Resume project</h2>
    <p className="text-sm text-gray-300 mb-4 space-mono-regular">Resume Builder is a user-friendly, free online resume builder designed to simplify the resume creation process. It ensures a seamless and stress-free experience in building standout resumes.</p>
    <div className="flex flex-wrap gap-2">
      <span className="text-xs px-2 py-1 rounded-full bg-blue-600 text-white">#React</span>
      <span className="text-xs px-2 py-1 rounded-full bg-green-400 text-white">#Node.js</span>
      <span className="text-xs px-2 py-1 rounded-full bg-pink-400 text-white">#Tailwind</span>
    </div>
  </div>
  );
}

  
export default ProjectCard 
