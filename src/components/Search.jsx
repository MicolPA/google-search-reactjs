import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Links } from './Links';


export const Search = () => {

  const [ text, setText ] = useState('React');
  const { setSearchTerm } = useResultContext();
  const [ debouncedValue ] = useDebounce(text, 300);

  useEffect(() => {
     if(debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue])
  
  return (
    // sm:-mt-10
    // <div className='relative sm:ml-48 md:ml-72 mt-3'>
    <div className=''>

      <input value={text} type="text" 
        className='w-full h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg' 
        placeholder='Search'
        onChange={(e) => setText(e.target.value)}
        />

        { text && (
          <button 
            type="button" 
            className='absolute top-8 -ml-8 text-base text-gray-500'
            onClick={() => setText('')}
            >X</button>
        ) }
      
      <Links />

    </div>
  )
}
