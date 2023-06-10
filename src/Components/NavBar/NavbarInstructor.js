import {Link} from "react-router-dom";
import React from "react";

function NavbarInstructor() {
    return(
        <nav className={'navbar'}>
            <h1>The Studio Management App</h1>
            <div className="links">
                <Link to={'/InstructorAttendance'}>Attendance</Link>
                <Link to={'/HealthData'}>Health Data</Link>
            </div>
        </nav>
    )
};
export default NavbarInstructor;
