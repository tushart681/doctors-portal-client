import React from 'react';
import image from '../../../assets/images/appointment.png'

const ContractUs = () => {
    return (
        <section style={{background: `url(${image})`}}>
            <div className='text-center' style={{background: `url(${image})`}}>
            <p className='text-secondary font-semibold text-xs mt-2'>Contact Us</p>
            <h2 className='text-2xl'>Stay connected with us</h2>
            <div className='mt-4 grid grid-rows-2 justify-center gap-2'>
            <input type="text" placeholder="Email Address" className="input w-full max-w-xs" />
            <input type="text" placeholder="Subject" className="input w-full max-w-xs" />
            <textarea className="textarea" placeholder="Your message"></textarea>
            </div>
            <button className="mt-4 mb-6 btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Submit</button>
            </div>
        </section>
    );
};

export default ContractUs;