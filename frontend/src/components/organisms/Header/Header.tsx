import React from 'react';
import Button from '../../atoms/Button/Button';
import { useAuth } from '../../../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gestión de Usuarios</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Bienvenido, <span className="font-medium">{user?.name}</span>
            </span>
            <Button
              onClick={logout}
              variant="danger"
            >
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;