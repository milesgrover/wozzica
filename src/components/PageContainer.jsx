import React from 'react';

import './PageContainer.scss';

class PageContainer extends React.Component {
    render() {
        let className = "wozz-page-container";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return (
            <div className={className}>
                <div className="wozz-page-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default PageContainer;