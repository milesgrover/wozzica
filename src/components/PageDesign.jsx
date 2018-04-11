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

class PageDesign extends Component {
    render() {
        // const pageBlurb = `To me, design is largely about making trade-offs. Any piece of UI has to serve multiple goals, and my job as a designer is to find the sweet spots — working out which interactions should be the easiest, which UI elements should be emphasized, how we communicate effectively with the user while maintaining a consistent voice and personality, and a host of other considerations that might conflict with each other. On this page are just a few examples of my design work over the years.`
        const pageBlurb = `I've been doing graphic design, user experience design, and UI design for more than a decade. Here's a small sample of some of the projects I've worked on.`
        return (
            <PageTemplate cat='design' show={this.props.show} blurb={pageBlurb}>
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

export default PageDesign;
