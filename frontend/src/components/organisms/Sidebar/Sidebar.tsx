import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

type ItemProps = {
  to: string;
  label: string;
  icon: React.ReactNode;
  end?: boolean;
};

const Item: React.FC<ItemProps> = ({ to, label, icon, end }) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      [
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        isActive
          ? "bg-coffee-300 text-coffee-900"
          : "text-white/90 hover:bg-white/10 hover:text-white",
      ].join(" ")
    }
  >
    <span className="h-4 w-4">{icon}</span>
    <span>{label}</span>
  </NavLink>
);

const Sidebar: React.FC = () => {
  const { logout } = useAuth();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-60 bg-coffee-800 px-3 py-4">
      <div className="mb-6 flex items-center gap-2 px-2">
        <img
          src="/assets/images/brewhub-logo-white.png"
          alt="BrewHub"
          className="h-9"
        />
      </div>

      <nav className="space-y-1">
        <Item
          to="/dashboard"
          end
          label="Dashboard"
          icon={
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M3 10h6V3H3v7Zm8 7h6v-7h-6v7ZM3 17h6v-5H3v5Zm8-7h6V3h-6v7Z" />
            </svg>
          }
        />
        <Item
          to="/users"
          label="Usuarios"
          icon={
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M10 10a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0 2c-3 0-6 1.5-6 3.5V17h12v-1.5C16 13.5 13 12 10 12Z" />
            </svg>
          }
        />
        <Item
          to="/products"
          label="Productos"
          icon={
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M10 2 2 6l8 4 8-4-8-4Zm0 6-8-4v10l8 4 8-4V4l-8 4Z" />
            </svg>
          }
        />
        <Item
          to="/orders"
          label="Pedidos"
          icon={
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M4 3h12v2H4V3Zm0 4h12v10H4V7Zm2 2v6h8V9H6Z" />
            </svg>
          }
        />
        <Item
          to="/sales"
          label="Ventas"
          icon={
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M3 4h2v12H3V4Zm12 0h2v12h-2V4ZM7 10h6v6H7v-6Z" />
            </svg>
          }
        />
        <Item
          to="/inventory"
          label="Inventarios"
          icon={
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M3 6h14v2H3V6Zm0 4h14v2H3v-2Zm0 4h14v2H3v-2Z" />
            </svg>
          }
        />
      </nav>

      <div className="absolute bottom-4 left-0 w-full px-3">
        <button
          onClick={logout}
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />

            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
