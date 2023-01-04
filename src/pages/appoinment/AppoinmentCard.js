import React from 'react';

const AppoinmentCard = ({ result, setTreatment }) => {
    const { name, price, slots } = result;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className=" text-2xl text-secondary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0} htmlFor="booking-modal" onClick={() => setTreatment(result)} className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentCard;