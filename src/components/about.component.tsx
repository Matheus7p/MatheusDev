import { RxDownload } from "react-icons/rx";
import { RESUME_LINK, socialInfos } from "../constans/social";
import SocialButtons from "./socialButton";

export const About = () => {

  const handleResumeOpen = () => {
    window.open(RESUME_LINK, "_blank", "noopener noreferrer")
  }
    return (
        <>
          <h1 className="text-4xl text-[#f5f5f5b7] font-medium mb-12 leading-[1.4] md:whitespace-nowrap">Desenvolvedor Web Full-Stack</h1>
          <p className="text-[#a3a3a3] font-normal text-md mt-6 mb-8 leading-6 text-justify">
            Proficiente em desenvolvimento web. Possuo domínio de tecnologias front‑end como <span className="text-[#f5f5f5]">React.js</span> e seu ecossistema, além de experiência no desenvolvimento de back‑end com <span className="text-[#f5f5f5]">Node.js</span> e <span className="text-[#f5f5f5]">TypeScript</span>
          </p>
          <div className="flex justify-start items-center gap-4">
            <button 
              className="bg-[#f5f5f5e8] text-black p-2 text-sm flex items-center gap-2 rounded-lg hover:scale-105 duration-300"
              onClick={handleResumeOpen}
            >
              Curriculo
              <RxDownload className="h-4 w-4"/>
            </button>
            {socialInfos.map((social) => (
              <div className="" key={social.id}>
                <SocialButtons social={social} />
              </div>
            ))}
          </div>
        </>
    );
}

