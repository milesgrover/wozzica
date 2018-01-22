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
                <h1>miles Grover <button onClick={this.handleClick}></button></h1>
                <ul>
                    <li className="design-link"><Link to="/design" {...currentDesign} title="design">design</Link></li>
                    <li className="code-link"><Link to="/code" {...currentCode} title="code">code</Link></li>
                    <li className="art-link"><Link to="/art" {...currentArt} title="art">art</Link></li>
                </ul>
                <div className="about-link"><Link to="/about" {...currentAbout}>about<span>:</span> me</Link></div>
            </nav>
        );
    }
}

export default Navigation;
