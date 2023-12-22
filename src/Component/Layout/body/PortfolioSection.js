import React from "react";
import classes from "./PortfolioSection.module.css";
import EmployeeContact from "../../../images/employee-contact.jpg";
import PortfolioBanner from "../../../images/project-banner.jpg";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className={`bg-light d-flex flex-column justify-content-center align-items-center py-5`}>
      <div className={`row justify-content-center mb-5`}>
        <div className={`col`}>
          <div className={classes.sectionTitle}>
            <p className={`text-center fs-2 text-danger`}>my works</p>
          </div>
        </div>
      </div>

      {/* <div className={classes.divcarousel}>
        <picture>
          <img
            src={EmployeeContact}
            width={`700px`}
            height={`500px`}
            style={{ objectFit: "contain" }}
            alt="Employee contact dictionary"
          />
        </picture>
        <div className={classes.carouselitem}>
          <picture>
            <img
              src={PortfolioBanner}
              width={`100%`}
              height={`500px`}
              alt="Employee contact dictionary"
            />
          </picture>
        </div>
        <div className={classes.carouselitem}></div>
      </div> */}
      <div className={`relative flex flex-row md:flex-column w-full h-full`}>
        <div className={`mb-3 relative w-full`}>
          <div>
            <img
              src={PortfolioBanner}
              alt="Portfolio"
              className="h-full w-1/2 object-cover"
            />
          </div>
          <div
            className={`absolute text-white top-0 right-0 w-1/2 h-full bg-red-100 opacity-0 hover:opacity-100`}></div>
        </div>
        <div className={`mb-3 w-full`}>
          <img
            src={EmployeeContact}
            className="h-full w-1/2 object-cover"
            alt="Employee contact dictionary"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
