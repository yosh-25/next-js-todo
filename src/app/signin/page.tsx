'use client';
import React from 'react'
import { signIn } from 'next-auth/react';

const Signin = () => {
  return (
  <button onClick={()=> signIn('google')}>Signin</button>
    )
}

export default Signin
