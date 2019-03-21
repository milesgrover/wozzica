import React, { Component } from 'react';

class PageTemplate extends Component {
    render() {
        if (!Array.isArray(this.props.children)) {
            return (
                <div className="wozz-page-content">
                    <div className="wozz-page-singlet">
                        {this.props.children}
                    </div>
                </div>
            )
        }
        if (this.props.children.length === 2) {
            return (
                <div className="wozz-page-content">
                    <div className="wozz-page-main">
                        {this.props.children[0]}
                    </div>
                    <div className="wozz-page-aside">
                        {this.props.children[1]}
                    </div>
                </div>
            )
        }
        if (this.props.children.length === 3) {
            return (
                <div className="wozz-page-content">
                    <div className="wozz-page-triplet">
                        {this.props.children[0]}
                    </div>
                    <div className="wozz-page-triplet">
                        {this.props.children[1]}
                    </div>
                    <div className="wozz-page-triplet">
                        {this.props.children[2]}
                    </div>
                </div>
            )
        }
    }
}

export default PageTemplate;
