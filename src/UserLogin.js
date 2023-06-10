import React from "react";
import {Link} from "react-router-dom";
import { useState } from 'react';
import NavBar from "./Components/NavBar";
function UserLogin() {
    const [selectedRole] = useState('Yoga Practitioner');

    console.log(selectedRole);
    return (
        <div>
            <NavBar/>
            <form name="userLogin" action="/authUser" method="post">
                <div className="container">
                    <div className={'container'}>
                        <div className={'pinkFont'}>
                            <h1>User Login</h1>
                        </div>
                    </div>
                    <p>Please fill in this form for Logging In.</p>
                    <hr/>
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" id="username" required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

                    <p>By creating an account you agree to our <Link to={""}>Terms & Privacy</Link>.</p>
                    <button type="submit" className="registerbtn">Login</button>
                </div>

                <div className="container signin">
                    <p>Don't Have an account? <Link to={'/userregis'}> Register Here</Link>.</p>
                </div>
            </form>
        </div>)
};
export default UserLogin
