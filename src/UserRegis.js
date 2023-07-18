import * as React from 'react';
import {Link} from "react-router-dom";
import Navbar from "./Components/NavBar";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import {motion} from "framer-motion";
import {toast} from "react-toastify";
import axios from "axios";
import {useState} from "react";

function UserRegis() {
    const [formData, setFormData] = useState({
        username: '',
        fullname: '',
        userAdd: '',
        userCity: '',
        userPinCode: '',
        userMobile: '',
        userEmergencyMobile: '',
        userBirthday: '',
        userBatchID: '',
        website: '',
        userEmail: '',
        psw: '',
        pswRepeat: '',

    });
    const onVerifyCaptcha = (token) => {
        setCaptchaVerified(true);
    };

    const [captchaVerified, setCaptchaVerified] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!captchaVerified) {
            toast.error('Please verify the captcha.');
            return;
        }


        try {
            const res = await axios.post('https://nys-server.onrender.com/userReg', formData);
            toast.success(`Data entered successfully`);
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error('Phone number already submitted');
                console.log(error);
            } else {
                toast.error('Error submitting the form');
                console.log(error);
            }
        }
    };

    return (<>
        <Navbar/>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
            <form action={"/userReg"} method={"post"} onSubmit={handleSubmit}>
                <div className="container">
                    <div className={'container'}>
                        <div className={'pinkFont'}>
                            <h1>User Register</h1>
                        </div>
                    </div>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>

                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text"
                           placeholder="Enter username"
                           name="username"
                           value={formData.username}
                           onChange={handleChange}
                           id="username"
                           required
                    />

                    <label htmlFor="fullName"><b>Full Name</b></label>
                    <input type="text"
                           placeholder="Enter Full Name"
                           name="fullName"
                           value={formData.fullName}
                           onChange={handleChange}
                           id="fullName"
                           required
                    />

                    <label htmlFor="userAdd"><b>Address</b></label>
                    <input type="textarea"
                           placeholder="Enter Your Address"
                           name="userAdd"
                           value={formData.userAdd}
                           onChange={handleChange}
                           id="userAdd"
                           required
                    />

                    <label htmlFor="userCity"><b>User's City</b></label>
                    <input type="text"
                           placeholder="Enter User's City"
                           name="userCity"
                           value={formData.userCity}
                           onChange={handleChange}
                           id="userCity"
                           required
                    />

                    <label htmlFor="userPinCode"><b>Pincode</b></label>
                    <input type="number"
                           inputMode="numeric"
                           placeholder="Enter Pincode"
                           name="userPinCode"
                           pattern="[0-9]{6}"
                           value={formData.userPinCode}
                           onChange={handleChange}
                           id="userPinCode"
                           required
                    />

                    <label htmlFor="userMobile"><b>Mobile Number</b></label>
                    <input type="number"
                           inputMode="numeric"
                           placeholder="Enter Mobile Number"
                           name="userMobile"
                           id="userMobile"
                           pattern="[0-9]{10}"
                           required
                           value={formData.userMobile}
                           onChange={handleChange}
                    />

                    <label htmlFor="userEmergencyMobile"><b>Emergency Mobile Number</b></label>
                    <input type="number"
                           inputMode="numeric"
                           placeholder="Enter Emergency Mobile Number"
                           name="userEmergencyMobile"
                           id="userEmergencyMobile"
                           pattern="[0-9]{10}"
                           value={formData.userEmergencyMobile}
                           onChange={handleChange}
                           required
                    />
                    {formData.userMobile === formData.userEmergencyMobile && (
                        <>
                            <p style={{color: "red"}}>Emergency Mobile number should not match with your number</p>
                        </>
                    )}

                    <label htmlFor="userBirthday">Birthday:</label>
                    <input type="date"
                           id="userBirthday"
                           name="userBirthday"
                           value={formData.userBirthday}
                           onChange={handleChange}
                    />

                    <label htmlFor="userBatchID"><b>Batch Id</b></label>
                    <input type="text"
                           placeholder="Enter Batch ID"
                           name="userBatchID"
                           id="userBatchID"
                           value={formData.userBatchID}
                           onChange={handleChange} required
                    />

                    <label htmlFor="website"><b>Website</b></label>
                    <input type="text"
                           placeholder="Enter Your website"
                           name="website"
                           id="website"
                           value={formData.website}
                           onChange={handleChange} required
                    />

                    <label htmlFor="userEmail"><b>Email</b></label>
                    <input type="text"
                           placeholder="Enter Email"
                           name="userEmail"
                           id="userEmail"
                           pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                           value={formData.userEmail}
                           onChange={handleChange} required
                    />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password"
                           placeholder="Enter Password"
                           name="psw"
                           id="psw"
                           value={formData.psw}
                           onChange={handleChange}
                           required
                    />

                    <label htmlFor="pswRepeat"><b>Confirm Password</b></label>
                    <input type="password"
                           placeholder="Confirm Password"
                           name="pswRepeat"
                           id="pswRepeat"
                           value={formData.pswRepeat}
                           onChange={handleChange} required
                    />
                    {formData.psw !== formData.pswRepeat && (
                        <>
                        <p style={{color: "red"}}>Password does not match</p>
                    </>
                    )}

                    <div>
                        <HCaptcha
                            sitekey="8e2005b0-560c-459d-804c-c60bf29defef"
                            //sitekey={"10000000-ffff-ffff-ffff-000000000001"}
                            onVerify={onVerifyCaptcha}
                        />
                    </div>

                    <hr/>

                    <p>By creating an account you agree to our Terms & Privacy.</p>
                    <button type="submit" className="registerbtn">Register</button>
                </div>
                <div className="container signin">
                    <p>Have an account? <Link to={'/userlogin'}> Login Here</Link>.</p>
                </div>
            </form>
        </motion.div>
    </>)
}

export default UserRegis;
