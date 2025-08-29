import React from "react";
import { useAuth } from "../../../contexts/AuthContext";

const Topbar: React.FC<{ breadcrumb?: string; title?: string }> = ({
  breadcrumb,
  title,
}) => {
  const { user } = useAuth();
  const name = user?.name || "Usuario";
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="leading-tight">
          {breadcrumb && (
            <p className="text-[11px] text-neutral-500 mb-1">{breadcrumb}</p>
          )}
          {title && (
            <h1 className="text-xm font-semibold text-orange-950">{title}</h1>
          )}
        </div>

        <div className="flex items-center gap-3">
          <img
            src="/assets/images/profile.png"
            alt={name}
            className="h-9 w-9 mr-2 rounded-full border border-neutral-200 object-cover"
          />
          <div className="text-right leading-tight mr-8">
            <div className="text-sm text-neutral-800">{name}</div>
            <div className="text-[11px] text-neutral-500 -mt-0.5">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
