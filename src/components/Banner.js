import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // Gunakan useMemo untuk mendeklarasikan toRotate agar tetap stabil
  const toRotate = useMemo(() => ["Front-End Web Developer"], []);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text, period, toRotate]); // Gunakan useMemo untuk toRotate

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, tick]); // Gunakan tick yang telah distabilkan oleh useCallback

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Cipta`} &nbsp;
                    <span
                      className="txt-rotate"
                      data-period="1000"
                      data-rotate='[ "Front-End Developer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am a Frontend Developer with a passion for creating
                    visually appealing and user-friendly web experiences. I
                    specialize in React, JavaScript, Bootstrap, and Tailwind.
                    With a strong understanding of web development principles, I
                    am able to turn designs into responsive, interactive, and
                    dynamic web applications. My goal is to create visually
                    stunning and easy to use websites that provide an excellent
                    user experience. Let's work together to bring your next
                    project to life!
                  </p>

                  <a
                    href="mailto:diazekacipta467@gmail.com?subject=Hello&body=I%20would%20like%20to%20talk%20with%20you."
                    className="text-decoration-none"
                  >
                    <button>
                      Let’s Talk! <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
