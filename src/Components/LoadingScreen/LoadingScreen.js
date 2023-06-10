import React from "react";
import lottie from "./lottie.json";
import Lottie from "react-lottie-player";

function LoadingScreen() {
    function postAnimation() {
        return(
            window.location.replace("/Home")
        )
    }
    return (
        <div className="navbar1">
            <Lottie className={"lottie-player"}
                loop={false}
                animationData={lottie}
                play
                    onComplete={postAnimation}
            />



        </div>
    )
}
export default LoadingScreen;
