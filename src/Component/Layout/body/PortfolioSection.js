import React from "react";
import classes from "./PortfolioSection.module.css";
import EmployeeContact from "../../../images/employee-contact.jpg";
import PortfolioBanner from "../../../images/project-banner.jpg";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className={`min-vh-100 d-flex flex-column bg-light shadow-sm align-items-center align-content-center`}>
      <div>
        <div className={`col`}>
          <div className={classes.sectionTitle}>
            <p className={`text-center fs-2 text-danger`}>my works</p>
          </div>
        </div>
      </div>
      <div className={`flex flex-column md:flex-column w-full h-full`}>
        <div
          className={`mb-3 w-full h-full  p-5 d-flex align-items-center justify-content-center`}>
          <div className={`top-0 right-0 relative  w-full h-full`}>
            <div>
              <img
                src={PortfolioBanner}
                alt="Portfolio"
                className="h-full object-cover hover:pointer-events-auto"
              />
            </div>

            <div
              className={`absolute hidden top-0 right-0 z-10 w-full md:w-1/2 sm:block  h-full p-10 bg-red-100 opacity-0 hover:opacity-100`}>
              <h3>Portfolio</h3>
              <p>
                <strong>Description:</strong> <br></br> As a web developer, i
                would like to have my own portfolio, showcasing my transition
                into the world of React.js. It serves as my first React-based
                portfolio, demonstrating a shift toward modern web development
                <br></br>
                <br></br>
                <br></br>
                <strong>Skills:</strong> <br></br> React, Javascript, css,
                tailwind
              </p>
            </div>
          </div>
        </div>
        <div
          className={`mb-3 w-full p-5 d-flex align-items-center justify-content-center`}>
          <div className={`top-0 right-0 relative w-full h-full`}>
            <div>
              <img
                src={EmployeeContact}
                className="h-full object-cover"
                alt="Employee contact dictionary"
              />
            </div>
            <div
              className={`absolute hidden sm:block top-0 right-0 z-10 w-full md:w-1/2 h-full p-10 bg-red-100 opacity-0 hover:opacity-100`}>
              <h3>Employee Contact</h3>
              <p>
                <strong>Description:</strong> <br></br> This project served as a
                hands-on exercise to reinforce my understanding and proficiency
                in React.js. While the app itself is a straightforward employee
                contact dictionary, its purpose goes beyond the immediate
                functionality. It represents a dedicated effort to apply React
                concepts, state management, and component architecture in a
                real-world scenario.
                <br></br>
                <br></br>
                <br></br>
                <strong>Key Features:</strong>
                <br></br>- Displayed a list of employees with their contact
                details. <br></br> - Implemented a search feature to quickly
                find specific employees. <br></br> - Enabled users to add new
                contacts or edit existing ones. <br></br>
                <br></br>
                <br></br>
                <strong>Skills:</strong> <br></br> React, Javascript, css
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
