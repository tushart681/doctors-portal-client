import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
  const {login, googleSignIn} = useContext(AuthContext)
  const [LoginError, setLoginError] = useState('')
  const { register, formState: { errors }, handleSubmit } = useForm()
  const [emailUser, setEmailUser] = useState('');
  const [token] = useToken(emailUser)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'
  if(token){
    navigate(from, {replace: true})
  }
  const handleLogin = data => {
    console.log(data)
    setLoginError('')
    login(data.email, data.password)
    .then(res => {
      const user = res.user;
      console.log(user)
      setEmailUser(data.email);
    })
    .catch(err => {
      console.error(err)
      setLoginError(err.message)
    })
  }
  const handleGoogle = () => {
    googleSignIn()
    .then(res => {
      const user = res.user
      setEmailUser(user.email)
    })
    .catch(err => console.error(err))
  }
  return (
    <div className='h-[800px] flex justify-center items-center'>
      <div className='w-96 p-7'>
        <h2 className='text-3xl'>login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email", {required: "Email Address is required"})} className="input input-bordered w-full max-w-xs" />
            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password", {required: "Password is required"})} className="input input-bordered w-full max-w-xs" />
            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
            <label className="label"><span className="label-text">Forget Password</span>
            </label>
          </div>
          <input className='btn btn-accent w-full' value={'Login'} type="submit" />
          <div>
            {
              LoginError && <p className='text-red-600'>{LoginError}</p>
            }
          </div>
        </form>
        <div className="divider mt-4">OR</div>
        <button onClick={handleGoogle} className='btn btn-outline w-full mt-6'>CONTINUE WITH GOOGLE</button>
        <p className='text-sm font-semibold text-center mt-3'>New to Doctors Portal? <Link className='text-secondary' to={'/signup'}>Create new account</Link></p>
      </div>
    </div>
  );
};

export default Login;