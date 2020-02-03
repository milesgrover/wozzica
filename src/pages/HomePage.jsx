import React from 'react';
import HyperLink from '../components/HyperLink';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Image from '../components/Image';
import PageContainer from '../components/PageContainer';

import './HomePage.scss';
import pencilImage from '../images/homepage-pencil.png';

class HomePage extends React.Component {
    render() {
        return (
            <PageContainer className="wozz-home">
                <main>
                    <Heading type="page">Wozza Wozzica?</Heading>
                    <Paragraph>Wozzica is a visual dictionary. If you've never used a visual dictionary, they're for looking up what things are called.</Paragraph>
                    <Paragraph>Like, have you ever wondered what that metal thing on a pencil is called? If you consult a visual dictionary like Wozzica and find the entry for <strong>pencil</strong>, you'll discover that the metal part is called a <em className="wozz-term">ferrule</em>.</Paragraph>
                    <Image className="wozz-home-illustration" src={pencilImage} alt="An annotated illustration of a pencil" />
                    <Paragraph>Wozzica is free, and anyone can contribute. You can <HyperLink to="/add">add a new thing</HyperLink>, or if you see something you’d like to edit, click the contribute button on any thing's page.</Paragraph>
                </main>
                <aside>
                    <Heading type="widget">Behold! Here's a random thing</Heading>
                </aside>
            </PageContainer>
        )
    }
}

export default HomePage;
