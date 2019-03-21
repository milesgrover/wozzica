import React from 'react';
import { Link } from 'react-router-dom';
import classNames from '../utilities/classNames';

const HyperLink = (props) => {
    return <Link to={props.to} className={classNames('wozz-hyperlink', props.className)}>{props.children}</Link>
}

export default HyperLink;
