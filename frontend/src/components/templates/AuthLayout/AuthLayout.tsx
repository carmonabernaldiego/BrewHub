import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <img
        src="assets/images/bg-brewhub.jpg"
        alt="Cafetería"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex min-h-screen items-center justify-start">
        <div className="ml-20">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
