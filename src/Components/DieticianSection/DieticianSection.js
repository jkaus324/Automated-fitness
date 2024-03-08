import React from "react";
import classes from "./DieticianSection.module.css";
import user from "../../assets/user.png";

const DieticianSection = () => {
  return (
    <div className={classes.maindiet}>
      <div className={classes.firstdiet}>
        <div className={classes.ff}>
          <div className={classes.imagecont}>
            <img className={classes.image} src={user} alt="user not found" />
          </div>
          <div className={classes.namecont}>Pridhi Singla</div>
          <div className={classes.desigcont}>Specilist of Fitness studies</div>
        </div>
        <div className={classes.fs}>
          <div className={classes.dietdetails}>
            <span className={classes.dietheading}>Name : </span>
            <p className={classes.dietdata}>Pridhi Singla</p>
          </div>
          <div className={classes.dietdetails}>
            <span className={classes.dietheading}>Age : </span>
            <p className={classes.dietdata}>45</p>
          </div>
          <div className={classes.dietdetails}>
            <span className={classes.dietheading}>Degree : </span>
            <p className={classes.dietdata}>MBBS and Specilist in Surgery</p>
          </div>
          <div className={classes.dietdetails}>
            <span className={classes.dietheading}>Profession : </span>
            <p className={classes.dietdata}>Specilist Fitness Trainer</p>
          </div>
          <div className={classes.dietdetails}>
            <span className={classes.dietheading}>Office Address : </span>
            <p className={classes.dietdata}>B/O Near Bank Sadar Bazar Delhi</p>
          </div>
        </div>
      </div>
      <div className={classes.seconddiet}>
        <div className={classes.sf}>
          <h1 className={classes.dietcontact}>Contact Details : </h1>
          <div className={classes.dietdetails}>
            <span className={classes.dietheading}>Mobile : </span>
            <p className={classes.dietdata}>+91 898271XXXX</p>
          </div>
          <div className={classes.dietdetails}>
            <span className={classes.dietheading}>Email : </span>
            <p className={classes.dietdata}>prid23200222@gmail.com</p>
          </div>
          <div className={classes.dietdetails}>
            <span className={classes.dietheading}>Youtube Channel : </span>
            <p className={classes.dietdata}>fitnessadda</p>
          </div>
          <div className={classes.dietdetails}>
            <span className={classes.dietheading}>Facebook : </span>
            <p className={classes.dietdata}>www.facebook.com</p>
          </div>
          <div className={classes.dietdetails}>
            <span className={classes.dietheading}>Instagram : </span>
            <p className={classes.dietdata}>www.instagram.com</p>
          </div>
          <div className={classes.dietdetails}>
            <span className={classes.dietheading}>Twitter : </span>
            <p className={classes.dietdata}>www.twitter.com</p>
          </div>
        </div>
        <div className={classes.ss}>
          <h1 className={classes.dietreview}>Reviews</h1>
          <p className={classes.reviewperson}>Rahul Singh</p>
          <p className={classes.review}>
            Your website has given emmense idea about what food to take for a
            healthy diet and healthy lifestyle.
          </p>
          <p className={classes.reviewperson}>Sachin Kumar</p>
          <p className={classes.review}>
            Amazing content that helped we a lot for a better health and work
            culture, thanks a lot.
          </p>
          <p className={classes.reviewperson}>Rahul Singh</p>
          <p className={classes.review}>
            The website has a good user friendly design that is easy to navigate
            and operate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DieticianSection;
