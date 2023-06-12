// import React, {useState} from "react";
// import Navbar from "./Components/NavBar";
// import {Link} from "react-router-dom";
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";
// toast.configure()

// function Inquiry() {
//     const [gender, setGender] = useState("Female")
//     const onOptionChange = e => {
//         setGender(e.target.value)
//     }

//         const [formData, setFormData] = useState({ fullname: '', age: '' ,gender:'',});
//         const [response, setResponse] = useState('');

//         const handleChange = (e) => {
//           setFormData({ ...formData, [e.target.name]: e.target.value });
//         };

//         const handleSubmit = async (e) => {
//           e.preventDefault();
//           try {
//             const response = await fetch('/api/submit-form', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify(formData),
//             });
//             const data = await response.json();
//             setResponse(data.message);
//           } catch (error) {
//             console.error(error);
//             setResponse('An error occurred');
//           }
//         };

//     return (
//         <div>
//             <Navbar/>

//             <form name={"Inquiry"} onSubmit={"/inquiry"} method={"post"}>
//                 <div className="container">
//                     <div className={'container'}>
//                         <div className={'pinkFont'}>
//                             <h1>Inquiry</h1>
//                         </div>
//                     </div>
//                     <p>Please fill in this form for Submitting Your Inquiry.</p>
//                     <hr/>
//                     <label htmlFor="fullname"><b>Full Name</b></label>
//                     <input type="text" placeholder="Enter Your Full Name" name="fullname" id="fullname" required/>

//                     <label htmlFor="age"><b>Age</b></label>
//                     <input type="number" placeholder="Enter Your Age" name="age" id="age" required/>

//                     <label htmlFor="gender"><b>Gender</b></label>
//                     <div className={"container"}>
//                         <input
//                             type="radio"
//                             name="gender"
//                             value="Male"
//                             id="Male"
//                             checked={gender === "Male"}
//                             onChange={onOptionChange}
//                         />
//                         <label htmlFor="Male">Male</label>

//                         <input
//                             type="radio"
//                             name="gender"
//                             value="Female"
//                             id="Female"
//                             checked={gender === "Female"}
//                             onChange={onOptionChange}
//                         />
//                         <label htmlFor="Female">Female</label>

//                         <input
//                             type="radio"
//                             name="gender"
//                             value="Other"
//                             id="Other"
//                             checked={gender === "Other"}
//                             onChange={onOptionChange}
//                         />
//                         <label htmlFor="Other">Other</label>

//                         <p>
//                             Selected gender <strong>{gender}</strong>
//                         </p>
//                     </div>

//                     <label htmlFor="reason"><b>Reason For Joining Yoga</b></label>
//                     <input type="textarea" placeholder="Enter Reason" name="reason" id="reason" required/>

//                     <label htmlFor="yes"><b>Have you been practising yoga lately?</b></label>
//                     <input type="text" placeholder="Enter Your Answer" name="doneyoga" id="doneyoga" required/>

//                     <label htmlFor="yes"><b>If the answer is "YES," where and how long have you been trying to
//                         practice?</b></label>
//                     <input type="text" placeholder="Enter Your Answer" name="yes" id="yes" required/>

//                     <label htmlFor="userMobile"><b>Mobile Number</b></label>
//                     <input type="number" placeholder="Enter Your Mobile Number" name="userMobile" id="userMobile"
//                            required/>

//                     <label htmlFor="illness"><b>Any illness or discomfort?</b></label>
//                     <input type="text" placeholder="Enter Your Answer" name="illness" id="illness" required/>

//                     <label htmlFor="reference"><b>Reference: - Social Media / Print Media / Other?</b></label>
//                     <input type="text" placeholder="Enter Your Reference" name="reference" id="reference" required/>

//                     <p>On Submitting you agreeing to our <Link to={""}>Terms & Condition</Link>.</p>
//                 </div>


//                 <button type="submit" className="registerbtn">Submit</button>
//             </form>
//         </div>
//     )

// }

// export default Inquiry;
import React, {useState} from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
    const navigate = useNavigate();
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
    });
    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const res = await axios.post('/inquiry', formData);
          toast.success('Data entered successfully');
      
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
          } else {
            toast.error('Error submitting the form');
          }
        }
      };
      

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="age"><b>Age</b></label>
                    <input
                        type="number"
                        placeholder="Enter Your Age"
                        name="age"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="gender"><b>Gender</b></label>
                    <div className={"container"}>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            id="Male"
                            checked={formData.gender === "Male"}
                            onChange={handleChange}
                        />
                        <label htmlFor="Male">Male</label>

                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            id="Female"
                            checked={formData.gender === "Female"}
                            onChange={handleChange}
                        />
                        <label htmlFor="Female">Female</label>

                        <input
                            type="radio"
                            name="gender"
                            value="Other"
                            id="Other"
                            checked={formData.gender === "Other"}
                            onChange={handleChange}
                        />
                        <label htmlFor="Other">Other</label>

                        <p>
                            Selected gender <strong>{formData.gender}</strong>
                        </p>
                    </div>

                    <label htmlFor="reason"><b>Reason For Joining Yoga</b></label>
                    <input type="textarea"
                           placeholder="Enter Reason"
                           name="reason"
                           id="reason"
                           value={formData.reason}
                           onChange={handleChange} required/>

                    <label htmlFor="yes"><b>Have you been practising yoga lately?</b></label>
                    <input type="text"
                           placeholder="Enter Your Answer"
                           name="doneyoga"
                           id="doneyoga"
                           value={formData.doneyoga}
                           onChange={handleChange}
                           required/>

                    <label htmlFor="yes"><b>If the answer is "YES," where and how long have you been trying to
                        practice?</b></label>
                    <input type="text"
                           placeholder="Enter Your Answer"
                           name="yes"
                           id="yes"
                           value={formData.yes}
                           onChange={handleChange} required/>

                    <label htmlFor="userMobile"><b>Mobile Number</b></label>
                    <input type="number"
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
                           onChange={handleChange}required/>

                    <label htmlFor="reference"><b>Reference: - Social Media / Print Media / Other?</b></label>
                    <input type="text"
                           placeholder="Enter Your Reference"
                           name="reference"
                           id="reference"
                           value={formData.reference}
                           onChange={handleChange}required/>

                    <p>On Submitting you agreeing to our <a href="/#">Terms & Condition</a>.</p>
                </div>

                <button type="submit" className="registerbtn">Submit</button>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default FormComponent;
