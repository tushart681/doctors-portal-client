import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useState } from 'react';
import Loading from '../shared/Loading';
import AppoinmentCard from './AppoinmentCard';
import BookingModal from './BookingModal';

const AvailableAppoinment = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')
    const {data:appoinmentOption = [], refetch, isLoading} = useQuery({
        queryKey: ['appoinmentOption', date],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/v2/appoinmentOption?date=${date}`);
            const data = await res.json();
            return data
        } 
    })
    if(isLoading){
        return <Loading />
    }
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-6'>
                {
                    appoinmentOption.map(result => <AppoinmentCard key={result._id} result={result} setTreatment={setTreatment}></AppoinmentCard>)
                }
            </div>
            {
                treatment &&
                <BookingModal treatment={treatment} setTreatment={setTreatment} refetch={refetch} selectedDate={selectedDate}></BookingModal>
            }
        </section>
    );
};

export default AvailableAppoinment;