import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const mockOccupationData = [
  { time: '08:00', occupancy: 75 },
  { time: '10:00', occupancy: 90 },
  { time: '12:00', occupancy: 45 },
  { time: '14:00', occupancy: 85 },
  { time: '16:00', occupancy: 70 },
  { time: '18:00', occupancy: 60 },
];

const mockBlockData = [
  { name: 'Bloco A', value: 40 },
  { name: 'Bloco B', value: 30 },
  { name: 'Bloco C', value: 20 },
  { name: 'Bloco D', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Reports() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">Relatórios</h1>
      <p className="mt-2 text-gray-600">Análise de utilização das salas</p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Occupation by Time */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Ocupação por Horário</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={mockOccupationData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="occupancy" fill="#3B82F6" name="Taxa de Ocupação (%)" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribution by Block */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Distribuição por Bloco</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockBlockData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {mockBlockData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Total de Reservas</h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">247</p>
          <p className="mt-1 text-sm text-gray-500">Último mês</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Taxa de Ocupação</h3>
          <p className="mt-2 text-3xl font-bold text-green-600">78%</p>
          <p className="mt-1 text-sm text-gray-500">Média mensal</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Salas Disponíveis</h3>
          <p className="mt-2 text-3xl font-bold text-yellow-600">12</p>
          <p className="mt-1 text-sm text-gray-500">Neste momento</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Cancelamentos</h3>
          <p className="mt-2 text-3xl font-bold text-red-600">5%</p>
          <p className="mt-1 text-sm text-gray-500">Taxa mensal</p>
        </div>
      </div>
    </div>
  );
}