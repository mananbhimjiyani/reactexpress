import React from "react";
import Home from "./Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ErrorPage from "./error-page";
import UserRegis from "./UserRegis";
import UserLogin from "./UserLogin";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Attendance from "./Attendance";
import IncorrectPassword from "./IncorrectPassword";
import FdDashboard from "./FdDashboard";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import Logout from "./logout";
import InstructorProfile from "./InstructorProfile";
import HealthData from "./HealthData";
import Inquiry from "./Inquiry";
function App() {
    return (
        <Router>
            <div className="container">
                <div className="container">
                    <Routes>
                        <Route exact path={"/"} element={<LoadingScreen/>}/>
                        <Route path={"/Home"}element={<Home/>}/>
                        <Route exact path={"/userregis"} element={<UserRegis/>}/>
                        <Route path={'/userlogin'} element={<UserLogin/>}/>
                        <Route path={'/dashboard'} element={<Dashboard/>}/>
                        <Route path={'/userLogin'} element={<UserLogin/>}/>
                        <Route path={'/UserHome'} element={<Dashboard/>}/>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/attendance'} element={<Attendance/>}/>
                        <Route path={'/incorrectPassword'} element={<IncorrectPassword/>}/>
                        <Route path={'/fdDashboard'} element={<FdDashboard/>}/>
                        <Route path={'/mentorDash'} element={<InstructorProfile/>}/>
                        <Route path={'/logout'} element={<Logout/>}/>
                        <Route path={'/HealthData'} element={<HealthData/>}/>
                        <Route path={'/inquiry'} element={<Inquiry/>}/>
                        <Route path='*' element={<ErrorPage/>}/>
                    </Routes>
                </div>

            </div>
        </Router>
    );
}

export default App;
