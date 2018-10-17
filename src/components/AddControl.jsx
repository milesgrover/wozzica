import React, { Component, Fragment } from 'react';
import Select from './Select';
import '../styles/AddControl.css';


class AddControl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filePath: 'No file chosen',
            filePlaceholder: true
        }
    }

    handleFileChange = (e) => {
        if (e.target.files.length) {
            this.setState({
                filePath: e.target.files[0].name,
                filePlaceholder: false
            })
        } else {
            this.setState({
                filePath: 'No file chosen',
                filePlaceholder: true
            })
        }
    }
    render() {
        return (
            <div className="wozz-add-control">
                <div className="wozz-add-ctrl-number">{this.props.number}</div>
                <div className="wozz-add-ctrl-input">
                    {this.props.input === 'file' &&
                        <Fragment>
                            <label htmlFor="AddFileInput" class={this.state.filePlaceholder ? 'placeholder' : null}>
                                <div className="pseudo-input" tabindex={0}>{this.state.filePath}</div>
                                <span tabindex={0}>{this.props.button}</span>
                            </label>
                            <input type="file"
                                   id="AddFileInput"
                                   onChange={this.handleFileChange}
                                   tabindex={-1}
                                   accept="image/*"/>
                        </Fragment>
                    }
                    {this.props.options &&
                        <Select options={this.props.options} />
                    }
                    {this.props.input === 'text' &&
                        <Fragment>
                            <input type="text"
                                   placeholder={this.props.placeholder}/>
                        </Fragment>
                    }
                </div>

                {this.props.children}
            </div>
        )
    }
}

export default AddControl;
