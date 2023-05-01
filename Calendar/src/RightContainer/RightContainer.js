import CreateEventPopup from '../Popup/CreateEventPopup';
import './RightContainer.css';
import { useState } from 'react';

var dayMappings = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
}

// var eventDetailsData = [
//     {
//         title: "Learning Javascript",
//         isItAllDay: false,
//         day: "daily",
//         date: null,
//         // time: 7-8
//         fromTime: new Date(2022, 11, 22, 7, 0, 0, 0),
//         toTime: new Date(2022, 11, 22, 8, 0, 0, 0)
//     },
//     {
//         title: "Grab A Job",
//         isItAllDay: false,
//         day: "Tuesday",
//         date: new Date('2020-11-22'),
//         // time: 16-18
//         fromTime: new Date(2022, 11, 22, 16, 0, 0, 0),
//         toTime: new Date(2022, 11, 22, 18, 0, 0, 0)
//     },
//     {
//         title: "Guru Tegh Bahadur's Martyrdom Day",
//         isItAllDay: true,
//         day: "Thursday",
//         date: new Date('2020-11-24'),
//         // time: All day
//         fromTime: null,
//         toTime: null
//     },
// ]

// var eventDetailsDataTest = [
//     {
//         title: "Learning Javascript",
//         isItAllDay: false,
//         day: "daily",
//         date: null,
//         // time: 7-8
//         startTime: new Date(2022, 11, 22, 7, 0, 0, 0),
//         numberOfDivisionsToFillAfter: 1
//     },
//     {
//         title: "Grab A Job",
//         isItAllDay: false,
//         day: "Tuesday",
//         date: new Date('2020-11-22'),
//         // time: 16-18
//         startTime: new Date(2022, 11, 22, 16, 0, 0, 0),
//         numberOfDivisionsToFillAfter: 2
//     },
//     {
//         title: "Guru Tegh Bahadur's Martyrdom Day",
//         isItAllDay: true,
//         day: "Thursday",
//         date: new Date('2020-11-24'),
//         // time: All day
//         startTime: null,
//         numberOfDivisionsToFillAfter: null
//     },
// ]

function RightContainer() {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [timeOfEvent, setTimeOfEvent] = useState();
    const [dayOfEvent, setDayOfEvent] = useState();
    const [eventTitle, setEventTitle] = useState();

    function sendData(data) {
        setEventTitle(data);
    }

    function createEventHandler(event) {
        setButtonPopup(true);
        setTimeOfEvent(event.target.getAttribute("time"));
        setDayOfEvent(dayMappings[event.target.getAttribute("day")]);
    }

    const timeBlock = [];
    for (let i = 1; i < 25; i++) {
        const individualBlock = [];
        for (let j = 0; j < 7; j++) {
            individualBlock.push(<div className='Time-event-block' onClick={createEventHandler} time={i} day={j}></div>)
        }
        timeBlock.push(<div className='Time' key={i}>
            <div className='Time-gap'>{i}:00</div>
            <div className='Time-gap-seperation'></div>
            <div className='Time-event'>{individualBlock}</div>
        </div>);
    }

    return (
        <div className='right-container'>
            {eventTitle}
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
                    {timeBlock}
                </div>
            </main>
            <CreateEventPopup
                sendData={sendData}
                timeOfEvent={timeOfEvent}
                dayOfEvent={dayOfEvent}
                trigger={buttonPopup}
                setTrigger={setButtonPopup}>
            </CreateEventPopup>
        </div>
    );
}

export default RightContainer;