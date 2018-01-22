import React, { Component } from 'react';
import Navigation from './Navigation';
import '../styles/PageTemplate.css';

class PageTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: this.props.show
        };
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            show: nextProps.show
        });
    }

    generateContainerClasses = () => {
        let classConcat = `mg-container ${this.props.cat}${this.state.show === true ? ' show' : ' hide'}`;
        return classConcat;
    }

    render() {
        return (
            <div className={this.generateContainerClasses()}>
                <div>
                    <Navigation cat={this.props.cat} />
                    <p>{this.props.blurb}</p>
                    <div className="mg-project-collection">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default PageTemplate;
