import React from 'react';
import classNames from '../utilities/classNames';

const Paragraph = (props) => {
    return <p className={classNames('wozz-paragraph', props.className)}>{props.children}</p>
}

export default Paragraph;
