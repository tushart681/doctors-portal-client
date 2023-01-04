import React from 'react';
import Banner from './Banner';
import InfoCard from './InfoCard';
import ServiceProvide from '../Home/serviceCard/ServiceProvide'
import Banner2 from './Banner2';
import Appoinment from './Appoinment';
import Testimonial from './Testimonial';
import ContractUs from './ContractUs';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCard />
            <ServiceProvide />
            <Banner2 />
            <Appoinment />
            <Testimonial />
            <ContractUs />
            
        </div>
    );
};

export default Home;