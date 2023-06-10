import {React} from "react";
import Navbar from "./Components/NavBar";


const Home = () => {

    return (
        <div className='Home'  style={{overflow:"hidden"}}>
            <Navbar/>
            <div className={'navbar1'}>
            <h1>Welcome To The Studio Management APP</h1>
            </div>

        </div>
    );
}

export default Home;
