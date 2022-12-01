import './CalendarBlock.css';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

function CalendarBlock() {
    return (
        <div className="calendar">
            <div className='calendar-top'>
                <div className='month'>November 2022</div>
                <div className='arrow-calendar'><RiArrowLeftSLine color={"#5f6368"} size={22}></RiArrowLeftSLine></div>
                <div className='arrow-calendar'><RiArrowRightSLine color={"#5f6368"} size={22}></RiArrowRightSLine></div>
            </div>
            <div className='calendar-head'>
                    <div className='day-name'>
                        <span>S</span>
                        <span>M</span>
                        <span>T</span>
                        <span>W</span>
                        <span>T</span>
                        <span>F</span>
                        <span>S</span>
                    </div>
                    <div className='date'>
                        <span>30</span>
                        <span>31</span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>
                    <div className='date'>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                        <span>11</span>
                        <span>12</span>
                    </div>
                    <div className='date'>
                        <span>13</span>
                        <span>14</span>
                        <span>15</span>
                        <span>16</span>
                        <span>17</span>
                        <span>18</span>
                        <span>19</span>
                    </div>
                    <div className='date'>
                        <span>20</span>
                        <span>21</span>
                        <span>22</span>
                        <span>23</span>
                        <span>24</span>
                        <span>25</span>
                        <span>26</span>
                    </div>
                    <div className='date'>
                        <span>27</span>
                        <span>28</span>
                        <span>29</span>
                        <span>30</span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </div>
                    <div className='date'>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                    </div>
            </div>
        </div>
    );
}

export default CalendarBlock;