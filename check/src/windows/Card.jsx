import React from "react";
import "./Card.scss";

const Card = ({ project }) => {
  const { image, title, description, tags = [], repoLink, demoLink } = project;

  return (
    <article className="project-card">
      {/* Project Image */}
      <div className="project-card__image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="project-card__placeholder">
            <span>Project Preview</span>
          </div>
        )}

        <div className="project-card__image-overlay" />
      </div>

      {/* Content */}
      <div className="project-card__content">
        <h2 className="project-card__title">{title}</h2>

        <p className="project-card__description">{description}</p>

        {/* Tech Stack */}
        <div className="project-card__tags">
          {tags.map((tag, index) => (
            <span className="project-card__tag" key={`${tag}-${index}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="project-card__actions">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__demo"
            >
              <span>Live Demo</span>

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            </a>
          )}

          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__github"
              aria-label={`View ${title} GitHub repository`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.08 3.292 9.39 7.865 10.906.575.106.785-.25.785-.554 0-.273-.01-1.18-.015-2.14-3.2.695-3.878-1.36-3.878-1.36-.523-1.33-1.277-1.685-1.277-1.685-1.044-.713.079-.699.079-.699 1.154.081 1.761 1.185 1.761 1.185 1.026 1.758 2.69 1.25 3.347.956.104-.743.402-1.25.731-1.538-2.553-.291-5.239-1.276-5.239-5.681 0-1.255.448-2.28 1.184-3.084-.119-.291-.513-1.46.112-3.044 0 0 .966-.309 3.162 1.178A11.01 11.01 0 0 1 12 8.084c.978.005 1.963.132 2.884.388 2.194-1.487 3.158-1.178 3.158-1.178.627 1.584.233 2.753.114 3.044.737.804 1.183 1.829 1.183 3.084 0 4.416-2.691 5.387-5.252 5.674.413.356.781 1.061.781 2.14 0 1.543-.014 2.788-.014 3.166 0 .306.207.663.79.551C20.213 21.386 23.5 17.077 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
