import React, { Component } from 'react';
import '../styles/SiteSearch.css';

class SiteSearch extends Component {
    constructor(props) {
        super(props);

        this.state = { expandInput: false }
    }

    handleSearchClick = () => {
        if (!this.state.expandInput && this.props.vpSize < 1) {
            this.setState({
                expandInput: true
            });
        } else {
            this.searchSite();
        }
    }

    handleCancelClick = () => {
        this.setState({
            expandInput: false
        });
    }

    searchSite = () => {
        console.log(`search doesn't work yet`)
    }

    render() {
        return (
            <div className={`wozz-site-search${this.state.expandInput && this.props.vpSize < 1 ? ' expand' : ''}`}>
                {(this.props.vpSize > 0 || this.state.expandInput) &&
                    <input type="text"
                           placeholder="search for a thing"
                    />
                }
                <button className="search-go" onClick={this.handleSearchClick}>
                    <span>search</span>
                </button>
                {this.props.vpSize < 1 && this.state.expandInput &&
                    <button className="search-cancel" onClick={this.handleCancelClick}>
                        <span>cancel</span>
                    </button>
                }
            </div>
        )
    }
}

export default SiteSearch;
