import React, { useState } from 'react'
import login from '../assets/login.png'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password.length < 6){
            setError('Password must be at least 6 characters')
            return;
        }

        console.log(`name: ${name}`)
        console.log(`email: ${email}`)
        console.log(`password: ${password}`)

        navigate('/signin');
    }

  return (
    <div className='flex h-screen w-full'>
        <div className='w-full flex items-center justify-center px-6'>
            <div className='w-[400px] flex flex-col gap-5'>
                <div>
                    <h1 className='font-bold text-3xl text-gray-800'>Create Your Account</h1>
                    <p className='text-gray-500 mt-2'>Please enter your details</p>
                </div>
                <form 
                 onSubmit={handleSubmit}
                 className='flex flex-col gap-5'
                >
                    <TextField
                        onChange={(e) => setName(e.target.value)}
                        label="Name" variant="outlined" value={name} required 
                    />
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email" type="email" variant="outlined" value={email} required
                    />
                    <TextField onChange={(e) => setPassword(e.target.value)}
                     label="Password" type="password" variant="outlined" value={password} required
                    />

                    {error ? (
                        <p className='text-sm text-red-600'>Password must be at least 6 characters</p>
                    ) : null}

                    <Button variant="contained" type='submit' size='large' sx={{ textTransform: 'none' }}>
                        Sign up
                    </Button>
                </form>
                <p className='text-gray-500 text-sm text-center mt-6'>
                    Already have an account?
                    <span className='text-sm text-blue-500 cursor-pointer ml-1.5 hover:underline'>
                        <Link to='/signin'>Sign In</Link>
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

export default SignUp