import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const data = useLoaderData();
    const navigation = useNavigation
    const { treatment, price, appoinmentDate, slot } = data;
    if(navigation.state === 'loading'){
        return <progress className="progress w-56"></progress>
    }
    return (
        <div>
            <h3 className='text-3xl'>{treatment}</h3>
            <p className="text-xl">Please Pay <strong>${price}</strong> for Your appoinment on {appoinmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    data={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;