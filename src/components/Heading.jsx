import React from 'react';
import styled from 'styled-components';
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
    switch (props.type) {
        case 'page':
            return <tag.h1 className="wozz-h-page">{props.children}</tag.h1>;
        case 'widget':
            return <tag.h2 className="wozz-h-widget">{props.children}</tag.h2>;
        case 'thing':
            return <tag.h2 className="wozz-h-thing">{props.children}</tag.h2>;
        case 'thingPage':
            return <tag.h1 className="wozz-h-thing-page">{props.children}</tag.h1>;
        case 'section':
            return <tag.h3 className="wozz-h-section">{props.children}</tag.h3>;
        default:
            return null;
    }
}

// const HeadingBase = (props) => {
//     if (!props.type && !props.tag) {
//         return;
//     }
//     const tag = {
//         h1: props.tag || 'h1',
//         h2: props.tag || 'h2',
//         h3: props.tag || 'h3',
//         h4: props.tag || 'h4',
//         h5: props.tag || 'h5',
//         h6: props.tag || 'h6'
//     }
//     switch (props.type) {
//         case 'page':
//             return <tag.h1 className={props.className}>{props.children}</tag.h1>;
//         case 'widget':
//             return <tag.h2 className={props.className}>{props.children}</tag.h2>;
//         case 'thing':
//             return <tag.h2 className={props.className}>{props.children}</tag.h2>;
//         case 'thingPage':
//             return <tag.h2 className={props.className}>{props.children}</tag.h2>;
//         case 'section':
//             return <tag.h3 className={props.className}>{props.children}</tag.h3>;
//         default:
//             return <props.tag className={props.className}>{props.children}</props.tag>;
//     }
// }

// const Heading = styled(HeadingBase)`
//     line-height: 1.25;
//     margin: 0;
//     padding: 0;
//     font-size: ${props => {
//         if (!props.type) {
//             switch(props.tag) {
//                 case 'h1':
//                     return '48px';
//                 case 'h2':
//                     return '36px';
//                 case 'h3':
//                     return '30px';
//                 case 'h4':
//                     return '24px';
//                 default:
//                     return '18px';
//             }
//         } else {
//             switch(props.type) {
//                 case 'page':
//                     return '30px';
//                 case 'widget':
//                     return '24px';
//                 case 'thing':
//                     return '36px';
//                 case 'thingPage':
//                     return '48px';
//                 case 'section':
//                     return '24px';
//                 default:
//                     return;
//             }
//         }
//     }};
//     font-weight: ${props => {
//         if (props.type) {
//             switch(props.type) {
//                 case 'page':
//                     return '400';
//                 case 'section':
//                     return '400';
//                 case 'widget':
//                     return '900';
//                 default:
//                     return '600';
//             }
//         } else {
//             return '600';
//         }
//     }};
//     text-transform: ${props => {
//         if (props.type === 'widget') {
//             return 'uppercase';
//         } else {
//             return null;
//         }
//     }};
//     color: ${props => {
//         if (props.type === 'widget') {
//             return '#008e79';
//         } else {
//             return 'inherit';
//         }
//     }};

// `;

export default Heading;
