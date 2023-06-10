import React from "react";
import NavbarInstructor from "./Components/NavBar/NavbarInstructor";

function HealthData() {
    return (
        <div>
            <NavbarInstructor/>
            <form name="healthData" action="/healthData" method="post">
                <div className="container">
                    <div className={"container"}>
                        <div className={'pinkFont'}>
                            <h1>Take Health Data</h1>
                            <hr/>
                        </div>
                    </div>

                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" id="username" required/>

                    <label htmlFor="height"><b>Height</b></label>
                    <input type="number" placeholder="Enter Height" name="height" id="height" required/>

                    <label htmlFor="weight"><b>Weight</b></label>
                    <input type="number" placeholder="Enter Weight" name="weight" id="weight" required/>

                    <label htmlFor="remarks"><b>Remarks</b></label>
                    <input type="textarea" placeholder="Enter Remarks" name="remarks" id="remarks" required/>

                    <button type="submit" className="registerbtn">Submit</button>

                </div>
            </form>
        </div>

    )
}

export default HealthData;
