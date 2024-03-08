import React from "react";
import classes from './Home.module.css';
import first from '../../assets/HomeOtherImages/1.jpeg';
import second from '../../assets/HomeOtherImages/everything-you-need-know-about-fitness-1440x810.jpg';
import third from '../../assets/HomeOtherImages/IM.jpeg';
import forth from '../../assets/HomeOtherImages/iStock-960249252.jpg';
import fifth from '../../assets/HomeOtherImages/istockphoto-1213615970-612x612.jpg';
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className={classes.home}>
            <div className={classes.fimgcont}>
                <p className={classes.ff}>EASY TO USE GYM MANAGEMENT WEBSITE</p>
                <p className={classes.fs}>Built to make your life easier.</p>
                <p className={classes.ft}>The only all-in-1 gym management website with built-in 24/7 availablability of dietician for your betterness and a good working life. The difference? Admin autopilot at fraction of the cost. Better for you, members, and your wallet.</p>
                <div className={classes.ffc}><p className={classes.ffd}>Best Customer Support</p><p className={classes.ffd}>Top Rated Gym Software</p><p className={classes.ffd}>Best Ease of Use</p></div>
            </div>
            <div className={classes.featues} id="features">
                <div className={classes.upperfeatures}>
                    <div className={classes.featureleft}>
                        <Link to='/BMI'><button className={classes.featurebutton}>BMI</button></Link>
                        <p className={classes.featuredesc}>It gives you information BMI along with the BMI ranges, it gives a accurate calculator to calculate your current BMI with height and weight. </p>
                    </div>
                    <div className={classes.featureright}>
                        <Link to='/Heartrate'><button className={classes.featurebutton}>Heart Rate</button></Link>
                        <p className={classes.featuredesc}>It gives you information about heart rate of humans with different gender and at different ranges of age. </p>
                    </div>
                </div>
                <div className={classes.middleheading}>
                    <p className={classes.featureheading}>Explore Our Website Features</p>
                </div>
                <div className={classes.lowerfeatures}>
                    <div className={classes.featureleft}>
                        <Link to='/Yoga'><button className={classes.featurebutton}>Yoga</button></Link>
                        <p className={classes.featuredesc}>Yoga is very beneficial for a fit body, and it should be performed on daily basis. Yoga section shows different yoga portures for a fit body. </p>
                    </div>
                    <div className={classes.featureright}>
                        <Link to='/Dietplan'><button className={classes.featurebutton}>Diet Plan</button></Link>
                        <p className={classes.featuredesc}>For a healthy work life one should follow good diet that contains all the beneficial nutritients that are required by the body, this contains some list of good fiet plans. </p>
                    </div>
                </div>
            </div>
            <div className={classes.simgcont}>
                <p className={classes.sf}>EASY TO USE ON ALL BROWSER SUPPORT</p>
                <p className={classes.ss}>FITNESS ADDA is easy-to-use fitness and health bases management software</p>
                <p className={classes.st}>GymMaster is gym management software designed to make it easy to maintain detailed records of your members and their memberships, book classes and trainers, process and track sales, and communicate en mass with the right members at the right time.</p>
                <p className={classes.st}>Designed to fit clubs of all sizes, this gym management software is feature-packed. With a full gym booking system, point of sale, website integration, billing integration, a mobile app for staff and members, online booking for clients, and 24/7 door access control, GymMaster has all you need to more efficiently run your gym. Find out more</p> 
            </div>
            <div className={classes.timgcont}>
                <p className={classes.fd}>Hello user, get free support from the dieticians for fitness</p>
                <p className={classes.fd}>We are the team with the aim to provide a healthy lifestyle.
                Yoga and a healthy diet will be must for every user of a website. </p>
                <p className={classes.fd}>Get 24/7 query support from our team and contact our dietician for everytime support and mentorship for your every fitness related query and doubts. </p>
                <p className={classes.fd}>This user friendly interface is for our users to make them confortable </p>
            </div>
        </div>
    )
};

export default Home;