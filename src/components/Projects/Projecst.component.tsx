import { ProjectsData } from "../../domains/projects.data";
import { useState } from "react";

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ProjectsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ProjectsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-full lg:w-[70vw] overflow-hidden shadow-2xl rounded-lg border-[#154061] border-[1px]">
      <div
        className="flex transition-transform duration-[1.5s] ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {ProjectsData.map((project, index) => (
          <div
            key={index}
            className="relative w-full flex-shrink-0 h-[90vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${project.img})` }}
          >
            <div
              className="absolute bottom-8 left-1/2 backdrop-blur-sm transform -translate-x-1/2 bg-[#154061]/70 w-11/12 md:w-2/3 lg:w-1/2 h-[50vh] md:h-48 lg:h-64 bg-opacity-60 flex flex-col items-center justify-center p-4 rounded-lg"
              style={{ boxShadow: "0 4px 8px 0 rgba(21, 64, 97, 0.5)" }}
            >
              <div className="text-white text-center space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">{project.title}</h2>
                <p className="text-xs">{project.description}</p>
                <div className="flex justify-center items-center gap-2 md:gap-4">
                  {project.stacks.map((stack, stackIndex) => (
                    <img
                      src={stack.link}
                      alt={stack.name}
                      key={stackIndex}
                      className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] hover:scale-125 hover:rotate-12 transform transition duration-300 ease-in-out"
                    />
                  ))}
                </div>
              </div>
              <a
                href={project.linkGitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pointer shadow-2xl bg-[#154061] text-white py-2 px-4 rounded-xl hover:scale-105 hover:bg-opacity-90 duration-300 ease-in-out flex items-center justify-center text-xs md:text-sm"
              >
                <img
                  src="https://skillicons.dev/icons?i=github"
                  alt="GitHub logo"
                  className="w-6 h-6 inline-block mr-2"
                />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-[#154061] bg-opacity-50 p-2 rounded-full"
      >
        &#60;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-[#154061] bg-opacity-50 p-2 rounded-full"
      >
        &#62;
      </button>
    </div>
  );
}
