import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar as CalendarIcon, Clock, MapPin, Users, X } from 'lucide-react';
import toast from 'react-hot-toast';

// Mock data - replace with API calls
const mockReservations = [
  {
    id: '1',
    roomName: 'Sala 101',
    block: 'A',
    date: '2024-02-28',
    startTime: '08:00',
    endTime: '10:00',
    capacity: 40,
    purpose: 'Aula de Programação',
  },
  {
    id: '2',
    roomName: 'Sala 201',
    block: 'B',
    date: '2024-02-29',
    startTime: '14:00',
    endTime: '16:00',
    capacity: 50,
    purpose: 'Reunião de Colegiado',
  },
];

export default function MyReservations() {
  const handleCancelReservation = (id: string) => {
    toast.success('Reserva cancelada com sucesso!');
    // Implement cancellation logic
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">Minhas Reservas</h1>
      <p className="mt-2 text-gray-600">Gerencie suas reservas de salas</p>

      <div className="mt-8 space-y-6">
        {mockReservations.map((reservation) => (
          <div
            key={reservation.id}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{reservation.roomName}</h3>
                <p className="text-gray-500">Bloco {reservation.block}</p>
              </div>
              <button
                onClick={() => handleCancelReservation(reservation.id)}
                className="text-red-600 hover:text-red-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center text-gray-600">
                <CalendarIcon className="w-5 h-5 mr-2" />
                <span>
                  {format(new Date(reservation.date), "dd 'de' MMMM 'de' yyyy", {
                    locale: ptBR,
                  })}
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                <span>
                  {reservation.startTime} - {reservation.endTime}
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Bloco {reservation.block}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2" />
                <span>Capacidade: {reservation.capacity} pessoas</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <h4 className="font-medium text-gray-700">Finalidade</h4>
              <p className="mt-1 text-gray-600">{reservation.purpose}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}