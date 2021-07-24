import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  /* 
    optional properties to help fetch data from github without limitations
  */
  private clientId = 'af128be61f6f7314682e';
  private clientSecret= 'b3cb1151ee09e4c1b4317ee264cf3140bca1b80e';

  //inject http module once imported

  constructor(private http:HttpClient) { 
    console.log("profile service is now ready");
    this.username = 'enockabere'; //default profile
  }
  //function to collect data from github
  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
    // use pipe to invoke the map method  so that data collected can be in form of observables
    .pipe(map(data=>{
      return data;
    }));
  }
  getUserRepo(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
    // use pipe to invoke the map method  so that data collected can be in form of observables
    .pipe(map(data=>{
      return data;
    }));
  }
    
}
