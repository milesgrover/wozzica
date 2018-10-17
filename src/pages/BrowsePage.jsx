import React, { Component, Fragment } from 'react';
import TitleBar from '../components/TitleBar';
// import '../styles/AddPage.css';

class BrowsePage extends Component {
    render() {
        return (
            <Fragment>
                <TitleBar title={this.props.title} />
            </Fragment>
        )
    }
}

export default BrowsePage;
