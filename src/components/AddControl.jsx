import React, { Component } from 'react';
import Select from './Select';
import generateId from '../utilities/generateId';
import classNames from '../utilities/classNames';
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
        this.props.onInput(e);
    }

    render() {
        return (
            <div className="wozz-add-control">
                <div className={classNames('wozz-add-ctrl-number', this.props.complete)}>
                    <span>{this.props.number}</span>
                </div>
                <div className="wozz-add-ctrl-input">
                    {this.props.input === 'file' &&
                        <form method="post" encType="multipart/form-data">
                            <label htmlFor="AddImageInput" className={this.state.filePlaceholder ? 'placeholder' : null}>
                                <div className="pseudo-input" tabIndex={0}>{this.state.filePath}</div>
                                <span tabIndex={0}>{this.props.button}</span>
                            </label>
                            <input type="file"
                                   id="AddImageInput"
                                   name="thingImage"
                                   onChange={this.handleFileChange}
                                   tabIndex={-1}
                                   accept="image/*"/>
                        </form>
                    }
                    <form>
                        {this.props.options &&
                                <Select options={this.props.options} />
                        }
                        {this.props.input === 'text' &&
                                <input type="text"
                                    placeholder={this.props.placeholder}
                                    onChange={this.props.onInput}/>
                        }
                    </form>
                </div>

                {this.props.children}
            </div>
        )
    }
}

AddControl.InputOptions = {
    empty: 'empty',
    loading: 'loading',
    complete: 'complete',
    error: 'error',
}

export default AddControl;
