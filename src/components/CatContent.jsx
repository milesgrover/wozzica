import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Navigation.css';


class CatContent extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        switch (this.props.cat) {
            case 'design':
                return (
                    <div>THIS IS DESIGN</div>
                );
                break;
            case 'art':
                return (
                    <div>THIS IS ART</div>
                );
                break;
            case 'code':
                return (
                    <div>THIS IS CODE</div>
                );
                break;
            case 'about':
                return (
                    <div>THIS IS ABOUT</div>
                );
                break;
            default:
                return '';
        }

    }
}

export default CatContent;
