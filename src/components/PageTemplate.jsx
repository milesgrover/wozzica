import React from "react";
import styled from "styled-components";

class PageTemplateBase extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}

const PageTemplate = styled(PageTemplateBase)`
    display: grid;
    grid-template-columns: ${props => {
        const childCount = React.Children.count(props.children);
        if (childCount === 2) {
            return '1fr 456px';
        } else {
            return `repeat(${childCount}, 1fr)`;
        }
    }};
    min-width: 0;
    max-width: 1200px;
    padding: 22px 24px;
    grid-column-gap: 22px;
    margin: 0 auto;
    > * {
        min-width: 0;
    }
`;

export default PageTemplate;