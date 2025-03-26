import React from 'react';
import { Room } from '../types';
import { Users, Wifi, Monitor, MapPin } from 'lucide-react';

interface RoomCardProps {
  room: Room;
  onReserve: (roomId: string) => void;
}

export default function RoomCard({ room, onReserve }: RoomCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">{room.name}</h3>
          </div>
          <p className="text-blue-600 font-medium mt-1">Bloco {room.block}</p>
        </div>
        <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
          room.isAvailable 
            ? 'bg-green-50 text-green-700 border border-green-200' 
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {room.isAvailable ? 'Disponível' : 'Em Uso'}
        </span>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center text-gray-700">
          <Users className="w-5 h-5 text-blue-600 mr-2" />
          <span className="font-medium">{room.capacity} alunos</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {room.resources.includes('wifi') && (
            <span className="flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100">
              <Wifi className="w-4 h-4 mr-1.5" />
              Internet
            </span>
          )}
          {room.resources.includes('projetor') && (
            <span className="flex items-center px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-100">
              <Monitor className="w-4 h-4 mr-1.5" />
              Projetor
            </span>
          )}
        </div>
      </div>

      <button
        onClick={() => onReserve(room.id)}
        disabled={!room.isAvailable}
        className={`mt-6 w-full py-2.5 px-4 rounded-xl font-medium transition-all duration-200 ${
          room.isAvailable
            ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-100'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        {room.isAvailable ? 'Reservar Sala' : 'Indisponível'}
      </button>
    </div>
  );
}