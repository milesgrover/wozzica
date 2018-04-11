import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles/ItemTemplate.css';

class ItemTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animating: '',
            redirect: false
        };
    }

    generateContainerClasses = () => {
        let classConcat = `mg-item-container ${this.props.cat}${this.state.animating ? ' ' + this.state.animating : ''}`;
        return classConcat;
    }

    componentWillMount = () => {
        this.setState({
            animating: 'in'
        });
    }

    componentDidMount = () => {
        let that = this;

        setTimeout(function(){
            that.setState({
                animating: ''
            });
        }, 150);
    }

    componentWillUnmount = () => {
        this.setState({
            animating: 'out'
        });
    }

    // wait for animation to play before navigating back
    handleBackClick = (e) => {
        e.preventDefault();
        // setTimeout loses "this" context
        let that = this;

        this.setState({
            animating: 'out'
        });

        setTimeout(function(){
            that.setState({
                redirect: true
            });
        }, 150);
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect push to={'../' + this.props.cat} />
            );
        }
        return (
            <div className={this.generateContainerClasses()}>
                <div>
                    <Link to={'../' + this.props.cat} className="mg-back-to-page" onClick={this.handleBackClick}>Back to <span>{this.props.cat}</span></Link>
                    <h1>{this.props.itemName}</h1>
                    <div className="mg-item-content">
                        {this.props.children}
                    </div>
                    <Link to={'../' + this.props.cat} className="mg-back-to-page" onClick={this.handleBackClick}>Back to <span>{this.props.cat}</span></Link>
                </div>
            </div>
        );
    }
}

export default ItemTemplate;
