import Cursor from "./components/cursor.component";
import { CursorProvider } from "./context/cursor.ctx";

function App() {
  return (
    <CursorProvider>
      <Cursor />
        <main className="">
          <button>teste</button>
        </main>
    </CursorProvider>
  );
}

export default App;
