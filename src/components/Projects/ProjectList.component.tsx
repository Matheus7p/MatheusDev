import { IProject } from "../../@types/project"
import { ProjectCard } from "./ProjectsCard.component"

interface IProjectListProps {
  projects: IProject[],
}

export function ProjectList ({ projects } : IProjectListProps) {
  return(
    <div className="flex flex-col gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} direction={index % 2 === 0 ? "left" : "right" }/>
      ))}
    </div>
  )
}