import React, { useEffect, useMemo, useState } from "react";
import Spinner from "../../atoms/Spinner/Spinner";
import Button from "../../atoms/Button/Button";
import UserRow from "../../molecules/UserRow/UserRow";
import { User } from "../../../types";
import { userService } from "../../../services/api";

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<(User & { is_active?: boolean })[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [sortBy, setSortBy] = useState<"name" | "created_at">("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [query, setQuery] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await userService.getUsers(sortBy, sortDirection);
      const withActive = response.users.map((u, i) => ({ ...u, is_active: i % 2 === 0 }));
      setUsers(withActive);
      setError("");
    } catch (e) {
      console.error(e);
      setError("Error al cargar los usuarios");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, [sortBy, sortDirection]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users;
    return users.filter(u =>
      u.name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q)
    );
  }, [users, query]);

  const handleSort = (col: "name" | "created_at") => {
    if (sortBy === col) setSortDirection(d => (d === "asc" ? "desc" : "asc"));
    else { setSortBy(col); setSortDirection("asc"); }
  };

  const getSortCaret = (col: "name" | "created_at") => {
    if (sortBy !== col) return "↕️";
    return sortDirection === "asc" ? "↑" : "↓";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Spinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
        {error}
      </div>
    );
  }

  return (
    <section className="rounded-xl border border-neutral-200 bg-white shadow">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-6 py-4">
        <h2 className="text-base font-semibold text-orange-950">Usuarios</h2>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-80">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
              🔍
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar usuarios"
              className="w-full rounded-md border border-neutral-300 pl-9 pr-3 py-2 text-sm 
                         focus:outline-none focus:ring-1 focus:ring-coffee-600 focus:border-coffee-600 bg-[#F6EEE4]"
            />
          </div>

          <Button onClick={() => {}} className="whitespace-nowrap">
            Agregar usuario
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-coffee-700 text-white">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                <button
                  onClick={() => handleSort("name")}
                  className="inline-flex items-center gap-1"
                >
                  Nombre <span className="text-white/80">{getSortCaret("name")}</span>
                </button>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Correo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                <button
                  onClick={() => handleSort("created_at")}
                  className="inline-flex items-center gap-1"
                >
                  Fecha de creación <span className="text-white/80">{getSortCaret("created_at")}</span>
                </button>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-neutral-200">
            {filtered.map((u, idx) => (
              <UserRow
                key={u.id}
                user={u}
                stripe={idx % 2 === 0}
                onToggle={(id, next) => {
                  setUsers(prev => prev.map(x => x.id === id ? { ...x, is_active: next } : x));
                }}
                onEdit={(id) => {}}
                onDelete={(id) => {}}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-3 text-sm text-neutral-500">
        Mostrando {filtered.length} {filtered.length === 1 ? "usuario" : "usuarios"}
      </div>
    </section>
  );
};

export default UserTable;
