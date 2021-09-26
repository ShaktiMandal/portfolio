import React, { useEffect, useState } from 'react';
import classes from './body.module.css';
import {ImLinkedin2} from 'react-icons/im';
import {AiFillGithub, AiFillHtml5} from 'react-icons/ai';
import {DiCss3, DiJavascript, DiAngularSimple} from 'react-icons/di';
import {SiTypescript, SiCsharp, SiReact, SiRedux} from 'react-icons/si';


const AboutSection = () => {

    const [projectCount, setProjectCount] = useState(0);
    const [portfolioCount, setPortFolioCount] = useState(0);
    const [lineOfCodeCount, setLineOfCode] = useState(0);


    useEffect(() => {
        const projectCountHandler = setTimeout(()=> {
            setProjectCount(projectCount + 1);
        }, 80);

        const portFolioCountHandler = setTimeout(()=> {
            setPortFolioCount(portfolioCount + 1);
        }, 80);

        const codeCountHandler = setTimeout(()=> {
            setLineOfCode(lineOfCodeCount + (560000/500));
        }, 1);

        if(projectCount === 20)
        {
            clearTimeout(projectCountHandler);
        }

        if(portfolioCount === 3)
        {
            clearTimeout(portFolioCountHandler);
        }

        if(lineOfCodeCount === 560000)
        {
            clearTimeout(codeCountHandler);
        }
    },[projectCount, portfolioCount, lineOfCodeCount]);

    return (
        <section className={`bg-white py-5`} id="aboutSection">
        <div className={`container-lg py-2`}>
            <div className={`row justify-content-center`}>
                <div className={`col`}>
                    <div className={classes.sectionTitle}>
                        <p className={`text-center fs-2 text-danger`}>About</p>
                    </div>
                </div>
            </div>
            <div className={`row mt-5`}>
                <div className={`col-md-7 p-5`}>
                    <div className={`row mb-5`}>
                        <p>
                            <h2 className={`mb-5`}>Hey, I am shakti, with over 10 yreas of experience in designing developing forntend 
                            product.</h2>
                            
                            <h3 className={`fs-5 text-dark`}>
                                I like to develop and learn new things over the course of my career and life.
                                Currently working in cognizant with some of the awesome folks. Always exited for new opportunities and open to work together.
                                If you would like to more of my professional and educational, please go through my resume.
                                When I am not in working mode, love to play with my DSLR to capture beautiful moments around me.
                            </h3>
                        </p>
                    </div>
                    <div className={`row mb-5`}>
                        <div className={`col-md-4`}>
                            <h2 className={`text-center text-danger`}>{lineOfCodeCount}</h2>
                            <p className={`text-muted text-center fw-bold`}>line of code</p>
                        </div>
                        <div className={`col-md-4`}>
                            <h2 className={`text-center text-danger`}>{projectCount}</h2>
                            <p className={`text-muted text-center fw-bold`}>Projects</p>
                        </div>
                        <div className={`col-md-4`}>
                            <h2 className={`text-center text-danger`}>{portfolioCount}</h2>
                            <p className={`text-muted fw-bold text-center`}>Portfolio</p>
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className={`col-md-6`}>
                        <input type="button" className={`btn btn-danger`} value="Download CV"></input>
                        </div>
                        <div className={`col-md-auto align-items-center justify-content-center`}>
                        <a href="https://www.linkedin.com/in/shaktishankarmandal" target="_blank" className={classes.socialMedia}>
                            <ImLinkedin2 fontSize="30px" className="indigo-text"/>
                            </a>
                        </div>
                        <div className={`col-md-auto`}>
                            <a href="https://github.com/s2304" target="_blank" className={classes.socialMedia}>
                                <AiFillGithub fontSize="30px" color="black" className="indigo-text"/>
                            </a>
                        </div>
                    </div>
                </div>
                
               
                <div className={`col-md-5 p-5 text-center`}>
                    <div className={`row`}>
                        <p className={`text-muted fw-bold`}>Skills</p>
                        <div className={`border-right border-secondary col-md-6`}>
                            <div className={`row rounded bg-light`}>
                                <p><AiFillHtml5  fontSize="20px"  className={`text-danger`}/></p>
                                <p>HTML</p>
                            </div>
                            <div className={`row`}>
                                <h2><DiCss3 fontSize="20px"  className={`text-warning`}/></h2>
                                <p>CSS</p>                                
                            </div>
                            <div className={`row rounded bg-light`}>
                                <h2><DiJavascript fontSize="20px"  className={`text-primary`}/></h2>
                                <p>Javascript</p>
                            </div>
                            <div className={`row`}>
                                <h2><DiAngularSimple fontSize="20px"  className={`text-primary`}/></h2>
                                <p>Angular</p>
                            </div>
                        </div>
                        <div className={`col-md-6`}>
                            <div className={`row`}>
                                <h2><SiTypescript fontSize="20px"  className={`text-info`}/></h2>
                                <p>Typescript</p>
                            </div>
                            <div className={`row rounded bg-light`}>
                                <h2><SiCsharp fontSize="20px"  className={`text-danger`}/></h2>
                                <p>C#</p>
                            
                            </div>
                            <div className={`row`}>
                                <h2><SiReact fontSize="20px"  className={`text-primary`}/></h2>
                                <p>react</p>
                            </div>
                            <div className={`row rounded bg-light`}>
                                <h2><SiRedux fontSize="20px"  className={`text-info`}/></h2>
                                <p>redux</p>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </section>
    )
}


export default AboutSection;