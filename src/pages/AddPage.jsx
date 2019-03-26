import React, { Component, Fragment } from 'react';
import TitleBar from '../components/TitleBar';
import AddControl from '../components/AddControl';
import BigButton from '../components/BigButton';
import generateId from '../utilities/generateId';
import '../styles/AddPage.scss';

class AddPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageInput: AddControl.InputOptions.empty,
            nameInput: AddControl.InputOptions.empty,
            tagInput: AddControl.InputOptions.empty,
            uploadToken: '',
        }
    }

    handleImageInput = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files.length) {
            const self = this;
            const file = e.target.files[0];
            const fileContents = new FileReader();
            fileContents.onload = () => { console.log(fileContents.result) }
            fileContents.readAsArrayBuffer(file);
            const ext = file.name.slice(-3);
            const newName = generateId() + "." + ext;

            this.setState({
                imageInput: AddControl.InputOptions.loading,
            });

            fetch(`http://www.wozzica.com/wiki/api.php?action=query&meta=tokens&format=json`)
            .then(res => res.json())
            .then(res => {
                const token = res.query.tokens.csrftoken;
                self.setState({
                    uploadToken: token
                });
                return fetch(`http://www.wozzica.com/wiki/api.php?action=upload&format=json&filename=${newName}&file=${file}&token=${token}`);
            })
            .then(res => {console.log(res)}, res => {console.log(res)})
        }
        this.setState({
            imageInput: AddControl.InputOptions.complete
        });
        
    }

    handleNameInput = (e) => {
        this.setState({
            nameInput: e.target.value.length ? AddControl.InputOptions.complete : AddControl.InputOptions.empty
        });
    }

    handleTagInput = (e) => {
        this.setState({
            tagInput: e.target.value.length ? AddControl.InputOptions.complete : AddControl.InputOptions.empty
        });
    }

    handleNextBtnClick = () => {
        this.props.history.push('/annotate');
    }

    render() {
        const vowelRegex = /\b[aeiou]\w*/ig;
        let indefArticle = 'a';
        if (this.state.nameInput && vowelRegex.test(this.state.nameInput)) {
            indefArticle = 'an'
        }
        return (
            <Fragment>
                <TitleBar title={this.props.title} />

                <div className="wozz-page-content">
                    <div className="wozz-add-choose-img">
                        <AddControl number="1"
                                    title="Choose an image"
                                    input="file"
                                    button="browse"
                                    onInput={this.handleImageInput}
                                    complete={this.state.imageInput}
                                    >
                            <p>This is the image you’ll be annotating. Illustrations are best, but photographs can work if they clearly show their subject. The format should be .jpg, .gif, or .png.</p>
                            <p>Please only upload images that you created, or which you have the rights to. See our <a href="" className="wozz-link">legal disclaimers</a>.</p>
                        </AddControl>
                    </div>
                    <div className="wozz-add-name-thing">
                        <AddControl number="2"
                                    title="What is this thing called?"
                                    options={[indefArticle, 'the', '-']}
                                    input="text"
                                    placeholder="name the thing, e.g. horse"
                                    onInput={this.handleNameInput}
                                    complete={this.state.nameInput}
                                    >
                            <p>You should use the most common name here. If there are other common names for the thing, you’ll be able to add A.K.A.s later.</p>
                        </AddControl>
                    </div>
                    <div className="wozz-add-tag-thing">
                        <AddControl number="3"
                                    title="Add some tags"
                                    input="text"
                                    placeholder="e.g. animal, mammal, quadruped, herbivore"
                                    onInput={this.handleTagInput}
                                    complete={this.state.tagInput}
                                    >
                            <p>Tags are very helpful for people searching for this thing! The list doesn’t have to be exhaustive &mdash; even one or two helps. The list is comma delimited, so you can include spaces in individual tags.</p>
                        </AddControl>
                        <div className="wozz-add-next">
                            <BigButton next
                                disabled={(this.state.imageInput === AddControl.InputOptions.empty ||
                                           this.state.imageInput === AddControl.InputOptions.loading) ||
                                           this.state.nameInput === AddControl.InputOptions.empty}
                                       onClick={this.handleNextBtnClick}>
                                       next step
                            </BigButton>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AddPage;
