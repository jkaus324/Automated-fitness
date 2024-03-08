import React, { useState } from "react";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";

function SignUp(props) {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [City, setEnteredCity] = useState("");
  let [Country, setEnteredCountry] = useState("");
  let [address, setAddress] = useState("");
  let [mobilenumber, setMobileNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleCountryChange = (event) => {
    setEnteredCountry(event.target.value);
  };
  const handleCityChange = (event) => {
    setEnteredCity(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);

    if (password.length < 8 || password.length > 15) {
      alert("Password must be between 8 and 15 characters");
      return;
    }

    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()-+=^])(?!.*\s).{8,15}$/;
    if (!passwordPattern.test(password)) {
      alert("Password is not appropriate.");
      return;
    }
    // console.log(username);
    if (password === confirmPassword) {
      console.log("yes");
      fetch("http://localhost:5000/signup", {
        method: "POST",
        // crossDomain:true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // "Access-Control-Allow-Origin":"*",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          phonenumber: mobilenumber,
          address: address,
          city: City,
          country: Country,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "user registration");
          if (data.status == "saved") {
            alert("Registration successful");
            props.setUsername(username);
            localStorage.setItem("username", username);
            // console.log(username);
            props.setLoggedIn(1);
            // console.log(props.loggedIn);
            const redirectURL = "/"; // Adjust accordingly
            window.location.href = redirectURL; // Redirect to the specified URL
          } else {
            alert("Something went wrong !!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("password doesnot match !!");
    }

    setConfirmPassword("");
    setEmail("");
    setPassword("");
    setUsername("");
    setEnteredCity("");
    setEnteredCountry("");
    setMobileNumber("");
    setAddress("");
  };

  const hrstyle = {
    backgroundColor: "#40B555",
    height: "3px",
    border: "none",
    width: "50%",
  };

  return (
    <div className={classes.signupmain}>
      <div className={classes.heading}>SignUp Page</div>
      <hr style={hrstyle}></hr>
      <form onSubmit={handleSubmit} method="POST">
        <div className={classes.field}>
          <div className={classes.name}>
            <label>Username : </label>
          </div>
          <div className={classes.enter}>
            <input
              className={classes.inp}
              placeholder="username..."
              value={username}
              name="username"
              type="text"
              id="username"
              onChange={handleUsernameChange}
            />
          </div>
        </div>
        <div className={classes.field}>
          <div className={classes.name}>
            <label>Email : </label>
          </div>
          <div className={classes.enter}>
            <input
              className={classes.inp}
              placeholder="email..."
              value={email}
              name="email"
              type="email"
              id="email"
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className={classes.field}>
          <div className={classes.name}>
            <label>Password : </label>
          </div>
          <div className={classes.enter}>
            <input
              className={classes.inp}
              placeholder="password..."
              value={password}
              name="password"
              type="password"
              id="password"
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        <div className={classes.field}>
          <div className={classes.name}>
            <label>Confirm Password : </label>
          </div>
          <div className={classes.enter}>
            <input
              className={classes.inp}
              placeholder="confirm password..."
              value={confirmPassword}
              name="confirmpassword"
              id="confirmpassword"
              type="password"
              onChange={handleConfirmPasswordChange}
            />
          </div>
        </div>
        <div className={classes.field}>
          <div className={classes.name}>
            <label>City : </label>
          </div>
          <div className={classes.enter}>
            <input
              className={classes.inp}
              placeholder="city..."
              value={City}
              name="city"
              id="city"
              type="text"
              onChange={handleCityChange}
            />
          </div>
        </div>
        <div className={classes.field}>
          <div className={classes.name}>
            <label>Country : </label>
          </div>
          <div className={classes.enter}>
            <input
              className={classes.inp}
              placeholder="country..."
              value={Country}
              name="country"
              id="country"
              type="text"
              onChange={handleCountryChange}
            />
          </div>
        </div>

        <div className={classes.field}>
          <div className={classes.name}>
            <label>Street Address : </label>
          </div>
          <div className={classes.enter}>
            {" "}
            <input
              className={classes.inp}
              placeholder="enter street address..."
              value={address}
              name="address"
              id="address"
              type="text"
              onChange={handleAddressChange}
            />
          </div>
        </div>

        <div className={classes.field}>
          <div className={classes.name}>
            <label>Mobile Number : </label>
          </div>
          <div className={classes.enter}>
            {" "}
            <input
              className={classes.inp}
              placeholder="Phone number..."
              value={mobilenumber}
              name="mobilenumber"
              id="mobilenumber"
              type="text"
              onChange={handlePhoneNumberChange}
            />
          </div>
        </div>

        <button className={classes.get_started} id="button">Sign Up</button>
        <p className={classes.anotheroption}>
          <span className={classes.content}>Already have an account ? </span>
          <Link to="/Login">
            <button className={classes.login}>Sign in</button>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
