import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import '../styles/PageTemplate.css';

class PageAbout extends Component {
    render() {
        const testDivStyle = {
            height: '500px'
        }
        return (
            <PageTemplate cat='about' show={this.props.show}>
                <div style={testDivStyle}>
                    greetings human
                </div>
            </PageTemplate>
        );
    }
}

export default PageAbout;
