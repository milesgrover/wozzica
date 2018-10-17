import React, { Component, Fragment } from 'react';
import TitleBar from '../components/TitleBar';
import AddControl from '../components/AddControl';
import '../styles/AddPage.css';

class AddPage extends Component {
    render() {
        console.log(this.props.item)
        return (
            <Fragment>
                <TitleBar title={this.props.title} />
                <div className="wozz-page-content">
                    <div className="wozz-add-choose-img">
                        <AddControl number="1"
                                    title="Choose an image"
                                    input="file"
                                    button="browse">
                            <p>This is the image you’ll be annotating. Illustrations are best, but photographs can work if they clearly show their subject. The format should be .jpg, .gif, or .png.</p>
                            <p>Please only upload images that you created, or which you have the rights to. See our <a href="" className="wozz-link">legal disclaimers</a>.</p>
                        </AddControl>
                    </div>
                    <div className="wozz-add-name-thing">
                        <AddControl number="2"
                                    title="What is this thing called?"
                                    options={['a', 'the', '-']}
                                    input="text"
                                    placeholder="name the thing, e.g. horse"
                                    >
                            <p>You should use the most common name here. If there are other common names for the thing, you’ll be able to add A.K.A.s later.</p>
                        </AddControl>
                    </div>
                    <div className="wozz-add-tag-thing">
                        <AddControl number="3"
                                    title="Add some tags"
                                    input="text"
                                    placeholder="e.g. animal, mammal, quadruped, herbivore "
                                    >
                            <p>Tags are very helpful for people searching for this thing! The list doesn’t have to be exhaustive &mdash; even one or two helps. The list is comma delimited, so you can include spaces in individual tags.</p>
                        </AddControl>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AddPage;
