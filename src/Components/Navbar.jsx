
import React from 'react';
import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className='flex dark:bg-green-500 bg-red-900 p-4 lg:text-lg justify-center gap-9'>
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
