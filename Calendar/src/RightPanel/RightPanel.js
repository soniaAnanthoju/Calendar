import './RightPanel.css';
import KeepIcon from '../Image/keep.jpg';
import TasksIcon from '../Image/tasks.png';
import ContactsIcon from '../Image/contacts.jpg';
import MapsIcon from '../Image/maps.png';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';

function RightPanel() {
    return (
        <div className='right-panel'>
            <div className='right-panel-icons'>
                <div className='icon'><img alt='keep_icon' src={KeepIcon}></img></div>
                <div className='icon'><img alt='tasks_icon' src={TasksIcon}></img></div>
                <div className='icon'><img alt='contacts_icon' src={ContactsIcon}></img></div>
                <div className='icon'><img alt='maps_icon' src={MapsIcon}></img></div>
            </div>
            <div className='right-panel-plus-icon'><AiOutlinePlus strokeWidth={10} color={"black"} size={24}></AiOutlinePlus></div>
            <div className='right-panel-arrow-right-icon'><MdKeyboardArrowRight color={"#3c4043"} size={24}></MdKeyboardArrowRight></div>
        </div>
    );
}

export default RightPanel;