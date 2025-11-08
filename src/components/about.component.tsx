import { socialInfos } from "../constans/social";
import SocialButtons from "./socialButton";

export const About = () => {
    return (
        <>
          <h1 className="text-4xl text-[#f5f5f5b7] font-medium mb-12 leading-[1.4] md:whitespace-nowrap">Desenvolvedor Web Full-Stack</h1>
          <p className="text-[#a3a3a3] font-normal text-md mt-6 mb-8 leading-6 text-justify">
            Proficiente em desenvolvimento web. Possuo domínio de tecnologias front‑end como <span className="text-[#f5f5f5]">React.js</span> e seu ecossistema, além de experiência no desenvolvimento de back‑end com <span className="text-[#f5f5f5]">Node.js</span> e <span className="text-[#f5f5f5]">TypeScript</span>
          </p>
          <div className="flex justify-start items-center gap-4">
            {socialInfos.map((social) => (
              <div className="" key={social.id}>
                <SocialButtons social={social} />
              </div>
            ))}
          </div>
        </>
    );
}

