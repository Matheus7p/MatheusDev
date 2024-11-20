import { Navbar } from "../components/Navbar/navbar.component";
import Particles from "../components/Particles/particles.components";
import { SocialMediaList } from "../components/SocialMedia/socialMediaList.component";
import { StackList } from "../components/Stack/stackList.component";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <div className="h-[750px] bg-gradient-to-br from-[#806f8b] to-[#271479] flex items-center justify-start px-6 sm:px-12 md:px-24 lg:px-96">
          <div className="max-w-full z-20 mt-[-200px] sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
            <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white whitespace-nowrap no-select">
              Matheus Costa
            </h2>
            <h4 className="text-4xl sm:text-4xl md:text-6xl text-white font-bold text-stroke no-select">
              Desenvolvedor Web
            </h4>
            <br className="no-select" />
            <small className="font-medium text-[1rem] sm:text-base md:text-lg text-white no-select">
              Desenvolvedor Front-End apaixonado por criar experiências web
              rápidas e responsivas. Sempre em busca de aprender, melhorar e
              expandir minhas habilidades, com interesse também em explorar o
              back-end e novos desafios.
            </small>
          </div>
          <Particles />
        </div>

        <section className="bg-[#f1f5f9]">
          <div className=" w-full top-[-300px] relative flex flex-col md:flex-row px-4 lg:px-72 xl:px-96 gap-4">
            <div className="h-full p-6 md:w-2/3 bg-black/10 backdrop-blur-sm rounded-2xl">
              <h3 className="text-white font-semibold text-4xl no-select mb-4">
                Ferramentas
              </h3>
              <StackList />
            </div>
            <div className="h-full p-6 md:w-1/2 bg-black/10 backdrop-blur-sm rounded-2xl">
              <h3 className="text-white font-semibold text-4xl no-select mb-4">
                Siga-me
              </h3>
              <SocialMediaList />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
