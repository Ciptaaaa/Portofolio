import { Col } from "react-bootstrap";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  Githuburl,
  Githuburl1,
  Githuburl2,
  Githuburl3,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>

      {/* Conditional Rendering: Only show the button if the URL is defined */}
      {Githuburl && (
        <div className="social-icon1">
          <a
            href={Githuburl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            <img src={navIcon2} alt="ico_github" />
          </a>
        </div>
      )}

      {Githuburl1 && (
        <div className="social-icon1">
          <a
            href={Githuburl1}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            <img src={navIcon2} alt="ico_github" />
          </a>
        </div>
      )}

      {Githuburl2 && (
        <div className="social-icon1">
          <a
            href={Githuburl2}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            <img src={navIcon2} alt="ico_github" />
          </a>
        </div>
      )}

      {Githuburl3 && (
        <div className="social-icon1">
          <a
            href={Githuburl3}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            <img src={navIcon2} alt="ico_github" />
          </a>
        </div>
      )}
    </Col>
  );
};
