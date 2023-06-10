import React from "react";
import NavBarLoggedIN from "./Components/NavBar/NavBarLoggedIN";
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Attendance() {
    const percentage = 66;
    return (
        <div>
            <NavBarLoggedIN/>
            <div className={"content"}>
                <h1>Your Attendance</h1>
            <div style={{width: 100, height: 100}}>
                <hr/>
                <CircularProgressbar value={percentage} text={`${percentage}%`}/>;
            </div>
            <div className={'container'}>

            </div>
            </div>
        </div>
    )
};

export default Attendance;
