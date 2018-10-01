import React, { Component, Fragment } from 'react';
import debounce from '../utilities/debounce';

const debounceWait = 125;

class ViewRePorter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vpSize: this.assignViewport()
        }
    }

    assignViewport = () => {
        let vp;
        let getWidth = window.innerWidth;
        if (getWidth < 576) {
            vp = 0;
        } else if (getWidth >= 576 && getWidth < 768) {
            vp = 1;
        } else if (getWidth >= 768 && getWidth < 992) {
            vp = 2;
        } else if (getWidth >= 992 && getWidth < 1200) {
            vp = 3;
        } else if (getWidth >= 1200) {
            vp = 4;
        }
        return vp;
    }

    componentDidMount = () => {
        let context = this;
        window.addEventListener('resize', debounce(() => {
            context.setState({
                vpSize: context.assignViewport()
            })
        }, debounceWait))
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, { vpSize: this.state.vpSize });
        });

        return <Fragment>{childrenWithProps}</Fragment>
    }
}

export default ViewRePorter;
