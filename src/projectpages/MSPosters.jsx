import React, { Component } from 'react';
import ItemTemplate from '../components/ItemTemplate';


class MSPosters extends Component {
    render() {
        return (
            <ItemTemplate cat={this.props.cat} itemName="Posters for Microsoft internal events">

            </ItemTemplate>
        );
    }
}

export default MSPosters;
