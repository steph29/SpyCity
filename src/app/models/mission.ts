import { Person } from './person.models';

export class Mission {
  public id: string;
  public title: string;
  public type: string;
  public description: string;
  public callsign: string;
  public countryId: number;
  public agents: [Person];
  public contact: [Person];
  public target: [Person];
  public statusId: number;
  public hideoursId: [number];
  public specialitiesId: number;
  public dateOfBeginning: Date;
  public dateOfEnd: Date;

  constructor(
    id: string,
    title: string,
    type: string,
    description: string,
    callsign: string,
    countryId: number,
    agents: [Person],
    contact: [Person],
    target: [Person],
    statusId: number,
    hideoursId: [number],
    specialitiesId: number,
    dateOfBeginning: Date,
    dateOfEnd: Date
  ) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.description = description;
    this.callsign = callsign;
    this.countryId = countryId;
    this.agents = agents;
    this.contact = contact;
    this.target = target;
    this.statusId = statusId;
    this.hideoursId = hideoursId;
    this.specialitiesId = specialitiesId;
    this.dateOfBeginning = dateOfBeginning;
    this.dateOfEnd = dateOfEnd;
  }
}
