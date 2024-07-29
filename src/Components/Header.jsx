import React from 'react'
import Menuitem from './Menuitem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'


export default function Header() {
  return (
    <div className='flex justify-between items-center max-w-7xl  p-3 mx-auto'>
        <div className='flex  gap-4'>
            <Menuitem title='Home' address ='/' Icon ={AiFillHome}/>
            <Menuitem title='About' address ='/about' Icon ={BsFillInfoCircleFill}/>
        </div>

        <Link href={'/'} className='flex gap-2 item-center'>
            <span className='bold bg-yellow-400 rounded-lg px-2'>IMDB</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
    </div>
  )
}
