import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import InputField from '../InputField/InputField';
import Spinner from '../../atoms/Spinner/Spinner';
import { LoginCredentials } from '../../../types';

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => Promise<void>;
  loading: boolean;
  error?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading, error }) => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(credentials);
  };

  const handleChange = (field: keyof LoginCredentials) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        label="Correo Electrónico"
        type="email"
        value={credentials.email}
        onChange={handleChange('email')}
        placeholder="tu@email.com"
        required
      />
      
      <InputField
        label="Contraseña"
        type="password"
        value={credentials.password}
        onChange={handleChange('password')}
        placeholder="Tu contraseña"
        required
      />

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <Spinner size="small" className="mr-2" />
            Iniciando sesión...
          </div>
        ) : (
          'Iniciar Sesión'
        )}
      </Button>
    </form>
  );
};

export default LoginForm;