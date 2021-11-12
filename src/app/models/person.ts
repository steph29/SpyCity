export class Person {
  public id: string | null;
  public type: string;
  public name: string;
  public firstname: string;
  public callsign: string;
  public birthday: string;
  public nationalityId: number;
  public specialityId: [number];

  constructor(
    id: string | null,
    type: string,
    name: string,
    firstname: string,
    callsign: string,
    birthday: string,
    nationalityId: number,
    specialityId: [number]
  ) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.firstname = firstname;
    this.callsign = callsign;
    this.birthday = birthday;
    this.nationalityId = nationalityId;
    this.specialityId = specialityId;
  }
}
