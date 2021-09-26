import React from 'react';
import classes from './body.module.css';
import {ImLinkedin2} from 'react-icons/im';
import {AiFillGithub} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import { useState } from 'react';


const ContactSection = ()  => {

    const initialFormData = Object.freeze({
        name: "",
        phoneNumber: "",
        email: "",
        textMessage: ""
      });

    const [initialDetails, setMessageDetails] = useState(initialFormData);

    const onSendMessage = (event) =>{
        event.preventDefault();
        const messageText = `${initialDetails.textMessage}. Contact number: ${initialDetails.phoneNumber}`
        window.open('mailto:sontu.friends@gmail.com?subject="Message from subscriber"&body='+messageText);
    }

    const onInputChange = (event) =>{
       
        setMessageDetails({
            ...initialDetails,
            [event.target.name] : event.target.value.trim()
        });
    }

    return(
        <section id="catchUp" className={`py-5`}>
        <div className={`container-lg py-2`}>
            <div className={`row justify-content-center`}>
                <div className={`col`}>
                    <div className={classes.sectionTitle}>
                        <p className={`text-center fs-2 text-danger`}> let's catch up, exited to hear from you</p>
                    </div>
                </div>
            </div>
            <div className={`row mt-5 align-items-center justify-content-center`}>
                <div className={`col-md-6`}>
                    <p className={`text-center`}>same places you can find me</p>
                    <div className={`d-flex align-items-center justify-content-center`}>
                        <a href="mailto:sontu.friends@gmail.com" className={classes.socialMedia} style={{padding:"5px"}}>                                
                            <MdEmail  fontSize="30px" color="red" className={`text-danger`}/>                                
                        </a>
                        <a href="https://github.com/s2304" target="_blank" rel="noopener" className={classes.socialMedia} style={{padding:"5px"}}>                                
                            <AiFillGithub fontSize="30px" color="black" className="indigo-text"/>                        
                        </a>
                        <a href="https://www.linkedin.com/in/shaktishankarmandal"  rel="noopener" target="_blank" className={classes.socialMedia} style={{padding:"5px"}}>                                
                            <ImLinkedin2 fontSize="30px" className="indigo-text"/>                          
                        </a>
                    </div>
                </div>
                <div className={`col-md-6 bg-light p-3 border-rounded`}>
                    <form onSubmit={onSendMessage}>
                        <input type="text" onChange={onInputChange} name="name" required className={`form-control mb-3 w-5`} placeholder="enter your name" autoComplete="off"></input>
                        <input type="tel" onChange={onInputChange} name="phoneNumber" className={`form-control mb-3`} placeholder="enter your phone, not mandatory" autoComplete="off"></input>
                        <input onChange={onInputChange} type="email" name="email" required className={`form-control mb-3`} placeholder="test@gmail.com" autoComplete="off"></input>   
                        <textarea onChange={onInputChange} name="textMessage" required className={`form-control mb-3`} placeholder="your message" autoComplete="off"></textarea>                          
                        <input type="submit" className={`btn btn-danger`} value="Connect Me"></input>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ContactSection;