import { ReactElement, useRef, useEffect, useState } from "react";

type StackCardProps = {
  nameStack: string;
  icon: ReactElement;
  stacks: { name: string; link: string }[]; 
  isExpanded: boolean;
  toggleExpand: () => void;
};

export function StackCard({
  nameStack,
  icon,
  stacks,
  isExpanded,
  toggleExpand,
}: StackCardProps) {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded]);

  return (
    <div className="bg-white w-full flex flex-col rounded-xl shadow-md transition-all duration-500">
      <div className="flex items-center justify-between p-4">
        <div>
          <h3 className="text-lg font-semibold mb-4 no-select whitespace-nowrap">{nameStack}</h3>
          <button
            onClick={toggleExpand}
            className="text-[#271479] font-semibold underline-animation no-select"
          >
            {isExpanded ? "Ocultar" : "Visualizar"}
          </button>
        </div>
        <div className="shadow-lg p-4 rounded-lg">{icon}</div>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-[height] duration-500 ease-in-out"
        style={{
          height: `${contentHeight}px`,
        }}
      >
        {isExpanded && (
          <div className="flex gap-2 flex-wrap p-4">
            {stacks.map((stack, index) => (
              <div
                key={index}
                className="relative w-[50px] h-[50px] flex items-center justify-center group"
              >
                <img
                  src={stack.link}
                  alt={stack.name}
                  className="w-[40px] h-[40px]"
                />
                <span className="absolute top-[110%] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {stack.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
