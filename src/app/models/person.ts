export interface Person {
  id: string | null;
  type: string;
  lname: string;
  fname: string;
  callsign: string;
  birthday: string;
  nationalityId: number;
  specialities: [number];
}
