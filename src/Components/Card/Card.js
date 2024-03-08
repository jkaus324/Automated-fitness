import React from "react";
import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.card}>
            <div className={classes.innercard}>
            <div className={classes.cardimage}><img className={classes.image} src={props.img} alt="image not fount"/></div>
            <div className={classes.cardheading}>{props.heading}</div>
            <p className={classes.carditems}>{props.p1}</p>
            <p className={classes.carditems}>{props.p2}</p>
            <a href={props.url} className={classes.readmore}>Read more</a>
            </div>
        </div>
    )
};

export default Card;