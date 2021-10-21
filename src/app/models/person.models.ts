export class Person {
  public type: string;
  public name: string;
  public firstname: string;
  public callsign: string;
  public birthday: Date;
  public nationality: number;
  public speciality: [number];

  constructor(
    type: string,
    name: string,
    firstname: string,
    callsign: string,
    birthday: Date,
    nationality: number,
    speciality: [number]
  ) {
    this.type = type;
    this.name = name;
    this.firstname = firstname;
    this.callsign = callsign;
    this.birthday = birthday;
    this.nationality = nationality;
    this.speciality = speciality;
  }
}
