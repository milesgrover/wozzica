import React, { Component, Fragment } from 'react';
import EditMode from '../components/EditMode';
import '../styles/AnnotatePage.scss';

const imgSrc = 'http://www.munchamuncha.com/munchamuncha.jpg'; // obvz for testing only

class AnnotatePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="wozz-content-area">
                    <EditMode image={imgSrc} />
                </div>
                <aside className="wozz-aside-area">
                    hello
                </aside>
            </Fragment>
        )
    }
}

export default AnnotatePage;
