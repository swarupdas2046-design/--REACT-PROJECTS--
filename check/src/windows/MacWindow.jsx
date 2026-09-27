import { Rnd } from "react-rnd";
import "./macWindow.scss";

const MacWindow = ({
  children,
  setWindowState,
  windowName,
  windowIndex = 0,
  activeWindow,
  setActiveWindow,
}) => {
  const OFFSET = 40;

  const isActive = activeWindow === windowName;

  return (
    <Rnd
      default={{
        width: "35vw",
        height: "45vh",
        x: 50 + windowIndex * OFFSET,
        y: 50 + windowIndex * OFFSET,
      }}
      style={{
        zIndex: isActive ? 100 : 10,
      }}
      onMouseDown={() => {
        setActiveWindow(windowName);
      }}
    >
      <div className="window">
        <div className="nav-section">
          <div className="dots">
            <div
              onClick={() => {
                setWindowState((prev) => ({
                  ...prev,
                  [windowName]: false,
                }));
              }}
              className="dot red"
            />

            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>Swarup Das - zsh</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
