import React from 'react';

const Card = ({res}) => {
    const {title, description, image, bgClass} = res;
    return (
        <div className={`card p-6 md:card-side shadow-xl text-white ${bgClass}`}>
         <figure>
                <img src={image} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;