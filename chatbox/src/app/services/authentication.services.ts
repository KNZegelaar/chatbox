export class AuthenticationService{
  register(username: String, email: String, Password: String){
    console.log("Register: " + username + " has been registered");
  }

  login(username: String, Password: String){
    console.log("Login: " + username + " has been logged in");
  }
}
