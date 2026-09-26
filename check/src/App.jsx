import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./windows/Github";
import MacWindow from "./windows/MacWindow";
import Note from "./windows/Note-Window/Note";
const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Note />
    </main>
  );
};

export default App;
