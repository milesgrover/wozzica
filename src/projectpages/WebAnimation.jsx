import React, { Component } from 'react';
import ItemTemplate from '../components/ItemTemplate';


class WebAnimation extends Component {
    render() {
        return (
            <ItemTemplate cat={this.props.cat} itemName="Web animation">

            </ItemTemplate>
        );
    }
}

export default WebAnimation;
