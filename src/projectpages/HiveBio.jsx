import React, { Component } from 'react';
import ItemTemplate from '../components/ItemTemplate';

import logoSketches from '../images/screenshots/hivebio/hb-logo-sketches.jpg';
import logoComparisons from '../images/screenshots/hivebio/hb-logo-comparison.png';
import additionalElements from '../images/screenshots/hivebio/hb-brand-elements.png';
import logoVertical from '../images/screenshots/hivebio/hb-logo-vertical.png';
import logoImageBG from '../images/screenshots/hivebio/hb-logo-onimg.png';
import bizCard from '../images/screenshots/hivebio/hb-biz-card.png';
import kitInstructions from '../images/screenshots/hivebio/hb-kit-instructions.png';
import kitSticker from '../images/screenshots/hivebio/hb-kit-sticker.png';

import flyerDino from '../images/screenshots/hivebio/flyer-dinosaurs_web.jpg';
import flyerBrain from '../images/screenshots/hivebio/flyer-brains-web_5-23-15.jpg';
import flyerDNA from '../images/screenshots/hivebio/flyer-DNA-web_3-14.jpg';
import flyerLotion from '../images/screenshots/hivebio/flyer-lotion_1-31-15_web.jpg';
import flyerPhylo from '../images/screenshots/hivebio/flyer-phylogenetics-web_5-16-15.jpg';
import flyerIllustration from '../images/screenshots/hivebio/flyer-illustration.jpg';

import pptExample from '../images/screenshots/hivebio/ppt-example.png';

import signWhatIs from '../images/screenshots/hivebio/sign-whatis.png';
import signSignUp from '../images/screenshots/hivebio/sign-SignUpForAClass.png';
import signToHB from '../images/screenshots/hivebio/sign-ToHiveBio-right.png';

import swarmLogo from '../images/screenshots/hivebio/swarm-logo.png';
import swarmNameTag from '../images/screenshots/hivebio/swarm-nametag.png';
import swarmSchedule from '../images/screenshots/hivebio/swarm-schedule.png';

class HiveBio extends Component {
    render() {
        return (
            <ItemTemplate cat={this.props.cat} itemName="HiveBio Community Lab">
                <p>
                    HiveBio Community Lab is a not-for-profit citizen science organization that seeks to build community amongst citizen scientists, provide science education at very low cost, and furnish the community with access to scientific equipment that would be otherwise out of reach.
                </p>
                <p>
                    I was HiveBio's Creative Director from 2014 to 2016. I was in charge of all creative for the company, including revamping the company's branding, as well as designing signage, marketing materials, packaging, powerpoint templates, company stationery, etc.
                </p>

                <h2>Branding update</h2>
                <p>The first thing I did for HiveBio was create a new, more flexible logo and a style guide for colors, typography, and the use of photography and other brand elements.</p>

                <p>This process involved sketching, working closely with HiveBio's CEO, and getting buy-off from the executive team before implementing across the wide range of HiveBio's materials.</p>

                <div className="diagram">
                    <img src={logoSketches} alt="logo sketches" />
                    <p>Early logo sketches</p>
                </div>

                <div className="diagram">
                    <img src={logoComparisons} alt="logo comparison" />
                    <p>Original logo vs. my  redesign</p>
                </div>

                <div className="diagram">
                    <img src={additionalElements} alt="additional brand elements" />
                    <p>Additional brand elements</p>
                </div>

                <div className="diagram flow">
                    <div>
                        <img src={logoVertical} alt="vertical lockup" />
                        <p>Logo vertical lockup</p>
                    </div>
                    <div>
                        <img src={logoImageBG} alt="logo on image background" />
                        <p>Logo on image background</p>
                    </div>
                    <div>
                        <img src={bizCard} alt="new business card" />
                        <p>Updated business card design</p>
                    </div>
                </div>

                <div className="diagram flow">
                    <div>
                        <img src={kitInstructions} alt="microscope kit instructions" />
                    </div>
                    <div>
                        <img src={kitSticker} alt="microscope kit sticker" />
                    </div>
                    <p>Microscope kit instructions and sticker</p>
                </div>

                <h2>Flyers</h2>
                <p>HiveBio runs regular science classes, and I designed flyers for a lot of them during my time there. I also created a template so that others could create materials with consistent branding.</p>

                <p>The flyers were posted on a number of social media sites online as well as real-life gathering places, so I created web and print versions for each one.</p>

                <p>Here are a few I designed.</p>

                <div className="diagram flow">
                    <div>
                        <img src={flyerDino} alt="HiveBio flyer" />
                    </div>
                    <div>
                        <img src={flyerBrain} alt="HiveBio flyer" />
                    </div>
                    <div>
                        <img src={flyerDNA} alt="HiveBio flyer" />
                    </div>
                    <div>
                        <img src={flyerLotion} alt="HiveBio flyer" />
                    </div>
                    <div>
                        <img src={flyerPhylo} alt="HiveBio flyer" />
                    </div>
                    <div>
                        <img src={flyerIllustration} alt="HiveBio flyer" />
                    </div>
                </div>

                <h2>Presentations</h2>
                <p>I designed a a PowerPoint template for HiveBio, which has been used for a number of presentations, including for the annual board of directors meeting.</p>

                <div className="diagram">
                    <img src={pptExample} alt="PowerPoint slide example" />
                    <p>Example slide using my template</p>
                </div>

                <p>For HiveBio's "How to Build a Dinosaur" class, I designed a whole custom presentation.</p>
                <div className="diagram">
                    <div className="video">
                        <iframe width="630" height="473" src="https://www.youtube.com/embed/5AtorJYMScs" frameborder="0" allowfullscreen=""></iframe>
                    </div>
                    <p>Video of the presentation I designed, narrated by the teacher of the class</p>
                </div>

                <h2>Signage</h2>
                <p>At HiveBio, I also designed a number of signs to be posted around the lab, as well as promotional signs used at conventions.</p>
                <div className="diagram">
                    <img src={signWhatIs} alt="HiveBio signage" />
                    <p>Sign posted at conventions explaining what HiveBio is about</p>
                </div>
                <div className="diagram">
                    <img src={signSignUp} alt="HiveBio signage" />
                    <p>Promotional sign posted in the lab</p>
                </div>
                <div className="diagram">
                    <img src={signToHB} alt="HiveBio signage" />
                    <p>Wayfinding sign to help navigate the building that houses HiveBio</p>
                </div>

                <h2>Swarm conference</h2>
                <p>HiveBio organized a regional gathering of maker spaces in the pacific northwest called Swarm. I created a separate brand for Swarm, unrelated to HiveBio's branding.</p>
                <div className="diagram">
                    <img src={swarmLogo} alt="Swarm materials" />
                    <p>Swarm logo</p>
                </div>
                <div className="diagram flow">
                    <div>
                        <img src={swarmSchedule} alt="Swarm materials" />
                        <p>Schedule handed out to attendees</p>
                    </div>
                    <div>
                        <img src={swarmNameTag} alt="Swarm materials" />
                        <p>Name tags for attendees</p>
                    </div>
                </div>
            </ItemTemplate>
        );
    }
}

export default HiveBio;
