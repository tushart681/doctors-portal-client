import React from 'react';
import img from '../../../assets/images/bg.png'
import img1 from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse" style={{background: `url(${img})`}}>
    <img src={img1} className=" lg:w-1/2 rounded-lg shadow-2xl mx-7 my 56" alt=''/>
    <div className='p-8 mx-12 my-64'>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;