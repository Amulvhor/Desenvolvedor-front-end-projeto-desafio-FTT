import React, { useState } from 'react';
import RoomCard from '../components/RoomCard';
import { Room } from '../types';
import { Search, Filter, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

// Mock data - replace with API calls
const mockRooms: Room[] = [
  {
    id: '1',
    name: 'Laboratório 101',
    block: 'A',
    capacity: 40,
    resources: ['wifi', 'projetor'],
    isAvailable: true,
  },
  {
    id: '2',
    name: 'Sala de Aula 102',
    block: 'A',
    capacity: 30,
    resources: ['wifi'],
    isAvailable: false,
  },
  {
    id: '3',
    name: 'Auditório 201',
    block: 'B',
    capacity: 50,
    resources: ['wifi', 'projetor'],
    isAvailable: true,
  },
];

const timeSlots = [
  '07:30 - 09:10',
  '09:10 - 10:50',
  '10:50 - 12:30',
  '14:00 - 15:40',
  '15:40 - 17:20',
  '17:20 - 19:00',
  '19:00 - 20:40',
  '20:40 - 22:20',
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('');
  const [minCapacity, setMinCapacity] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState(timeSlots[0]);

  const handleReserve = (roomId: string) => {
    toast.success(`Reserva confirmada para ${selectedDate} ${selectedTime}`, {
      duration: 4000,
      position: 'top-right',
    });
  };

  const filteredRooms = mockRooms.filter(room => {
    const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.block.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBlock = !selectedBlock || room.block === selectedBlock;
    const matchesCapacity = !minCapacity || room.capacity >= parseInt(minCapacity);
    return matchesSearch && matchesBlock && matchesCapacity;
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sistema de Reservas</h1>
          <p className="mt-2 text-gray-600">Encontre e reserve salas para suas aulas</p>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">
            {new Date().toLocaleDateString('pt-BR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por laboratório, sala ou auditório..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200"
            value={selectedBlock}
            onChange={(e) => setSelectedBlock(e.target.value)}
          >
            <option value="">Todos os Blocos</option>
            <option value="A">Bloco A - Principal</option>
            <option value="B">Bloco B - Laboratórios</option>
            <option value="C">Bloco C - Auditórios</option>
          </select>
          <input
            type="date"
            className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <select
            className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mt-4 flex items-center gap-4">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            <Filter className="w-4 h-4 mr-2" />
            Filtros Avançados
          </button>
          <div className="text-sm text-gray-500">
            {filteredRooms.length} {filteredRooms.length === 1 ? 'sala encontrada' : 'salas encontradas'}
          </div>
        </div>
      </div>

      {/* Room Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map(room => (
          <RoomCard
            key={room.id}
            room={room}
            onReserve={handleReserve}
          />
        ))}
      </div>
    </div>
  );
}