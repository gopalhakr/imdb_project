"use client"
// as we cnt use this hook to the server side we have to use this hook to the client side 
import React from 'react'
import Link from 'next/link'
// now we gonna import a hook
import { useSearchParams } from 'next/navigation'

export default function NavbarItem({title , param}) {
    const searchParam =useSearchParams();
    const genre = searchParam.get('genre')
  return (
    <div>
        <Link className={`hover:text-amber-300 font-bold ${genre===param ? 'underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg':''}`}


         href={`/?genre=${param}`}>{title}</Link>
         {/* // if genre is sent then always use this name when getting from serachparamters like the 10th line in this code above */}
        
    </div>
  )
}
