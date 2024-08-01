// "user client"
// import React from 'react'
// import {MdLightMode , MdDarkMode} from 'react-icons/md'
// import { useTheme } from 'next-themes'

// export default function Darkmode() {
//   const {theme , setTheme , systemTheme } = useTheme();
//   // as we are using the hook in the above code we have to use client side to be safe from error
//   const currentTheme = theme === 'system' ? systemTheme : theme;
//   return (
//     <div>
//       {
//         currentTheme === 'dark' ? (<MdLightMode onClick={()=> setTheme('light')}
//         className='text-xl cursor-pointer hover:text-teal-950'/> )
        
//         :(<MdDarkMode  onClick={()=> setTheme('dark')}
//         className='text-xl cursor-pointer hover:text-teal-950'
//         />
//         )} 

//     </div>
//   )
// }




// Ensure this is at the top of the file
"use client";

import React from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

export default function Darkmode() {
  const { theme, setTheme, systemTheme } = useTheme();
  
  // Determine the current theme
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <MdLightMode 
          onClick={() => setTheme('light')} 
          className='text-xl cursor-pointer hover:text-teal-950'
        />
      ) : (
        <MdDarkMode 
          onClick={() => setTheme('dark')} 
          className='text-xl cursor-pointer hover:text-teal-950'
        />
      )}
    </div>
  );
}
