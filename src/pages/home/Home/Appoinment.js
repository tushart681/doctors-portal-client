import React from 'react';
import img from '../../../assets/images/appointment.png'
import img1 from '../../../assets/images/doctor.png'

const Appoinment = () => {
    return (
        <section className='mt-32' style={{ background: `url(${img})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img1} className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <p className='text-secondary font-semibold text-xs'>Appointment</p>
                        <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Appointment</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appoinment;