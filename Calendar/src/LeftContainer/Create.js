import './Create.css';
import { MdArrowDropDown } from 'react-icons/md';

function Create() {

    return (
        <div className='create-box'>
            <button>
                <div className='svg-div'>
                    <svg width="45" height="45" viewBox="0 0 36 36">
                        <path fill='#34A853' d="M16 16v14h4V20z"></path>
                        <path fill='#4285F4' d="M30 16H20l-4 4h14z"></path>
                        <path fill='#FBBC05' d="M6 16v4h10l4-4z"></path>
                        <path fill='#EA4335' d="M20 16V6h-4v14z"></path>
                    </svg>
                </div>
                <div className='create'>Create</div>
                <div className='dropdown-icon'><MdArrowDropDown color={"#5f6368"} size={25}></MdArrowDropDown></div>
            </button>
            {/* <div>
                <div className='drop-down'>
                    <p value="event">Event</p>
                    <p value="task">Task</p>
                </div>
            </div> */}
        </div >
    );
}

export default Create;