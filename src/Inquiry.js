import React, {useState} from "react";
import Navbar from "./Components/NavBar";
import {Link} from "react-router-dom";

function Inquiry() {
    const [gender, setGender] = useState("Female")
    const onOptionChange = e => {
        setGender(e.target.value)
    }
    return (
        <div>
            <Navbar/>
            <form name={"Inquiry"} onSubmit={"/inquiry"} method={"post"}>
                <label htmlFor="fullname"><b>Full Name</b></label>
                <input type="text" placeholder="Enter Your Full Name" name="fullname" id="fullname" required/>

                <label htmlFor="age"><b>Age</b></label>
                <input type="number" placeholder="Enter Your Age" name="age" id="age" required/>

                <label htmlFor="gender"><b>Gender</b></label>
                <div className={"container"}>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        id="Male"
                        checked={gender === "Male"}
                        onChange={onOptionChange}
                    />
                    <label htmlFor="Male">Male</label>

                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        id="Female"
                        checked={gender === "Female"}
                        onChange={onOptionChange}
                    />
                    <label htmlFor="Female">Female</label>

                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        id="Other"
                        checked={gender === "Other"}
                        onChange={onOptionChange}
                    />
                    <label htmlFor="Other">Other</label>

                    <p>
                        Selected gender <strong>{gender}</strong>
                    </p>
                </div>

                <label htmlFor="reason"><b>Reason For Joining Yoga</b></label>
                <input type="textarea" placeholder="Enter Reason" name="reason" id="reason" required/>

                <label htmlFor="yes"><b>Have you been practising yoga lately?</b></label>
                <input type="text" placeholder="Enter Your Answer" name="doneyoga" id="doneyoga" required/>

                <label htmlFor="yes"><b>If the answer is "YES," where and how long have you been trying to practice?</b></label>
                <input type="text" placeholder="Enter Your Answer" name="yes" id="yes" required/>

                <label htmlFor="userMobile"><b>Mobile Number</b></label>
                <input type="number" placeholder="Enter Your Mobile Number" name="userMobile" id="userMobile" required/>

                <label htmlFor="illness"><b>Any illness or discomfort?</b></label>
                <input type="text" placeholder="Enter Your Answer" name="illness" id="illness" required/>

                <label htmlFor="reference"><b>Reference: - Social Media / Print Media / Other?</b></label>
                <input type="text" placeholder="Enter Your Reference" name="reference" id="reference" required/>

                <p>On Submitting you agreeing to our <Link to={""}>Terms & Condition</Link>.</p>


                <button type="submit" className="registerbtn">Submit</button>
            </form>
        </div>
    )
}

export default Inquiry;
