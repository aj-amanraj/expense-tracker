import React, { useState } from 'react'
import login from '../assets/login.png'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import { signInUser } from '../api/auth.js'

const SignIn = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    if(password.length < 6){
      setError('Password must be at least 6 characters');
      return;
    }
    
    try {
      
      const data = await signInUser({
        email,
        password
      });

      //save token
      localStorage.setItem(
        "token", data.token
      );
      // save user for Welcome banner
      localStorage.setItem(
        "user", JSON.stringify(data.user)
      );

      navigate('/dashboard')

    } catch (error) {
      setError(
        error.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className='flex h-screen w-full'>
      <div className='w-full flex items-center justify-center px-6'>
        <div className='w-[400px] flex flex-col gap-5'>
          <div>
            <h1 className='font-bold text-3xl text-gray-800'>Welcome Back</h1>
            <p className='text-gray-500 mt-2'>Please enter your details</p>
          </div>
          <form 
            className='flex flex-col gap-5'
            onSubmit={handleSubmit}>
            <TextField
             label="Email" type="email" variant="outlined" value={email} required
             onChange={(e) => setEmail(e.target.value)}  />

            <TextField 
            label="Password" type="password" variant="outlined" value={password} required
              onChange={(e) => setPassword(e.target.value)}  />

            {error ? (
              <p className='text-sm text-red-600'>{error}</p>
            ) : null}

            <Button variant="contained" size='large' type='submit' sx={{ textTransform: 'none' }}>
              Sign in
            </Button>

          </form>
          <p className='text-gray-500 text-sm text-center mt-6'>Don't have an account?
            <span className='text-sm text-blue-500 cursor-pointer ml-1.5 hover:underline'>
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
          
        </div>
      </div>

      <div className='w-full h-full hidden md:block'>
        <img className='w-full h-full object-cover' src={login} />
      </div>
    </div>
  )
}

export default SignIn