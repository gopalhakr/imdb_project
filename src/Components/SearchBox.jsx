'use client';

import  { useState } from 'react'

import { useRouter } from 'next/navigation';

export default function SearchBox() {

    const [search , setSearch] = useState('');
    const router = useRouter();
    const handleSubmit = (e)=> {
        e.preventDefault();
        router.push(`/search/${search}`);
    };
  return (
    <form className='flex justify-between px-5 max-w-6xl mx-auto' onSubmit={handleSubmit}> 

        <input type='text' placeholder='search keyword ' className='w-full h-14  rounded-md placeholder-red-500 outline-none bg-transparent flex-1'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        
        />
        
        <button className='text-amber-300 disabled:text-violet-500' disabled={search===''}>Search</button>
    </form>
  )
}
