import * as React from 'react';
import {Link} from "react-router-dom";
import Navbar from "./Components/NavBar";

function UserRegis() {
    return (
        <div>
            <Navbar/>
            <form action={"https://nys-server.onrender.com/userReg"} method={"post"}>
                <div className="container">
                    <div className={'container'}>
                        <div className={'pinkFont'}>
                            <h1>User Register</h1>
                        </div>
                    </div>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>

                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter username" name="username" id="username" required/>

                    <label htmlFor="fullName"><b>Full Name</b></label>
                    <input type="text" placeholder="Enter Full Name" name="fullName" id="fullName" required/>

                    <label htmlFor="userAdd"><b>Address</b></label>
                    <input type="textarea" placeholder="Enter Your Address" name="userAdd" id="userAdd" required/>

                    <label htmlFor="userCity"><b>User's City</b></label>
                    <input type="text" placeholder="Enter User's City" name="userCity" id="userCity" required/>

                    <label htmlFor="userPinCode"><b>Pincode</b></label>
                    <input type="number" inputMode="numeric" placeholder="Enter Pincode" name="userPinCode"
                           id="userPinCode" required maxLength='6'/>

                    <label htmlFor="userMobile"><b>Mobile Number</b></label>
                    <input type="number" inputMode="numeric" placeholder="Enter Mobile Number" name="userMobile"
                           id="userMobile" required maxLength='10'/>

                    <label htmlFor="userMobile"><b>Emergency Mobile Number</b></label>
                    <input type="number" inputMode="numeric" placeholder="Enter Emergency Mobile Number"
                           name="userEmergencyMobile" id="userEmergencyMobile" required maxLength='10'/>

                    <label htmlFor="birthday">Birthday:</label>
                    <input type="date" id="userBirthday" name="userBirthday"/>

                    <label htmlFor="userBatchID"><b>Batch Id</b></label>
                    <input type="text" placeholder="Enter Batch ID" name="userBatchID" id="userBatchID" required/>

                    <label htmlFor="website"><b>Website</b></label>
                    <input type="text" placeholder="Enter Your website" name="website" id="website" required/>

                    <label htmlFor="userEmail"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="userEmail" id="userEmail" required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

                    <label htmlFor="pswRepeat"><b>Confirm Password</b></label>
                    <input type="password" placeholder="Confirm Password" name="pswRepeat" id="pswRepeat" required/>

                    <hr/>

                    <p>By creating an account you agree to our Terms & Privacy.</p>
                    <button type="submit" className="registerbtn">Register</button>
                </div>
                <div className="container signin">
                    <p>Have an account? <Link to={'/userlogin'}> Login Here</Link>.</p>
                </div>
            </form>
        </div>
    )
};
export default UserRegis;
