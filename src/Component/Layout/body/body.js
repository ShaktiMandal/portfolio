import React from 'react';
// import HomeSection from './HomeSection';
// import PortfolioSection from './PortfolioSection';
// import ContactSection from './ContactSection';
// import AboutSection from './AboutSection';

// import HomeSection from './HomeSection';
// import PortfolioSection from './PortfolioSection';
// import ContactSection from './ContactSection';
// import AboutSection from './AboutSection';

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