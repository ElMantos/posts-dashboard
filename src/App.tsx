import React from 'react';
import {QueryClientProvider} from '@tanstack/react-query';

import queryClient from '@api/queryClient';

import Router from './Router';


function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <Router />
      </QueryClientProvider>
    </div>
  );
}

export default App;
