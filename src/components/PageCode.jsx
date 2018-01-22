import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import '../styles/PageTemplate.css';

class PageCode extends Component {
    render() {
        const testDivStyle = {
            height: '2000px'
        }
        return (
            <PageTemplate cat='code' show={this.props.show}>
                <div style={testDivStyle}>
                    sup dogg
                </div>
            </PageTemplate>
        );
    }
}

export default PageCode;
