import { useState } from "react";
import "./app.scss";

import Dock from "./components/Dock";
import Nav from "./components/Nav";

import Cli from "./windows/Cli-Window/Cli";
import Github from "./windows/Github";
import Note from "./windows/Note-Window/Note";
import Resume from "./windows/Resume-Window/Resume";
import Spotify from "./windows/Spotify-window/Spotify";
import Camera from "./windows/Camera-window/Camera";

const App = () => {
  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    camera: false,
  });

  // 🔥 Currently active/front window
  const [activeWindow, setActiveWindow] = useState(null);

  return (
    <main>
      <Nav />

      <Dock setWindowState={setWindowState} setActiveWindow={setActiveWindow} />

      {windowState.github && (
        <Github
          setWindowState={setWindowState}
          windowName="github"
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}

      {windowState.note && (
        <Note
          setWindowState={setWindowState}
          windowName="note"
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}

      {windowState.resume && (
        <Resume
          setWindowState={setWindowState}
          windowName="resume"
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}

      {windowState.spotify && (
        <Spotify
          setWindowState={setWindowState}
          windowName="spotify"
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}

      {windowState.cli && (
        <Cli
          setWindowState={setWindowState}
          windowName="cli"
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}

      {windowState.camera && (
        <Camera
          setWindowState={setWindowState}
          windowName="camera"
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}
    </main>
  );
};

export default App;
