import React from 'react';
import img1 from '../../../../assets/images/fluoride.png'
import img2 from '../../../../assets/images/cavity.png'
import img3 from '../../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const ServiceProvide = () => {
    const provider = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: img1
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: img2
        },
        {
            id: 3,
            name: 'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: img3
        },
    ]
    return (
        <div className='text-center mt-16'>
            <p className='text-secondary font-semibold text-xs'>OUR SERVICES</p>
            <h1 className='text-xl'>Services We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
            {
                provider.map(res => <ServiceCard key={res.id} res={res}></ServiceCard>)
            }
            </div>
        </div>
    );
};

export default ServiceProvide;