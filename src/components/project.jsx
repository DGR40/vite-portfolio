import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Tags from "./tags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Project({
  title,
  projectId,
  description,
  tagList,
  image,
  url,
  imageAltText,
  subtext,
  gitLink,
}) {
  function goToURL(url) {
    window.open(url, "_blank");
  }

  function handleClick(e) {
    // Check if the clicked element is the link
    if (e.target.tagName.toLowerCase() !== "a") {
      // If not, navigate to the desired location
      goToURL(url);
    } else {
      goToURL(gitLink);
    }
  }

  return (
    <div className="project" id={projectId} onClick={handleClick}>
      <div className="project-info">
        <div className="project-header-container">
          <h2 className="project-header">{title}</h2>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="project-header-icon"
          />
        </div>

        <p className="paragraph">{description}</p>
        <div className="tag-container">
          <Tags tagList={tagList} />
        </div>
      </div>
      <div className="project-image">
        <img
          src={image}
          id={projectId}
          className="project-thumbnail"
          alt={imageAltText}
        />
      </div>

      {subtext && (
        <>
          <p className="paragraph subtext">test email: budget@budget.com</p>
          <p className="paragraph">password: pass123</p>
        </>
      )}
      {gitLink && (
        <div>
          <a className="paragraph float-right">Github Repo </a>
        </div>
      )}
    </div>
  );
}
