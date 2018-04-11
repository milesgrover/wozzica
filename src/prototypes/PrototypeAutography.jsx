import React, { Component } from 'react';
import '../styles/PrototypeAutography.css';

import SVGLogo from '../images/prototypes/autography/Logo';

import SignatureAB from '../images/prototypes/autography/autog-alec-baldwin.svg';
import SignatureCE from '../images/prototypes/autography/autog-chiwetel-ejiofor.svg';
import SignatureMS from '../images/prototypes/autography/autog-marina-sirtis.svg';
import SignatureSY from '../images/prototypes/autography/autog-steven-yeun.svg';

import PhotoAB from '../images/prototypes/autography/photo-alec-baldwin.jpg';
import PhotoCE from '../images/prototypes/autography/photo-chiwetel-ejiofor.jpg';
import PhotoMS from '../images/prototypes/autography/photo-marina-sirtis.jpg';
import PhotoSY from '../images/prototypes/autography/photo-steven-yeun.jpg';

let canvas, ctx, canvasWidth, canvasHeight, flag = false,
prevX = 0,
currX = 0,
prevY = 0,
currY = 0,
dot_flag = false;

let strokeColor = "black",
strokeWidth = 6;

const signatories = [
    {
        name: "Alec Baldwin",
        date: "1/09/18",
        signature: SignatureAB,
        photo: PhotoAB
    },
    {
        name: "Chiwetel Ejiofor",
        date: "8/23/17",
        signature: SignatureCE,
        photo: PhotoCE
    },
    {
        name: "Marina Sirtis",
        date: "4/16/17",
        signature: SignatureMS,
        photo: PhotoMS
    },
    {
        name: "Steven Yeun",
        date: "5/10/16",
        signature: SignatureSY,
        photo: PhotoSY
    },
]

class Canvas extends Component {
    findXY = (res, e) => {
        if (res === 'down') {
            prevX = currX;
            prevY = currY;
            currX = e.offsetX;
            currY = e.offsetY;

            flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.fillStyle = strokeColor;
                ctx.fillRect(currX, currY, 2, 2);
                ctx.closePath();
                dot_flag = false;
            }
        }
        if (res === 'up' || res === "out") {
            flag = false;
        }
        if (res === 'move') {
            if (flag) {
                prevX = currX;
                prevY = currY;
                currX = e.offsetX;
                currY = e.offsetY;
                this.canvasDraw();
            }
        }
    }

    canvasDraw = () => {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.lineCap="round";
        ctx.lineJoin="round";
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth;
        ctx.stroke();
        ctx.closePath();
    }

    initializeCanvas = () => {
        canvas = document.getElementById('inker');
        let that = this;

        ctx = canvas.getContext("2d");

        canvas.addEventListener("mousemove", function (e) {
            that.findXY('move', e)
        }, false);
        canvas.addEventListener("mousedown", function (e) {
            that.findXY('down', e)
        }, false);
        canvas.addEventListener("mouseup", function (e) {
            that.findXY('up', e)
        }, false);
        canvas.addEventListener("mouseout", function (e) {
            that.findXY('out', e)
        }, false);
    }

    componentDidMount = () => {
        this.initializeCanvas();
    }

    render() {
        canvasWidth = this.props.landscape ? 667 : 375;
        canvasHeight = this.props.landscape ? 240 : 524;

        return (
            <canvas id="inker" width={canvasWidth} height={canvasHeight}></canvas>
        )
    }
}

class PrototypeAutography extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orient: 'portrait',
            signing: true,
            helper: false,
            settings: {
                show: false,
                transition: true
            }
        }
    }

    erase = () => {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        this.showHelper();
    }

    save = () => {
        window.alert(`save doesn't work in this prototype`);
    }

    switchPages = () => {
        this.setState({
            signing: !this.state.signing
        });
    }

    showHelper = () => {
        let p = this;
        setTimeout(function(){
            if (p.state.signing && !p.state.helper) {
                p.setState({
                    helper: true
                })
            }
        }, 5000);
    }

    componentDidMount = () => {
        this.showHelper();
    }

    clearHelper = () => {
        this.setState({
            helper: false
        })
    }

    toggleSettings = () => {
        let p = this;
        if (!this.state.settings.show && this.state.settings.transition) {
            this.setState({
                settings: {
                    show: true,
                    transition: true
                }
            });
            setTimeout(function(){
                p.setState({
                    settings: {
                        show: true,
                        transition: false
                    }
                })
            }, 50);
        } else if (this.state.settings.show && !this.state.settings.transition) {
            this.setState({
                settings: {
                    show: true,
                    transition: true
                }
            });
            setTimeout(function(){
                p.setState({
                    settings: {
                        show: false,
                        transition: true
                    }
                })
            }, 250);
        }
    }

    render() {
        const sigList = signatories.map((item, i) =>
            <li key={i}>
                <img src={item.photo} alt={item.name} />
                <div className="sig-img"><img src={item.signature} alt={item.name  + ` signature`} /></div>
                <div className="sig-metadata">
                    <div className="sig-name">{item.name}</div><div className="sig-date">{item.date}</div>
                </div>
            </li>
        );
        const settingsTransition = this.state.settings.transition ? 'ag-settings-page is-transitioning' : 'ag-settings-page';

        return (
            <div className="mg-prototype-autography">
                <div className={this.state.signing ? 'ag-canvas current' : 'ag-canvas'}>
                    <div className="drag-bar" onClick={this.switchPages}></div>
                    <div className="logo"><SVGLogo /></div>
                    <button className="settings" onClick={this.toggleSettings}></button>
                    <div onMouseDown={this.clearHelper} className={this.state.helper ? 'ag-canvas-handler show-helper' : 'ag-canvas-handler'}>
                        <Canvas landscape={this.props.landscape} />
                    </div>
                    <div className="canvas-actions">
                        <button onClick={this.save}>save</button>
                        <button onClick={this.erase}>clear</button>
                    </div>
                </div>
                <div className={this.state.signing ? 'ag-book' : 'ag-book current'}>
                    <div className="drag-bar" onClick={this.switchPages}></div>
                    <div className="logo"><SVGLogo /></div>
                    <button className="settings" onClick={this.toggleSettings}></button>
                    <h1>My captures</h1>
                    <ul>
                        {sigList}
                    </ul>
                </div>
                { this.state.settings.show ?
                    <div className={settingsTransition}>
                        <div className="logo"><SVGLogo /></div>
                        <button onClick={this.toggleSettings} className="close"></button>
                        <h1>Settings</h1>
                        <p>Settings aren't available yet in this prototype.</p>
                    </div>
                : null }
            </div>
        );
    }
}

export default PrototypeAutography;
