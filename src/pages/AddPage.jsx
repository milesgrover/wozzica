import React, { Component, Fragment } from 'react';
import TitleBar from '../components/TitleBar';
import '../styles/AddPage.css';

class AddPage extends Component {
    render() {
        console.log(this.props.item)
        return (
            <Fragment>
                <TitleBar title={this.props.title} />
                <div className="wozz-page-content">
                    <div className="wozz-add-choose-img"></div>
                    <div className="wozz-add-name-thing"></div>
                    <div className="wozz-add-tag-thing"></div>
                </div>
            </Fragment>
        )
    }
}

export default AddPage;
