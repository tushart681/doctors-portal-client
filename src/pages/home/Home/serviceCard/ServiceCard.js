import React from 'react';

const ServiceCard = ({res}) => {
    const {name, description, image} = res
    return (
        <div className="card w-96 bg-base-100 shadow-xl p-11">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
  </div>
</div>
    );
};

export default ServiceCard;