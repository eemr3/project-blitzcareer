import React from 'react';
import './App.css';
import AppProvider from './context/AppProvider';
import Router from './routes/Router';

function App() {
  return (
    <div>
      <AppProvider>
        <Router />
      </AppProvider>
    </div>
  );
}

export default App;
