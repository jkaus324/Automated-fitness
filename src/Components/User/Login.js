import React, {useState} from "react";
import classes from './Login.module.css';
import { Link } from "react-router-dom";

function Login(props) {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Retrieve username and password from form fields
        const username = event.target.username.value;
        const password = event.target.password.value;
    
        fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "user login");
                if (data.status === "ok") {
                    alert("Login successful!");
                    props.setUsername(data.data.username);
                    props.setLoggedIn(1);
                    localStorage.setItem("username", data.data.username); // Use username from response
                    const redirectURL = "/"; 
                    window.location.href = redirectURL; /// Adjust accordingly
                    // Redirect using React Router or similar mechanism
                } else {
                    alert("Login failed. Please check your credentials.");
                }
            })
            .catch((err) => {
                console.error("Error during login:", err);
                alert("An error occurred during login. Please try again later.");
            });
    };
    

    const hrstyle = {
        backgroundColor: '#40B555',
        height: '3px',
        border: 'none',
        width: '50%',
    };

    return (
        <div className={classes.loginmain}>
            <div className={classes.heading}>Login Page</div>
            <hr style={hrstyle}></hr>
            <form onSubmit={handleSubmit} method="POST">
            <div className={classes.field}>
                <div className={classes.name}><label>Username : </label></div>
                <div className={classes.enter}>
                    <input className={classes.inp} placeholder="username..." value={username} name="username" type="text" id="username" onChange={handleUsernameChange} autoComplete="off"/>
                </div>
            </div>
            <div className={classes.field}>
                <div className={classes.name}><label>Password : </label></div>
                <div className={classes.enter}>
                    <input className={classes.inp} placeholder="password..." value={password} name="password" type="password" id="password" onChange={handlePasswordChange} autoComplete="off"/>
                </div>
            </div>
            <br />
            <button className={classes.signIn} id="button" type="submit">Sign In</button>
            <p className={classes.anotheroption}><span className={classes.content}>Don't have an account ? </span><Link to='/Signup'><button className={classes.login}>Sign up</button></Link></p>
            </form>
        </div>
    )
}


export default Login;

