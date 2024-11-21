import { useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { CiServer } from "react-icons/ci";
import { FiDatabase } from "react-icons/fi";
import { RiCodeSSlashLine } from "react-icons/ri";
import { StackCard } from "./stackCard.component";

export function StackList() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedCard((prevIndex) => (prevIndex === index ? null : index));
  };

  const stackData = [
    {
      tech: "Front-end",
      icon: <RiCodeSSlashLine size={32} />,
      stacks: [
        { name: "JavaScript", link: "https://skillicons.dev/icons?i=js" },
        { name: "HTML", link: "https://skillicons.dev/icons?i=html" },
        { name: "CSS", link: "https://skillicons.dev/icons?i=css" },
        { name: "React", link: "https://skillicons.dev/icons?i=react" },
        { name: "TypeScript", link: "https://skillicons.dev/icons?i=typescript" },
        { name: "Tailwind CSS", link: "https://skillicons.dev/icons?i=tailwind" },
        { name: "Sass", link: "https://skillicons.dev/icons?i=sass" },
      ],
    },
    {
      tech: "Back-end",
      icon: <CiServer size={32} />,
      stacks: [
        { name: "Node.js", link: "https://skillicons.dev/icons?i=nodejs" },
        { name: "Java", link: "https://skillicons.dev/icons?i=java" },
        { name: "Spring", link: "https://skillicons.dev/icons?i=spring" },
        { name: "Prisma", link: "https://skillicons.dev/icons?i=prisma" },
      ],
    },
    {
      tech: "Banco de Dados",
      icon: <FiDatabase size={32} />,
      stacks: [
        { name: "MySQL", link: "https://skillicons.dev/icons?i=mysql" },
        { name: "MongoDB", link: "https://skillicons.dev/icons?i=mongodb" },
      ],
    },
    {
      tech: "Outros",
      icon: <AiOutlineAppstoreAdd size={32} />,
      stacks: [
        { name: "Git", link: "https://skillicons.dev/icons?i=git" },
        { name: "Docker", link: "https://skillicons.dev/icons?i=docker" },
        { name: "Figma", link: "https://skillicons.dev/icons?i=figma" },
        { name: "Jest", link: "https://skillicons.dev/icons?i=jest" },
        { name: "Vercel", link: "https://skillicons.dev/icons?i=vercel" },
      ],
    },
  ];
  
  return (
    <div className="grid grid-row gap-4">
      {stackData.map((stack, index) => (
        <StackCard
          key={index}
          nameStack={stack.tech}
          icon={stack.icon}
          stacks={stack.stacks}
          isExpanded={expandedCard === index}
          toggleExpand={() => toggleExpand(index)}
        />
      ))}
    </div>
  );
}
