import img from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import img1 from '../../assets/images/bg.png'

const AppoinmentBanner = ({selectedDate, setselectedDate}) => {
    return (
        <header className='my-6'>
            <div className="hero" style={{background: `url(${img1})`}}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
                    <div className='mr-6'>
                        <DayPicker 
                        mode='single'
                        selected={selectedDate}
                        onSelect={setselectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppoinmentBanner;