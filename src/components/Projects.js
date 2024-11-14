import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import colorSharp1 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Takipedia e-commerce",
      imgUrl: projImg1,
      Githuburl: "https://github.com/Ciptaaaa/takipedia",
    },
    {
      title: "Weather Web",
      description: "A simple weather website offering real-time forecasts ",
      imgUrl: projImg2,
      Githuburl1: "https://github.com/Ciptaaaa/weatherweb",
    },
    {
      title: "To-Do List",
      description:
        "A simple to-do list website to help you stay organized and productive.",
      imgUrl: projImg3,
      Githuburl2: "https://github.com/Ciptaaaa/Todo-List",
    },
    {
      title: "Calculator",
      description:
        "A simple calculator website that keeps a history of previous calculations.",
      imgUrl: projImg4,
      Githuburl3: "https://github.com/Ciptaaaa/calculator",
    },
  ];

  return (
    <section className="project" id="projects">
      <img className="background-image-right" src={colorSharp1}></img>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>A few of the projects I’ve been involved in are:</p>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                    <br />
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
