import React from "react";
import { useAuth } from "../../../contexts/AuthContext";

interface Props {
  breadcrumb?: string;
  title?: string;
  onNotificationsClick?: () => void;
  hasUnread?: boolean;
}

const Topbar: React.FC<Props> = ({
  breadcrumb,
  title,
  onNotificationsClick,
  hasUnread = false,
}) => {
  const { user } = useAuth();
  const name = user?.name || "Usuario";

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="leading-tight">
          {breadcrumb && (
            <p className="text-[11px] text-neutral-500">{breadcrumb}</p>
          )}
          {title && (
            <h1 className="text-sm font-semibold text-orange-950">{title}</h1>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onNotificationsClick}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-coffee-600"
            aria-label="Notificaciones"
            title="Notificaciones"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 16.2V11a6 6 0 1 0-12 0v5.2c0 .5-.2 1-.6 1.4L4 19h16l-1.4-1.4c-.4-.4-.6-.9-.6-1.4Z" />
              <path d="M10 19a2 2 0 0 0 4 0" />
            </svg>
            {hasUnread && (
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-coffee-600 ring-2 ring-white" />
            )}
          </button>

          <span className="h-6 w-px bg-neutral-200" />

          <img
            src="/assets/images/profile.png"
            alt={name}
            className="h-9 w-9 rounded-full border border-neutral-200 object-cover mr-2 ml-4"
          />

          <div className="text-right leading-tight mr-4">
            <div className="text-sm text-neutral-800">{name}</div>
            <div className="text-[11px] text-neutral-500 -mt-0.5">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
