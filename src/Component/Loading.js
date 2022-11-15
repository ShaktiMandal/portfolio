import React from 'react'
import classes from './Loading.module.css'


const Loading = () => {
    return(
        <div className={classes.loadingContainer}>
            <h1 className={`text-white`}>Loading my portfolio...</h1>
            <div className={classes.loading}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

    )
}

export default Loading;