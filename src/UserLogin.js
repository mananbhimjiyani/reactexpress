import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import {motion} from "framer-motion";

function UserLogin() {
    const [selectedRole] = useState("Yoga Practitioner");
    const onVerifyCaptcha=(token)=> {
        console.log("Verified: " + token);
    }
    return (
        <div>
            <NavBar />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <form name="userLogin" action="/authUser" method="post">
                <div className="container">
                    <div className="container">
                        <div className="pinkFont">
                            <h1>User Login</h1>
                        </div>
                    </div>
                    <p>Please fill in this form for Logging In.</p>
                    <hr />
                    <label htmlFor="username">
                        <b>Username</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        id="username"
                        required
                    />

                    <label htmlFor="psw">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        id="psw"
                        required
                    />
                    <div>
                        <HCaptcha
                            sitekey="8e2005b0-560c-459d-804c-c60bf29defef"
                            onVerify={onVerifyCaptcha}
                        />
                    </div>


                    <p>
                        By creating an account you agree to our{" "}
                        <Link to={""}>Terms & Privacy</Link>.
                    </p>
                    <button type="submit" className="registerbtn">
                        Login
                    </button>
                </div>

                <div className="container signin">
                    <p>
                        Don't have an account? <Link to={"/userregis"}>Register Here</Link>
                        .
                    </p>
                </div>
            </form>
            </motion.div>
        </div>
    );
}

export default UserLogin;
