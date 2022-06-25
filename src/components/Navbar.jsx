import React from 'react'
import { Link } from 'react-router-dom';

import { Search } from './Search';

export const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='dark:bg-gray-800 bg-gray-100 p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
    {/* <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b border-gray-200'> */}
      
      <div className='container mx-auto px-5 space-y-6'>
        <div className='grid grid-cols-2'>
          {/* <div>
            <Link to="/">
              <p className='text-2xl bg-blue-400 font-bold py-1 px-4'>Rudok Search</p>
            </Link>
          </div> */}
          <div>
            <Search/>
          </div>
          <div className='text-right'>
            <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-base dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-4 py-1 hover:shadow-lg" >
              { darkTheme ? 'Light  💡' : 'Dark  🌙' }
            </button>
          </div>
        </div>
      </div>
      

    </div>
  )
}
