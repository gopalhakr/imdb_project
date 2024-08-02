"use client"
import React from 'react'
import { useEffect } from 'react'
export default function Error({error , reset}) {

    useEffect(()=>
    {
        console.log(error);
    } , [error]);
  return (
    <div className='text-center mt-10'>
        <h1>Something went wrong, try again</h1>
        <button className='hover:text-cyan-300' onClick={()=>reset()}>
            Try again
        </button>
        </div>
  )
}
