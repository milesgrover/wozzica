import React from "react";
import Spinner from "../images/spinner.gif";

class LoadIcon extends React.Component {
    render() {
        return (
            <img src={Spinner} alt="loading" />
        );
    }
}

export default LoadIcon;