import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { CloudArrowDownFill } from "react-bootstrap-icons";

export const About = () => {
  const downloadResume = () => {
    // Path ke file resume Anda
    const resumeUrl = "/assets/Cipta.pdf"; // Ganti dengan path file resume Anda
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Profile.pdf"; // Nama file yang akan diunduh
    link.click();
  };

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <h2>About</h2>

              <p>
                Hello! I’m Diaz Eka Cipta, a recent graduate with a degree in
                Information Technology from University Bina Sarana Infromatika.
                I am passionate about technology and eager to leverage my
                academic background and hands-on experience to contribute to
                innovative projects and solve real-world challenges.
                <br />
                During my studies, I worked on several projects that honed my
                skills in internal website development. My capstone project
                involved building an internal meeting website using PHP
                programming language and Laravel framework.
                <br /> I am particularly excited about opportunities in Web
                Developer and am keen to work with a dynamic team that values
                innovation and continuous learning. <br /> As I embark on this
                new phase of my career, I am eager to connect with professionals
                in the industry, learn from their experiences, and contribute to
                impactful projects. Let’s connect and explore how we can work
                together to drive technological advancements!
              </p>
              <div className="item">
                {/* <img src={meter1} alt="Image"  /> */}
                <h6>
                  {/* Gunakan komponen Button dari React Bootstrap */}
                  <button onClick={downloadResume}>
                    Download resume here! <CloudArrowDownFill size={25} />
                  </button>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
