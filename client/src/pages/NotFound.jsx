import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='text-center'>
            <h1 className='text-red-500 text-9xl font-bold font-mono'>
                404
            </h1>
            <p className='text-3xl text-gray-600 mt-4'>Oops! Page not found</p>

            <Link to="/dashboard" className='inline-block mt-6 px-5 py-2 bg-blue-500 text-white rounded-lg  hover:bg-blue-600 hover:underline'>
                Go Back Home
            </Link>
        </div>
    </div>
  )
}

export default NotFound