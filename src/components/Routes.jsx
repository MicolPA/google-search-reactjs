import React from 'react';
import { Route, Navigate, Router } from 'react-router-dom';

import { Results } from './Results';

export const Routes = () => {
  return (
    <div>
      <Router>
        <Routes>
        
        <Route path="/images">
          Images
        </Route>
        <Route path="/news">
          <Results />
        </Route>
        <Route path="/videos">
          <Results />
        </Route>
          </Routes>
        </Router>
    </div>
  )
}
