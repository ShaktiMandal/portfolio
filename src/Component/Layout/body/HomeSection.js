import React, {useState} from "react";
import ProfileImage from '../../../images/Profile-pic.jpg';
import { TypingAnimation } from "../../../shared/TypingAnimation";
import classes from './homeSection.module.css';
import './animation.css';


const HomeSection = () => {

    let timeout;
    const wordList = ["Frontend Developer", "Web Developer", "Windows Developer"];
    const animatedText = TypingAnimation(wordList);
    const [isScrolled, setScroll] = useState(false)


    setTimeout(()=> {
        setScroll(true);
    }, 500)

    const handleScrollAnimation = () => {

        const scrollElements = document.querySelectorAll(".scrollableelement");
        console.log("number of scrolling element", scrollElements.length);
        for(let element of scrollElements)
        {
            if(isInViewport(element))
            {
                displayAnimation(element)
            }
            else
            {
                hideAnimation(element);
            }
        }
        
    }

    const isInViewport = (element) => {

        const rect = element.getBoundingClientRect();

        return(
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const displayAnimation = (element) => {
        setScroll(true)
    }

    const hideAnimation = (element) => {
        setScroll(false);
    }


    // window.addEventListener('scroll', (event)=> {
    //     if(timeout)
    //     {
    //         console.log("still not timeout");
    //         return;
    //     }

       
    //     timeout = setTimeout(handleScrollAnimation, 1000);
    // })

    

    return (
        <section className={'py-3'}>
            <div className = {`container-fluid `}>
                <div className={`row min-vh-100 bg-light shadow-sm align-items-center align-content-center`}>
                    <div className={`col-md-5 d-flex align-items justify-content-center`}> 
                        <div className={`scrollableelement ${isScrolled === true &&  "scrolled"}`}>
                            <img className={classes.profileImage} src= {ProfileImage} loading="lazy" alt="profile image"/>
                        </div>
                    </div>
                    <div className={`col-md-7`}> 
                        <div className={`scrollableelement ${isScrolled === true && "scrolled"} appearbottom`}>
                            <div className={`mb-5`}>
                                <h1 className={`text-dark fs-15`}>Hi, I am</h1>
                                <h3 className={classes.workType} id="workTypeId">{animatedText}</h3>                        
                            </div>
                            <div className={classes.description}> 
                                <p>I'm a front end developer, and I create clean and responsive websites, love what I do.</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection;