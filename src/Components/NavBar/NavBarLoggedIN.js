import React from 'react';
import {Link} from "react-router-dom";

function NavbarLoggedIN() {
    return (
        <nav className="navbar">
            <h1>The Studio Management App</h1>
            <div className="links">
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/attendance'}>Attendance</Link>
                <Link to={"/logout"}>Logout</Link>
            </div>
        </nav>

    );
}

export default NavbarLoggedIN;
