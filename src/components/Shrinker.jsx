import React from 'react';
import { throttle } from 'lodash-es';
import styled from "styled-components";

class ShrinkerBase extends React.Component {
    constructor(props) {
        super(props);

        this.shrinker = React.createRef();
        this.childComponent = React.createRef();

        this.state = {
            shrunkStyle: {},
            height: null,
        }
    }

    componentDidMount() {
        setTimeout(this.calculateSize, 0);
        window.addEventListener('resize', throttle(this.calculateSize, 20));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', throttle(this.calculateSize, 20));
    }

    handleImageLoad = () => {
        this.calculateSize();
    }

    calculateSize = () => {
        if (this.shrinker.current && this.childComponent.current) {
            const child = this.childComponent.current;
            const outerSpace = this.shrinker.current.clientWidth;
            const innerSpace = child.offsetWidth;
    
            if (outerSpace <= innerSpace) {
                this.setState({
                    shrunkStyle: {
                        transform: `scale(${outerSpace / innerSpace})`,
                        transformOrigin: 'left top',
                    },
                }, () => {this.updateHeight(child.getBoundingClientRect().height)})
            } else {
                this.setState({
                    shrunkStyle: {},
                    height: null,
                })
            }
        }
    }

    updateHeight = (newHeight) => {
        this.setState({
            height: newHeight
        });
    }

    render() {
        return (
            <div className={this.props.className} ref={this.shrinker} style={{height: this.state.height}}>
                <div>
                    {React.Children.only(
                        React.cloneElement(this.props.children, {
                            forwardedRef: this.childComponent,
                            shrunkStyle: this.state.shrunkStyle,
                            onImageLoad: this.handleImageLoad,
                        })
                    )}
                </div>
            </div>
        );
    }
}

const Shrinker = styled(ShrinkerBase)`
    overflow: hidden;
    max-width: 100%;
    transition: all 50ms ease-in-out;
`;

export default Shrinker;