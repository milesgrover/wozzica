import React, { Component } from 'react';
import '../styles/PrototypeViewer.css';


class PrototypeViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            landscape: false
        }
    }

    orientationSwap = () => {
        this.setState({
            landscape: !this.state.landscape
        });
    }

    showPrototype = () => {
        this.setState({
            expanded: true
        });
    }

    hidePrototype = () => {
        this.setState({
            expanded: false
        });
    }

    renderOrientationSwapper = () => {
        if (this.props.needsOrientation) {
            return (
                <button className="orientation" onClick={this.orientationSwap}></button>
            )
        }
    }

    render() {
        let containerClasses = `mg-prototype-viewer${this.state.expanded ? ' is-expanded' : ''}${this.props.featured ? ' is-featured' : ''}${this.state.landscape ? ' is-landscape' : ''}`;

        if (!this.state.expanded) {
            return (
                <div className={containerClasses}>
                    <a onClick={this.showPrototype}>{this.props.label}</a>
                </div>
            );
        } else {
            return (
                <div className={containerClasses}>
                    <div>
                        <div className="mg-prototype-controls">
                            {this.renderOrientationSwapper()}
                            <button className="close" onClick={this.hidePrototype}></button>
                        </div>
                        {React.cloneElement(this.props.children, { landscape: this.state.landscape })}
                    </div>
                </div>
            );
        }
    }
}

export default PrototypeViewer;
