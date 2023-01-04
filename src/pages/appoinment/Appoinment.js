import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {
    const [selectedDate, setselectedDate] = useState(new Date())
    return (
        <div>
            <AppoinmentBanner selectedDate={selectedDate} setselectedDate={setselectedDate}></AppoinmentBanner>
            <AvailableAppoinment selectedDate={selectedDate}></AvailableAppoinment>
        </div>
    );
};

export default Appoinment;