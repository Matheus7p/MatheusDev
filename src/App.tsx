import { About } from "./components/about.component";
import Cursor from "./components/cursor.component";
import Header from "./components/header.component";
import { CursorProvider } from "./context/cursor.ctx";

function App() {
  return (
    <CursorProvider>
      <div className="min-h-[calc(100vh-48px)] sm:min-h-[calc(100vh-96px)] flex flex-col">
        <Cursor />
        <main className="mx-auto p-6 w-full">
          <Header />
          <About />
        </main>
      </div>
    </CursorProvider>
  );
}

export default App;
