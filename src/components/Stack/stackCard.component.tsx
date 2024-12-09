import { ReactElement, useState, useEffect } from "react";

type StackCardProps = {
  nameStack: string;
  icon: ReactElement;
  stacks: { name: string; link: string }[];
};

export function StackCard({ nameStack, icon, stacks }: StackCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
      setTimeout(() => setIsContentVisible(true), 50); 
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white w-full flex flex-col rounded-xl shadow-md transition-all duration-500">
      <div className="flex items-center justify-between p-4">
        <div>
          {isLoading ? (           
            <div className="animate-pulse">
              <div className="h-6 bg-gray-300 rounded w-32 mb-4"></div>
              <div className="flex gap-2 flex-wrap">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="w-[30px] h-[30px] bg-gray-300 rounded-full"></div>
                ))}
              </div>
            </div>
          ) : (
            <div
              style={{
                opacity: isContentVisible ? 1 : 0,
                transition: "opacity 0.7s ease-in-out",
              }}
            >
              <h3 className="text-lg font-semibold mb-4 no-select whitespace-nowrap">{nameStack}</h3>
              <div className="flex gap-2 flex-wrap">
                {stacks.map((stack, index) => (
                  <div
                    key={index}
                    className="relative w-auto h-auto flex items-center justify-center group"
                  >
                    <img
                      src={stack.link}
                      alt={stack.name}
                      className="w-[30px] h-[30px] hover:scale-125 hover:rotate-12 transform transition duration-300 ease-in-out"
                    />
                    <span className="absolute top-[110%] left-1/2 transform -translate-x-1/2 bg-black whitespace-nowrap text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {stack.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="shadow-lg p-4 rounded-lg">
          {isLoading ? (
            <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
          ) : (
            <div
              style={{
                opacity: isContentVisible ? 1 : 0,
                transition: "opacity 0.7s ease-in-out",
              }}
            >
              {icon}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
