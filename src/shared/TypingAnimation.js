import React, { useEffect } from "react";

const type = {
    typing : 0,
    deleting : 1,
    pausing : 2,
}


export const TypingAnimation = (wordList) => {

    const [animatedText, setAnimatedText] = React.useState("");
    const [textCurrentIndex, setTextCurrentIndex] = React.useState(0);
    const [wordCount, setwordCount] = React.useState(0);
    const [typingStatus, setTypeStatus] = React.useState(type.typing);

    useEffect(() => {
        let typingTimer = setTimeout(() => {
            animatedTyping.apply();
        }, 100);

        return () => clearTimeout(typingTimer);
    }, [animatedText, wordCount, textCurrentIndex, typingStatus]);

    function animatedTyping(){
        
        let currentText = "";

        switch(typingStatus)
        {
            case type.typing:
                {  
                    if(wordList.length> wordCount)
                    {
                        currentText = wordList[wordCount];   
                        setAnimatedText(currentText.slice(0, textCurrentIndex)); 
                        setTextCurrentIndex(textCurrentIndex + 1);
                      
                        if(currentText.length === animatedText.length)
                        {
                            console.log("current3");
                            setTypeStatus(type.pausing);
                        }  
                    }
                    else
                    {
                        setwordCount(0);
                    }          
                    break;
                }
            case type.pausing:
                {                    
                    setTypeStatus(type.deleting);
                    break;
                }           
            case type.deleting:
                {
                    if(textCurrentIndex === 0)
                    {  
                       
                        setwordCount(wordCount + 1);                 
                        setTextCurrentIndex(1);
                        setTypeStatus(type.typing);
                    }
                    else
                    {
                        setTextCurrentIndex(textCurrentIndex - 1);
                        setAnimatedText(animatedText.substr(0, textCurrentIndex));
                    }
                    break;
                }              
            default:
                {
                    setTypeStatus(type.typing);
                    break;
                }
            
        }
    }

    return animatedText;
}