export class Chat{
  public  _id: string;
  public title: string;
  public creator: string;
  public  description: string;

  constructor(_id: string, title: string, creator: string, description: string){
    this._id = _id;
    this.title = title;
    this.creator = creator;
    this.description = description;
  }
}
