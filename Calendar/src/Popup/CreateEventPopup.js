import './CreateEventPopup.css';
import { ImCross } from 'react-icons/im';
import { BiTimeFive } from 'react-icons/bi';

function CreateEventPopup(props) {
    
    function closePopupHandler() {
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
                <div className='add-title'><input id="add-title" placeholder="Add title" /></div>
                <div className='event-type'>
                    <button>Event</button>
                    <button>Task</button>
                    <button>Reminder</button>
                </div>
                <div>
                    <div className='clock-icon'><BiTimeFive size={25}></BiTimeFive></div>
                    <div className='day-date-time'>{props.dayOfEvent}, November {props.dateOfEvent} &nbsp;&nbsp;&nbsp; {props.timeOfEvent-1}:00 - {props.timeOfEvent}:00</div>
                </div>
            </div>
            <div className='pop-up-footer'>
                <div className='more-options'>More Options</div>
                <button>Save</button>
            </div>
        </div>
    ) : "";
}

export default CreateEventPopup;