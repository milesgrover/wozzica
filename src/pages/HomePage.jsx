import React from 'react';
import HyperLink from '../components/HyperLink';
import Text from '../components/Text';
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
                    <Text type="page_title">Wozza Wozzica?</Text>
                    <Text type="paragraph">Wozzica is a visual dictionary. If you've never used a visual dictionary, they're for looking up what things are called.</Text>
                    <Text type="paragraph">Like, have you ever wondered what that metal thing on a pencil is called? If you consult a visual dictionary like Wozzica and find the entry for <strong>pencil</strong>, you'll discover that the metal part is called a <em className="wozz-term">ferrule</em>.</Text>
                    <Image className="wozz-home-illustration" src={pencilImage} alt="An annotated illustration of a pencil" />
                    <Text type="paragraph">Wozzica is free, and anyone can contribute. You can <HyperLink to="/add">add a new thing</HyperLink>, or if you see something you’d like to edit, click the contribute button on any thing's page.</Text>
                </main>
                <aside>
                    <Text type="heading" className="wozz-home-sidebar">Behold! Here's a random thing</Text>
                </aside>
            </PageContainer>
        )
    }
}

export default HomePage;
