import { Fade } from "react-awesome-reveal";
export function TechStack(){
  return(
    <div className="w-full flex flex-col items-center">
    <Fade triggerOnce={true} cascade={true} damping={0.1} className="text-white text-4xl  mt-8 mb-4 text-center space-mono-regular" >Tech-Stack</Fade>
    <Fade triggerOnce={true} duration={3000} >
    <div className="grid grid-cols-3 xs:gap-4 xs:w-fit  gap-11 mt-4 space-mono-regular">
      {[
        { src: "/html.png", alt: "HTML" },
        { src: "/css.png", alt: "CSS" },
        { src: "/javascript.png", alt: "JavaScript" },
        { src: "/react.png", alt: "React" },
        { src: "/tailwind.png", alt: "Tailwind" },
        { src: "/svelte.png", alt: "Svelte" },
      ].map((tech, index) => (
        <div key={index} className="flex flex-col items-center group">
          <img
            src={tech.src}
            alt={tech.alt}
            className="w-24    transform transition-transform duration-300 group-hover:scale-90 cursor-pointer"
          />
          
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 text-sm">{tech.alt}</span>
          
        </div>
        
      ))}
    </div>
    </Fade>

  </div>
  
  );
}


export default TechStack