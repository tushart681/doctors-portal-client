import React from 'react';

const TestiCard = ({ res }) => {
    const { description, name, location, image } = res;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
                <div className="flex card-actions">
                    <img className='w-20 rounded' src={image} alt="" />
                    <div className='grid grid-rows-2'>
                        <h2 className="card-title">{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestiCard;