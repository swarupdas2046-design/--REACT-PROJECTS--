import MacWindow from "./MacWindow";
import "./github.scss";
import Data from "../assets/github.json";
import Card from "./Card";

const Github = ({ setWindowState, windowName }) => {
  return (
    <MacWindow setWindowState={setWindowState} windowName={windowName}>
      <div className="github-content">

        {/* Header */}
        <div className="github-header">
          <a
            href="https://github.com/swarupdas2046-design"
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile"
          >
            <div className="github-profile__left">
              <div className="github-profile__icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.87-1.35-3.87-1.35-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.04.78 2.1v3.12c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </div>

              <div className="github-profile__text">
                <span className="github-profile__label">
                  GitHub
                </span>

                <span className="github-profile__username">
                  @swarupdas2046-design
                </span>
              </div>
            </div>

            <div className="github-profile__arrow">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 17L17 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 7H17V16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>

        {/* Scrollable Cards */}
        <div className="card-container">
          {Data.map((elem) => {
            return <Card key={elem.id} project={elem} />;
          })}
        </div>

      </div>
    </MacWindow>
  );
};

export default Github;