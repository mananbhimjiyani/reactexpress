import React, {useState} from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./Components/NavBar";
import { motion } from "framer-motion";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const FormComponent = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        age: '',
        gender: '',
        reason: '',
        doneyoga: '',
        yes: '',
        userMobile: '',
        illness: '',
        reference: '',
        other: '',
    });

    const [captchaVerified, setCaptchaVerified] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!captchaVerified) {
            toast.error('Please verify the captcha.');
            return;
        }

        try {
          const res = await axios.post('https://nys-server.onrender.com/inquiry', formData);
          toast.success(`Data entered successfully`);

          setTimeout(() => {
            //const message = encodeURIComponent(`New inquiry raised by ${formData.fullname} ${formData.gender}%0aContact number is ${formData.userMobile}%0aReason for Joining NA Been practising yoga lately?: ${formData.doneyoga}%0aYes?where and how long have you been trying to practice? ${formData.yes}%0aAny illness or discomfort? ${formData.illness}%0aReference: Social Media / Print Media / Other? ${formData.reference}`);
            const url = `https://api.whatsapp.com/send/?phone=918866160330&text=New inquiry raised by ${formData.fullname} ${formData.gender}%0aContact number is ${formData.userMobile}%0aReason for Joining NA Been practising yoga lately?: ${formData.doneyoga}%0aYes?where and how long have you been trying to practice? ${formData.yes}%0aAny illness or discomfort? ${formData.illness}%0aReference: Social Media / Print Media / Other? ${formData.reference}&type=phone_number&app_absent=0`;
            window.open(url, '_blank');
            // Use window.open() to open the WhatsApp API URL in a new tab or window
          }, 2000);
          setFormData({
            fullname: '',
            age: '',
            gender: '',
            reason: '',
            doneyoga: '',
            yes: '',
            userMobile: '',
            illness: '',
            reference: '',
          });
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
    const onVerifyCaptcha = (token) => {
        console.log("Verified: " + token);
        // Update the captchaVerified state variable
        setCaptchaVerified(true);
    };

    return (
        <>
            <NavBar/>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <form name={"Inquiry"} onSubmit={handleSubmit} netlify>
                <div className="container">
                    <div className="container">
                        <div className="pinkFont">
                            <h1>Inquiry</h1>
                        </div>
                    </div>
                    <p>Please fill in this form for Submitting Your Inquiry.</p>
                    <hr/>
                    <label htmlFor="fullname"><b>Full Name</b></label>
                    <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        name="fullname"
                        id="fullname"
                        pattern="[A-Za-z ]+"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="age"><b>Age</b></label>
                    <input
                        type="text"
                        placeholder="Enter Your Age"
                        name="age"
                        id="age"
                        pattern="[0-9]{2}"
                        inputMode="numeric"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="gender"><b>Gender</b></label>
                    <select
                        name="gender"
                        id="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <label htmlFor="reason"><b>Reason For Joining Yoga</b></label>
                    <input type="textarea"
                           placeholder="Enter Reason"
                           name="reason"
                           id="reason"
                           pattern="[A-Za-z ]+"
                           value={formData.reason}
                           onChange={handleChange} required/>

                    <label htmlFor="doneyoga"><b>Have you been practicing yoga lately?</b></label>
                    <select
                        name="doneyoga"
                        id="doneyoga"
                        value={formData.doneyoga}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    {formData.doneyoga === "yes" && (
                        <>
                            <label htmlFor="yes"><b>If the answer is "YES," where and how long have you been trying to practice?</b></label>
                            <input
                                type="text"
                                placeholder="Enter Your Answer"
                                name="yes"
                                id="yes"
                                value={formData.yes}
                                onChange={handleChange}
                                required
                            />
                        </>
                    )}

                    <label htmlFor="userMobile"><b>Mobile Number</b></label>
                    <input type="tel"
                           placeholder="Enter Your Mobile Number"
                           name="userMobile"
                           id="userMobile"
                           value={formData.userMobile}
                           onChange={handleChange}
                           required/>

                    <label htmlFor="illness"><b>Any illness or discomfort?</b></label>
                    <input type="text"
                           placeholder="Enter Your Answer"
                           name="illness"
                           id="illness"
                           value={formData.illness}
                           onChange={handleChange}
                           required/>

                    <label htmlFor="reference"><b>Reference?</b></label>
                    <select
                        name="reference"
                        id="reference"
                        value={formData.reference}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Print Media">Print Media</option>
                        <option value="Other">Other</option>
                    </select>

                    {formData.reference === "Other" && (
                        <>
                            <label htmlFor="Other"><b>Enter Your Reference</b></label>
                            <input
                                type="text"
                                placeholder="Enter Your Answer"
                                name="yes"
                                id="yes"
                                value={formData.other}
                                onChange={handleChange}
                                required
                            />
                        </>
                    )}
                    <div>
                        <HCaptcha
                            //sitekey={"10000000-ffff-ffff-ffff-000000000001"}
                            sitekey="8e2005b0-560c-459d-804c-c60bf29defef"
                            onVerify={onVerifyCaptcha}
                        />
                    </div>

                    <p>On Submitting you agreeing to our <a href="/#">Terms & Condition</a>.</p>
                </div>

                <button type="submit" className="registerbtn">Submit</button>
            </form>
            <ToastContainer/>
            </motion.div>
        </>
    );
};

export default FormComponent;
