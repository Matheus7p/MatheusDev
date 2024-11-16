import { Navbar } from "../components/Navbar/navbar.component";
import Particles from "../components/Particles/particles.components";

function App() {
  return (
    <>
      <main className="h-[5000px]">
        <Navbar />
        <div className="h-[750px] bg-gradient-to-br from-[#806f8b] to-[#271479] flex items-center justify-start px-6 sm:px-12 md:px-24 lg:px-96">
          <div className="max-w-full z-20 sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
            <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white whitespace-nowrap no-select">
              Matheus Costa
            </h2>

            <h4 className="text-2xl sm:text-4xl md:text-6xl text-white font-bold text-stroke no-select">Desenvolvedor Web</h4>
            <br className="no-select"/>
            <small className="font-medium text-[0.7rem] sm:text-base md:text-lg text-white no-select">
              Desenvolvedor Front-End apaixonado por criar experiências web rápidas e responsivas. 
              Sempre em busca de aprender, melhorar e expandir minhas habilidades, com interesse também em explorar o back-end e novos desafios.
            </small>
          </div>
          <Particles />
        </div>
      </main>
    </>
  );
}

export default App;
