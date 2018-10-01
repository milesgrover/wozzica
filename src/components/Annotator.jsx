import React, { Component, Fragment } from 'react';
import AnnotateModal from './AnnotateModal';
import AnnotateDot from './AnnotateDot';
import AnnotateLabel from './AnnotateLabel';
import '../styles/Annotator.css';

const imgSrc = 'http://www.munchamuncha.com/munchamuncha.jpg'; // obvz for testing only

class Annotator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSize: {w: 0, h: 0},
            numDots: 0,
            currentDotCoords: {x:0, y: 0},
            numLabels: 0,
            currentLabel: '',
            currentLabelCoords: {x:0, y:0},
            placingLabel: false,
            showingModal: false
        }
    }

    onImgLoad = () => {
        this.setState({
            imgSize: { w: this.thingImage.offsetWidth,
                       h: this.thingImage.offsetHeight }
        });
    }

    handleImgClick = (e) => {
        let newX = e.nativeEvent.offsetX;
        let newY = e.nativeEvent.offsetY;

        if (!this.state.showingModal && !this.state.placingLabel) {
            this.setState({
                showingModal: true,
                currentDotCoords: {x: newX, y: newY},
                numDots: this.state.numDots + 1
            })
        }
    }

    handleMouseMove = (e) => {

    }

    modalOnClose = () => {
        this.setState({
            showingModal: false,
            numDots: this.state.numDots - 1
        })
    }

    addLabel = (text) => {
        this.setState({
            currentLabel: text,
            showingModal: false,
            placingLabel: true,
            currentLabelCoords: this.state.currentDotCoords,
            numLabels: this.state.numLabels + 1
        });
    }

    onUpdateLabel = (text) => {
        this.setState({
            currentLabel: text
        });
    }

    positionModal = () => {
        // setting these as hardcoded numbers to avoid dynamically pulling the size
        // this should rarely change and getting size from the DOM is needless
        let modalWidth = 320;
        let modalHeight = 100;
        let edgeGutter = 4;
        let tailHeight = 20;

        let alterTail = [];

        let modalX = this.state.currentDotCoords.x - modalWidth / 2;
        let modalY = this.state.currentDotCoords.y - tailHeight - modalHeight;
        if (this.state.currentDotCoords.x < modalWidth / 2) {
            modalX = edgeGutter;
            alterTail.push('left');
        } else if (this.state.imgSize && this.state.currentDotCoords.x > this.state.imgSize.w - modalWidth / 2) {
            modalX = this.state.imgSize.w - edgeGutter - modalWidth;
            alterTail.push('right');
        }
        if (this.state.currentDotCoords.y < modalHeight + tailHeight + edgeGutter) {
            modalY = this.state.currentDotCoords.y + tailHeight;
            alterTail.push('top');
        }
        return {x: modalX, y: modalY, tail: alterTail, tailCoords: this.state.currentDotCoords};
    }

    render() {
        // add dots
        const dots = [];
        for (let i = 0; i < this.state.numDots; i++) {
            dots.push(<AnnotateDot key={i} coords={this.state.currentDotCoords} />)
        }

        // add labels
        const labels = [];
        for (let i = 0; i < this.state.numLabels; i++) {
            labels.push(<AnnotateLabel key={i} coords={this.state.currentLabelCoords} label={this.state.currentLabel} onUpdate={this.onUpdateLabel} />)
        }

        return (
            <div className="wozz-annotator" onMouseMove={this.handleMouseMove} onClick={this.handleImgClick}>
                <img src={imgSrc} alt="" onLoad={this.onImgLoad} ref={(el) => this.thingImage = el} />
                {this.state.showingModal &&
                    <AnnotateModal onClose={this.modalOnClose} onAddLabel={this.addLabel} position={this.positionModal()} />
                }
                <DotHolder>
                    {dots}
                </DotHolder>
                <LabelHolder>
                    {labels}
                </LabelHolder>
            </div>
        )
    }
}

const DotHolder = props => (
  <Fragment>
    {props.children}
  </Fragment>
);

const LabelHolder = props => (
  <Fragment>
    {props.children}
  </Fragment>
);

export default Annotator;
