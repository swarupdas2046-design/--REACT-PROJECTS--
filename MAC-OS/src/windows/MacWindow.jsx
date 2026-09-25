import { Rnd } from "react-rnd";
import "./macWindow.scss"
const MacWindow = ({children}) => {
  return (
    <Rnd>
      <div className="window">
        <div className="nav-section">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>Swarup Das - zsh</p>
          </div>
        </div>
        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
