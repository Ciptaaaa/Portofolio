import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="">
          <Col size={12} sm={6}>
            <br />
            <br />
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <br />
              <br />
              <a href="https://www.linkedin.com/in/diazekacipta/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/Ciptaaaa">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/eka_cipta">
                <img src={navIcon3} alt="Icon" />
              </a>
              <p>Copyright 2022. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
