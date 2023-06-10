import React, {useEffect, useState} from "react";
import NavbarInstructor from "./Components/NavBar/NavbarInstructor";
function InstructorProfile() {
    const [items, setItem] = useState("NA")

    useEffect(() => {
        const getItem = async () => {
            const res = await fetch("/users");
            const getData = await res.json();
            const userData = Array.from(getData);
            setItem(getData);
            console.log(userData);
        }
        getItem();
    }, []);
    return(
    <div>
        <NavbarInstructor/>
        <h1>
            Mentor Profile
        </h1>
        <table>
            <tbody>
            <tr>
                <t>
                    <tr>

                        {
                            items.map((getItem) => (
                                    <td key={getItem}>Email: </td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>Full Name: </td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>Id: </td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>User Add: </td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>Batch ID: </td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>Birthday: </td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>City: </td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>Emergency Mobile: </td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>Mobile: </td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>Username: </td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>PinCode: </td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>Role: </td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>website: </td>
                                )
                            )
                        }
                    </tr>
                </t>
                <td>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>{getItem.email}</td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>{getItem.fullname}</td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>{getItem.id}</td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>{getItem.userAdd}</td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>{getItem.userBatchID}</td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>{getItem.userBirthday}</td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>{getItem.userCity}</td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>{getItem.userEmergencyMobile}</td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>{getItem.userMobile}</td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>{getItem.username}</td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>{getItem.userPinCode}</td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>{getItem.userRole}</td>
                                )
                            )
                        }
                    </tr>
                    <tr>
                        {
                            items.map((getItem) => (
                                    <td key={getItem}>{getItem.website}</td>
                                )
                            )
                        }
                    </tr>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    )
}
export default InstructorProfile;
