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
                <strong className="text-white space-mono-regular">Tycho Industries (2019-2021)</strong>
                <p className="text-gray-300 xs:text-[14px] mt-2">
                  I started Tycho as a side project at the beginning of the quarantine to help sneaker resellers manage their inventory and payment methods. It slowly grew into a fully featured piece of software. At our peak, we had a team of 7 and serviced almost 4000 customers.
                </p>
                <strong className="text-white mt-4 space-mono-regular block">Responsibilities</strong>
                <ul className="list-disc list-inside xs:text-[14px] space-y-2 mt-2 text-gray-300">
                  <li className="whitespace-normal">Mocked up Tycho’s Electron app UI in Figma then brought it to life with React and Tailwind CSS.</li>
                  <li className="whitespace-normal">Utilized Node FS modules, IMAP, and Playwright to automate inventory and payment management.</li>
                  <li className="whitespace-normal">Built the Tycho Tools website and hooked it up to our server, Discord Bot, SendGrid, and Stripe.</li>
                  <li className="whitespace-normal">Developed an affiliate partner program utilizing Stripe’s API and integrated it into our Discord Bot.</li>
                  <li className="whitespace-normal">Setup a MySQL database to store user data and customer subscription information.</li>
                  <li className="whitespace-normal">Wrote licensing and authentication code on our server to ensure only active subscribers had access.</li>
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
                <strong className="text-white space-mono-regular">Bachelor's Degree in Computer Science</strong><br />
                <p className="text-gray-300">Oregon State University</p>
              </div>
              <strong className="text-white space-mono-regular mt-4 block">Relevant Courses:</strong>
              <ul className="list-disc list-inside xs:text-[14px] space-y-2 mt-2 text-gray-300">
                <li>Software Engineering I and II (React, MySQL, Express, Sass)</li>
                <li>Analysis of Algorithms, Operating Systems (Python)</li>
                <li>Assembly Language (MASM, Intel x86)</li>
                <li>Introduction to Databases (MySQL, Postgres)</li>
                <li>Data Structures (C)</li>
                <li>Web development (React, CSS, JS)</li>
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
                <img src="/api/placeholder/100/100" alt="Profile" className="w-20 h-20 rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-bold space-mono-regular">Cristian Hernandez</h3>
                  <p className="text-gray-300 xs:text-[14px] mt-2 space-mono-regular">Interested in working together? Got a great idea for a project? Let's chat!</p>
                </div>
              </div>
              <button className="bg-[#1A202C] text-white hover:bg-[#2D3748] space-mono-regular font-bold py-2 px-4 rounded-lg w-full mt-6">
                CONTACT ME
              </button>
            </div>
          </div>

          {/* Download Resume Button */}
          <button className="bg-[#1A202C] text-white hover:bg-[#2D3748] font-bold py-2 px-4 space-mono-regular rounded-lg w-full shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 justify-center items-center inline-block mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Resume/CV
          </button>

          {/* Social Links */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="bg-red-500 hover:bg-red-600 p-3 rounded-full">
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