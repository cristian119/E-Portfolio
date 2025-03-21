import React, { useEffect, useState } from 'react';
import './App.css';
import TagCloud from 'TagCloud';
import { Tilt } from 'react-next-tilt';
import { ProjectCard, ProjectCard2 } from './component/ProjectCard';
import { PersonalProfile } from './component/PersonalProfile';
import { TechStack } from './component/TechStack';
import { Fade, } from "react-awesome-reveal";




(async () => {
  await loadStarsPreset(tsParticles);

  const loadParticles = async () => {
    await tsParticles.load({
      id: "tsparticles",
      options: {
        preset: "stars",
        fullScreen: {
          enable: true,
          zIndex: 1
        },
        detectRetina: true,
        background: {
          color: "#050816"
        },
        particles: {
          number: {
            value: 700, // Increase the number of particles
          },
          move: {
            direction: "left", // Move particles to the left
            speed: 7, // Moderate speed
            enable: true,
            outMode: {
              default: "out"
            }
          },
        },
        responsive: [
          {
            maxWidth: 768,
            options: {
              particles: {
                number: {
                  value: 220 // Adjust for smaller screens
                }
              }
            }
          },
          {
            maxWidth: 1024,
            options: {
              particles: {
                number: {
                  value: 500 // Adjust for medium screens
                }
              }
            }
          },
          {
            maxWidth: 1440,
            options: {
              particles: {
                number: {
                  value: 250 // Adjust for larger screens
                }
              }
            }
          },
          {
            maxWidth: 1920,
            options: {
              particles: {
                number: {
                  value: 700 // Adjust for extra-large screens
                }
              }
            }
          }
        ]
      }
    });
  };

  await loadParticles();

  // Debounce function to limit the frequency of resize event handling
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  const handleResize = debounce(async () => {
    await loadParticles();
    tsParticles.domItem(0).play(); // Resume particles after resizing
  }, 300); // Adjust the debounce delay as needed

  window.addEventListener('resize', () => {
    tsParticles.domItem(0).pause(); // Pause particles during resizing
    handleResize();
  });

  // Cleanup event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
})();

function Loading({ onAnimationEnd }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 3000); // Duration of the animation in milliseconds

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
<div className="loading-container">
  <div className="rocket-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="384" height="384" fill="currentColor" className="bi bi-rocket rocket xs:w-64" viewBox="0 0 16 16">
      <path fill="white" d="M10.175 1.991c.81 1.312 1.583 3.43 1.778 6.819l1.5 1.83A2.5 2.5 0 0 1 14 12.202V15.5a.5.5 0 0 1-.9.3l-1.125-1.5c-.166-.222-.42-.4-.752-.57-.214-.108-.414-.192-.627-.282l-.196-.083C9.7 13.793 8.85 14 8 14s-1.7-.207-2.4-.635q-.101.044-.198.084c-.211.089-.411.173-.625.281-.332.17-.586.348-.752.57L2.9 15.8a.5.5 0 0 1-.9-.3v-3.298a2.5 2.5 0 0 1 .548-1.562l.004-.005L4.049 8.81c.197-3.323.969-5.434 1.774-6.756.466-.767.94-1.262 1.31-1.57a3.7 3.7 0 0 1 .601-.41A.55.55 0 0 1 8 0c.101 0 .17.027.25.064q.056.025.145.075c.118.066.277.167.463.315.373.297.85.779 1.317 1.537M9.5 6c0-1.105-.672-2-1.5-2s-1.5.895-1.5 2S7.172 8 8 8s1.5-.895 1.5-2"/>
      <path fill="red" d="M8 14.5c.5 0 .999-.046 1.479-.139L8.4 15.8a.5.5 0 0 1-.8 0l-1.079-1.439c.48.093.98.139 1.479.139"/>
    </svg>
    
    <div className="flame-container">
      <svg className="flames" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="150" height="150">
        <path d="M50 80 Q30 50 50 20 Q70 50 50 80 Z" fill="orange" />
        <path d="M50 80 Q40 60 50 40 Q60 60 50 80 Z" fill="yellow" />
      </svg>
    </div>

  
  </div>
