import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import ProjectThumb from './ProjectThumb';
import '../styles/PageTemplate.css';

// thumbnails
import autography from '../images/thumbs/autography.png';
import battery from '../images/thumbs/batterysaver.png';
import comics from '../images/thumbs/comicsites.png';
import dtPicker from '../images/thumbs/datetimepicker.png';
import hiveBio from '../images/thumbs/hivebio.jpg';
import marketing from '../images/thumbs/marketingsites.jpg';
import msposters from '../images/thumbs/msposters.jpg';
import wozzica from '../images/thumbs/wozzica.png';

class PageArt extends Component {
    render() {
        const pageBlurb = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse leo risus, tincidunt ac dignissim et, aliquam vitae ex. Sed condimentum pharetra dictum. Vivamus tincidunt mauris nulla, non rhoncus mauris ornare eu. Duis ac massa magna. Sed tincidunt lacus a elit faucibus, a consequat dolor feugiat.'
        return (
            <PageTemplate cat='art' show={this.props.show} blurb={pageBlurb}>
                <ProjectThumb src={hiveBio} projectName="HiveBio Community Lab" linkTo={this.props.loc + '/hivebio'} />
                <ProjectThumb src={wozzica} projectName="Wozzica: A visual dictionary" linkTo={this.props.loc + '/wozzica'} />
                <ProjectThumb src={dtPicker} projectName="Windows 10 DateTime Picker" linkTo={this.props.loc + '/datetimepicker'} />
                <ProjectThumb src={battery} projectName="Windows Phone Battery Saver" linkTo={this.props.loc + '/batterysaver'} />
                <ProjectThumb src={autography} projectName="Autography app" linkTo={this.props.loc + '/autography'} />
                <ProjectThumb src={comics} projectName="Comic websites" linkTo={this.props.loc + '/comicsites'} />
                <ProjectThumb src={marketing} projectName="Marketing websites" linkTo={this.props.loc + '/marketingsites'} />
                <ProjectThumb src={msposters} projectName="Microsoft posters" linkTo={this.props.loc + '/msposters'} />
            </PageTemplate>
        );
    }
}

export default PageArt;
