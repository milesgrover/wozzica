import React, { Component, Fragment } from 'react';
import TitleBar from '../components/TitleBar';
import AddControl from '../components/AddControl';
import BigButton from '../components/BigButton';
import generateId from '../utilities/generateId';
import { getToken, uploadImage } from '../api';
import './AddPage.scss';
import PageContainer from '../components/PageContainer';

class AddPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageInput: AddControl.InputOptions.empty,
            nameInput: AddControl.InputOptions.empty,
            tagInput: AddControl.InputOptions.empty,
            createID: generateId(),
            uploadToken: '',
            tags: [],
            name: '',
            imageUrl: '',
        }
    }

    handleImageInput = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files.length) {
            this.setState({
                imageInput: AddControl.InputOptions.loading,
            });

            const file = e.target.files[0];
            console.log(file)
            const fileContents = new FileReader();
            const ext = file.name.slice(-3);
            const newName = this.state.createID + "." + ext;

            fileContents.addEventListener('load', () => {
                getToken(this)
                .then(res => {
                    uploadImage(this.state.uploadToken, newName, file, this)
                });
            });
            fileContents.readAsArrayBuffer(file);
        }
    }

    handleNameInput = (e) => {
        this.setState({
            name: e.target.value,
            nameInput: e.target.value.length ? AddControl.InputOptions.complete : AddControl.InputOptions.empty
        });
    }

    handleTagInput = (e) => {
        const tags = e.target.value.split(', ');
        this.setState({
            tags: tags,
            tagInput: e.target.value.length ? AddControl.InputOptions.complete : AddControl.InputOptions.empty
        });
    }

    handleNextBtnClick = (e) => {
        e.preventDefault();
        const jsonTags = JSON.stringify({tags: this.state.tags, image: this.state.imageUrl, name: this.state.name});
        const upperID = this.state.createID.slice(0,1).toUpperCase() + this.state.createID.slice(1);
        const upperName = this.state.name.slice(0,1).toUpperCase() + this.state.name.slice(1)
        this.getToken()
        .then(res => {
            let request = new XMLHttpRequest();
            request.open('POST', 'http://www.wozzica.com/wiki/api.php', true);
            let formData = new FormData();
            formData.append('action', 'edit');
            formData.append('token', this.state.uploadToken);
            formData.append('title', this.state.createID);
            formData.append('format', 'json');
            formData.append('contentmodel', 'json');
            formData.append('text', jsonTags);
            request.setRequestHeader('Content-Disposition', 'form-data');
            request.send(formData);
            request.onreadystatechange = () => {
                if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                    console.log(request.response)
                    this.props.history.push(`/annotate/${upperID}/${upperName}`);
                }
            }
        })
    }

    render() {
        const vowelRegex = /\b[aeiou]\w*/ig;
        let indefArticle = 'a';
        if (this.state.name && vowelRegex.test(this.state.name)) {
            indefArticle = 'an'
        }
        return (
            <PageContainer className="wozz-add">
                <div className="wozz-add-choose-img">
                    <AddControl number="1"
                                title="Choose an image"
                                input="file"
                                button="browse"
                                onInput={this.handleImageInput}
                                complete={this.state.imageInput}
                                >
                        <p>This is the image you’ll be annotating. Illustrations are best, but photographs can work if they clearly show their subject. The format should be .jpg, .gif, or .png.</p>
                        <p>Please only upload images that you created, or which you have the rights to. See our <a href="#" className="wozz-link">legal disclaimers</a>.</p>
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
            </PageContainer>
        )
    }
}

export default AddPage;
