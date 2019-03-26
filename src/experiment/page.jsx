import React from "react";
import styled from "styled-components";

class Page extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}

const StyledPage = styled(Page)`
    display: grid;
    grid-template-columns: ${props => {
        const childCount = React.Children.count(props.children);
        if (childCount === 2) {
            return '1fr 456px';
        } else {
            return `repeat(${childCount}, 1fr)`;
        }
    }};
    max-width: 1600px;
    padding: 22px;
    grid-column-gap: 22px;
`;

export default StyledPage;
