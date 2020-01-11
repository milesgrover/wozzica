import React from "react";
import styled from "styled-components";

const AddButton = styled.button`
    color: #008e79;
    cursor: pointer;
    font-size: 16px;
    border: 0;
    background: none;
    padding: 0;
    &:before {
        content: "\\E008";
        font-family: "wozz-icons";
        font-size: 12px;
        padding-right: 8px;
    }
    &:hover {
        color: #000;
    }
`;

export default AddButton;