// AppRouter.tsx
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import UserScreen from './pages/UserScreen';
import CreateUser from './pages/CreateUser';

const AppRouter: React.FC = () => {
    return (

        <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/users" element={<UserScreen />} />
            <Route path="/create-user" element={<CreateUser />} />
            {/* Ruta predeterminada */}
            <Route path="/" element={<LoginScreen />} />
        </Routes>

    );
};

export default AppRouter;
