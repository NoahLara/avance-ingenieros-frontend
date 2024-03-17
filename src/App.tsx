// App.tsx
import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import MenuBar from './components/MenuBar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Renderiza el menú */}
        <MenuBar />
        {/* Renderiza el enrutador */}
        <AppRouter />
      </div>
    </BrowserRouter>

  );
};

export default App;
