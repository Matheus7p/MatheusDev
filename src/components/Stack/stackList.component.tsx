import { useState } from "react";
import { StackCard } from "./stackCard.component";
import { stackData } from "../../domains/stack.data";

export function StackList() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedCard((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="grid gap-4">
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
