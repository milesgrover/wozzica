import React, { Component } from 'react';
import ItemTemplate from '../components/ItemTemplate';

import BatterySaver1 from '../images/screenshots/batterysaver/bat-opt-1.png';
import BatterySaver2 from '../images/screenshots/batterysaver/bat-opt-2.png';
import BatterySaver3 from '../images/screenshots/batterysaver/bat-opt-3.png';
import BatterySaver4 from '../images/screenshots/batterysaver/bat-opt-4.png';
import BatterySaver5 from '../images/screenshots/batterysaver/bat-opt-5.png';

class BatterySaver extends Component {
    render() {
        const overrideWidth = {
            maxWidth: '358px'
        };
        return (
            <ItemTemplate cat={this.props.cat} itemName="Windows Phone Battery Saver">
            <p>When I worked on the Windows Phone team, I had an opportunity to work on the UX of the Battery Saver settings page.</p>

            <p>The Battery Saver app allowed the user to see which apps were using the most battery, and to choose which apps were allowed to run in the background.</p>

            <p>The snag was that due to a technical limitation, we couldn't show the battery usage as a precise percentage. Instead, I had to find another way to show the user which apps might be using too much battery.</p>

            <h3>Exploration</h3>
            <p>I explored several solutions before getting feedback from peer designers and the project manager for the feature.</p>
            <div className="diagram flow">
                <div>
                    <img src={BatterySaver1} alt="Battery Saver potential solution" />
                    <p style={overrideWidth}>Showing usage via ordering and text using the system accent color to draw the eye</p>
                </div>
                <div>
                    <img src={BatterySaver2} alt="Battery Saver potential solution" />
                    <p style={overrideWidth}>Using stop light colors to make the different statuses stand out</p>
                </div>
                <div>
                    <img src={BatterySaver3} alt="Battery Saver potential solution" />
                    <p style={overrideWidth}>More colorful language could help the user understand better</p>
                </div>
                <div>
                    <img src={BatterySaver4} alt="Battery Saver potential solution" />
                    <p style={overrideWidth}>The ordering by consumption is made explicit here, and categories separate the list items and impose a hierarchy</p>
                </div>
                <div>
                    <img src={BatterySaver5} alt="Battery Saver potential solution" />
                    <p style={overrideWidth}>Pseudo-meters illustrate relative usage</p>
                </div>
            </div>

            <h3>Solution</h3>
            <p>A few issues came up as I honed in on the final design. One was that using stop light colors was not consistent with any other controls or patterns in the product, and further such a system is bad for colorblind users. I felt the option with pseudo-meters was closest to the ideal design, but that also meant that users might be misled into thinking the bars represented actual precentages. In the end, we decided to build the option with headers categorizing usage, because it best matched other system patterns and was the least costly to implement.</p>
            </ItemTemplate>
        );
    }
}

export default BatterySaver;
