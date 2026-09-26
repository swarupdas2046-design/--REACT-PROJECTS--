import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./windows/Github";
// import MacWindow from "./windows/MacWindow";
import Note from "./windows/Note-Window/Note";
import Resume from "./windows/Resume-Window/Resume";
import Spotify from "./windows/Spotify-window/Spotify";
const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Note />
      <Resume />
      <Spotify />
    </main>
  );
};

export default App;
