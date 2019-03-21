import React, { Component, Fragment } from 'react';
import HyperLink from '../components/HyperLink';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Image from '../components/Image';
import PageTemplate from '../components/PageTemplate';

import '../styles/HomePage.css';
import pencilImage from '../images/homepage-pencil.png';

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <PageTemplate>
                    <Fragment>
                        <Heading type="page">What is Wozzica?</Heading>
                        <Paragraph>Wozzica is a visual dictionary of things. Have you ever wondered what that metal part that holds the eraser on a pencil is called? If you consult a visual dictionary like Wozzica and find the entry for <strong>pencil</strong>, you'll discover that the metal part is called a <em className="wozz-term">ferrule</em>.</Paragraph>
                        <Image src={pencilImage} alt="An annotated illustration of a pencil" />
                        <Paragraph>Wozzica is free, and anyone can contribute. You can <HyperLink to="/add">add a new thing</HyperLink>, or if you see something you’d like to edit, click the contribute button on any thing's page.</Paragraph>
                    </Fragment>
                    <Fragment>
                        <Heading type="widget">Enjoy this random thing</Heading>
                    </Fragment>
                </PageTemplate>
            </Fragment>
        )
    }
}

export default HomePage;
