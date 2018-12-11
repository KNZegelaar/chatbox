export class Chat{
  public  _id: String;
  public title: String;
  public creator: String;
  public  description: String;

  constructor(_id: String, title: String, creator: String, description: String){
    this._id = _id;
    this.title = title;
    this.creator = creator;
    this.description = description;
  }
}
