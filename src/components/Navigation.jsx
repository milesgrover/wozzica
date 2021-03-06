import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const menuItems = [
    {
        name: "Home",
        link: "/",
        page: "home",
    },
    {
        name: "Add a new thing",
        link: "/add",
        page: "add",
    },
    {
        name: "Browse",
        link: "/browse",
        page: "browse",
    },
]

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        }
    }

    findActivePage = () => {
        return menuItems.findIndex(item => item.page === this.props.page);
    }

    setToActive = (cat) => {
        if (this.props.page && this.props.page === cat) {
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
        return (
            <nav className="wozz-navigation">
                {this.props.vpSize < 3 &&
                    <button className="wozz-menu-btn" onClick={this.toggleMenu}>{menuItems[this.findActivePage()].name}</button>
                }
                <ul className={this.setNavClass()} style={this.props.vpSize < 3 && this.state.showMenu  ? {height: (menuItems.length - 1) * 44} : null}>
                    {menuItems.map((item, index) => {
                        const activeIndex = this.findActivePage(item.page);
                        if (this.props.vpSize < 3) {
                            return activeIndex !== index ? (
                                <li
                                    key={index}
                                >
                                    <Link to={item.link}>
                                        {item.name}
                                    </Link>
                                </li>
                            ) : null;
                        } else {
                            return (
                                <li
                                    key={index}
                                    className={ activeIndex === index ? "active" : null}
                                >
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            );
                        }
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navigation;
