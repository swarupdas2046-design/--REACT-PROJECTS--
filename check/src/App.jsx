import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./windows/github";
import MacWindow from "./windows/MacWindow";
const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
    </main>
  );
};

export default App;
