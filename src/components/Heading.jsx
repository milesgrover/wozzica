import React from 'react';
import '../styles/Heading.scss';

const Heading = (props) => {
    if (!props.type) {
        return;
    }
    const tag = {
        h1: props.tag || 'h1',
        h2: props.tag || 'h2',
        h3: props.tag || 'h3',
        h4: props.tag || 'h4',
        h5: props.tag || 'h5',
        h6: props.tag || 'h6'
    }
    if (props.type === 'page') {
        return <tag.h1 className="wozz-h-page">{props.children}</tag.h1>
    }
    if (props.type === 'widget') {
        return <tag.h2 className="wozz-h-widget">{props.children}</tag.h2>
    }
    if (props.type === 'thing') {
        return <tag.h2 className="wozz-h-thing">{props.children}</tag.h2>
    }
    if (props.type === 'thingPage') {
        return <tag.h1 className="wozz-h-thing-page">{props.children}</tag.h1>
    }
}

export default Heading;
