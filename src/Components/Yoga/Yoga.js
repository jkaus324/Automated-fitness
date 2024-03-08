import React from "react";
import classes from './Yoga.module.css';
import YogaCart from "./YogaCart";

const Yoga = () => {
    return (
        <div className={classes.yoga}>
            <div className={classes.yogaheading}>Yoga for Fitness</div>
            <div className={classes.desc}><p>Try these yoga styles for having a fit body lifestyle</p></div>
            <YogaCart />
        </div>
    )
};

export default Yoga;