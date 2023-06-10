import React from "react";
import{useEffect} from "react";
function IncorrectPassword() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            // 👇️ redirects to an external URL
            window.history.back();
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);
    return(
        <div className={'container'}>
            <div className={'container signin'}>
                <div className={'container'}>
                    <p>Wrong Password and/or Username</p>

                </div>
            </div>
        </div>
    )
}
export default IncorrectPassword;
