import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  BellRing,
  Calendar,
  LayoutDashboard,
  LogOut,
  BarChart,
} from "lucide-react";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-72 bg-white shadow-xl border-r border-blue-100">
        <div className="p-8 border-b border-blue-100">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
            UniEVANGÉLICA
          </h1>
          <p className="text-sm text-blue-600 font-medium mt-1">
            Portal do Coordenador
          </p>
        </div>

        <nav className="mt-8 px-4">
          {[
            { to: "/dashboard", icon: LayoutDashboard, label: "Reservas" },
            { to: "/reservations", icon: Calendar, label: "Meu Calendário" },
            { to: "/reports", icon: BarChart, label: "Relatórios" },
            { to: "/notifications", icon: BellRing, label: "Notificações" },
          ].map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-700 shadow-sm"
                    : "text-gray-600 hover:bg-gray-50"
                }`
              }
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-6 border-t border-blue-100">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-700 font-medium">JL</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">João Lucas</p>
              <p className="text-xs text-gray-500">Desenvolvedor Front-end</p>
            </div>
          </div>
          <button className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
            <LogOut className="w-5 h-5 mr-2" />
            <span className="font-medium">Sair do Sistema</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-72 p-8">
        <Outlet />
      </main>
    </div>
  );
}
