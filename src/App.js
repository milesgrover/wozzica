import React, { Component } from 'react';
import PageDesign from './components/PageDesign';
import PageArt from './components/PageArt';
import PageCode from './components/PageCode';
import PageAbout from './components/PageAbout';
import { withRouter } from 'react-router-dom';
import './styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cat: this.props.match.params.cat ? this.props.match.params.cat : 'design'
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            cat: nextProps.match.params.cat
        });
    }

    render() {
        console.log(this.props)
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
