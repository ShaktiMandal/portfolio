import React, { useEffect, useState } from "react";
import { ImLinkedin2 } from "react-icons/im";
import classes from "./body.module.css";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript, DiAngularSimple } from "react-icons/di";
import { SiTypescript, SiCsharp, SiReact, SiRedux } from "react-icons/si";
import pdf from "../../../files/Resume.pdf";

const AboutSection = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [portfolioCount, setPortFolioCount] = useState(0);
  const [lineOfCodeCount, setLineOfCode] = useState(0);

  useEffect(() => {
    const projectCountHandler = setTimeout(() => {
      setProjectCount(projectCount + 1);
    }, 80);

    const portFolioCountHandler = setTimeout(() => {
      setPortFolioCount(portfolioCount + 1);
    }, 80);

    const codeCountHandler = setTimeout(() => {
      setLineOfCode(lineOfCodeCount + 160000 / 500);
    }, 1);

    if (projectCount === 20) {
      clearTimeout(projectCountHandler);
    }

    if (portfolioCount === 3) {
      clearTimeout(portFolioCountHandler);
    }

    if (lineOfCodeCount === 160000) {
      clearTimeout(codeCountHandler);
    }
  }, [projectCount, portfolioCount, lineOfCodeCount]);

  return (
    <section
      className={`bg-white py-5`}
      id="aboutSection"
      data-testid="aboutSection">
      <div className={`container-lg py-2`}>
        <div className={`row justify-content-center`}>
          <div className={`col`}>
            <div className={classes.sectionTitle}>
              <p className={`text-center fs-2 text-danger`}>About</p>
            </div>
          </div>
        </div>
        <div className={`row mt-5`}>
          <div className={`col-md-7 p-5`}>
            <div className={`row mb-5`}>
              <>
                <h3 className={`mb-5`}>
                  Hey, I am shakti, with over 10 yreas of experience in
                  designing developing forntend product.
                </h3>

                <h3 className={`fs-5 text-dark`}>
                  I like to develop and learn new things over the course of my
                  career and life. Currently working in cognizant with some of
                  the awesome folks. Always exited for new opportunities and
                  open to work together. If you would like to more of my
                  professional and educational, please go through my resume.
                  When I am not in working mode, love to play with my DSLR to
                  capture beautiful moments around me.
                </h3>
              </>
            </div>
            <div className={`row mb-5`}>
              <div className={`col-md-4`}>
                <h2 className={`text-center text-danger`}>{lineOfCodeCount}</h2>
                <p className={`text-muted text-center fw-bold`}>line of code</p>
              </div>
              <div className={`col-md-4`}>
                <h2 className={`text-center text-danger`}>{projectCount}</h2>
                <p className={`text-muted text-center fw-bold`}>Projects</p>
              </div>
              <div className={`col-md-4`}>
                <h2 className={`text-center text-danger`}>{portfolioCount}</h2>
                <p className={`text-muted fw-bold text-center`}>Portfolio</p>
              </div>
            </div>
            <div className={`row`}>
              <div className={`col-md-8 d-flex`}>
                <a href={pdf} download="resume">
                  <input
                    type="button"
                    className={`btn btn-danger m-2`}
                    value="Download Resume"></input>
                </a>
                <a
                  className={`btn btn-danger m-2`}
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer">
                  View Resume
                </a>
              </div>
              <div className={`col-md-4 d-flex`}>
                <a
                  href="https://github.com/s2304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.socialMedia}
                  style={{ padding: "5px" }}>
                  <AiFillGithub
                    fontSize="30px"
                    color="black"
                    className="indigo-text"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/shaktishankarmandal"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={classes.socialMedia}
                  style={{ padding: "5px" }}>
                  <ImLinkedin2 fontSize="30px" className="indigo-text" />
                </a>
              </div>
            </div>
          </div>

          <div className={`col-md-5 p-5 text-center`}>
            <div className={`row`}>
              <p className={`text-muted fw-bold`}>Skills</p>
              <div className={`border-right border-secondary col-md-6`}>
                <div className={`row rounded bg-light`}>
                  <p>
                    <AiFillHtml5 fontSize="20px" className={`text-danger`} />
                  </p>
                  <p>HTML</p>
                </div>
                <div className={`row`}>
                  <h2>
                    <DiCss3 fontSize="20px" className={`text-warning`} />
                  </h2>
                  <p>CSS</p>
                </div>
                <div className={`row rounded bg-light`}>
                  <h2>
                    <DiJavascript fontSize="20px" className={`text-primary`} />
                  </h2>
                  <p>Javascript</p>
                </div>
                <div className={`row`}>
                  <h2>
                    <DiAngularSimple
                      fontSize="20px"
                      className={`text-primary`}
                    />
                  </h2>
                  <p>Angular</p>
                </div>
              </div>
              <div className={`col-md-6`}>
                <div className={`row`}>
                  <h2>
                    <SiTypescript fontSize="20px" className={`text-info`} />
                  </h2>
                  <p>Typescript</p>
                </div>
                <div className={`row rounded bg-light`}>
                  <h2>
                    <SiCsharp fontSize="20px" className={`text-danger`} />
                  </h2>
                  <p>C#</p>
                </div>
                <div className={`row`}>
                  <h2>
                    <SiReact fontSize="20px" className={`text-primary`} />
                  </h2>
                  <p>react</p>
                </div>
                <div className={`row rounded bg-light`}>
                  <h2>
                    <SiRedux fontSize="20px" className={`text-info`} />
                  </h2>
                  <p>redux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
