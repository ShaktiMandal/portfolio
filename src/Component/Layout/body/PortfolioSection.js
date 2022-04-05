import React from 'react';
import classes from './PortfolioSection.module.css'
import {AiFillGithub} from 'react-icons/ai';
import BMS from '../../../images/BMS.mp4';
import RetailKarbar from '../../../images/RetailKarbar.mp4';
import Portfolio from '../../../images/portfolio.mp4';


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
                <div className={classes.divcarousel}>                      
                    <div className={classes.carouselitem}>
                          
                    </div>
                    <div className={classes.carouselitem}>
                       
                    </div>
                    <div className={classes.carouselitem}>
                      
                    </div>
                </div>
            </div>
        </section>
    )

}

export default PortfolioSection;