import { useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { CiServer } from "react-icons/ci";
import { FiDatabase } from "react-icons/fi";
import { RiCodeSSlashLine } from "react-icons/ri";
import { StackCard } from "../StackCard/stackCard.component";

export function StackList() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedCard((prevIndex) => (prevIndex === index ? null : index));
  };

  const stackData = [
    {
      nameStack: "Front-end",
      icon: <RiCodeSSlashLine size={32} />,
      stacks: [
        "https://skillicons.dev/icons?i=js",
        "https://skillicons.dev/icons?i=html",
        "https://skillicons.dev/icons?i=css",
        "https://skillicons.dev/icons?i=react",
        "https://skillicons.dev/icons?i=typescript",
        "https://skillicons.dev/icons?i=tailwind",
      ],
    },
    {
      nameStack: "Back-end",
      icon: <CiServer size={32} />,
      stacks: [
        "https://skillicons.dev/icons?i=nodejs",
        "https://skillicons.dev/icons?i=java",
        "https://skillicons.dev/icons?i=spring",
      ],
    },
    {
      nameStack: "Banco de Dados",
      icon: <FiDatabase size={32} />,
      stacks: [
        "https://skillicons.dev/icons?i=mysql",
        "https://skillicons.dev/icons?i=mongodb",
      ],
    },
    {
      nameStack: "Outros",
      icon: <AiOutlineAppstoreAdd size={32} />,
      stacks: [
        "https://skillicons.dev/icons?i=git",
        "https://skillicons.dev/icons?i=docker",
        "https://skillicons.dev/icons?i=figma",
      ],
    },
  ];

  return (
    <div className="grid grid-row gap-4">
      {stackData.map((stack, index) => (
        <StackCard
          key={index}
          nameStack={stack.nameStack}
          icon={stack.icon}
          stacks={stack.stacks}
          isExpanded={expandedCard === index}
          toggleExpand={() => toggleExpand(index)}
        />
      ))}
    </div>
  );
}
