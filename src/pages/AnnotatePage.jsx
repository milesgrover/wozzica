import React, { Component, Fragment } from 'react';
import Annotator from '../components/Annotator';
// import '../styles/AddPage.css';

class AnnotatePage extends Component {
    render() {
        return (
            <Fragment>
                <Annotator />
                <Annotator />
            </Fragment>
        )
    }
}

export default AnnotatePage;
