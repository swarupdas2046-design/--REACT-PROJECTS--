import MacWindow from "../MacWindow";
import "./Resume.scss";
const Resume = ({ setWindowState, windowName, activeWindow, setActiveWindow }) => {
  return (
    <MacWindow setWindowState={setWindowState} windowName={windowName} activeWindow={activeWindow} setActiveWindow={setActiveWindow}>
      <div className="resume-window">
        <iframe src="\Swarup_Das_Resume_5.pdf" frameBorder="0"></iframe>
      </div>
    </MacWindow>
  );
};

export default Resume;
