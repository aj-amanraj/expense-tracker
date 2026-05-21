import React from 'react'
import login from '../assets/login.png'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const SignUp = () => {
  return (
    <div className='flex h-screen w-full'>
        <div className='w-full flex items-center justify-center px-6'>
            <div className='w-[400px] flex flex-col gap-5'>
                <div>
                    <h1 className='font-bold text-3xl text-gray-800'>Create Your Account</h1>
                    <p className='text-gray-500 mt-2'>Please enter your details</p>
                </div>
                <form className='flex flex-col gap-5'>
                    <TextField label="Name" variant="outlined"  />
                    <TextField label="Email" type="email" variant="outlined"  />
                    <TextField label="Password" type="password" variant="outlined"  />

                    <Button variant="contained" size='large' sx={{ textTransform: 'none' }}>Sign up</Button>
                </form>
                <p className='text-gray-500 text-sm text-center mt-6'>Already have an account?
                    <span className='text-sm text-blue-500 cursor-pointer ml-1.5 hover:underline'>Sign In</span>
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