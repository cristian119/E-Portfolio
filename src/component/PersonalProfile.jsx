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
                <strong className="text-white ">SC Johnson & Son</strong>
                <p className="text-gray-300 xs:text-[14px] mt-2">
                </p>
                <strong className="text-white mt-4 space-mono-regular block">Responsibilities</strong>
                <ul className="list-disc list-inside xs:text-[14px] space-y-2 mt-2 text-gray-300">
                  <li className="whitespace-normal">Implemented AI-Powered IT Service Management - Reduced ticket resolution time by 40% and improved user satisfaction from 78% to 95%</li> 
                  <li className="whitespace-normal">Managed IT Infrastructure - Oversaw 200+ endpoints, handling hardware, software, and network systems.</li>
                  <li className="whitespace-normal">Security & Compliance - Managed Active Directory & Microsoft Entra ID, deployed MFA & SSO for 50+ applications.</li>
                  <li className="whitespace-normal">Automation & Optimization - Developed PowerShell scripts to streamline user onboarding and device provisioning, improving IT efficiency.</li>
                  <li className="whitespace-normal">Help Desk Management: Resolved 100+ tickets weekly, maintaining a 95% satisfaction rating and reducing escalations by 30%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-gradient-to-b from-[#374151] to-[#1F2937] p-1 rounded-xl shadow-lg">
            <div className="bg-[#050816] rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                <h2 className="text-2xl space-mono-regular font-bold">Experience</h2>
              </div>
              <div>
                <strong className="text-white ">Accenture</strong>
                <p className="text-gray-300 xs:text-[14px] mt-2">
                </p>
                <strong className="text-white mt-4 space-mono-regular block">Responsibilities</strong>
                <ul className="list-disc list-inside xs:text-[14px] space-y-2 mt-2 text-gray-300">
                  <li className="whitespace-normal">Technical Support & Troubleshooting - Assisted 100+ employees, reducing issue resolution time by 25%.
                  </li> 
                  <li className="whitespace-normal">Identity & Access Management - Conducted access audits and improved security processes, reducing risks by 15%.
                  </li>
                  <li className="whitespace-normal">Mobile Device Management (MDM & MAM) - Secured 200+ corporate devices using Microsoft Intune.
                  </li>
                  <li className="whitespace-normal">Al-Powered Knowledge Base - Designed and implemented an ML-driven knowledge system, reducing ticket resolution time 30%.
                  </li>
                  <li className="whitespace-normal">High-Ticket Resolution Rate - Successfully resolved over 1.2k escalated tickets in just 17 business days.</li>
                </ul>
              </div>
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
          {/* Social Links */}
<div className="flex justify-center mt-4">
  <div className="flex space-x-4">
    <a href="https://github.com/cristian119" target="_blank" className="bg-red-500 hover:bg-red-600 p-3 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    </a>

    <a href="https://www.linkedin.com/in/cristian-hernandez-866865342/" 
       target="_blank" 
       rel="noopener noreferrer"
       className="bg-[#0077b5] hover:bg-[#006396] p-3 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-linkedin" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
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