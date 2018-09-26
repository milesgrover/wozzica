import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        }
    }

    setToActive = (cat) => {
        if (this.props.category && this.props.category === cat) {
            return 'active';
        }
        return null;
    }

    toggleMenu = (e) => {
        e.stopPropagation();
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    menuOff = () => {
        this.setState({
            showMenu: false
        })
    }

    componentDidMount = () => {
        window.addEventListener('click', this.menuOff);
    }

    componentWillUnmount = () => {
        window.removeEventListener('click', this.menuOff);
    }

    render() {
        return (
            <nav className="wozz-navigation">
                <button className="wozz-menu-btn" onClick={this.toggleMenu}>Menu</button>
                <ul className={this.state.showMenu ? null : 'hide'}>
                    <li className={this.setToActive('home')}><Link to="/">Home</Link></li>
                    <li className={this.setToActive('add')}><Link to="/add">Add a new thing</Link></li>
                    <li className={this.setToActive('browse')}><Link to="/browse">Browse</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;
