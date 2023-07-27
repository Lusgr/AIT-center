import React from 'react';
import WholePage from './WholePage';
import './App.css';
import { LanguageProvider } from './LanguageProvider';

function App() {
  return (
    <LanguageProvider>
      <WholePage />
    </LanguageProvider>
  );
}

export default App
