import "./dock.scss";

const Dock = ({ setWindowState, setActiveWindow }) => {
  const openWindow = (windowName) => {
    // Window open karo
    setWindowState((prev) => ({
      ...prev,
      [windowName]: true,
    }));

    // 🔥 Newly opened window ko front par lao
    setActiveWindow(windowName);
  };

  return (
    <footer className="dock">
      {/* GitHub */}
      <div onClick={() => openWindow("github")} className="icon github">
        <img src="\doc-icons\github.svg" alt="github" />
      </div>

      {/* Calendar */}
      <div
        onClick={() => {
          window.open("https://calendar.google.com/calendar/", "_blank");
        }}
        className="icon calender"
      >
        <img src="\doc-icons\calender.svg" alt="calender" />
      </div>

      {/* Note */}
      <div onClick={() => openWindow("note")} className="icon note">
        <img src="\doc-icons\note.svg" alt="note" />
      </div>

      {/* Mail */}
      <div
        onClick={() => {
          window.open("mailto:-swarupdas2046@gmail.com", "_blank");
        }}
        className="icon mail"
      >
        <img src="\doc-icons\mail.svg" alt="mail" />
      </div>

      {/* Resume */}
      <div onClick={() => openWindow("resume")} className="icon pdf">
        <img src="\doc-icons\pdf.svg" alt="pdf" />
      </div>

      {/* Spotify */}
      <div onClick={() => openWindow("spotify")} className="icon spotify">
        <img src="\doc-icons\spotify.svg" alt="spotify" />
      </div>

      {/* LinkedIn */}
      <div
        onClick={() => {
          window.open("https://www.linkedin.com/in/swarup-das-/", "_blank");
        }}
        className="icon link"
      >
        <img src="\doc-icons\link.svg" alt="link" />
      </div>

      {/* Terminal */}
      <div onClick={() => openWindow("cli")} className="icon cli">
        <img src="\doc-icons\cli.svg" alt="cli" />
      </div>

      {/* Camera */}
      <div onClick={() => openWindow("camera")} className="icon camera">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 7.70178C2 6.20963 3.20963 5 4.70178 5C5.47706 5 6.16537 4.5039 6.41053 3.7684L6.5 3.5C6.54219 3.37343 6.56329 3.31014 6.58586 3.254C6.87405 2.53712 7.54939 2.05037 8.32061 2.00366C8.38101 2 8.44772 2 8.58114 2H15.4189C15.5523 2 15.619 2 15.6794 2.00366C16.4506 2.05037 17.126 2.53712 17.4141 3.254C17.4367 3.31014 17.4578 3.37343 17.5 3.5L17.5895 3.7684C17.8346 4.5039 18.5229 5 19.2982 5C20.7904 5 22 6.20963 22 7.70178V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7.70178Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Dock;
