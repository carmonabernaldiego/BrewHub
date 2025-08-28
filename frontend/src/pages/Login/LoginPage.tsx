import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import LoginCard from '../../components/organisms/LoginCard/LoginCard';
import AuthLayout from '../../components/templates/AuthLayout/AuthLayout';
import { useAuth } from '../../contexts/AuthContext';
import { LoginCredentials } from '../../types';

const LoginPage: React.FC = () => {
  const { login, loading, isAuthenticated } = useAuth();
  const [error, setError] = useState<string>('');

  if (isAuthenticated) {
    return <Navigate to="/users" replace />;
  }

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      setError('');
      await login(credentials);
    } catch (err: any) {
      if (err.response?.data?.errors?.email) {
        setError(err.response.data.errors.email[0]);
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
      }
    }
  };

  return (
    <AuthLayout>
      <LoginCard
        onLogin={handleLogin}
        loading={loading}
        error={error}
      />
    </AuthLayout>
  );
};

export default LoginPage;