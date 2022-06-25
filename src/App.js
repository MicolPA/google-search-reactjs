import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routes } from './components/Routes';
import { Results } from './components/Results';

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
        
      <div className='dark:bg-slate-800 dark:text-gray-200 min-h-screen'>
      {/* <div className='bg-gray-100 min-h-screen'> */}
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        {/* <Routes/> */}
        <Results/>
        <Footer/>
      </div>

    </div>
  );
}

export default App;