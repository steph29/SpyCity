import { Person } from './person';

export class Mission {
  public agent: [Person];
  public codeName: string;
  public contact: [Person];
  public country: number;
  public desc: string;
  public endDate: Date;
  public hideouts: [string];
  public mission: string;
  public specialities: number;
  public startDate: Date;
  public status: number;
  public target: [Person];
  public type: string;

  constructor(
    agent: [Person],
    codeName: string,
    contact: [Person],
    country: number,
    desc: string,
    endDate: Date,
    hideouts: [string],
    mission: string,
    specialities: number,
    startDate: Date,
    status: number,
    target: [Person],
    type: string
  ) {
    this.agent = agent;
    this.codeName = codeName;
    this.contact = contact;
    this.country = country;
    this.desc = desc;
    this.endDate = endDate;
    this.hideouts = hideouts;
    this.mission = mission;
    this.specialities = specialities;
    this.startDate = startDate;
    this.status = status;
    this.target = target;
    this.type = type;
  }
}
