import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PageDesign from './components/PageDesign';
import PageArt from './components/PageArt';
import PageCode from './components/PageCode';
import PageAbout from './components/PageAbout';

// design pages
import Autography from './projectpages/Autography';
import BatterySaver from './projectpages/BatterySaver';
import ComicSites from './projectpages/ComicSites';
import DateTimePicker from './projectpages/DateTimePicker';
import HiveBio from './projectpages/HiveBio';
import MarketingSites from './projectpages/MarketingSites';
import MSPosters from './projectpages/MSPosters';
import Wozzica from './projectpages/Wozzica';

// code pages
import MicrosoftSites from './projectpages/MicrosoftSites';
import WebAnimation from './projectpages/WebAnimation';
import WindowsPhone from './projectpages/WindowsPhone';

import './styles/App.css';

const projectPages = {
    autography: Autography,
    batterysaver: BatterySaver,
    comicsites: ComicSites,
    datetimepicker: DateTimePicker,
    hivebio: HiveBio,
    marketingsites: MarketingSites,
    microsoftsites: MicrosoftSites,
    msposters: MSPosters,
    webanimation: WebAnimation,
    windowsphone: WindowsPhone,
    wozzica: Wozzica
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cat: this.props.match.params.cat ? this.props.match.params.cat : 'design',
            item: this.props.match.params.item
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            cat: nextProps.match.params.cat,
            item: nextProps.match.params.item
        });
    }

    render() {
        if (this.state.item) {
            const CurrentProject = projectPages[this.state.item]
            return (
                <CurrentProject cat={this.state.cat} />
            );
        }
        return (
            <div>
                <PageDesign show={this.state.cat === 'design'} loc={this.props.match.url} />
                <PageArt show={this.state.cat === 'art'} loc={this.props.match.url} />
                <PageCode show={this.state.cat === 'code'} loc={this.props.match.url} />
                <PageAbout show={this.state.cat === 'about'} loc={this.props.match.url} />
            </div>
        )
    }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
