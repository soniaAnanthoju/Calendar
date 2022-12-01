import './LeftContainer.css';
import Create from './Create';
import CalendarBlock from './CalendarBlock';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlinePeopleAlt, MdKeyboardArrowUp } from 'react-icons/md';

function LeftContainer() {

    const [isMyCalendarExpanded, setMyCalendarExpanded] = useState(false);
    const [isOtherCalendarExpanded, setOtherCalendarExpanded] = useState(false);

    function myCalendarClickHandler() {
        setMyCalendarExpanded(!isMyCalendarExpanded);
    }

    function otherCalendarClickHandler() {
        setOtherCalendarExpanded(!isOtherCalendarExpanded);
    }

    const myCalendars = [
        { calendarName: 'soniaananthoju' },
        { calendarName: 'Reminders' },
        { calendarName: 'Tasks' }
    ];

    const otherCalendars = [
        { calendarName: 'ECE 4TH YEAR A' },
        { calendarName: 'Holidays in India' },
        { calendarName: 'IV ECE A&B' },
        { calendarName: 'VIII SEM ECE (2019-20) B' }
    ];
    console.log('my-calendar-icon' + (!isMyCalendarExpanded ? '.inValid' : ''));

    return (
        <div className='left-container'>
            <Create></Create>
            <div className='scroll-bar'>
                <CalendarBlock></CalendarBlock>
                <div className='search-for-people'>
                    <span><MdOutlinePeopleAlt color={"#5f6368"} size={25}></MdOutlinePeopleAlt></span>
                    <span id='search-for-people'>Search for people</span>
                </div>
                <div>
                    <div className='calendars'>
                        <div className='my-calendar' onClick={myCalendarClickHandler}>
                            <div id='my-calendar'>My calendars</div>
                            <div className="my-calendar-icon" onClick={myCalendarClickHandler} ><MdKeyboardArrowUp id='my-calendar-icon' color={"#3c4043"} size={30}></MdKeyboardArrowUp></div>
                        </div>
                        {isMyCalendarExpanded ? (
                            myCalendars.map((names) => {
                                return (
                                    <div>
                                        <span className='check-box'><input id="check-box" type="checkbox"></input></span>
                                        <span className='login-name'>{names.calendarName}</span>
                                    </div>
                                )
                            })
                        ) : null}
                        <div className='my-calendar' onClick={otherCalendarClickHandler}>
                            <div id='other-calendar'>Other calendars</div>
                            <div className='my-calendar-plus-icon'><AiOutlinePlus id='my-calendar-icon' strokeWidth={15} color={"#5f6368"} size={24}></AiOutlinePlus></div>
                            <div className='my-calendar-icon'><MdKeyboardArrowUp id='my-calendar-icon' color={"#3c4043"} size={30}></MdKeyboardArrowUp></div>
                        </div>
                        {isOtherCalendarExpanded ? (
                            otherCalendars.map((names) => {
                                return (
                                    <div>
                                        <span className='check-box'><input id="check-box" type="checkbox"></input></span>
                                        <span className='login-name'>{names.calendarName}</span>
                                    </div>
                                )
                            })
                        ) : null}
                        <div className='terms-privacy'>Terms - Privacy</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftContainer;