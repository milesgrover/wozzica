import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import ProjectThumb from './ProjectThumb';
import '../styles/PageTemplate.css';

// thumbnails
import animation from '../images/thumbs/animation.png';
import microsoftsites from '../images/thumbs/microsoftsites.jpg';
import windowsphone from '../images/thumbs/windowsphone.png';

class PageCode extends Component {
    // Using this function so I don't necessarily have to update this page every year
    updateCareerAge = () => {
        // Started doing freelance projects in late 2003 or early 2004, so using Jan 1 2004
        let beginning = new Date('2004-01-01T00:00:00');
        let now = new Date();
        // Round down and subtract 1 so it'll always be true to say "more than" x years
        let estimate = Math.floor((now - beginning) / 31536000000) - 1;

        return estimate;
    }

    render() {
        const pageBlurb = `I've been writing UI code professionally for more than ${this.updateCareerAge()} years, and the last ${this.updateCareerAge() - 4} of those has been at Microsoft. Most of my experience has been with web technologies, and I've worked on a range of websites from 3-page brochure sites for local small businesses all the way to some of the biggest ecommerce sites in the world. Here are just a few examples of projects I've contributed to.`

        return (
            <PageTemplate cat='code' show={this.props.show} blurb={pageBlurb}>
                <ProjectThumb src={microsoftsites} projectName="Microsoft websites" linkTo={this.props.loc + '/microsoftsites'} />
                <ProjectThumb src={windowsphone} projectName="Windows Phone UI" linkTo={this.props.loc + '/windowsphone'} />
                <ProjectThumb src={animation} projectName="Web animation" linkTo={this.props.loc + '/webanimation'} />
                <ProjectThumb src={animation} projectName="Component building" linkTo={this.props.loc + '/components'} />
            </PageTemplate>
        );
        // SVG color thing
    }
}

export default PageCode;
