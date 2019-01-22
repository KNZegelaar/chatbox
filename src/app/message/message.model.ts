export class Message{
  public  _id: string;
  public content: string;
  public user: string;
  public  timeStamp: Date;

  constructor(_id: string, content: string, user: string, timeStamp: Date){
    this._id = _id;
    this.content = content;
    this.user = user;
    this.timeStamp = timeStamp;
  }
}
