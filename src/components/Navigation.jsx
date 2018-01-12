import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';


class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        }
    }
    handleClick = () => {
        this.navExpander();
    }

    navExpander = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    generateClasses = () => {
        let classConcat = `mg-navigation${this.state.expanded ? ' is-expanded' : ''}`;
        return classConcat;
    }

    render() {
        let currentDesign = { className: this.props.cat === 'design' ? 'current' : '' };
        let currentArt = { className: this.props.cat === 'art' ? 'current' : '' };
        let currentCode = { className: this.props.cat === 'code' ? 'current' : '' };
        let currentAbout = { className: this.props.cat === 'about' ? 'current' : '' };
        return (
            <nav className={this.generateClasses()}>
                <div>
                    <Link to="/design" {...currentDesign}>DESIGN</Link>
                    <Link to="/art" {...currentArt}>ART</Link>
                    <Link to="/code" {...currentCode}>CODE</Link>
                    <Link to="/about" {...currentAbout}>ABOUT</Link>
                </div>
                <h1>MILES GROVER <button onClick={this.handleClick}></button></h1>
            </nav>
        );
    }
}

export default Navigation;
