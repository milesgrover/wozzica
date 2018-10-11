import React, { Component } from 'react';
import Annotator from '../components/Annotator';
import '../styles/ThingPage.css';

const imgSrc = 'http://www.munchamuncha.com/munchamuncha.jpg'; // obvz for testing only

class ThingPage extends Component {
    render() {
        return (
            <div className="wozz-page-content">
                <div className="wozz-thing-illustration">
                    <Annotator readonly
                               uid={this.props.thingId}
                               image={imgSrc}
                               data={[
                                   {dx: 566, dy: 191, uid: "pcgen4l3ns1539231962385", lx: 608, ly: 104, lh: 37, lw: 63, ltext: "horn"},
                                   {dx: 710, dy: 229, uid: "nhmq6owcypp1539231972176", lx: 769, ly: 147,  lh: 37, lw: 112, ltext: "other horn"},
                                   {dx: 200, dy: 79, uid: "jyle6dj9jik1539231981019", lx: 219, ly: 9,  lh: 37, lw: 104, ltext: "butt whip"},
                                   {dx: 168, dy: 303, uid: "jfp2zks1yna1539231992957", lx: 112, ly: 319,  lh: 37, lw: 100, ltext: "good leg"},
                                   {dx: 271, dy: 292, uid: "u6ebodskqn1539232001176", lx: 391, ly: 317,  lh: 37, lw: 85, ltext: "evil leg"},
                                   {dx: 376, dy: 124, uid: "o14jehe2x31539232028027", lx: 432, ly: 56,  lh: 37, lw: 100, ltext: "side area"},
                                   {dx: 545, dy: 76, uid: "e0a9x1tp26a1539232036974", lx: 709, ly: 17,  lh: 37, lw: 91, ltext: "hairy bit"}
                               ]}
                               />
                </div>
            </div>
        )
    }
}

export default ThingPage;
