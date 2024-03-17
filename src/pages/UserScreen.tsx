import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { DefaultResponse, UserInteface } from '../interfaces';
import { Link } from 'react-router-dom';

function UserScreen() {
  const apiURL = 'http://localhost:3000/users';

  const [users, setUsers] = useState<UserInteface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const accessToken = Cookies.get('accessTokenAvanceAPP');
        if (!accessToken) {
          throw new Error('Token de acceso no encontrado en las cookies');
        }

        const response = await fetch(apiURL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken,
          }
        });

        const usersResponse: DefaultResponse<Array<UserInteface>> = await response.json();

        setUsers(usersResponse.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Usuarios</h2>
      <Link to="/create-user">
        <button>Crear Usuario</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo electrónico</th>
            <th>Roles</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{
                user.roles.map((rol) => <strong>{rol} </strong>)
              }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserScreen;
