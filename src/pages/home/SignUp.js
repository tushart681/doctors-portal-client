import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {register, formState: {errors}, handleSubmit} = useForm()
    const {createUser, googleSignIn, updateUser} = useContext(AuthContext)
    const [sinupError, setSinupError] = useState('')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/login';
    const [createdEmail, setCreatedEmail] = useState('')
    const [token] = useToken(createdEmail)
    console.log(token)
    const navigate = useNavigate()
    if(token){
      navigate(from, {replace: true})
    }
    const handleSinup = data => {
      console.log(data)
      setSinupError('')
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user)
            toast('user created successfully')
            const userInfo = {
              displayName: data.name
            }
            updateUser(userInfo)
            .then(() => {
              saveUser(data.name, data.email)
            })
            .catch(err => console.error(err))
        })
        .catch(error => {
          setSinupError(error.message)
        })
    }
    const handleGoogle = () => {
      googleSignIn()
      .then(res => {
        const user = res.user
        console.log(user)
        saveUser(user.displayName, user.email)
        setCreatedEmail(user.email)
      })
      .catch(err => console.error(err))
    }
    const saveUser = (name, email) => {
      const user = {name, email};
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        setCreatedEmail(email)
      })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
      <div className='w-96 p-7'>
        <h2 className='text-3xl'>sign Up</h2>
        <form onSubmit={handleSubmit(handleSinup)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">name</span>
            </label>
            <input type="text" {...register('name', {required: 'Name Is Required'})} className="input input-bordered w-full max-w-xs" />
            {errors.name && <p className='text-red-600'>{errors.name?.message}</p> }
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span>
            </label>
            <input type="email" {...register('email', {required: 'Email is Required'})} className="input input-bordered w-full max-w-xs" />
            {errors.email && <p className='text-red-600'>{errors?.email.message}</p> }
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span>
            </label>
            <input type="password" {...register('password', {required: 'Password Is Required', minLength: {value: 7, message: 'Password Must Be Atleast Seven Carecters'}, pattern: {value: /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z])/, message: 'For Strong Password, You Must Be Input: minimum two UpperCase, Two LowerCase, Two Carecteristicks and one number'}})} className="input input-bordered w-full max-w-xs" />
            {errors.password && <p className='text-red-600'>{errors?.password.message}</p> }
          </div>
          <input className='btn btn-accent w-full mt-8' value={'Sign Up'} type="submit" />
          {sinupError && <p className='text-red-600'>{sinupError}</p> }
        </form>
        <p className='text-sm font-semibold text-center mt-3'>Already Have an Account? <Link className='text-secondary' to={'/login'}>Please Login</Link></p>
        <div className="divider mt-4">OR</div>
        <button onClick={handleGoogle} className='btn btn-outline w-full mt-6'>CONTINUE WITH GOOGLE</button>
      </div>
    </div>
    );
};

export default SignUp;