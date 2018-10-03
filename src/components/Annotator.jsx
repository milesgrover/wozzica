import React, { Component, Fragment } from 'react';
import AnnotateModal from './AnnotateModal';
import AnnotateDot from './AnnotateDot';
import AnnotateLabel from './AnnotateLabel';
import AnnotateLine from './AnnotateLine';
import '../styles/Annotator.css';

const imgSrc = 'http://www.munchamuncha.com/munchamuncha.jpg'; // obvz for testing only

class Annotator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSize: {w: 0, h: 0},
            dotCoords: [],
            currentLabel: '',
            labels: [],
            labelCoords: [],
            labelDimensions: [],
            placingLabel: -1,
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

        if (!this.state.showingModal && this.state.placingLabel < 0) {
            this.setState({
                showingModal: true,
                dotCoords: [...this.state.dotCoords, {x: newX, y: newY}]
            })
        }
    }

    handleDotClick = (e) => {
        e.stopPropagation();
    }

    handleMouseMove = (e) => {
        if (this.state.placingLabel >= 0) {
            let dragX = e.clientX - this.thingImage.parentNode.offsetLeft;
            let dragY = e.clientY - this.thingImage.parentNode.offsetTop;

            let updateCurrentLabelCoords = this.state.labelCoords.slice(0);
            updateCurrentLabelCoords[this.state.placingLabel] = {x:dragX, y:dragY};

            this.setState({
                labelCoords: updateCurrentLabelCoords
            })
        }
    }

    modalOnClose = () => {
        let updateDotCoords = this.state.dotCoords.slice(0);
        updateDotCoords.splice(this.state.dotCoords.length - 1, 1);
        this.setState({
            showingModal: false,
            dotCoords: updateDotCoords
        })
    }

    addLabel = (text, index) => {
        this.setState({
            currentLabel: text,
            labels: [...this.state.labels, text],
            showingModal: false,
            labelCoords: [...this.state.labelCoords, this.state.dotCoords[index]]
        });
    }

    onUpdateLabel = (text, index, dimensions) => {
        if (text) {
            let updateCurrentLabel = this.state.labels.slice(0);
            updateCurrentLabel[index] = text;
            this.setState({
                currentLabel: text,
                labels: updateCurrentLabel
            });
        }

        let updateCurrentLabelDimensions = this.state.labelDimensions.slice(0);
        updateCurrentLabelDimensions[index] = dimensions;

        this.setState({
            labelDimensions: updateCurrentLabelDimensions
        });
    }

    onDragLabel = (index) => {
        this.setState({
            placingLabel: index
        });
    }

    positionModal = () => {
        let modalWidth = 320;
        let modalHeight = 100;
        let edgeGutter = 4;
        let tailHeight = 20;

        let currentDotCoords = this.state.dotCoords[this.state.dotCoords.length - 1]
        let alterTail = [];

        let modalX = currentDotCoords.x - modalWidth / 2;
        let modalY = currentDotCoords.y - tailHeight - modalHeight;
        if (currentDotCoords.x < modalWidth / 2) {
            modalX = edgeGutter;
            alterTail.push('left');
        } else if (this.state.imgSize && currentDotCoords.x > this.state.imgSize.w - modalWidth / 2) {
            modalX = this.state.imgSize.w - edgeGutter - modalWidth;
            alterTail.push('right');
        }
        if (currentDotCoords.y < modalHeight + tailHeight + edgeGutter) {
            modalY = currentDotCoords.y + tailHeight;
            alterTail.push('top');
        }
        return {x: modalX, y: modalY, tail: alterTail, tailCoords: currentDotCoords};
    }

    render() {
        // add dots
        const dots = [];
        for (let i = 0; i < this.state.dotCoords.length; i++) {
            dots.push(<AnnotateDot key={i}
                                   coords={this.state.dotCoords[i]}
                                   onClickDot={this.handleDotClick}
                                   />)
        }

        // add labels
        const labels = [];
        for (let i = 0; i < this.state.labelCoords.length; i++) {
            labels.push(<AnnotateLabel key={i}
                                       index={i}
                                       coords={this.state.labelCoords[i]}
                                       label={this.state.labels[i]}
                                       onUpdate={this.onUpdateLabel}
                                       onDragger={this.onDragLabel}
                                       />)
        }

        // add lines
        const lines = [];
        for (let i = 0; i < this.state.labelDimensions.length; i++) {
            lines.push(<AnnotateLine key={i}
                                       index={i}
                                       dotCoords={this.state.dotCoords[i]}
                                       labelCoords={this.state.labelCoords[i]}
                                       labelDimensions={this.state.labelDimensions[i]}
                                       />)
        }

        return (
            <div className="wozz-annotator" onMouseMove={this.handleMouseMove} onClick={this.handleImgClick}>
                <img src={imgSrc} alt="" onLoad={this.onImgLoad} ref={(el) => this.thingImage = el} />
                {this.state.showingModal &&
                    <AnnotateModal onClose={this.modalOnClose}
                                   onAddLabel={this.addLabel}
                                   position={this.positionModal()}
                                   index={this.state.labels.length} />
                }
                <DotHolder>
                    {dots}
                </DotHolder>
                <LabelHolder>
                    {labels}
                </LabelHolder>
                <LineHolder>
                    {lines}
                </LineHolder>
            </div>
        )
    }
}

const DotHolder = (props) => (
  <Fragment>
    {props.children}
  </Fragment>
);

const LabelHolder = (props) => (
  <Fragment>
    {props.children}
  </Fragment>
);

const LineHolder = (props) => (
  <Fragment>
    {props.children}
  </Fragment>
);

export default Annotator;
