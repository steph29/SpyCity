import { Person } from './person';

export interface Mission {
  id: string | null;
  agent: [Person];
  codeName: string;
  contact: [Person];
  country: number;
  desc: string;
  endDate: Date;
  hideouts: [string];
  mission: string;
  specialities: number;
  startDate: Date;
  status: number;
  target: [Person];
  type: string;
}
