import React from "react";
import classes from './HeartRate.module.css'
import hrtable from '../../assets/heartratetable.png';
import hrgraph from '../../assets/heartrate.jpeg';

const HeartRate = () => {
    return (
        <div className={classes.main_heartrate}>
            <div className={classes.hrfirst}>
                <div className={classes.hrimage}><img src={hrtable} alt="heart table not found" className={classes.heartimage} /></div>
                <p className={classes.imagedesc}>A child’s resting heart rate slows as they age until, as a teenager, their heart rate approximates the rate occurring in that of an adult.</p>
                <p className={classes.imagedesc}>According to the American Academy of Pediatrics, the normal resting heart rate taking into account both sleeping and waking heart rates among children ranges from 90 to 205 BPM in newborns, 90 to 180 BPM in infants, 80 to 140 BPM in children ages 1–2, 58 to 120 BPM in children ages 3–7, and 50 to 100 BPM in adolescents.</p>
            </div>
            <div className={classes.hrsecond}>
                <div className={classes.hrline}><img src={hrgraph} alt="heart rate line" className={classes.hrlineimage} /></div>
                <p className={classes.imagedesc}>Heart rate, the number of times the ventricles of the heart contract and relax (that is, beat) per minute or other unit of time.</p>
                <p className={classes.imagedesc}>In human beings, the normal resting heart rate among adults ranges from 60 to 100 beats per minute BPM, whereas the normal resting heart rate for children is higher and varies with age.</p>
                <p className={classes.imagedesc}>A person’s heart rate changes throughout the day as they engage in activities with varying levels of strenuousness. Exercise, exposure to higher air temperatures and humidity, smoking, changing one’s body position, ingesting certain foods and medications, along with stress, anxiety, and other strong emotions, can temporarily increase heart rate.</p>
                <p className={classes.imagedesc}>They can measure their heart rate by tracking their pulse the rhythmic dilation of an artery at either the neck, wrist, elbow, or foot using their fingers and a timepiece</p>
            </div>
        </div>
    )
};

export default HeartRate;