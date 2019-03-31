import React from "react";
import styled from "styled-components";

class TagListBase extends React.Component {
    render() {
        return (
            <ul className={this.props.className}>
                {this.props.tags.map((t, i) => {
                    return (
                        <li key={i}><a href="#"><span>#</span>{t}</a></li>
                    );
                })}
            </ul>
        );
    }
}

const TagList = styled(TagListBase)`
    list-style: none;
    padding: 0;
    > li {
        display: inline-block;
        font-weight: 600;
        margin-right: .75em;
        a {
            color: #008e79;
            span {
                color: #000;
            }
            &:hover {
                text-decoration: underline;
            }
        }
        &:last-child {
            margin-right: 0;
        }
    }
`;

export default TagList;