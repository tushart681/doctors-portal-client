import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctors = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate()
  const { data: specialties, isLoading } = useQuery({
    queryKey: ['specialty'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/appoinmentSpecialty');
      const data = await res.json();
      return data
    }
  })
  const handleAddDoctor = data => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url
          }
          fetch('http://localhost:5000/doctors', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accesstoken')}`
            },
            body: JSON.stringify(doctor)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
                toast(`${doctor.name} is added successfully`);
                navigate('/dashboard/managedoctors')
            })
        }
      })
  }
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div className='w-96 p-7'>
      <h2 className='text-4xl'>Add A Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label"><span className="label-text">name</span>
          </label>
          <input type="text" {...register('name', { required: 'Name Is Required' })} className="input input-bordered w-full max-w-xs" />
          {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label"><span className="label-text">Email</span>
          </label>
          <input type="email" {...register('email', { required: 'Email is Required' })} className="input input-bordered w-full max-w-xs" />
          {errors.email && <p className='text-red-600'>{errors?.email.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label"><span className="label-text">Specialty</span>
          </label>
          <select {...register('specialty', { required: 'option Is Required' })} className="select input-bordered w-full max-w-xs">
            {
              specialties.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
            }
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label"><span className="label-text">Photo</span>
          </label>
          <input type="file" {...register('img', { required: 'Photo Is Required' })} className="input input-bordered w-full max-w-xs" />
          {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
        </div>
        <input className='btn btn-accent w-full mt-8' value={'Add Doctor'} type="submit" />
      </form>
    </div>
  );
};

export default AddDoctors;