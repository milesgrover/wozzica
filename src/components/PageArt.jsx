import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import '../styles/PageTemplate.css';

class PageArt extends Component {
    render() {
        const testDivStyle = {
            height: '1000px'
        }
        return (
            <PageTemplate cat='art' show={this.props.show}>
                <div style={testDivStyle}>
                    howdy pardner
                </div>
            </PageTemplate>
        );
    }
}

export default PageArt;
