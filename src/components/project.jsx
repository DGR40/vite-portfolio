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
}) {
  function goToURL(url) {
    window.open(url, "_blank");
  }

  return (
    <div className="project" id={projectId} onClick={() => goToURL(url)}>
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
    </div>
  );
}
