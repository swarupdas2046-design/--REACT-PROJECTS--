import { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Cli from "./windows/Cli-Window/Cli";
import Github from "./windows/Github";
import Note from "./windows/Note-Window/Note";
import Resume from "./windows/Resume-Window/Resume";
import Spotify from "./windows/Spotify-window/Spotify";
const App = () => {
  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  return (
    <main>
      <Nav />
      <Dock setWindowState={setWindowState} />
      {windowState.github && (
        <Github setWindowState={setWindowState} windowName="github" />
      )}
      {windowState.note && (
        <Note setWindowState={setWindowState} windowName="note" />
      )}
      {windowState.resume && (
        <Resume setWindowState={setWindowState} windowName="resume" />
      )}
      {windowState.spotify && (
        <Spotify setWindowState={setWindowState} windowName="spotify" />
      )}
      {windowState.cli && (
        <Cli setWindowState={setWindowState} windowName="cli" />
      )}
    </main>
  );
};

export default App;
