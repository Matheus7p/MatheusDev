import AnimatedTitle from "../components/AnimatedTitle/animatedTitle.component";
import Particles from "../components/Particles/particles.components";
import { StackList } from "../components/Stack/stackList.component";
import { socialMediaData } from "../domains/socialMedia.data";
function App() {
  return (
    <>
      <main>
        
        <div className="h-[80vh] xl:h-[70vh] bg-gradient-to-br from-[#806f8b] to-[#271479] flex items-center justify-center px-[5%] sm:px-[6%] md:px-[8%] lg:px-[10%]">
          <div className="max-w-full z-20 mt-[-30vh] md:mt-[-28vh] flex flex-col justify-center items-center">
            <h2 className="text-[2rem] md:text-[4rem] font-bold text-white whitespace-nowrap no-select">
              <AnimatedTitle title="Matheus Costa" />
            </h2>
            <h4 className="text-[1.6rem] md:text-[1.8rem] text-stroke font-extrabold whitespace-nowrap text-white no-select">
              <AnimatedTitle title="Desenvolvedor Full-Stack" />
            </h4>

           <div className="flex gap-4 mt-2">
           {socialMediaData.map((social, index) => (
            <a
             key={index}
             href={social.link}
             target="_blank"
             rel="noopener noreferrer"
             className="text-white flex flex-col items-center hover:opacity-80 hover:scale-110 duration-300"
            >
              {social.icon}
            </a>
        ))}
           </div>
          </div>
            
          <Particles />
        </div>

        <section className="flex flex-col items-center">
          <div className="w-full relative flex justify-center items-center">
            <div className="h-full p-4 mt-[-30vh] md:w-2/3 bg-black/10 backdrop-blur-sm rounded-2xl  mb-4">
              <h3 className="text-white font-semibold text-[1.5rem] no-select mb-4">
                 Tecnologias
              </h3>
              <StackList />
            </div>
          </div>
        </section>


      </main>
    </>
  );
}

export default App;
