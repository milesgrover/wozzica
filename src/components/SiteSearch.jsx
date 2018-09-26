import React, { Component } from 'react';
import '../styles/SiteSearch.css';

class SiteSearch extends Component {
    constructor(props) {
        super(props);

        this.state = { showInput: false }
    }

    handleSearchClick = () => {
        if (!this.state.showInput) {
            this.setState({
                showInput: true
            });
        } else {
            this.searchSite();
        }
    }

    handleCancelClick = () => {
        this.setState({
            showInput: false
        });
    }

    searchSite = () => {
        console.log(`search doesn't work yet`)
    }

    render() {
        return (
            <div className={`wozz-site-search${this.state.showInput ? '' : ' hide'}`}>
                <input type="text"
                       placeholder="search for a thing"
                       />
                <button className="search-go" onClick={this.handleSearchClick}>
                    <span>search</span>
                </button>
                <button className="search-cancel" onClick={this.handleCancelClick}>
                    <span>cancel</span>
                </button>
            </div>
        )
    }
}

export default SiteSearch;
