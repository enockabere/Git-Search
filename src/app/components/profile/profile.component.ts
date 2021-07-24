import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myUser:any;
    //inject service
  constructor(private profileService:ProfileService) { 
    
    
  } 
  //call getUserInfo function that returns an observable
  ngOnInit(): void{
    this.profileService.getUserInfo().subscribe((response: any) =>{
      this.myUser = response;
      console.log(response);
    });
    
  }

}
