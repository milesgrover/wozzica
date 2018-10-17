import React, { Component } from 'react';
import AnnotateModal from './AnnotateModal';
import AnnotateDot from './AnnotateDot';
import AnnotateLabel from './AnnotateLabel';
import AnnotateLine from './AnnotateLine';
import DeleteModal from './DeleteModal';
import generateId from '../utilities/generateId';
import '../styles/Annotator.css';

class Annotator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSize: {w: 0, h: 0},
            thingData: this.props.data || [],
            showingModal: false,
            placingLabel: null,
            deletingThing: null
        }

        this.thingImage = React.createRef();
    }

    onImgLoad = () => {
        this.setState({
            imgSize: { w: this.thingImage.current.offsetWidth,
                       h: this.thingImage.current.offsetHeight }
        });
    }

    handleImgClick = (e) => {
        if (this.props.readonly) {
            return;
        }
        let newX = e.nativeEvent.offsetX;
        let newY = e.nativeEvent.offsetY;
        let uid = generateId();

        if (!this.state.showingModal && !this.state.placingLabel && !this.state.deletingThing) {
            this.setState({
                showingModal: true,
                thingData: [...this.state.thingData, {dx: newX, dy: newY, uid: uid, lx: newX, ly: newY}]
            })
        }
    }

    handleDotClick = (uid) => {
        if (this.props.readonly) {
            return;
        }
        this.setState({
            deletingThing: uid
        })
    }

    handleMouseMove = (e) => {
        if (this.props.readonly) {
            return;
        }
        if (this.state.placingLabel) {
            let dragX = e.clientX - this.thingImage.current.parentNode.offsetLeft;
            let dragY = e.clientY - this.thingImage.current.parentNode.offsetTop;

            let updateLabelPosition = this.state.thingData.slice(0);
            let dataIndex = updateLabelPosition.findIndex(el => el.uid === this.state.placingLabel);
            updateLabelPosition[dataIndex].lx = dragX;
            updateLabelPosition[dataIndex].ly = dragY;

            this.setState({
                thingData: updateLabelPosition
            });
        }
    }

    deletingThing = () => {
        if (this.state.deletingThing) {
            let removeThing = this.state.thingData.slice(0);
            let dataIndex = removeThing.findIndex(el => el.uid === this.state.deletingThing);
            removeThing.splice(dataIndex, 1);

            this.setState({
                showingModal: false,
                thingData: removeThing,
                deletingThing: null
            });
        }
    }

    addLabel = (text, uid) => {
        let addLabelData = this.state.thingData.slice(0);
        let dataIndex = addLabelData.findIndex(el => el.uid === uid);
        addLabelData[dataIndex].ltext = text;
        addLabelData[dataIndex].ly = addLabelData[dataIndex].dy;
        addLabelData[dataIndex].lx = addLabelData[dataIndex].dx;

        this.setState({
            showingModal: false,
            thingData: addLabelData
        });
    }

    onModalClose = () => {
        let removeThing = this.state.thingData.slice(0);
        removeThing.splice(this.state.thingData.length - 1, 1);
        this.setState({
            showingModal: false,
            thingData: removeThing
        });
    }

    onDeleteCancel = () => {
        this.setState({
            deletingThing: null
        })
    }

    onUpdateLabel = (text, uid, dimensions) => {
        let updateLabelData = this.state.thingData.slice(0);
        let dataIndex = updateLabelData.findIndex(el => el.uid === uid);

        if (text) {
            updateLabelData[dataIndex].ltext = text;
        }

        if (dimensions) {
            updateLabelData[dataIndex].lw = dimensions.w;
            updateLabelData[dataIndex].lh = dimensions.h;
        }

        this.setState({
            thingData: updateLabelData
        });
    }

    onDragLabel = (uid) => {
        if (this.props.readonly) {
            return;
        }
        this.setState({
            placingLabel: uid
        });
    }

    positionModal = (width, height) => {
        let modalWidth = width || 320;
        let modalHeight = height || 100;
        let edgeGutter = 4;
        let tailHeight = 22;

        let dataIndex = this.state.thingData.findIndex(el => el.uid === this.state.deletingThing);

        let currentThing = this.state.thingData[dataIndex] || this.state.thingData[this.state.thingData.length - 1];
        let alterTail = [];

        let modalX = currentThing.dx - modalWidth / 2;
        let modalY = currentThing.dy - tailHeight - modalHeight;
        if (currentThing.dx < modalWidth / 2) {
            modalX = edgeGutter;
            alterTail.push('left');
        } else if (this.state.imgSize && currentThing.dx > this.state.imgSize.w - modalWidth / 2) {
            modalX = this.state.imgSize.w - edgeGutter - modalWidth;
            alterTail.push('right');
        }
        if (currentThing.dy < modalHeight + tailHeight + edgeGutter) {
            modalY = currentThing.dy + tailHeight;
            alterTail.push('top');
        }
        return {
            x: modalX,
            y: modalY,
            w: modalWidth,
            h: modalHeight,
            tail: alterTail,
            tailCoords: currentThing
        };
    }

    render() {
        // add dots
        const dots = [];
        for (let i = 0; i < this.state.thingData.length; i++) {
            dots.push(<AnnotateDot key={i}
                                   data={this.state.thingData[i]}
                                   onClickDot={this.handleDotClick}
                                   />)
        }

        // add labels
        const labels = [];
        const labelsAdded = this.state.thingData.filter(thing => thing.ltext);
        for (let i = 0; i < labelsAdded.length; i++) {
            labels.push(<AnnotateLabel key={i}
                                       data={this.state.thingData[i]}
                                       onUpdate={this.onUpdateLabel}
                                       onDragger={this.onDragLabel}
                                       readonly={this.props.readonly}
                                       />)
        }

        // add lines
        const lines = [];
        for (let i = 0; i < labelsAdded.length; i++) {
            lines.push(<AnnotateLine key={i}
                                       imgSize={this.state.imgSize}
                                       data={this.state.thingData[i]}
                                       />)
        }

        return (
            <div className="wozz-annotator" onMouseMove={this.handleMouseMove} onClick={this.handleImgClick}>
                <img src={this.props.image} alt="" onLoad={this.onImgLoad} ref={this.thingImage} />
                {this.state.showingModal &&
                    <AnnotateModal onClose={this.onModalClose}
                                   onAddLabel={this.addLabel}
                                   position={this.positionModal(320, 100)}
                                   uid={this.state.thingData[this.state.thingData.length - 1].uid}
                                   />
                }
                {this.state.deletingThing &&
                    <DeleteModal index={this.state.deletingThing}
                                    position={this.positionModal(103, 97)}
                                    onCancel={this.onDeleteCancel}
                                    onConfirm={this.deletingThing}/>
                }
                {dots}
                {labels}
                {lines}
            </div>
        )
    }
}

export default Annotator;
