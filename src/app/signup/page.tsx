'use client';
import Link from 'next/link';
import React from 'react'

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: ""
  })

  const onSignUp = async() => {

  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h2 className='text-center text-2xl mb-4 font-bold'>SignUp</h2>
        <hr />
        <label htmlFor="username">User Name:</label>
        <input 
        className='border-2 border-purple-400 rounded-md p-2 focus:outline-none focus:border-purple-800 '
        type="text" 
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value}) }
        placeholder='username'
        id="username"
         />
        <label htmlFor="email">Email:</label>
        <input 
        className='border-2 border-purple-400 rounded-md p-2 focus:outline-none focus:border-purple-800 '
        type="email" 
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value}) }
        placeholder='email'
        id="email"
         />
        <label htmlFor="email">Password:</label>
        <input 
        className='border-2 border-purple-400 rounded-md p-2 focus:outline-none focus:border-purple-800 '
        type="password" 
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value}) }
        placeholder='password'
        id="password"
         />

         <button onClick={onSignUp} className='btn bg-purple-400 mt-4 px-24 py-2 rounded-md hover:bg-purple-500'>SignUp</button>
         <hr />
         <Link href='/login'>Already register? <span className='text-purple-700'>Login</span></Link> 

    </div>
  )
}
