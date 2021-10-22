export class User {
  public uid: string;
  public name: string;
  public firstname: string;
  public email: string;
  public password: string;
  public date: Date;

  constructor(
    uid: string,
    name: string,
    firstname: string,
    email: string,
    password: string,
    date: Date
  ) {
    this.uid = uid;
    this.name = name;
    this.firstname = firstname;
    this.email = email;
    this.password = password;
    this.date = date;
  }
}
