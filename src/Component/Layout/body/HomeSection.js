import React, { useState } from "react";
import ProfileImage from "../../../images/Profile-pic.jpg";
import { TypingAnimation } from "../../../shared/TypingAnimation";
import classes from "./homeSection.module.css";

const HomeSection = () => {
  const wordList = ["Frontend Developer", "Web Developer", "Windows Developer"];
  const animatedText = TypingAnimation(wordList);
  const [isScrolled, setScroll] = useState(false);

  setTimeout(() => {
    setScroll(true);
  }, 500);

  return (
    <section className={"py-3"} id="homeSection">
      <div className={`container-fluid `}>
        <div
          className={`min-vh-100 lg:flex bg-light shadow-sm items-center content-center`}>
          <div
            className={`col-md-5 d-flex align-items-center justify-content-center`}>
            <img
              className={classes.profileImage}
              src={ProfileImage}
              loading="lazy"
            />
          </div>

          <div
            className={`max-w-1/2 p-10 d-flex flex-column align-items justify-content-center`}>
            <div className={`mb-5`}>
              <h1 className={`text-dark fs-15`}>Hi, I am shakti</h1>
              <h3 className={classes.workType} id="workTypeId">
                {animatedText}
              </h3>
            </div>
            <div>
              <h3 className={`fs-7  text-dark`}>
                I'm a front end developer, and I create clean and responsive
                websites, love what I do.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
