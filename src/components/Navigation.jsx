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

    setNavClass = () => {
        let navClass = 'nav-list';
        if (this.props.vpSize < 3 && this.state.showMenu) {
            navClass = 'nav-menu show';
        } else if (this.props.vpSize < 3 && !this.state.showMenu) {
            navClass = 'nav-menu';
        }
        return navClass;
    }

    render() {
        const menuItemsCount = 3;
        return (
            <nav className="wozz-navigation">
                {this.props.vpSize < 3 &&
                    <button className="wozz-menu-btn" onClick={this.toggleMenu}>Menu</button>
                }
                <ul className={this.setNavClass()} style={this.props.vpSize < 3 && this.state.showMenu  ? {height: menuItemsCount * 44} : null}>
                    <li className={this.setToActive('home')}><Link to="/">Home</Link></li>
                    <li className={this.setToActive('add')}><Link to="/add">Add a new thing</Link></li>
                    <li className={this.setToActive('browse')}><Link to="/browse">Browse</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;
