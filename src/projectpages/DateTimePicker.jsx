import React, { Component } from 'react';
import ItemTemplate from '../components/ItemTemplate';

import DTPWin32 from '../images/screenshots/datetimepicker/dtp-win32.gif';
import DTPWindows8 from '../images/screenshots/datetimepicker/dtp-win8.gif';
import DTPWindowsPhone from '../images/screenshots/datetimepicker/dtp-winphone.gif';

import DTPExploration1 from '../images/screenshots/datetimepicker/dtp-exp-1.png';
import DTPExploration2 from '../images/screenshots/datetimepicker/dtp-exp-2.png';
import DTPExploration3 from '../images/screenshots/datetimepicker/dtp-exp-3.png';
import DTPExploration4 from '../images/screenshots/datetimepicker/dtp-exp-4.png';
import DTPExploration5 from '../images/screenshots/datetimepicker/dtp-exp-5.png';
import DTPExploration6 from '../images/screenshots/datetimepicker/dtp-exp-6.png';
import DTPExploration7 from '../images/screenshots/datetimepicker/dtp-exp-7.png';
import DTPExploration8 from '../images/screenshots/datetimepicker/dtp-exp-8.png';

import DTPSolutionDate from '../images/screenshots/datetimepicker/dtp-date-solution.gif';
import DTPSolutionTime from '../images/screenshots/datetimepicker/dtp-time-solution.gif';
import DTPSolutionConstrained from '../images/screenshots/datetimepicker/dtp-constrained.png';
import DTPSolution24Hr from '../images/screenshots/datetimepicker/dtp-24hr.png';

import DTPVisualDate from '../images/screenshots/datetimepicker/dtp-date-visual.gif';
import DTPVisualTime from '../images/screenshots/datetimepicker/dtp-time-visual.gif';

class DateTimePicker extends Component {
    render() {
        return (
            <ItemTemplate cat={this.props.cat} itemName="Windows 10 DateTime Picker">
                <p>I worked on the Windows design team at Microsoft during the transition from Windows 8 and Windows Phone 8 to Windows 10. One of the big challenges for my team at that time was building an operating system UI that would work on giant 4K monitors all the way down to phones, smart watches, and even devices with no screens. That work started with the system controls and figuring out how to reconcile the interaction differences between not just drastically different screensizes, but also very different input methods.</p>

                <h2>DateTime Picker</h2>
                <p>On this project, I helped with several different controls, participating in discussions and critiques, but my main task was to work on the DateTime Picker control.</p>

                <p>As the name implies, this control allows the user to pick a date or time. Before Windows 10, there were a number of different controls with wildly different interaction models and visual treatments.</p>

                <div className="diagram flow">
                    <div>
                        <img src={DTPWin32} alt="Win32 DateTime Picker" />
                        <p>Win32 DateTime Picker</p>
                    </div>
                    <div>
                        <img src={DTPWindows8} alt="Windows 8 DateTime Picker" />
                        <p>Windows 8 DateTime Picker</p>
                    </div>
                    <div>
                        <img src={DTPWindowsPhone} alt="Windows Phone DateTime Picker" />
                        <p>Windows Phone DateTime Picker</p>
                    </div>
                </div>

                <h3>Exploration</h3>
                <p>I explored a number of different possible interactions, got feedback from my peers, and created prototypes in real code to help understand the impact of my decisions and so that we could run user studies on the UI.</p>

                <div className="diagram flow">
                    <div>
                        <img src={DTPExploration8} alt="DateTime Picker exploration" />
                    </div>
                    <div>
                        <img src={DTPExploration6} alt="DateTime Picker exploration" />
                    </div>
                    <div>
                        <img src={DTPExploration5} alt="DateTime Picker exploration" />
                    </div>
                    <div>
                        <img src={DTPExploration7} alt="DateTime Picker exploration" />
                    </div>
                    <div>
                        <img src={DTPExploration1} alt="DateTime Picker exploration" />
                    </div>
                    <div>
                        <img src={DTPExploration4} alt="DateTime Picker exploration" />
                    </div>
                    <div>
                        <img src={DTPExploration2} alt="DateTime Picker exploration" />
                    </div>
                    <div>
                        <img src={DTPExploration3} alt="DateTime Picker exploration" />
                    </div>
                    <p>A few of my explorations for DateTime Picker</p>
                </div>

                <h3>Solution</h3>
                <p>The feedback from the prototype was very informative. As I arrived at my solution, I made sure to think through touch vs. mouse interaction, alternate time formats, situations where the timeframe would be constrained, what increments of time a developer might want to specify for the control, and more.</p>

                <div className="diagram flow">
                    <div>
                        <img src={DTPSolutionDate} alt="My solution for picking dates" />
                        <p>My solution for picking dates</p>
                    </div>
                    <div>
                        <img src={DTPSolutionTime} alt="My solution for picking a time" />
                        <p>My solution for picking a time</p>
                    </div>
                    <br />
                    <div>
                        <img src={DTPSolutionConstrained} alt="User can only choose months in 2014 or later" />
                        <p>User can only choose months in 2014 or later</p>
                    </div>
                    <div>
                        <img src={DTPSolution24Hr} alt="24 hour time picker" />
                        <p>24 hour time picker</p>
                    </div>
                </div>

                <h3>Shipping</h3>
                <p>I passed my interaction design off to the Windows Visual Design team to create visuals consistent with the rest of the operating system. They did their work and passed the final designs off to the controls engineering team, and the control became part of Windows 10.</p>

                <div className="diagram flow">
                    <div>
                        <img src={DTPVisualDate} alt="My solution for picking dates" />
                    </div>
                    <div>
                        <img src={DTPVisualTime} alt="My solution for picking a time" />
                    </div>
                    <p>DateTime Picker final visuals (not my work) shipped in Windows 10</p>
                </div>
            </ItemTemplate>
        );
    }
}

export default DateTimePicker;
