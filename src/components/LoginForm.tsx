// LoginScreen.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AuthInterface, DefaultResponse } from '../interfaces';

const LoginForm: React.FC = () => {

    const apiURL = 'http://localhost:3000/auth/login';

    const navigate = useNavigate(); // Obtener la función de navegación

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Aquí obtienes los valores de usuario y contraseña del estado local
        const formData = {
            email,
            password
        };

        try {
            // Envías los datos del formulario al servidor para autenticación
            const response = await fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const authResponse: DefaultResponse<AuthInterface> = await response.json();

            if (response.ok) {

                Cookies.set('accessTokenAvanceAPP', authResponse.data.accessToken, { expires: 7 }); // La cookie expirará en 7 días

                navigate('/users');
            } else {
                alert('Credenciales inválidas. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error al enviar los datos del formulario:', error);
            alert('Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
        }
    };


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
