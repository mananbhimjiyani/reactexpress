import {React} from "react";
import Navbar from "./Components/NavBar";
import {motion} from "framer-motion";


const Home = () => {

    return (
        <div className='Home'  style={{overflow:"hidden"}}>
            <Navbar/>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className={'navbar1'}>
                <h1>Welcome To The Studio Management APP</h1>
            </div>
            </motion.div>

        </div>
    );
}

export default Home;
