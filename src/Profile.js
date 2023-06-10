import React, {useEffect, useState} from "react";
import NavbarLoggedIN from "./Components/NavBar/NavBarLoggedIN";

function Profile() {
    const [items, setItem] = useState(["NA"])
    useEffect(() => {
        const getItem = async () => {
            const res = await fetch("/userDetails");
            const getData = await res.json();
            const userData = Array.from(getData);
            setItem(getData);
            console.log(userData);
        }
        getItem();
    }, []);

    return (
        <div>

            <NavbarLoggedIN/>
            <table>
                <tbody>
                <tr>
                    <t>
                        <tr>

                            {
                                items.map((getItem) => (
                                        <td key={getItem}>Email: {getItem.email}</td>
                                    )
                                )
                            }
                        </tr>
                        <tr>
                            {
                                items.map((getItem) => (
                                        <td key={getItem}>Full Name: {getItem.fullname}</td>
                                    )
                                )
                            }
                        </tr>
                        <tr>
                            {
                                items.map((getItem) => (
                                        <td key={getItem}>Id: {getItem.id}</td>
                                    )
                                )
                            }
                        </tr>
                        <tr>
                            {
                                items.map((getItem) => (
                                        <td key={getItem}>User Add: {getItem.userAdd}</td>
                                    )
                                )
                            }
                        </tr>
                        <tr>
                            {
                                items.map((getItem) => (
                                        <td key={getItem}>Batch ID: {getItem.userBatchID}</td>
                                    )
                                )
                            }
                        </tr>
                        <tr>
                            {
                                items.map((getItem) => (
                                        <td key={getItem}>Birthday: {getItem.userBirthday}</td>
                                    )
                                )
                            }
                        </tr>
                        <tr>
                            {
                                items.map((getItem) => (
                                        <td key={getItem}>City: {getItem.userCity}</td>
                                    )
                                )
                            }
                        </tr>
                        <tr>
                            {
                                items.map((getItem) => (
                                        <td key={getItem}>Emergency Mobile: {getItem.userEmergencyMobile}</td>
                                    )
                                )
                            }
                        </tr>
                        <tr>
                            {
                                items.map((getItem) => (
                                        <td key={getItem}>Mobile: {getItem.userMobile}</td>
                                    )
                                )
                            }
                        </tr>
                        <tr>
                            {
                                items.map((getItem) => (
                                            <td key={getItem}>Username: {getItem.username}</td>
                                    )
                                )
                            }
                        </tr>
                        <tr>
                            {
                                items.map((getItem) => (
                                        <td key={getItem}>PinCode: {getItem.userPinCode}</td>
                                    )
                                )
                            }
                        </tr>
                        <tr>
                            {
                                items.map((getItem) => (
                                        <td key={getItem}>Role: {getItem.userRole}</td>
                                    )
                                )
                            }
                        </tr>
                        <tr>
                            {
                                items.map((getItem) => (
                                        <td key={getItem}>website: {getItem.website}</td>
                                    )
                                )
                            }
                        </tr>
                    </t>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Profile;
