import React from "react";
import ProfileImage from '../../../images/Profile-pic.jpg';
import { TypingAnimation } from "../../../shared/TypingAnimation";
import classes from './homeSection.module.css';

const HomeSection = () => {

    const wordList = ["Frontend Developer", "Web Developer", "Windows Developer"];
    const animatedText = TypingAnimation(wordList);
    return (
        <section className={'py-3'}>
            <div className = {`container-fluid `}>
                <div className={`row min-vh-100 bg-light shadow-sm align-items-center align-content-center`}>
                    <div className={`col-md-5 d-flex align-items justify-content-center`}> 
                        <div className={classes.profileAvatar}>
                            <img className={classes.profileImage} src= {ProfileImage} alt="profile image"/>
                        </div>
                    </div>
                    <div className={`col-md-7`}> 
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
        </section>
    )
}

export default HomeSection;