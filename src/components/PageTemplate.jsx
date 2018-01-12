import React, { Component } from 'react';
import Navigation from './Navigation';
import CatContent from './CatContent';
import '../styles/PageTemplate.css';

class PageTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: this.props.route.match.params.cat ? this.props.route.match.params.cat : 'design'
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            page: nextProps.route.match.params.cat
        });
    }

    generateContainerClasses() {
        let classConcat = `mg-container${this.state.page ? ' ' + this.state.page : ''}`;
        return classConcat;
    }

    render() {
        const testDivStyle = {
            height: '1000px'
        }
        return (
            <div className={this.generateContainerClasses()}>
                <Navigation cat={this.state.page} />
                <CatContent cat={this.state.page}/>
                <div style={testDivStyle}>
                    hello
                </div>
            </div>
        );
    }
}

export default PageTemplate;