</div>


  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleAnimationEnd = () => {
    setLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200; // Adjust this value to set when the navbar should appear
      if (window.scrollY > scrollThreshold) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      // Initialize TagCloud
      const container = '.tagcloud';
      const texts = [
        'ITIL Certification', 'CyberArk Defender', 'CompTIA A+', 'MD-102', 'CompTIA Security+', 'SC-300',
        'ITIL Certification', 'CyberArk Defender', 'CompTIA A+', 'MD-102', 'CompTIA Security+', 'SC-300',
        'ITIL Certification', 'CyberArk Defender', 'CompTIA A+', 'MD-102', 'CompTIA Security+', 'SC-300',
      ];
      
      const options = {
        radius: 400, // Smaller radius for a more compact sphere
        maxSpeed: 'slow', // Smoother animation
        initSpeed: 'slow', // Smoother initial speed
        direction: 135, // More balanced 3D rotation
        keep: true, // Keep animation running
        useContainerInlineStyles: false,
        containerClass: 'tagcloud-container',
        itemClass: 'tagcloud-item',
      };

      TagCloud(container, texts, options);
    }
  }, [loading]);

  const wrapWithSpan = (text) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        onMouseEnter={(e) => e.target.classList.add('bouncing')}
        onAnimationEnd={(e) => e.target.classList.remove('bouncing')}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};



  

  return (
    <>
<nav className={`fixed top-0 border-b-2 border-[#242425] left-0 w-full text-white z-50 p-4 ${showNavbar ? 'navbar-visible navbar-blur' : 'navbar-hidden'}`}>
  <div className="container flex justify-between items-center">
    <div className="text-xl font-bold">Cristian Portfolio</div>
    <div className="flex space-x-11 md:hidden">
      <button onClick={() => scrollToSection('hero-section')} className="hover:bg-white hover:bg-opacity-5 hover:text-white rounded-lg text-white space-mono-regular">Home</button>
      <button onClick={() => scrollToSection('about-section')} className="hover:bg-white hover:bg-opacity-5 hover:text-white rounded-lg text-white space-mono-regular">About</button>
      <button onClick={() => scrollToSection('projects-section')} className="hover:bg-white hover:bg-opacity-5 hover:text-white rounded-lg text-white space-mono-regular">Projects</button>
      <a href="mailto:Cristian333ee@gmail.com" className="hover:bg-white hover:bg-opacity-5 hover:text-white rounded-lg text-white space-mono-regular">Contact</a>
    </div>
    <div className="hidden md:block ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer " onClick={toggleMenu}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

    </div>
    {/* ... rest of the code ... */}
  </div>

  {isMobileMenuOpen && (
  <div className="hidden md:block fixed top-[62p] left-0 w-full bg-black bg-opacity-90 z-50">
    <div className="flex flex-col items-center py-4">
      <button onClick={() => { scrollToSection('hero-section'); toggleMenu(); }} className="hover:bg-white hover:bg-opacity-5 hover:text-white rounded-lg text-white space-mono-regular py-2">Home</button>
      <button onClick={() => { scrollToSection('about-section'); toggleMenu(); }} className="hover:bg-white hover:bg-opacity-5 hover:text-white rounded-lg text-white space-mono-regular py-2">About</button>
      <button onClick={() => { scrollToSection('projects-section'); toggleMenu(); }} className="hover:bg-white hover:bg-opacity-5 hover:text-white rounded-lg text-white space-mono-regular py-2">Projects</button>
      <a href="mailto:Cristian333ee@gmail.com" className="hover:bg-white hover:bg-opacity-5 hover:text-white rounded-lg text-white space-mono-regular py-2" onClick={toggleMenu}>Contact</a>
    </div>
  </div>
  )}
</nav>






   
   

      {loading && <Loading onAnimationEnd={handleAnimationEnd} />}
      {!loading && (
        <>
          {/* Hero Section */}
          <section id="hero-section">



          <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center fade-in" id="hero-section">
            <div className="relative w-full h-auto bg-cover bg-center px-0 py-12" style={{ zIndex: 3 }}>
              <div className="w-full container  flex flex-row items-center text-white z-10 p-4 justify-center">
                <div className="flex flex-col items-start justify-center w-full xl:items-center h-full">
                  <Fade triggerOnce={true} duration={3000}>
                    <h1 className="text-red-500 animate-in z-10 text-[110px] bubblegum-sans cursor-pointer sm:text-[90px] xs:text-[70px] bounce-effect text-left mb-2">
                      {wrapWithSpan('Hey,')}
                    </h1>
                    <h1 className="text-red-500 z-10 bubblegum-sans bounce-effect cursor-pointer text-[110px] sm:text-[90px] xs:text-[70px] text-left mb-2">
                      {wrapWithSpan("I'm Cristian")}
                    </h1>
                    
                    <h3 className="text-white z-10 bubblegum-sans bounce-effect cursor-pointer text-[30px] xs:text-[20px] text-left mb-2">
                      {wrapWithSpan('Cybersecurity / Professional ')}
                    </h3>
<div className="flex justify-start space-x-4 mt-4 z-10">
    <a href="https://github.com/cristian119" 
       target="_blank" 
       rel="noopener noreferrer"
       className="bg-red-500 hover:bg-red-600 p-3 rounded-full">
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

        <button className="mt-4 bg-red-500 text-white py-2 px-8 rounded-md z-10 text-base">
          <a href="mailto:Cristian333ee@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
            Contact Me
          </a>
        </button>
                  </Fade>
                </div>
                <div className="flex flex-col xl:hidden items-center justify-center w-full  h-full mt-4 ">
      <Fade triggerOnce={true} duration={3000} ><div className="tagcloud" style={{ cursor: 'pointer ' }}></div>  </Fade>
        
      </div>
              </div>
            </div>
          </div>
          </section>

          {/* Other Sections */}
          <section id="about-section">


          <div className="relative  w-full h-auto bg-cover flex flex-col bg-center px-0 py-12" style={{ backgroundColor: "#050816", zIndex: 3 }} id="about-section">
            <Fade direction='left' duration={3000} triggerOnce={true}>
              <div className="w-full container flex flex-col md:flex-row items-center text-white z-10">
                <PersonalProfile />
              </div>
            </Fade>
          </div>
          </section>

          <div className="relative w-full h-auto bg-cover bg-center px-0 py-12" style={{ backgroundColor: "#050816", zIndex: 3 }}>
            <div className="w-full container flex flex-col items-center z-10">
              <TechStack />
            </div>
          </div>

         <section id="projects-section">
  <div className="relative w-full h-auto flex flex-col items-center justify-center" id="projects-section" style={{ backgroundColor: "#050816", zIndex: 3 }}>
    <Fade triggerOnce={true} duration={3000}>
      <div className="text-white text-4xl mt-20 mb-4 text-center space-mono-regular z-10">
        <Fade cascade={true} damping={0.1} triggerOnce={true}>
          Projects
        </Fade>
      </div>
    </Fade>
    <Fade triggerOnce={true} duration={3000}>
      <div className="container flex justify-center md:flex md:flex-col md:justify-center md:items-center gap-11 z-10" style={{ paddingBottom: '300px' }}>
        <Tilt tiltMaxAngleX={35} tiltMaxAngleY={15} scale={1.05}>
          <ProjectCard2 />
        </Tilt>
      </div>
    </Fade>
  </div>
</section>

        </>
      )}
    </>
  );
}

export default App;