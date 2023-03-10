import { format } from 'date-fns/esm';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider'

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name: treatmentName, slots, price } = treatment;
    const date = format(selectedDate, 'PP')
    const { user } = useContext(AuthContext)
    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appoinmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('booking confirmed')
                    refetch()
                }
                else{
                    toast(data.message)
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        <select name="slot" className="input w-full input-bordered">
                            {
                                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                        <input name='email' type="email" defaultValue={user.email} disabled placeholder="Email" className="input w-full input-bordered" />
                        <input name='name' type="text" defaultValue={user.displayName} disabled placeholder="Full Name" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input type="submit" className="btn btn-accent w-full" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;