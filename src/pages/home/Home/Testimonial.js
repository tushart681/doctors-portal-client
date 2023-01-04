import React from 'react';
import quoto from '../../../assets/icons/quote.svg'
import img1 from '../../../assets/images/people1.png'
import img2 from '../../../assets/images/people2.png'
import img3 from '../../../assets/images/people3.png'
import TestiCard from './TestiCard';

const Testimonial = () => {
    const testimonialCard = [
        {
            _id:1,
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name:'Winson Herry',
            location:'California',
            image:img1
        },
        {
            _id:2,
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name:'Winson Herry',
            location:'California',
            image:img2
        },
        {
            _id:3,
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name:'Tushar',
            location:'Mirpur-11-Dhaka',
            image:img3
        }
    ]
    return (
        <section className='mt-20'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-secondary font-semibold text-xs'>Testimonial</p>
                    <h2 className='text-2xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quoto} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    testimonialCard.map(res => <TestiCard key={res._id} res={res}></TestiCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;