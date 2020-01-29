import React from 'react';
import classNames from '../utilities/classNames';
import './Image.scss';

const Image = (props) => {
    return <img src={props.src} className={classNames('wozz-img', props.className)} alt={props.alt} />
}

export default Image;
