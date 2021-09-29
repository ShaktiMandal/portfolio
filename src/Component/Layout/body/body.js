import React from 'react';
const  HomeSection = React.lazy(() => import('./HomeSection'));
const  PortfolioSection = React.lazy(() => import('./PortfolioSection'));
const  ContactSection = React.lazy(() => import('./ContactSection'));
const  AboutSection = React.lazy(() => import('./AboutSection'));

const Body = () => {

 
    return(
        <React.Fragment>
            <HomeSection/>
            <AboutSection/>
            <PortfolioSection/>   
            <ContactSection/>        
        </React.Fragment>
    )
}

export default Body;