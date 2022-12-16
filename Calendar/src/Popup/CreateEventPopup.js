import './CreateEventPopup.css';
import { ImCross } from 'react-icons/im';
import { BiTimeFive } from 'react-icons/bi';
import { useEffect, useState } from 'react';

function CreateEventPopup(props) {

    const [saveTitleOfEvent, setSaveTitleOfEvent] = useState([]);
    const [titleOfEvent, setTitleOfEvent] = useState([]);

    let sendData = props.sendData;

    useEffect(()=> {
        sendData(titleOfEvent);
    }, [titleOfEvent, sendData]);

    function closePopupHandler() {
        props.setTrigger(false);
    }

    function addTitleHandler(event) {
        setSaveTitleOfEvent(event.target.value);
    }

    function saveTitleHandler(event) {
        setSaveTitleOfEvent(saveTitleOfEvent);
        setTitleOfEvent(saveTitleOfEvent);
        console.log(titleOfEvent);
        setSaveTitleOfEvent('');
        props.setTrigger(false);
    }

    return (props.trigger) ? (
        <div className='pop-up'>
            <div className='pop-up-header'>
                <div className='menu-pop-up'>
                    <div></div>
                    <div></div>
                </div>
                <div className='cross' onClick={closePopupHandler}><ImCross></ImCross></div>
            </div>
            <div className='pop-up-body'>
                <div className='add-title'><input id="add-title" placeholder="Add title" onChange={addTitleHandler} value={saveTitleOfEvent} /></div>
                <div className='event-type'>
                    <button>Event</button>
                    <button>Task</button>
                    <button>Reminder</button>
                </div>
                <div>
                    <div className='clock-icon'><BiTimeFive size={25}></BiTimeFive></div>
                    <div className='day-date-time'>{props.dayOfEvent}, November {props.dateOfEvent} &nbsp;&nbsp;&nbsp; {props.timeOfEvent - 1}:00 - {props.timeOfEvent}:00</div>
                </div>
            </div>
            <div className='pop-up-footer'>
                <div className='more-options'>More Options</div>
                <button onClick={saveTitleHandler}>Save</button>
            </div>
        </div>
    ) : "";
}

export default CreateEventPopup;