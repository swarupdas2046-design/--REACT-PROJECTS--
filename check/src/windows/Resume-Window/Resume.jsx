import MacWindow from "../MacWindow";
import "./Resume.scss";
const Resume = ({ setWindowState, windowName }) => {
  return (
    <MacWindow setWindowState={setWindowState} windowName={windowName}>
      <div className="resume-window">
        <iframe src="\Swarup_Das_Resume_5.pdf" frameBorder="0"></iframe>
      </div>
    </MacWindow>
  );
};

export default Resume;
