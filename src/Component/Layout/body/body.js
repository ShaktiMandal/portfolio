import React from 'react';
import Loading from '../../Loading';
const  HomeSection = React.lazy(() => import('./HomeSection'));
const  PortfolioSection = React.lazy(() => import('./PortfolioSection'));
const  ContactSection = React.lazy(() => import('./ContactSection'));
const  AboutSection = React.lazy(() => import('./AboutSection'));

const Body = () => {

 
    return(
        <React.Suspense fallback={<Loading/>}>
            <HomeSection/>
            <AboutSection/>
            <PortfolioSection/>   
            <ContactSection/>        
        </React.Suspense>
    )
}

export default Body;