import React, { useState } from 'react';
import { LoginCredentials } from '../../../types';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

interface LoginCardProps {
  onLogin: (credentials: LoginCredentials) => Promise<void>;
  loading: boolean;
  error?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ onLogin, loading, error }) => {
  const [form, setForm] = useState<LoginCredentials>({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onLogin(form);
  };

  return (
    <div className="w-[350px] rounded-2xl bg-white/95 backdrop-blur px-8 py-7 shadow-2xl border border-neutral-200">
      <div className="mb-2">
        <img src="/assets/images/brewhub-logo.png" alt="BrewHub" className="mx-auto w-28 mb-4" />
        <div className="leading-tight">
          <h1 className="text-orange-950 text-base font-bold my-1">Bienvenido a BrewHub</h1>
        </div>
      </div>

      <p className="text-orange-950 text-xs mb-4">
        Ingresa tu correo y tu contraseña para iniciar sesión.
      </p>

      <form onSubmit={submit} className="space-y-4">
        <div>
          <Label htmlFor="email" className="text-orange-950">Correo electrónico</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Escribe tu correo electrónico"
            required
            className="bg-[#F6EEE4]"
          />
        </div>

        <div>
          <Label htmlFor="password" className="text-orange-950">Contraseña</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Escribe tu contraseña"
              required
              className="pr-10 bg-[#F6EEE4]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              title={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="inline-flex items-center gap-2 select-none">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-neutral-300 accent-coffee-600"
            />
            <span className="text-sm text-orange-950">Recuérdame</span>
          </label>

          <a href="#!" className="text-sm text-orange-950 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded text-sm">
            {error}
          </div>
        )}

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Iniciando sesión…' : 'Iniciar Sesión'}
        </Button>
      </form>
    </div>
  );
};

export default LoginCard;
