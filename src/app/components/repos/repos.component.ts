import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'gg-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  public myRepos: any = [];
  public repoName = " ";
  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.profileService.searchRepo().subscribe((sach: any)=>{
      this.myRepos = sach;
      console.log(this.myRepos);
    })
  }

}
