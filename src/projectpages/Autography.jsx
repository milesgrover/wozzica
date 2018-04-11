import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemTemplate from '../components/ItemTemplate';
import PrototypeViewer from '../components/PrototypeViewer';
import PrototypeAutography from '../prototypes/PrototypeAutography';

import imgLoading from '../images/screenshots/autography/loading.png';
import imgSigning from '../images/screenshots/autography/signing.png';
import imgCollecting from '../images/screenshots/autography/collecting.png';

class Autography extends Component {
    render() {
        return (
            <ItemTemplate cat={this.props.cat} itemName="Autography app">
                <PrototypeViewer needsOrientation={true} label="Launch live prototype" featured={true}>
                    <PrototypeAutography />
                </PrototypeViewer>
                <p>Autography is an app concept I've been working on. It's a digital autograph book, where you can collect and store celebrity autographs.</p>
                <p>I began designing in Illustrator and XD, but I quickly found these tools limiting for what I was trying to accomplish.</p>
                <div className="diagram flow">
                    <div>
                        <img src={imgLoading} alt="Autography loading" />
                    </div>
                    <div>
                        <img src={imgSigning} alt="Autography signing" />
                    </div>
                    <div>
                        <img src={imgCollecting} alt="Autography collecting" />
                    </div>
                    <p>Screens exported from Adobe XD</p>
                </div>
                <p>Rather than suffer with limited tools, I decided to build a code prototype so I could see some of my ideas in action. Click the "launch live prototype" button (at the top of the page) to see it in action.</p>
                <p>For more information on the code behind this prototype, see <Link to="/code/autography">Autography prototype code</Link></p>
            </ItemTemplate>
        );
    }
}

export default Autography;
