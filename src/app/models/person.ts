export class Person {
  public type: string;
  public name: string;
  public firstname: string;
  public callsign: string;
  public birthday: string;
  public nationalityId: number;
  public specialityId: [number];

  constructor(
    type: string,
    name: string,
    firstname: string,
    callsign: string,
    birthday: string,
    nationalityId: number,
    specialityId: [number]
  ) {
    this.type = type;
    this.name = name;
    this.firstname = firstname;
    this.callsign = callsign;
    this.birthday = birthday;
    this.nationalityId = nationalityId;
    this.specialityId = specialityId;
  }
}
