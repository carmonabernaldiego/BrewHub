import React from 'react';
import LoginForm from '../../molecules/LoginForm/LoginForm';
import { LoginCredentials } from '../../../types';

interface LoginCardProps {
  onLogin: (credentials: LoginCredentials) => Promise<void>;
  loading: boolean;
  error?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ onLogin, loading, error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Iniciar Sesión
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Accede a tu cuenta para continuar
          </p>
        </div>
        
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm
            onSubmit={onLogin}
            loading={loading}
            error={error}
          />
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Usuario de prueba: <strong>admin@test.com</strong>
            </p>
            <p className="text-sm text-gray-600">
              Contraseña: <strong>password123</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;