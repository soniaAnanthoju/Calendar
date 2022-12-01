import './Header.css';
import CalendarIcon from './Image/google-calendar.png';
import ProfileIcon from './Image/profile.png';
import { AiOutlineSearch, AiOutlineQuestionCircle, AiOutlineSetting } from 'react-icons/ai';
import { IoApps } from 'react-icons/io5';
import { MdArrowDropDown } from 'react-icons/md';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

function Header () {
    return (
        <div className='header'>
            <div className='menu'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='calendar-icon'>
                <img alt='icon' src={CalendarIcon}></img>
            </div>
            <div className='header-calendar'>Calendar</div>
            <div className='today'>Today</div>
            <div className='arrow-header'><RiArrowLeftSLine color={"#5f6368"} size={30}></RiArrowLeftSLine></div>
            <div className='arrow-header'><RiArrowRightSLine color={"#5f6368"} size={30}></RiArrowRightSLine></div>
            <div className='month-header'>November 2022</div>
            <div className='outline-icon'>
                <span><AiOutlineSearch strokeWidth={30} color={"#5f6368"} size={27}></AiOutlineSearch></span>
                <span><AiOutlineQuestionCircle strokeWidth={30} color={"#5f6368"} size={27}></AiOutlineQuestionCircle></span>
                <span><AiOutlineSetting strokeWidth={30} color={"#5f6368"} size={27}></AiOutlineSetting></span>
            </div>
            <div className='week'>Week
                <div className='header-dropdown-icon'><MdArrowDropDown color={"#5f6368"} size={25}></MdArrowDropDown></div>
            </div>
            <div className='app-icon'><IoApps color={"#5f6368"} size={25}></IoApps></div>
            <div className='profile-icon'><img alt='profile_icon' src={ProfileIcon}></img></div>
        </div>
    );
}

export default Header;