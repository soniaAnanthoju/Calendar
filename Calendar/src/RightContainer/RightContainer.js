import CreateEventPopup from '../Popup/CreateEventPopup';
import './RightContainer.css';
import { useState } from 'react';

function RightContainer() {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [dayOfEvent, setDayOfEvent] = useState();
    const [dateOfEvent, setDateOfEvent] = useState();
    const [timeOfEvent, setTimeOfEvent] = useState();

    const [active, setActive] = useState(false);
  
    function createSunEventHandler(event) {
        setButtonPopup(true);
        setDayOfEvent("Sunday");
        setDateOfEvent(20);
        setTimeOfEvent(event.target.getAttribute("time"));
        setActive(!active);
    }

    function createMonEventHandler(event) {
        setButtonPopup(true);
        setDayOfEvent("Monday");
        setDateOfEvent(21);
        setTimeOfEvent(event.target.getAttribute("time"));
    }

    function createTueEventHandler(event) {
        setButtonPopup(true);
        setDayOfEvent("Tuesday");
        setDateOfEvent(22);
        setTimeOfEvent(event.target.getAttribute("time"));
    }

    function createWedEventHandler(event) {
        setButtonPopup(true);
        setDayOfEvent("Wednesday");
        setDateOfEvent(23);
        setTimeOfEvent(event.target.getAttribute("time"));
    }

    function createThuEventHandler(event) {
        setButtonPopup(true);
        setDayOfEvent("Thursday");
        setDateOfEvent(24);
        setTimeOfEvent(event.target.getAttribute("time"));
    }

    function createFriEventHandler(event) {
        setButtonPopup(true);
        setDayOfEvent("Friday");
        setDateOfEvent(25);
        setTimeOfEvent(event.target.getAttribute("time"));
    }

    function createSatEventHandler(event) {
        setButtonPopup(true);
        setDayOfEvent("Saturday");
        setDateOfEvent(26);
        setTimeOfEvent(event.target.getAttribute("time"));
    }

    const blocks = [];
    var i = 1;
    for (i = 1; i < 25; i++) {
        blocks.push(<div className='Time' key={i}>
            <div className='Time-gap'>{i}:00</div>
            <div className='Time-gap-seperation'></div>
            <div className='Time-event' time={i} onClick={createSunEventHandler}></div>
            <div className='Time-event' time={i} onClick={createMonEventHandler}></div>
            <div className='Time-event' time={i} onClick={createTueEventHandler}></div>
            <div className='Time-event' time={i} onClick={createWedEventHandler}></div>
            <div className='Time-event' time={i} onClick={createThuEventHandler}></div>
            <div className='Time-event' time={i} onClick={createFriEventHandler}></div>
            <div className='Time-event' time={i} onClick={createSatEventHandler}></div>
        </div>);
    }

    return (
        <div className='right-container'>
            <main>
                <div className='heading'>
                    <div className='heading-gap'></div>
                    <div className='heading-gap-seperation'></div>
                    <div className='heading-day-date'>
                        <div className='heading-day'>SUN</div>
                        <div className='heading-date'>20</div>
                    </div>
                    <div className='heading-day-date'>
                        <div className='heading-day'>MON</div>
                        <div className='heading-date'>21</div>
                    </div>
                    <div className='heading-day-date'>
                        <div className='heading-day'>TUE</div>
                        <div className='heading-date'>22</div>
                    </div>
                    <div className='heading-day-date'>
                        <div className='heading-day'>WED</div>
                        <div className='heading-date'>23</div>
                    </div>
                    <div className='heading-day-date'>
                        <div className='heading-day'>THU</div>
                        <div className='heading-date'>24</div>
                    </div>
                    <div className='heading-day-date'>
                        <div className='heading-day'>FRI</div>
                        <div className='heading-date'>25</div>
                    </div>
                    <div className='heading-day-date'>
                        <div className='heading-day'>SAT</div>
                        <div className='heading-date'>26</div>
                    </div>
                </div>
                <div className='GMT'>
                    <div className='GMT-gap'>GMT+05:30</div>
                    <div className='GMT-gap-seperation'></div>
                    <div className='GMT-event'></div>
                    <div className='GMT-event'></div>
                    <div className='GMT-event'></div>
                    <div className='GMT-event'></div>
                    <div className='GMT-event'></div>
                    <div className='GMT-event'></div>
                    <div className='GMT-event'></div>
                </div>
                <div className='time-scroll-bar'>
                    {blocks}
                </div>
            </main>
            <CreateEventPopup dayOfEvent={dayOfEvent} dateOfEvent={dateOfEvent} timeOfEvent={timeOfEvent} trigger={buttonPopup} setTrigger={setButtonPopup}></CreateEventPopup>
        </div>
    );
}

export default RightContainer;