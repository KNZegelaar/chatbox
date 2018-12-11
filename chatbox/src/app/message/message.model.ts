export class Message{
  public  _id: String;
  public content: String;
  public user: String;
  public  timeStamp: String;

  constructor(_id: String, content: String, user: String, timeStamp: Date){
    this._id = _id;
    this.content = content;
    this.user = user;
    this.timeStamp = timeStamp.toDateString();
  }
}
