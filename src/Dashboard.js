import React, {useEffect, useState} from "react";
import NavbarLoggedIN from "./Components/NavBar/NavBarLoggedIN";

const Home = () => {
    const [items, setItem] = useState(["NA"])


    useEffect(() => {
        const getHealthItem = async () => {
            const ress = await fetch("/healthDetails");
            const getDataa = await ress.json();
            const userDataa = Array.from(getDataa);
            setItem(getDataa);
            console.log(userDataa);
        }
        getHealthItem();
    }, []);

    return (
        <div className='Home'>
            <NavbarLoggedIN/>
            {
                items.map((getHealthItems) => (
                        <h1>Batch ID: {getHealthItems.batchid}</h1>
                    )
                )
            }
            {
                items.map((getHealthItems) => (
                        <h1>USERNAME: {getHealthItems.username}</h1>
                    )
                )
            }
            {
                items.map((getHealthItems) => (
                        <h1>Remarks: {getHealthItems.remarks}</h1>
                    )
                )
            }
            {
                items.map((getHealthItems) => (
                        <h1>Weight: {getHealthItems.weight}</h1>
                    )
                )
            }
            {
                items.map((getHealthItems) => (
                        <h1>Height: {getHealthItems.height}</h1>
                    )
                )
            }

        </div>

    );

}

export default Home;
