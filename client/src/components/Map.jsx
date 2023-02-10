import {IoCarOutline, IoCarSportOutline, IoLocate, IoNavigateOutline } from "react-icons/io5";

const Map = () => {
    return (
        <div className="frame_map">
            <div className="container">
                <h1>Oops...</h1>
                <p>Currently working on this feature, available soon!</p>
            
            {/* <!-- Google map will be embed here for live tracking nearby clinics and proximity --> */}
            {/* <!-- This is for switching between normal/travel map --> */}
            <div className="switch"><span className="icon"><IoNavigateOutline/></span></div> 

            {/* <!-- Javascript will handle how the call will reach the ambulance station --> */}
            <div className="ambulance"><span className="icon"><IoCarSportOutline/></span><span className="text">Ambulance</span></div>
            
            </div>
        </div>
    )
}

export default Map;