import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../pages/shared/ConfirmationModal';
import Loading from '../pages/shared/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const closemodal = () => {
        setDeletingDoctor(null)
    }
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accesstoken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
                
            }
        }
    });
    const handleDeleteDoctor = doctor => {
        console.log(doctor)
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accesstoken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`doctor ${doctor.name} deleted successfully`);
            }
        })
    }
    if(isLoading){
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-3xl'>Manage Doctors: {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={doctor.image} alt='' />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                <label onClick={()=> setDeletingDoctor(doctor)} htmlFor="confirm-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal 
                title={`are you sure you want to delete ?`}
                message={`if you delete ${deletingDoctor.name}. it cannot be undone.`}
                successAction={handleDeleteDoctor}
                successButtonName='Delete'
                modalData={deletingDoctor}
                closemodal={closemodal}>
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;