import React from 'react';
import { Bell, Calendar, Info, AlertTriangle } from 'lucide-react';

// Mock data - replace with API calls
const mockNotifications = [
  {
    id: '1',
    type: 'info',
    title: 'Reserva Confirmada',
    message: 'Sua reserva para a Sala 101 foi confirmada para amanhã às 14:00.',
    date: '2024-02-28T14:00:00',
    read: false,
  },
  {
    id: '2',
    type: 'warning',
    title: 'Conflito de Horário',
    message: 'Existe um possível conflito com sua reserva da Sala 202 para o dia 01/03.',
    date: '2024-02-28T10:30:00',
    read: true,
  },
  {
    id: '3',
    type: 'info',
    title: 'Lembrete de Reserva',
    message: 'Você tem uma reserva agendada para hoje às 16:00 na Sala 305.',
    date: '2024-02-28T09:15:00',
    read: false,
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'info':
      return <Info className="w-5 h-5 text-blue-500" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    default:
      return <Bell className="w-5 h-5 text-gray-500" />;
  }
};

export default function Notifications() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">Notificações</h1>
      <p className="mt-2 text-gray-600">Acompanhe suas notificações e alertas</p>

      <div className="mt-8 space-y-4">
        {mockNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-lg shadow-sm p-4 ${
              !notification.read ? 'border-l-4 border-blue-500' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">{getIcon(notification.type)}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {notification.title}
                </h3>
                <p className="mt-1 text-gray-600">{notification.message}</p>
                <p className="mt-2 text-sm text-gray-500">
                  {new Date(notification.date).toLocaleString('pt-BR', {
                    dateStyle: 'short',
                    timeStyle: 'short',
                  })}
                </p>
              </div>
              {!notification.read && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Novo
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}