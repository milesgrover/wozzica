import React, { Component } from 'react';
import ItemTemplate from '../components/ItemTemplate';


class WindowsPhone extends Component {
    render() {
        return (
            <ItemTemplate cat={this.props.cat} itemName="Windows Phone UI">

            </ItemTemplate>
        );
    }
}

export default WindowsPhone;
