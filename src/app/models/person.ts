export interface Person {
  id: string | null;
  type: string;
  lname: string;
  fname: string;
  callsign: string;
  birthday: Date;
  nationalityId: number;
  specialities: [number];
}
