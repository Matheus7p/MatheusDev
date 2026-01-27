import { experiences } from "../constans/experience";
import ExperienceCard from "./experienceCard.component";

const Experience = () => {
  return (
    <section className="mb-14">
      <h2 className="font-semibold italic text-xl text-[#F5F5F5] mb-6">
        Experiência
      </h2>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
