import { ExperienceType } from "../types/experience";

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
  return (
    <div className="group relative border-l border-[#5A32C8] pl-4">
      <div className="absolute -left-[5px] top-[6px] h-2 w-2 rounded-full bg-[#5A32C8]" />

      <div>
        <p className="text-sm text-[#a3a3a3] mb-1">
          {experience.startDate} - {experience.endDate}
        </p>

        <div className="flex flex-col md:flex-row justify-between md:items-center md:gap-2 mb-2">
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5F5F5] font-medium hover:underline"
          >
            {experience.company}
          </a>

          <span className="text-sm text-[#F5F5F5] font-normal">
            {experience.designation}
          </span>
        </div>

        <p className="text-[#a3a3a3] text-sm leading-relaxed">
          {experience.description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;