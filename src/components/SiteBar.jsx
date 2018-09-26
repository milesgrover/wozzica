import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SiteSearch from './SiteSearch';
import '../styles/SiteBar.css';

class SiteBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="wozz-site-bar">
                <div>
                <Logo />
                <Navigation category={this.props.category} />
                <SiteSearch />
                </div>
            </section>
        )
    }
}

export default SiteBar;
