export class Person {
  public type: string;
  public lname: string;
  public fname: string;
  public callsign: string;
  public birthday: string;
  public nationalityId: number;
  public specialities: [number];

  constructor(
    type: string,
    lname: string,
    fname: string,
    callsign: string,
    birthday: string,
    nationalityId: number,
    specialities: [number]
  ) {
    this.type = type;
    this.lname = lname;
    this.fname = fname;
    this.callsign = callsign;
    this.birthday = birthday;
    this.nationalityId = nationalityId;
    this.specialities = specialities;
  }
}
