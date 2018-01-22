import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import ProjectThumb from './ProjectThumb';
import '../styles/PageTemplate.css';

// thumbnails
import hiveBio from '../images/thumbs/hivebio.png';

class PageDesign extends Component {
    render() {
        const pageBlurb = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse leo risus, tincidunt ac dignissim et, aliquam vitae ex. Sed condimentum pharetra dictum. Vivamus tincidunt mauris nulla, non rhoncus mauris ornare eu. Duis ac massa magna. Sed tincidunt lacus a elit faucibus, a consequat dolor feugiat.'
        return (
            <PageTemplate cat='design' show={this.props.show} blurb={pageBlurb}>
                <ProjectThumb src={hiveBio} projectName="HiveBio Community Lab" linkTo={this.props.loc + '/hivebio'} />
                <ProjectThumb src={hiveBio} projectName="HiveBio" linkTo={this.props.loc + '/hivebio'} />
                <ProjectThumb src={hiveBio} projectName="HiveBio" linkTo={this.props.loc + '/hivebio'} />
                <ProjectThumb src={hiveBio} projectName="HiveBio" linkTo={this.props.loc + '/hivebio'} />
                <ProjectThumb src={hiveBio} projectName="HiveBio" linkTo={this.props.loc + '/hivebio'} />
                <ProjectThumb src={hiveBio} projectName="HiveBio" linkTo={this.props.loc + '/hivebio'} />

            </PageTemplate>
        );
    }
}

export default PageDesign;
