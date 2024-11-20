import { ReactElement } from "react";

type SocialMediaCardsPros = {
  socialMedia: string;
  arroba: string;
  icon: ReactElement;
  link: string;
};

export function SocialMediaCards({
  socialMedia,
  arroba,
  icon,
  link,
}: SocialMediaCardsPros) {
  return (
    <a
      href={link}
      className="w-full h-[100px] max-w-400 bg-white rounded-xl shadow-md hover:scale-105 duration-700 sm:w-[90%] md:w-[80%] lg:w-[400px]"
    >
      <div className="flex flex-col items-start justify-between gap-2 p-4 sm:flex-row">
        <div className="flex flex-col gap-2 sm:gap-2">
          <h2 className="text-lg font-semibold md:text-xl no-select">{socialMedia}</h2>
          <h3 className="text-sm font-semibold text-[#271479] md:text-base no-select">
            {arroba}
          </h3>
        </div>

        <div className="flex items-center justify-center p-4 rounded-lg shadow-lg">
          {icon}
        </div>
      </div>
    </a>
  );
}
