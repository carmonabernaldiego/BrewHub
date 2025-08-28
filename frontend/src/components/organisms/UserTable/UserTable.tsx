import React, { useState, useEffect } from 'react';
import UserRow from '../../molecules/UserRow/UserRow';
import Spinner from '../../atoms/Spinner/Spinner';
import Button from '../../atoms/Button/Button';
import { User } from '../../../types';
import { userService } from '../../../services/api';

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'name' | 'created_at'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [error, setError] = useState<string>('');

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await userService.getUsers(sortBy, sortDirection);
      setUsers(response.users);
    } catch (err) {
      setError('Error al cargar los usuarios');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [sortBy, sortDirection]);

  const handleSort = (column: 'name' | 'created_at') => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (column: 'name' | 'created_at') => {
    if (sortBy !== column) return '↕️';
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Spinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
          Lista de Usuarios ({users.length})
        </h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <Button
                    onClick={() => handleSort('name')}
                    variant="secondary"
                    className="text-xs font-medium text-gray-500 uppercase tracking-wider bg-transparent hover:bg-gray-100 px-0 py-0"
                  >
                    Nombre {getSortIcon('name')}
                  </Button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <Button
                    onClick={() => handleSort('created_at')}
                    variant="secondary"
                    className="text-xs font-medium text-gray-500 uppercase tracking-wider bg-transparent hover:bg-gray-100 px-0 py-0"
                  >
                    Fecha de Creación {getSortIcon('created_at')}
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <UserRow key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;