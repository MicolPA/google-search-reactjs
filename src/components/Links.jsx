import React from 'react';

import { NavLink } from 'react-router-dom';


const links = [
    { url: '/', title: '🔎 All' },
    { url: '/image', title: '📷 Images' },
    { url: '/news', title: '📰 News' },
    { url: '/video', title: '🎥 Videos' },
]

export const Links = () => {
  return (
    <div className='w-3/4 flex sm:justify-around justify-between items-center mt-4'>
        { links.map(( { url, title } ) => (

            <NavLink className="mx-2 pb-2" style={({isActive})=>({
                    borderBottom: isActive ? "#15b0ab solid 2px": '',
                })} to={ url }>{ title }</NavLink>


           
        )) }

        
    </div>
  )
}
