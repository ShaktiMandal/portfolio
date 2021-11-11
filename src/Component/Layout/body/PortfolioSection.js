import React from 'react';
import classes from './PortfolioSection.module.css'
import {AiFillGithub} from 'react-icons/ai';
import BMS from '../../../images/BMS.mp4';
import RetailKarbar from '../../../images/RetailKarbar.mp4';

const PortfolioSection = () => {
    return (
        <section id="portfolio" className={`bg-light py-5`}>
            <div className = {`container-lg`}>  
                <div className={`row justify-content-center mb-5`}>
                    <div className={`col`}>
                        <div className={classes.sectionTitle}>
                            <p className={`text-center fs-2 text-danger`}>some of my work</p>
                        </div>
                    </div>
                </div> 
                <div className={`row text-center d-flex align-items-center justify-content-center`}>
                    <div className={`col-md-5`}>  
                        <div className={`shadow p-3 mb-5 bg-light rounded`}> 
                            <p className={`fs-5 fw-bold`}>Retail Karbar</p>                          
                            <video className={classes.portfolioVideo} alt="video is not supported in this browser" autoPlay loop muted controls>
                                <source src={RetailKarbar} type="video/mp4" />
                            </video>
                            
                            <div className={`row align-items-center justify-content-center`}>
                                <span className={classes.aboutPortfolio}>Retail Karbar is built to help all retailers to perform their daily business acivities such as adding, updating, orderring product. 
                                    This is purely built in reactJS and nodeJS.</span>
                                <div className={`col-md-auto m-2`}>                               
                                    <a className={`btn btn-danger`} href="https://retailkarbar.herokuapp.com/" target="_blank" rel="noopener">
                                        Live Demo    
                                    </a>  
                                </div>
                                <div className={`col-md-auto`}>                                
                                        <a className={`btn btn-secondary`} href="https://github.com/s2304/RetailKarbar" target="_blank" rel="noopener">
                                            Repo     
                                            <AiFillGithub  className="indigo-text"/>
                                        </a>                 
                                </div>  
                            </div>
                        </div>
                    </div>                  
                    
                    <div className={`col-md-5`}>  
                        <div className={`shadow p-3 mb-5 bg-grey rounded`}>  
                            <p className={`fs-5 fw-bold`}>Banking Management System</p>                        
                            <video className={classes.portfolioVideo} alt="video is not supported in this browser" autoPlay loop muted controls>
                                <source src={BMS} type="video/mp4" />
                            </video>
                            
                            <div className={`row align-items-center justify-content-center`}>  
                            <span className={classes.aboutPortfolio}>
                                    Banking management product is built to facilitate registration, 
                                    apply loan and update customer.
                                    Angular in the frontend and C# is in the backend with sql.</span>                       
                                <div className={`col-md-auto m-2`}>                              
                                    <a className={`btn btn-danger`} href="#" target="_blank" rel="noopener">
                                        Live Demo    
                                    </a>  
                                </div>
                                <div className={`col-md-auto`}>                              
                                    <a className={`btn btn-secondary`} href="https://github.com/s2304/BankManagementSystem" target="_blank" rel="noopener">
                                        Repo     
                                        <AiFillGithub  className="indigo-text"/>
                                    </a>                                 
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default PortfolioSection;