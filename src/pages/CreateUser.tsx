import React, { useState } from 'react';
import Cookies from 'js-cookie';

function CreateUser() {
    const apiURL = 'http://localhost:3000/users';

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const handleFormChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const accessToken = Cookies.get('accessTokenAvanceAPP');
            if (!accessToken) {
                throw new Error('Token de acceso no encontrado en las cookies');
            }

            const response = await fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': accessToken,
                },
                body: JSON.stringify(formData),
            });

            // Manejar la respuesta del backend
        } catch (error) {
            // Manejar errores
        }
    };

    return (
        <div>
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre de usuario:</label>
                <input type="text" name="username" value={formData.username} onChange={handleFormChange} />
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleFormChange} />
                <label>Correo electrónico:</label>
                <input type="email" name="email" value={formData.email} onChange={handleFormChange} />
                <button type="submit">Crear Usuario</button>
            </form>
        </div>
    );
}

export default CreateUser;
