import { StackCard } from "./stackCard.component";
import { stackData } from "../../domains/stack.data";

export function StackList() {

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {stackData.map((stack, index) => (
        <StackCard
          key={index}
          nameStack={stack.tech}
          icon={stack.icon}
          stacks={stack.stacks}
        />
      ))}
    </div>
  );
}
