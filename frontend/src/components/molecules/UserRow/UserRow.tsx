import React from "react";
import Switch from "../../atoms/Switch/Switch";
import IconButton from "../../atoms/IconButton/IconButton";
import { User } from "../../../types";

interface UserRowProps {
  user: User & { is_active?: boolean };
  onToggle?: (id: number, next: boolean) => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  stripe?: boolean;
}

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const UserRow: React.FC<UserRowProps> = ({ user, onToggle, onEdit, onDelete, stripe }) => {
  return (
    <tr className={`${stripe ? "bg-[#FBF6F0]" : "bg-white"} hover:bg-neutral-50`}>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">{user.name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">{user.email}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">{formatDate(user.created_at)}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-3">
          <Switch
            checked={!!user.is_active}
            onChange={(next) => onToggle?.(user.id, next)}
          />
          <IconButton title="Editar" onClick={() => onEdit?.(user.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 className="h-4 w-4 text-neutral-700">
              <path d="M13.586 3.586a2 2 0 1 1 2.828 2.828l-9.9 9.9a2 2 0 0 1-.878.497l-3.08.77a.5.5 0 0 1-.606-.606l.77-3.08a2 2 0 0 1 .497-.878l9.369-9.369Z"/>
              <path d="M12.172 4.999 15 7.828" />
            </svg>
          </IconButton>
          <IconButton title="Eliminar" onClick={() => onDelete?.(user.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 className="h-4 w-4 text-neutral-700">
              <path fillRule="evenodd"
                d="M8 2a1 1 0 0 0-1 1v1H4.5a.5.5 0 0 0 0 1H5v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5h.5a.5.5 0 0 0 0-1H13V3a1 1 0 0 0-1-1H8Zm2 4a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 10 6Zm-3 .75a.75.75 0 1 1 1.5 0v7.5a.75.75 0 1 1-1.5 0v-7.5Zm7.5 0a.75.75 0 1 1 1.5 0v7.5a.75.75 0 1 1-1.5 0v-7.5Z"
                clipRule="evenodd" />
            </svg>
          </IconButton>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
