export interface Room {
  id: string;
  name: string;
  block: string;
  capacity: number;
  resources: string[];
  isAvailable: boolean;
}

export interface Reservation {
  id: string;
  roomId: string;
  userId: string;
  date: string;
  startTime: string;
  endTime: string;
  purpose: string;
  status: 'confirmed' | 'cancelled' | 'pending';
}

export interface User {
  id: string;
  name: string;
  role: 'coordinator' | 'admin';
  department: string;
}