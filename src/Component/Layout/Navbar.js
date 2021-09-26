import React from 'react';
import './Navbar.module.css';

const NavBar = () => {

    return(
        <nav className={`navbar navbar-expand-lg navbar-light`}>
        <div className={`container-lg`}>
          <a className={`navbar-brand text-danger`} href="#">Portfolio</a>
          <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={`navbar-toggler-icon`}></span>
          </button>
          <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ml-lg-auto`}>
              <li className={`nav-item fw-bold`}>
                <a className={`nav-link active`} aria-current="page" href="#">Home</a>
              </li>
              <li className={`nav-item fw-bold`}>
                <a className={`nav-link`} href="#aboutSection">Who am i</a>
              </li>    
              <li className={`nav-item fw-bold`}>
                <a className={`nav-link`} href="#portfolio">portfolio</a>
              </li>           
              <li className={`nav-item fw-bold`}>
                <a className={`nav-link`}  href="#catchUp" tabIndex="-1" aria-disabled="true">let's catch up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;