import React, { useEffect, useState } from "react";
import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { HashLink } from "react-router-hash-link";


const NavBar = (props) => {

    let [element, setElement] = useState(<div className={classes.login}>
        <Link to='/Login' className={classes.link}><button className={classes.buttonoption}>Login</button></Link>
    </div>);

    // useEffect(() => {
    //     setElement(<div className={classes.logout}>
    //         <Link to='/Profile' className={classes.link}><button className={classes.profilebuttonoption}><FaUserCircle className={classes.profileicon}></FaUserCircle> &nbsp;<span className={classes.profileheading}>{props.username}</span></button></Link>
    //         <button className={classes.buttonoption} onClick={props.setLoggedIn(0)}>Logout</button>
    //     </div>)
    // }, props.loggedIn)
    const handleClick = () => {
        props.setUsername("");
        props.setLoggedIn(0);
        localStorage.removeItem('username');
        const redirectURL = '/'; // Adjust accordingly
    window.location.href = redirectURL; // Redirect to the specified URL
        localStorage.clear();
    }
    const storedUsername = localStorage.getItem('username');
    if(storedUsername) {
        element = <div className={classes.logout}>
            <button className={classes.profilebuttonoption}><Link to='/Profile' className={classes.link}><FaUserCircle className={classes.profileicon}></FaUserCircle> &nbsp;<span className={classes.profileheading}>{storedUsername}</span></Link></button>
            <button className={classes.buttonoption} onClick={handleClick}>Logout</button>
        </div>
    }

    return (

        <div className={classes.navbar}>
            <div className={classes.companyname}><Link to='/' className={classes.headinglink}>FITNESS ADDA</Link></div>
            <div className={classes.restnavbar}>
                <HashLink smooth to='/#features' className={classes.link}><div className={classes.navoptions}>Features</div></HashLink>
                <Link to='/ContactPage' className={classes.link}><div className={classes.navoptions}>Contact Us</div></Link>
                <Link to='/Dietician' className={classes.link}><div className={classes.navoptions}>Dietician</div></Link>
            </div>
            {element}
        </div>
        )
    };

    export default NavBar;
   