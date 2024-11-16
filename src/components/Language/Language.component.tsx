import { useState } from "react";

export function Language() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("PT");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative inline-block text-left text-white font-semibold ">
        <button
          className="flex items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          {selectedLanguage}
          <span className="ml-2 text-[10px]">▼</span>
        </button>

        {isOpen && (
          <ul className="absolute mt-2 p-0 list-none">
            {["PT", "EN"].map((lang) => (
              <li
                key={lang}
                className="cursor-pointer hover:underline"
                onClick={() => selectLanguage(lang)}
              >
                {lang}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
