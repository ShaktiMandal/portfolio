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
          className={`mb-3 w-full h-full p-5 d-flex align-items-center justify-content-center`}>
          <div className={`top-0 right-0 relative  w-full h-full`}>
            <div>
              <img
                src={PortfolioBanner}
                alt="Portfolio"
                className="h-full object-cover"
              />
            </div>

            <div
              className={`absolute top-0 right-0 z-10 w-full md:w-1/2 h-full p-10 bg-red-100 opacity-0 hover:opacity-100`}>
              <h3>Portfolio</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
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
              className={`absolute top-0 right-0 z-10 w-full md:w-1/2 h-full p-10 bg-red-100 opacity-0 hover:opacity-100`}>
              <h3>Employee Contact</h3>
              <p>
                Employee contact is a dictionary where you can add an employee
                contact. User can even can create a group under which they can
                add the contact details. Purpose of this app was self learnings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
