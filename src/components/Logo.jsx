import React, { Component } from 'react';
import LogoSvg from '../images/logo.svg'
import '../styles/Logo.css';

class Logo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wozz-logo">
                <img src={LogoSvg} alt="Wozzica: the visual dictionary" />
            </div>
        )
    }
}

export default Logo;
