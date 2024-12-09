import AnimatedTitle from "../components/AnimatedTitle/animatedTitle.component";
import DownArrow from "../components/DownArrow/DownArrow.component";
import Particles from "../components/Particles/particles.components";
import { StackList } from "../components/Stack/stackList.component";
import { socialMediaData } from "../Data/socialMedia.data";
import { ProjectCards } from "../components/Projects/ProjectsCard.component";

function App() {
  return (
    <>
      <main className="">
        <section className="h-[80vh] xl:h-[70vh] bg-gradient-to-t from-[#010101] to-[#154061] flex items-center justify-center px-[5%] sm:px-[6%] md:px-[8%] lg:px-[10%]">
          <div className="max-w-full z-20 mt-[-30vh] md:mt-[-28vh] flex flex-col justify-center items-center">
            <h2 className="text-[2rem] lg:text-[5rem] font-bold text-white whitespace-nowrap no-select">
              <AnimatedTitle title="Matheus Costa" />
            </h2>

            <h2 className="text-[1.3rem] lg:text-[3rem] font-black whitespace-nowrap text-white text-stroke no-select">
              <AnimatedTitle title="Desenvolvedor Full-Stack" />
            </h2>

            <div className="flex gap-4 mt-2">
              {socialMediaData.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex flex-col items-center hover:opacity-80 hover:scale-110 hover:rotate-12 transform transition duration-300"
                >
                  <AnimatedTitle title={social.icon} />
                </a>
              ))}
            </div>
          </div>
          <Particles />
        </section>

        <section className="flex flex-col items-center no-select">
          <div className="w-full relative flex justify-center items-center p-2 sm:p-0">
            <div className="h-full p-4 mt-[-45vh] lg:mt-[-30vh] md:w-2/3 bg-black/10 backdrop-blur-sm rounded-2xl  mb-4">
              <h3 className="text-white font-semibold text-[1.5rem] no-select mb-4">
                Tecnologias
              </h3>
              <StackList />
            </div>
          </div>
        </section>

        <DownArrow />

        <h3 className="text-2xl lg:text-4xl font-bold text-center text-[#154061]">Projetos</h3>
        <section className="p-4 justify-center items-center flex mb-10">
          <ProjectCards />
        </section>


      </main>
    </>
  );
}

export default App;
