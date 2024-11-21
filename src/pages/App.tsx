
import AnimatedTitle from "../components/AnimatedTitle/animatedTitle.component";
import { Navbar } from "../components/Navbar/navbar.component";
import Particles from "../components/Particles/particles.components";
import { SocialMediaList } from "../components/SocialMedia/socialMediaList.component";
import { StackList } from "../components/Stack/stackList.component";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <div className="h-[80vh] xl:h-[70vh] bg-gradient-to-br from-[#806f8b] to-[#271479] flex items-center justify-start px-[5%] sm:px-[6%] md:px-[8%] lg:px-[10%]">
          <div className="max-w-full z-20 mt-[-30vh] md:mt-[-18vh]">
            <h2 className="text-[2rem] md:text-[4rem] font-bold text-white whitespace-nowrap no-select">
              <AnimatedTitle title="Matheus Costa" />
            </h2>
            <h4 className="text-[1.6rem] md:text-[2rem] text-stroke font-extrabold whitespace-nowrap text-white no-select">
              <AnimatedTitle title="Desenvolvedor Web" />
            </h4>
          </div>
          <Particles />
        </div>

        <section className="bg-[#f1f5f9]">
          <div className="w-full top-[-40vh] md:top-[-25vh] relative flex flex-col md:flex-row px-[5%] sm:px-[16%] md:px-[18%] lg:px-[10%] gap-[10px]">
            <div className="h-full p-4 md:w-2/3 bg-black/10 backdrop-blur-sm rounded-2xl">
              <h3 className="text-white font-semibold text-[1.5rem] no-select mb-4">
                Tecnologias
              </h3>
              <StackList />
            </div>
            <div className="h-full p-4 md:w-1/2 bg-black/10 backdrop-blur-sm rounded-2xl">
              <h3 className="text-white font-semibold text-[1.5rem] no-select mb-4">
                Siga-me
              </h3>
              <SocialMediaList />
            </div>
          </div>
        </section>

        <section>
          
        </section>
      </main>
    </>
  );
}

export default App;
