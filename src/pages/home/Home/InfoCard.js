import React from 'react';
import img1 from '../../../assets/icons/clock.svg'
import img2 from '../../../assets/icons/marker.svg'
import img3 from '../../../assets/icons/phone.svg'
import Card from './Card';

const InfoCard = () => {
  const card = [
    {
      id: 1,
      title: 'Opening Hours',
      description: 'Lorem Ipsum is simply dummy text of the pri',
      image: img1,
      bgClass: 'bg-gradient-to-r from-primary to-secondary'
    },
    {
      id: 2,
      title: 'Visit our location',
      description: 'Brooklyn, NY 10036, United States',
      image: img2,
      bgClass: 'bg-accent'
    },
    {
      id: 3,
      title: 'Contact us now',
      description: '+000 123 456789',
      image: img3,
      bgClass: 'bg-gradient-to-r from-primary to-secondary'
    }
  ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8'>
          {
            card.map(res => <Card key={res.id} res={res}></Card>)
          }
        </div>
    );
};

export default InfoCard;