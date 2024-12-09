import { ProjectsData } from "../../Data/projects.data"; 

export function ProjectCards () {
  return(
    <>
     <div className="flex flex-col lg:flex-row justify-center items-center gap-6 no-select">
     {ProjectsData.map((project, id) => (
      <div className="flex flex-col p-4 h-[430px] w-80 lg:w-96 rounded-lg bg-gradient-to-b from-[#154061] to-[#ffffff]" key={id}>
        <div>
          <img src={project.img} alt={`Imagem do projeto ${project.title}`} className="h-48 w-full object-cover rounded-lg pb-2"/>
        </div>
        <div>
          <a 
          className="font-bold block underline text-[#154061]"
          href={project.linkGitHub}
          target="_blank"
          rel="noopener noreferrer"
          >
            &lt;{project.title} /&gt;
          </a>
          <small className="text-xs">{project.description}</small>
        </div>

        <div className="flex justify-center items-center gap-2 mt-auto">
          {project.stacks.map((stack, stackIndex) => (
            <img
              src={stack.link}
              alt={stack.name}
              key={stackIndex}
              className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] hover:scale-125 hover:rotate-12 transform transition duration-300 ease-in-out"
            />
            // <div key={stackIndex} className="text-xs p-1 whitespace-nowrap hover:scale-105 transition duration-300 ease-in-out bg-[#154061] text-white font-bold rounded-lg no-select">
            //   {stack.name}
            // </div>
          ))}
        </div>
      </div>
     ))}
     </div>
    </>
  );
}