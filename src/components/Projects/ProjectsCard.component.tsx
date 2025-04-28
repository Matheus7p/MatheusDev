import { IProject } from "../../@types/project";

interface IProjectCardProps {
  project: IProject,
  direction?: "left" | "right"
}

export function ProjectCard ({ project, direction }: IProjectCardProps) {
  return (
    <div
      className={`flex flex-col ${ direction === "left" ? "md:flex-row" : "md:flex-row-reverse"} 
      justify-between w-auto h-auto md:w-[900px] md:h-[300px] items-center gap-6 bg-[#1540619a] p-6 rounded-lg shadow-2xl`} >

      <img
        src={project.img}
        alt={project.title}
        className="h-56 w-[350px] object-cover rounded-lg border-[2x] border-[#154061] p-[2px]"
      />
      
      <div className="flex flex-col  text-white">
        <h3 className="text-2xl font-bold mb-2 text-gray-100 decoration-[#154061] underline">{project.title}</h3>
        <p className="text-sm font-medium text-gray-200 mb-4">{project.description}</p>
        <div className="flex flex-row gap-2">
          {project.stacks.map((stack, index) => (
            <div key={index} className="relative w-auto h-auto flex justify-center group hover:cursor-pointer">
              <img
                src={stack.link}
                alt={stack.name}
                className="w-[30px] h-[30px] hover:scale-125 hover:rotate-12 transform transition duration-300 ease-in-out"
              />
              <span className="absolute top-[110%] left-1/2 transform -translate-x-1/2 bg-black whitespace-nowrap 
              text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {stack.name}
                </span>
              </div>
          ))}
        </div>
        <div className="flex gap-4 ">
         {project.linkGitHub && (
          <a 
          href={project.linkGitHub} 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 py-[2px] px-6 bg-[#154061] rounded shadow-lg hover:cursor-pointer hover:scale-105 duration-300 hover:bg-[#154061da]">GitHub</a>
         )}
          {project.deploy && (
          <a 
          href={project.deploy} 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 py-[2px] px-6 bg-[#154061] rounded shadow-lg hover:cursor-pointer hover:scale-105 duration-300 hover:bg-[#154061da]">Deploy</a>
         )}
        </div>
      </div>
    </div>
  );
}