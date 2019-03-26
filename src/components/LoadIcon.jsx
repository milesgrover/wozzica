import React from "react";
import icon from "../images/temp-load-icon.png";

class LoadIcon extends React.Component {
    render() {
        return <img src={icon} className="wozz-load-icon" alt="loading" />
    }
}

export default LoadIcon;