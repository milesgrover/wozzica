import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SiteSearch from './SiteSearch';
import '../styles/SiteBar.css';

class SiteBar extends Component {
    render() {
        return (
            <section className="wozz-site-bar">
                <div>
                <Logo />
                <Navigation category={this.props.category} vpSize={this.props.vpSize} />
                <SiteSearch vpSize={this.props.vpSize} />
                </div>
            </section>
        )
    }
}

export default SiteBar;
