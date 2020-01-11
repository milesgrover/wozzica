import React from "react";
import styled from "styled-components";

const TextOverlayText = styled.span`
    color: #ffda00;
    text-shadow: 0 2px 0 #00d6bc;
    font-size: 34px;
    font-weight: 900;
    background: rgba(0, 0, 0, 0.3);
    padding: 6px 12px;
    border-radius: 8px;
    transition: transform 250ms ease-in-out;
`;

const TextOverlayBase = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={className} {...rest}>
            <TextOverlayText>{props.children}</TextOverlayText>
        </div>
    )
}

const TextOverlay = styled(TextOverlayBase)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    cursor: pointer;
    &:hover {
        span {
            transform: scale(1.1);
        }
    }
`;

export default TextOverlay;