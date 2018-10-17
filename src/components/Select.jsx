import React, { Component } from 'react';
import '../styles/Select.css';

class Select extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentOption: '',
            listOpen: false
        }
    }

    handleEntryPointClick = (e) => {
        this.setState({
            listOpen: !this.state.listOpen
        })
    }

    handleOptionClick = (e) => {
        this.setState({
            currentOption: e.target.textContent,
            listOpen: !this.state.listOpen
        })
    }

    handleSelectChange = (e) => {
        this.setState({
            currentOption: e.target.value
        })
    }

    render() {
        return (
            <div className="wozz-ctrl-select">
                <button onClick={this.handleEntryPointClick}>{this.state.currentOption || this.props.options[0]}</button>
                <ul className={this.state.listOpen ? 'show' : null} style={this.state.listOpen ? {height: this.props.options.length * 44} : null}>
                    {this.props.options.map((item, index) =>
                        <li value={item} key={index}>
                        <button onClick={this.handleOptionClick}>{item}</button>
                        </li>
                    )}
                </ul>

                <select value={this.state.currentOption || this.props.options[0]} onChange={this.handleSelectChange}>
                    {this.props.options.map((item, index) =>
                        <option value={item} key={index}>{item}</option>
                    )}
                </select>
            </div>
        )
    }
}

export default Select;
