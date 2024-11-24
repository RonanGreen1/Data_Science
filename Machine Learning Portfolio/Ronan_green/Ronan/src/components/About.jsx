import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Ronan Green,</span> a Software Developer
              Developer
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
            I have a solid background in programming, with experience in a variety of languages, including Java, Python, C++, PHP, Go, x86 Assembly, and HTML. I’ve worked on diverse personal projects, ranging from building mobile applications to creating efficient simulations. My approach focuses on writing clean, well-documented code and solving problems with creativity and precision. I enjoy debugging and optimising my work to ensure it performs effectively, and I take pride in tackling new challenges, whether it’s learning a new language, mastering a framework, or addressing complex issues. Programming has always been a passion of mine, and I continuously strive to improve my skills and expand my knowledge.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Ronan Green
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:ronangreen2003@gmail.com">ronangreen2003@gmail.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>21
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Carlow, Ireland
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
