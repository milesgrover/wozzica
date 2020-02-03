import React from "react";
import "./Text.scss";

const TextTypes = [
    "caption",
    "paragraph",
    "body",
    "body_sm",
    "body_lg",
    "heading_sm",
    "heading",
    "page_title",
    "thing_name",
]

const Text = (props) => {
    const classNameProp = props.className ? ` ${props.className}` : "";
    let Tag = props.tag || "div";
    if (props.type === "paragraph") {
        Tag = "p";
    }
    if (props.type === "page-title") {
        Tag = "h1";
    }
    // must be one of the values enumerated in TextTypes
    if (TextTypes.some(value => value === props.type)) {
        return (
            <Tag className={`wozz-t-${props.type}${classNameProp}`}>
                {props.children}
            </Tag>
        );
    } else {
        return <Tag className={`wozz-t-body${classNameProp}`}>{props.children}</Tag>
    }
}

export default Text;