import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({result}) {
  return (
    <div className='group sm:hover:shadow-slate-400 sm:shadow-md sm:border-slate-300 sm:m-3'>
        <Link href ={`/movie/${result.id}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${ result.backdrop_path || result.poster_path}`}
        width={500}
        height ={300}
        className = 'sm:rounded-t-lg group-hover:opacity-55 transition-opacity duration-100'
        
        ></Image>
        <div className='p-3'>
          <p className='line-clamp-2'>{result.overview}</p>
          <h2 className='text-lg font-semibold truncate text-red-600'>
            {result.title || result.name}
          </h2>
          <p className='flex items-center'>
            {result.release_date || result.first_air_date}
            <FiThumbsUp className='h-7 mr-2 ml-3'/>
            {result.vote_count}
          </p>
        </div>
        
        
        </Link>
    </div>
  )
}
