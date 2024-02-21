import React from 'react'

export default function UserProfile({params}: any) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h2>Profile</h2>
        <hr />
        <p className='text-4xl'>User Profile: 
            <span className='ml-2 px-2 bg-orange-500 rounded-lg'>{params.id}</span>
        </p>
    </div>
  )
}